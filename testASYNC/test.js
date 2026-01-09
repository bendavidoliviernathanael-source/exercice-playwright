// La fonction est marquée comme asynchrone
async function obtenirDonnees() {
  console.log("1. Début de l'opération");

  // On utilise 'await' pour attendre la résolution de la Promesse `fetch`
  // SANS bloquer le thread principal.
  try {
    const reponse = await fetch("https://api.exemple.com/donnees");
    const donnees = await reponse.json();
    console.log("3. Données reçues :", donnees);
  } catch (erreur) {
    console.error("Erreur de récupération :", erreur);
  }

  console.log("4. Fin de la fonction asynchrone");
}

// Le reste du code s'exécute immédiatement
console.log("2. Cette ligne s'exécute SANS attendre le fetch.");
obtenirDonnees();
console.log(
  "5. Cette ligne s'exécute aussi avant que la fonction asynchrone ait fini le fetch."
);
