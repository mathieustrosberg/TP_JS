// Exercice 1 : Qui est le plus grand ?
// Écrivez un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.

// Résultat attendu dans la console :

// [12 , 54 , 32 ] --> 54

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur de saisir trois nombres
rl.question("Entrez le premier nombre : ", function (nombre1) {
  rl.question("Entrez le deuxième nombre : ", function (nombre2) {
    rl.question("Entrez le troisième nombre : ", function (nombre3) {
      // Convertir les valeurs en nombres à virgule flottante
      nombre1 = parseFloat(nombre1);
      nombre2 = parseFloat(nombre2);
      nombre3 = parseFloat(nombre3);

      // Calculer la somme
      const result = Math.max(nombre1, nombre2, nombre3);

      // Afficher le résultat
      console.log("Le plus grand nombre est : " + result);
      rl.close();
    });
  });
});
