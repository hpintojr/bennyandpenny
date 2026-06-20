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

test("accessibility preferences persist display choices", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const trigger = page.getByRole("button", { name: "Accessibility preferences" });
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: "Accessibility preferences" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: "Increase text size" }).click();
  await dialog.getByLabel("High contrast").check();
  await dialog.getByLabel("Pause animations").check();
  await dialog.getByLabel("Readable font").check();

  await expect(page.locator("html")).toHaveAttribute("data-a11y-text-scale", "1");
  await expect(page.locator("html")).toHaveAttribute("data-a11y-high-contrast", "true");
  await expect(page.locator("html")).toHaveAttribute("data-a11y-pause-motion", "true");
  await expect(page.locator("html")).toHaveAttribute("data-a11y-readable-font", "true");

  await dialog.getByRole("button", { name: "Done" }).click();
  await expect(trigger).toBeFocused();
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator("html")).toHaveAttribute("data-a11y-text-scale", "1");
});

test("desktop route changes move focus to the destination heading", async ({ page }, testInfo) => {
  if (testInfo.project.name.includes("mobile")) return;

  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL(/\/our-work$/);
  await expect(page.locator("#main-content h1")).toBeFocused();
});

test("mobile navigation handles Escape and traps menu focus", async ({ page }, testInfo) => {
  if (!testInfo.project.name.includes("mobile")) return;

  await page.goto("/", { waitUntil: "networkidle" });
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");

  const contact = page.getByRole("link", { name: "Contact" }).last();
  await contact.focus();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Home" }).last()).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
});
