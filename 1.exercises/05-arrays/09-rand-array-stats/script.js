/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    randomArray = [];

    for (let i = 0; i < 10; i++) {
      randomArray[i] = Math.floor(Math.random() * 100);
      document.getElementById(`n-${i + 1}`).innerHTML = randomArray[i];
    }
    document.getElementById(`max`).innerHTML = Math.max.apply(
      null,
      randomArray
    );
    document.getElementById(`min`).innerHTML = Math.min.apply(
      null,
      randomArray
    );
    document.getElementById(`sum`).innerHTML = randomArray.reduce(
      (a, b) => a + b,
      0
    );
    document.getElementById(`average`).innerHTML =
      randomArray.reduce((a, b) => a + b, 0) / randomArray.length;
  });
  // your code here
})();
