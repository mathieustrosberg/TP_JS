// Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.

// Résultat attendu dans le terminal pour le chiffre 5 :

function stair(n) {
  // Traiter chaque ligne
  for (let i = 0; i < n; i++) {
    let str = "";

    // Ajouter les espaces de la premiere ligne
    for (let j = 0; j < n; j++) {
      // Si 'j' est inférieur ou égal à 'i', alors ajoute une étoile à la chaîne 'str', sinon ajoute un espace.
      if (j <= i) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}

stair(5);
