/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    let name = document.getElementById("hero-name").value;
    let alter_ego = document.getElementById("hero-alter-ego").value;
    let powers = document.getElementById("hero-powers").value;
    fetch(`http://localhost:3000/heroes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        alterEgo: alter_ego,
        abilities: powers
      })
    }).then(
      res => res.json().then(data => console.log(data))
    );
  });
})();
