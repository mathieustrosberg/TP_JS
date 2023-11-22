// ## Exercice 1 : Bienvenue

// Écrivez un programme qui demande à l'utilisateur de saisir son nom et de lui afficher son nom avec le message de bienvenue.

// Résultat attendu dans le terminal : Bienvenue Julien !

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demander à l'utilisateur de saisir son nom
rl.question("Veuillez saisir votre nom : ", (name) => {
  console.log(`Bienvenue ${name} !`);

  rl.close();
});
