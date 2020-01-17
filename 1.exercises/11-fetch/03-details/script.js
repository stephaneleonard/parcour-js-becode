/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
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
      `http://localhost:3000/heroes/${document.getElementById("hero-id").value}`
    ).then(res =>
      res.json().then(data => {
        if (data) {
          console.log(data);
          const template = document.getElementById("tpl-hero");
          const tbody = document.getElementById("target");

          let clone = template.content.cloneNode(true);
          clone.querySelector(".name").textContent = data.name;
          clone.querySelector(".alter-ego").textContent = data.alterEgo;
          clone.querySelector(".powers").textContent = data.abilities;
          tbody.appendChild(clone);
        }
      })
    );
  });
})();
