// ## Exercice 5 : Profit ou perte

// Écrivez un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit et vérifiez-en le profit ou la perte.

// Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.

// ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Saisir le prix de fabrication et de vente du produit
rl.question("Entrez le prix de fabrication : ", function (price1) {
  rl.question("Entrez le prix de vente : ", function (price2) {
    // Convertir les valeurs en nombres à virgule flottante
    price1 = parseFloat(price1);
    price2 = parseFloat(price2);

    // Calculer la somme
    const somme = price2 - price1;

    // Afficher le résultat
    if (price1 < price2) {
      console.log("Il y un profit de", somme, "€");
    } else {
      console.log("Il y a une perte de", somme, "€");
    }

    rl.close();
  });
});
