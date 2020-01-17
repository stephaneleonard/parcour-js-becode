/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("increment").addEventListener("click", () => {
    if (localStorage.getItem("counter") == null)
      localStorage.setItem("counter", `${0}`);
    else localStorage.setItem("counter", `${parseInt(localStorage.getItem("counter"))+1}`);
    document.getElementById('target').innerHTML = localStorage.getItem('counter');
  });
})();
