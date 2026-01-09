// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach("Ouverture du site de france travail", async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto("https://www.francetravail.fr/accueil/");
});

test.describe("Tests site france travail", () => {
  test("has title", async ({ page }) => {
    // await page.goto("https://www.francetravail.fr/accueil/");
    await page.getByRole("button", { name: "Continuer sans accepter" }).click();

    await expect(page.getByRole("button", { name: "Connexion" })).toBeVisible();
  });
});
