// Exercice 5 : Drôle de pyramide
// Adaptez l'exercice 4 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide.

// Résultat attendu dans le terminal pour le chiffre 5 :

function stair(n) {
  for (let i = 0; i < n; i++) {
    // Initialisation d'une chaîne de caractères vide 'str'
    let str = "";

    // Une deuxième boucle 'for' pour construire chaque ligne du motif.
    for (let j = 0; j < n; j++) {
      // Si 'j' est supérieur ou égal à 'n - i - 1', alors ajoute une étoile à la chaîne 'str', sinon ajoute un espace.
      if (j >= n - i - 1) {
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
