#!/usr/bin/env node

/**
 * Dependency-free accessibility regression smoke test.
 *
 * Usage:
 *   npm run a11y:smoke
 *   SITE_URL=https://www.bennyandpenny.com npm run a11y:smoke
 *
 * This intentionally checks server-rendered markup only. It does not replace
 * manual keyboard, contrast, zoom/reflow, or assistive-technology testing.
 */

const rawSiteUrl = process.env.SITE_URL || "http://localhost:3000";
const siteUrl = new URL(rawSiteUrl);
const normalRoutes = [
  "/",
  "/our-work",
  "/families",
  "/about",
  "/work-with-us",
  "/privacy",
  "/terms",
  "/accessibility",
];
const missingRoute = "/accessibility-smoke-missing-route";

let failureCount = 0;

function fail(route, message) {
  failureCount += 1;
  console.error(`✗ ${route}: ${message}`);
}

function pass(route, message) {
  console.log(`✓ ${route}: ${message}`);
}

function getAttribute(tag, attribute) {
  const match = tag.match(new RegExp(`\\s${attribute}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return match ? (match[1] ?? match[2] ?? match[3] ?? "") : null;
}

function withoutScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
}

function assertMarkup(route, html, { expectNotFound = false } = {}) {
  const documentHtml = withoutScriptsAndStyles(html);
  const title = documentHtml.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const language = getAttribute(documentHtml.match(/<html\b[^>]*>/i)?.[0] ?? "", "lang");
  const h1Count = (documentHtml.match(/<h1\b/gi) ?? []).length;
  const imageTags = documentHtml.match(/<img\b[^>]*>/gi) ?? [];
  const blankTargetLinks = documentHtml.match(/<a\b[^>]*\btarget=(?:"_blank"|'_blank'|_blank)[^>]*>/gi) ?? [];

  if (language !== "en") fail(route, "expected <html lang=\"en\">.");
  if (!title) fail(route, "expected a non-empty <title>.");
  if (h1Count !== 1) fail(route, `expected exactly one rendered h1; found ${h1Count}.`);

  for (const imageTag of imageTags) {
    if (getAttribute(imageTag, "alt") === null) {
      fail(route, "found an image without an alt attribute.");
      break;
    }
  }

  for (const linkTag of blankTargetLinks) {
    const rel = getAttribute(linkTag, "rel") ?? "";
    if (!/\bnoopener\b/i.test(rel)) {
      fail(route, "found a target=_blank link without rel=noopener.");
      break;
    }
  }

  if (!expectNotFound) {
    if (!/class="skipLink"[^>]*href="#main-content"/i.test(documentHtml)) {
      fail(route, "expected a skip link targeting #main-content.");
    }
    if (!/<main\b[^>]*\bid="main-content"/i.test(documentHtml)) {
      fail(route, "expected a named main landmark.");
    }
    if (!/<nav\b[^>]*aria-label="Primary navigation"/i.test(documentHtml)) {
      fail(route, "expected a named primary navigation landmark.");
    }
  }

  if (expectNotFound && !/name="robots" content="noindex, nofollow"/i.test(documentHtml)) {
    fail(route, "expected 404 metadata to block indexing.");
  }

  if (route === "/work-with-us") {
    for (const id of ["cf-name", "cf-email", "cf-message"]) {
      if (!new RegExp(`id="${id}"`, "i").test(documentHtml)) {
        fail(route, `expected contact-form control #${id}.`);
      }
    }
  }

  if (route === "/accessibility" && !/hello@bennyandpenny\.com/i.test(documentHtml)) {
    fail(route, "expected a visible accessibility support contact.");
  }
}

async function requestRoute(route, expectedStatus) {
  const url = new URL(route, siteUrl);
  const response = await fetch(url, { redirect: "follow" });
  const html = await response.text();

  if (response.status !== expectedStatus) {
    fail(route, `expected HTTP ${expectedStatus}; received ${response.status}.`);
    return;
  }

  assertMarkup(route, html, { expectNotFound: expectedStatus === 404 });
  pass(route, `HTTP ${response.status} and baseline markup checks completed.`);
}

async function main() {
  console.log(`Running accessibility smoke checks against ${siteUrl.origin}`);

  for (const route of normalRoutes) {
    await requestRoute(route, 200);
  }

  await requestRoute(missingRoute, 404);

  if (failureCount > 0) {
    console.error(`\nAccessibility smoke test failed with ${failureCount} issue${failureCount === 1 ? "" : "s"}.`);
    process.exitCode = 1;
    return;
  }

  console.log("\nAccessibility smoke test passed.");
}

main().catch((error) => {
  console.error("Accessibility smoke test could not complete:", error);
  process.exitCode = 1;
});
