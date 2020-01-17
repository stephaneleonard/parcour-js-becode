/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("target").innerHTML = `<table></table>`;
  for (let i = 1; i <= 10; i++) {
    var r = document.createElement("TR");
    for (let j = 1; j <= 10; j++) {
      var x = document.createElement("TD");
      var t = document.createTextNode(`${i}*${j}=${j * (i)}`);
      r.appendChild(x);
      x.appendChild(t);
      document.getElementsByTagName("table")[0].appendChild(r);
    }
  }
})();
