import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/our-work", "/families", "/about", "/work-with-us", "/privacy", "/terms", "/accessibility"];

for (const route of routes) {
  test(`WCAG audit: ${route}`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const violations = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious",
    );

    expect(violations).toEqual([]);
  });
}

test("contact form shows accessible validation", async ({ page }) => {
  await page.goto("/work-with-us", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /send message/i }).click();

  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.locator("#cf-name")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#cf-email")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#cf-message")).toHaveAttribute("aria-invalid", "true");
});

test("mobile navigation handles Escape", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only test.");

  await page.goto("/", { waitUntil: "networkidle" });
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
});
