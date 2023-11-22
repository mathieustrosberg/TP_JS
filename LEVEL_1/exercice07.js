// ## Exercice 7 : Positif, négatif ou nul ?

// Écrire un programme qui demande un nombre à l'utilisateur puis vérifie si ce nombre est positif, négatif ou nul.

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur d'entrer un nombre
rl.question("Entrez un nombre : ", function (nombre) {
  // Convertir la saisie en nombre
  nombre = parseFloat(nombre);

  // Vérifier si le nombre est positif, négatif ou nul
  if (nombre > 0) {
    console.log(nombre + " est un nombre positif.");
  } else if (nombre < 0) {
    console.log(nombre + " est un nombre négatif.");
  } else {
    console.log(nombre + " est nul.");
  }

  rl.close();
});
