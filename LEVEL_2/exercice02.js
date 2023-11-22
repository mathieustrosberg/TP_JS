// Écrivez un programme pour un professeur flemmard.​ Vous disposez d'une liste de notes comprises entre 0 et 20​. Écrivez un commentaire pour chacune de ces copies d'élève.

// 0-4 --> "Catastrophique, il faut tout revoir"​
// 5-10 --> "Insuffisant"​
// 11-14 --> "Peut mieux faire"​
// 15-17 --> "Bien"​
// 18-20 --> "Excellent, bon travail"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Demande à l'utilisateur de saisir une note
rl.question("Entrez la note de l'élève (entre 0 et 20) : ", function (note) {
  // Convertir la note en nombre entier
  note = parseInt(note);

  // Vérification de la plage de la note
  if (note >= 0 && note <= 4) {
    console.log("Catastrophique, il faut tout revoir");
  } else if (note >= 5 && note <= 10) {
    console.log("Insuffisant");
  } else if (note >= 11 && note <= 14) {
    console.log("Peut mieux faire");
  } else if (note >= 15 && note <= 17) {
    console.log("Bien");
  } else if (note >= 18 && note <= 20) {
    console.log("Excellent, bon travail");
  } else {
    console.log("La note doit être comprise entre 0 et 20");
  }

  rl.close();
});
