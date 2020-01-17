/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  function println(err, callback) {
    if (err) console.log(err);
    else
      callback.forEach(element => {
        console.log(element);
      });
  }
  // your code here
  document
    .getElementById("run")
    .addEventListener("click", () => window.lib.getPosts(println));
})();
