import inquirer from "inquirer";

inquirer
  .prompt([
    /* აქ ჩაწერე შენი კითხვები */
  ])
  .then((answers) => {
    // აქ გამოიყენე მომხმარებლის პასუხები... რისთვისაც გჭირდება!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // ამ გარემოში კითხვა ვერ გამოისახა (ტერმინალი არ უჭერს მხარს)
    } else {
      // სხვა ტიპის შეცდომა მოხდა
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
