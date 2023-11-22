// ## Exercice 9 : Somme du tableau

// Écrire une fonction qui prend un tableau d'entiers en paramètre et renvoie la somme de tous les éléments du tableau.

// ---

// Fonction sommeTableau qui prend un tableau en paramètre
function sommeTableau(tableau) {
  let somme = 0;

  // Boucle for qui itère à travers chaque élément du tableau
  for (let i = 0; i < tableau.length; i++) {
    // Ajout de chaque élément du tableau à la variable somme
    somme = somme + tableau[i];
  }

  return somme;
}

const tableauExemple = [1, 2, 3, 4, 5];
const resultat = sommeTableau(tableauExemple);
console.log("La somme du tableau est :", resultat);
