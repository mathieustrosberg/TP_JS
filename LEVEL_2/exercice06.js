// Exercice 6 : Une vraie pyramide
// Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens (^).

const pyramid = (size) => {
  let str = "";

  // Traiter chaque ligne
  for (let line = 1; line <= size; line++) {
    // Ajouter les espaces de la premiere ligne
    for (let i = 0; i < size - line; i++) {
      str = str + " ";
    }

    // Ajouter les X
    // line, size
    // line 1 * 2 - 1 = 1
    // line 2 * 2 - 1 = 3
    // line 3 * 2 - 1 = 5
    // line 4 * 2 - 1 = 7
    // line 5 * 2 - 1 = 9

    for (let i = 0; i < line * 2 - 1; i++) {
      str = str + "*";
    }

    // Ajouter le \n
    if (line !== size) {
      str = str + "\n";
    }
  }

  return str;
};

console.log(pyramid(5));
