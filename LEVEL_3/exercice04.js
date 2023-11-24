// Écrivez un algorithme qui transforme des nombres en base 10 en nombre romains.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convertToRoman(num) {
  const searchTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  for (let i in searchTable) {
    while (num >= searchTable[i]) {
      roman += i;
      num -= searchTable[i];
    }
  }
  return roman;
}

rl.question("Veuillez entrer un nombre : ", (answer) => {
  const num = parseInt(answer);
  if (!isNaN(num)) {
    const romanNum = convertToRoman(num);
    console.log(
      `La représentation en chiffres romains de ${num} est : ${romanNum}`
    );
  } else {
    console.log("Veuillez entrer un nombre valide.");
  }

  rl.close();
});
