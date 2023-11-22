// ## Exercice 4 : Club d'enfants

// Écrivez un programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est :

// - 12 ans ou plus = Cadet
// - 10 ans ou plus = Minime
// - 8 ans ou plus = Pupille
// - Autre = Poussin

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur d'entrer l'âge de l'enfant
rl.question("Entrez l'âge de l'enfant : ", function (age) {
  // Convertir l'âge en nombre entier
  age = parseInt(age);

  // Vérifier la catégorie en fonction de l'âge
  if (age >= 12) {
    console.log("Catégorie : Cadet");
  } else if (age >= 10) {
    console.log("Catégorie : Minime");
  } else if (age >= 8) {
    console.log("Catégorie : Pupille");
  } else {
    console.log("Catégorie : Poussin");
  }

  rl.close();
});
