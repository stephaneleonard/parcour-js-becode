/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    fetch(
      `http://localhost:3000/heroes/${
        document.getElementById("hero-id").value
      }`,
      {
        method: "DELETE"
      }
    ).then(vall => fetch('http://localhost:3000/heroes').then(err => err.json().then(data => console.log(data))));
  });
})();
