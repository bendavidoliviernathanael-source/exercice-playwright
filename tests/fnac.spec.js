// @ts-check
import { test, expect } from "@playwright/test";

test.describe.skip("Tests site fnac", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://www.fnac.com/");

    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("Trouver mon magasin")).toBeVisible();
  });
});
