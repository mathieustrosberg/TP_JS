// Exercice 1 : Fizz Buzz
// Demandez à l'utilisateur de saisir un nombre "N". Afficher tous les nombres allant de 0 à "N", avec les particularités suivantes :

// Remplacez tous les multiples de 3 par "FIZZ"​
// Remplacez tous les multiples de 5 par "BUZZ"​
// Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"
// FIZZBUZZ​
// 1​
// 2​
// FIZZ​
// 4​
// BUZZ​
// FIZZ

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur de saisir un nombre
rl.question("Veuillez saisir un nombre : ", function (num) {
  // Convertir l'entrée en nombre entier
  const N = parseInt(num);

  // Boucle de 0 à N
  for (let i = 0; i <= N; i++) {
    // Vérifie si le nombre est un multiple de 3 et de 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      // Vérifie si le nombre est un multiple de 3
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      // Vérifie si le nombre est un multiple de 5
      console.log("BUZZ");
    } else {
      // Affiche le nombre tel quel s'il n'est pas un multiple ni de 3 ni de 5
      console.log(i);
    }
  }
  rl.close();
});
