// Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".​Calculer la somme de tous les nombres entre 1 et N.

// Résultat attendu dans le terminal pour le chiffre 5 :

// 1+2+3+4+5 = 15

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur de saisir un nombre
rl.question("Veuillez saisir un nombre : ", function (nombre) {
  // Convertir la note en nombre entier
  nombre = parseInt(nombre);

  // Calcul la somme des nombres
  let somme = 0;
  for (let i = 1; i <= nombre; i++) {
    somme = somme + i;
  }

  // Afficher le résultat
  console.log("La somme des nombres de 1 à " + nombre + " est : " + somme);

  rl.close();
});
