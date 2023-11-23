// Exercice 2 : Le Juste Prix
// Demandez à l'utilisateur de saisir un nombre de tentative (ce nombre de tentatives représentera le nombre d'échec possible)​. Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.​ Construisez le programme permettant de :​

// Saisir un nombre​
// Comparer le nombre avec le résultat attendu "N"​
// Afficher "Plus" ou "Moins"​
// Retirer une vie

const readline = require("readline");

function justePrix() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Demander à l'utilisateur le nombre de tentatives
  rl.question(
    "Entrez le nombre de tentatives : ",
    function (nombreDeTentatives) {
      const nombreAttendu = Math.floor(
        Math.random() * (parseInt(nombreDeTentatives) + 1)
      );

      // Fonction qui gère le déroulement du jeu en demandant à l'uilisateur de deviner le nombre, en comparant la proposition avec le nombre à deviner, et en affichant les indications.
      function number(i) {
        if (i <= parseInt(nombreDeTentatives)) {
          rl.question(
            `Tentative ${i} : Entrez votre proposition : `,
            function (proposition) {
              proposition = parseInt(proposition);

              if (proposition === nombreAttendu) {
                console.log("Félicitations ! Vous avez trouvé le juste prix !");
                rl.close();
              } else if (proposition < nombreAttendu) {
                console.log("Plus");
              } else {
                console.log("Moins");
              }

              if (proposition !== nombreAttendu) {
                console.log(
                  `Il vous reste ${
                    parseInt(nombreDeTentatives) - i
                  } tentatives.`
                );
                number(i + 1);
              }
            }
          );
        } else {
          console.log(
            `Désolé, vous avez épuisé toutes vos tentatives. Le juste prix était : ${nombreAttendu}`
          );
          rl.close();
        }
      }

      number(1);
    }
  );
}

justePrix();
