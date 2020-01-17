/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  function println(err, callback) {
    if (err) console.log(err);
    else
      callback.forEach(element => {
        window.lib.getComments(element.id, (err, clb) => {
          let arr = clb;
          element.comments = clb;
        });
        console.log(element);
        //console.log(element.comments);
      });
  }


  // your code here
  document
    .getElementById("run")
    .addEventListener("click", () => window.lib.getPosts(println));
})();
