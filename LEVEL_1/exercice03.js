// ## Exercice 3 : Addition

// Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.

// Résultat attendu dans le terminal : 13 + 3 = 15

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Saisir deux nombres de l'utilisateur
rl.question("Entrez le premier nombre : ", function (nombre1) {
  rl.question("Entrez le deuxième nombre : ", function (nombre2) {
    // Convertir les valeurs en nombres à virgule flottante
    nombre1 = parseFloat(nombre1);
    nombre2 = parseFloat(nombre2);

    // Calculer la somme
    const somme = nombre1 + nombre2 - 1;

    // Afficher le résultat
    console.log(nombre1, "+", nombre2, "=", somme);

    rl.close();
  });
});
