// ## Exercice 6 : Pair ou impair

// Écrire un programme qui demande à l'utilisateur de saisir un nombre et qui affiche si ce nombre est pair ou impair.

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur d'entrer un nombre
rl.question("Entrez un nombre : ", function (nombre) {
  // Convertir la saisie en nombre entier
  nombre = parseInt(nombre);

  // Vérifier si le nombre est pair ou impair
  if (nombre % 2 === 0) {
    console.log(nombre + " est un nombre pair.");
  } else {
    console.log(nombre + " est un nombre impair.");
  }

  rl.close();
});
