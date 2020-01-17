/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let number = Math.floor(Math.random() * 100);
  let tries = 0;
  let found = false;

  while (!found) {
    let t = prompt("A quelle chiffre je pense? (de 0 à 100)");
    if (t == number) {
      alert(`Bravo vous avez trouvé en ${tries} essais`);
      found = !found;
    } else if (t > number) alert("c'est moins");
    else alert("c'est plus");
    tries += 1;
    console.log(tries);
  }
})();
