/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    fetch("http://localhost:3000/heroes").then(res =>
      res.json().then(data => {
        console.log(data);
        const template = document.getElementById("tpl-hero");
        const tbody = document.getElementById("target");

        data.forEach(e => {
          let clone = template.content.cloneNode(true);
          clone.querySelector(".name").textContent = e.name;
          clone.querySelector(".alter-ego").textContent = e.alterEgo;
          clone.querySelector(".powers").textContent = e.abilities;
          tbody.appendChild(clone);
        });
      })
    );
  });
})();
