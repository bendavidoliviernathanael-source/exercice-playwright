// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Tests exemples", () => {
  test.skip("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test.skip("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
});

test.describe.skip("Tests du site talaron chic", () => {
  test.skip("test connexion à Talaron chic", async ({ page }) => {
    await page.goto("https://sidewalk:elementary@smiling-glove.localsite.io/");
    await page.getByRole("link").filter({ hasText: /^$/ }).nth(1).hover();
    await page.getByRole("link", { name: "Se déconnecter" }).click();
    await page.getByRole("textbox", { name: "Identifiant ou e-mail" }).click();
    await page
      .getByRole("textbox", { name: "Identifiant ou e-mail" })
      .fill("oliviernathanael");
    await page.locator("#password").click();
    await page.locator("#password").fill("azerty");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.locator("#post-83")).toContainText(
      "Bonjour oliviernathanael (vous n’êtes pas oliviernathanael ? Déconnexion)"
    );
    await page.locator("#post-83").screenshot({ path: "screenshot.png" });
  });

  const urldistanciel =
    "https://sidewalk:elementary@smiling-glove.localsite.io/";
  const urldistanciel2 = "https://smiling-glove.localsite.io/";
  const urlpresentiel = "https://landscape:somber@dull-ghost.localsite.io/";

  const adresses1 = [
    urldistanciel,
    urldistanciel + "produit/ex/",
    urldistanciel +
      "categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
    //urldistanciel+"letiquette-produit/vroum-vroum/",
    // "urldistancielmarque/louis-pasteur/",
    urldistanciel + "panier/",
    urldistanciel + "?s=&post_type=product&category=0",
    urldistanciel + "commander/",
    urldistanciel + "mon-compte/",
    urldistanciel + "mon-compte/mes_commandes/",
    urldistanciel + "mon-compte/mes_telechargements/",
    urldistanciel + "mon-compte/mes_adresses/",
    urldistanciel + "mon-compte/mes_adresses/facturation/",
    urldistanciel + "mon-compte/mes_adresses/livraison/",
    urldistanciel + "mon-compte/informations_personnelles/",
  ];

  const adresses2 = [
    urldistanciel2,
    urldistanciel2 + "produit/ex/",
    urldistanciel2 +
      "categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
    //urldistanciel2+"etiquette-produit/vroum-vroum/",
    // urldistanciel2+"marque/louis-pasteur/",
    urldistanciel2 + "panier/",
    urldistanciel2 + "?s=&post_type=product&category=0",
    urldistanciel2 + "commander/",
    urldistanciel2 + "mon-compte/",
    urldistanciel2 + "mon-compte/mes_commandes/",
    urldistanciel2 + "mon-compte/mes_telechargements/",
    urldistanciel2 + "mon-compte/mes_adresses/",
    urldistanciel2 + "mon-compte/mes_adresses/facturation/",
    urldistanciel2 + "mon-compte/mes_adresses/livraison/",
    urldistanciel2 + "mon-compte/informations_personnelles/",
  ];

  test.skip("Présence d'un bouton d'accès à la barre de recherche", async ({
    page,
  }) => {
    await page.goto("https://sidewalk:elementary@smiling-glove.localsite.io/");
    await page.getByRole("link").filter({ hasText: /^$/ }).nth(1).hover();
    await page.getByRole("link", { name: "Se déconnecter" }).click();
    await page.getByRole("textbox", { name: "Identifiant ou e-mail" }).click();
    await page
      .getByRole("textbox", { name: "Identifiant ou e-mail" })
      .fill("oliviernathanael");
    await page.locator("#password").click();
    await page.locator("#password").fill("azerty");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.locator("#post-83")).toContainText(
      "Bonjour oliviernathanael (vous n’êtes pas oliviernathanael ? Déconnexion)"
    );

    let cpt = 0;
    while (cpt < adresses2.length) {
      //Ouvrir page
      await page.goto(adresses2[cpt]);
      //page est ouverte
      await expect(page).toHaveURL(adresses2[cpt]);
      //Vérifier qu’un bouton en forme de loupe (voir image en pièce jointe) est présent en haut à droite de la page.
      //Un bouton en forme de loupe est bien présent en haut à droite de la page.
      await expect(
        page.getByRole("link").filter({ hasText: /^$/ }).first()
      ).toBeVisible();
      //Cliquer sur le bouton en forme de loupe.
      await page.getByRole("link").filter({ hasText: /^$/ }).first().click();
      //Un ruban apparaît en haut de la page.
      await expect(page.locator("#search-bar")).toBeVisible();
      //Vérifier que le ruban contient un champ interactible avec le texte "Rechercher un produit…" superposé dessus .
      await expect(
        page.getByRole("searchbox", { name: "Rechercher un produit..." })
      ).toBeVisible();
      //Vérifier que le ruban contient un bouton en forme de loupe à droite du champ (voir l’image en pièce jointe).
      await expect(
        page.locator("#search-bar").getByRole("button")
      ).toBeVisible();
      //Le ruban contient bien une barre de recherche.
      await expect(
        page.getByRole("searchbox", { name: "Rechercher un produit..." })
      ).toBeVisible();
      cpt = cpt + 1;
    }
  });
  test.skip("test1", async ({ page }) => {
    await page.goto("https://sidewalk:elementary@smiling-glove.localsite.io/");
    await page
      .getByRole("button", { name: "Ajouter au panier : “Alias.”" })
      .click();
    await page.getByRole("link", { name: "Voir le panier" }).click();
    await page.getByText("Laboriosam unde…").click();
    await expect(page.getByText("Total estimé")).toBeVisible();
    await page.getByRole("link", { name: "Talaron Chic" }).click();
  });
  test.skip("test2", async ({ page }) => {
    await page.goto("https://sidewalk:elementary@smiling-glove.localsite.io/");
    await page
      .getByRole("button", { name: "Ajouter au panier : “Alias.”" })
      .click();
    await page.getByRole("link", { name: "Voir le panier" }).click();
    await page.getByText("Laboriosam unde…").click();
    await expect(page.getByText("Total estimé")).toBeVisible();
    await page.getByRole("link", { name: "Talaron Chic" }).click();
  });

  test("test3", async ({ page }) => {
    // --- Étape 1  ---
    await test.step("Etape 1", async () => {
      await page.goto(
        "https://sidewalk:elementary@smiling-glove.localsite.io/"
      );
    });
    // --- Étape 2  ---
    await test.step("Etape 2", async () => {
      await page
        .getByRole("button", { name: "Ajouter au panier : “Alias.”" })
        .click();
      await page.getByRole("link", { name: "Voir le panier" }).click();
      await page.waitForLoadState("networkidle");
    });
    // --- Étape 3  ---
    await test.step("Etape 3", async () => {
      await page.screenshot({ path: "screenshot.png", fullPage: true });
    });
  });

  test.skip("test4", async ({ page }) => {
    await page.goto("https://sidewalk:elementary@smiling-glove.localsite.io/");
    // await page
    //   .getByRole("button", { name: "Ajouter au panier : “Alias.”" })
    //   .click();
    // await page.getByRole("link", { name: "Voir le panier" }).click();
    //   await page.waitForLoadState("networkidle");
    //   await page.screenshot({ path: "screenshot.png", fullPage: true });
  });

  test.skip("HTTP AUTH OK", async ({ page }) => {
    await page.goto("/");

    await expect(page).not.toHaveTitle(/401 unauthorised/i);
  });

  //https://arthurmeric4.atlassian.net/browse/SCRUM-117
  const listeProduits = ["Alias.", "Commodi.", "Eum qui."];
  const listeExtensions = ["alias", "commodi", "eum-qui"];

  test("Accès à fiche produit via son image", async ({ page }) => {
    let cpt = 0;
    while (cpt < listeProduits.length) {
      // URL de la page à tester : https://dull-ghost.localsite.io/
      await page.goto(urldistanciel);

      //Localiser le produit "${Produit}" dans la liste de produits.
      //Le produit "${Produit}" a été localisé
      await expect(
        page.getByRole("heading", { name: listeProduits[cpt] })
      ).toBeVisible();

      //Cliquer sur l'image de "${Produit}".
      await page.click('#main img[alt="' + listeProduits[cpt] + '"]');

      //Une page s’ouvre.
      await expect(page).not.toHaveURL(urldistanciel2);
      // cy.url().should("not.equal", urldistanciel2);

      // Vérifier que la nouvelle page est la fiche produit de "${Produit}".
      await expect(page.locator("#static_header_banner")).toContainText(
        listeProduits[cpt]
      );

      // La nouvelle page est bien celle de la fiche de "${Produit}".
      await expect(page).toHaveURL(
        urldistanciel2 + "produit/" + listeExtensions[cpt] + "/"
      );

      cpt = cpt + 1;
    }
  });
});
