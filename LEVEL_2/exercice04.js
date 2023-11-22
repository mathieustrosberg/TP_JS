// Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.

// Résultat attendu dans le terminal pour le chiffre 5 :

function stair(n) {
  for (let i = 0; i < n; i++) {
    // Initialisation d'une chaîne de caractères vide 'str'
    let str = "";

    // Une deuxième boucle 'for' pour construire chaque ligne du motif.
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

// Appel de la fonction 'stair' avec l'argument 5 et affichage du motif d'escalier.
stair(5);
