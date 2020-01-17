/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById(
    "target"
  ).innerHTML = `<table></table>`;
  for (let i = 0; i < 10; i++) {
    var r = document.createElement("TR");
    var x = document.createElement("TD");
    var t = document.createTextNode("test");
    r.appendChild(x);
    x.appendChild(t);
    document.getElementsByTagName("table")[0].appendChild(r);
  }
})();
