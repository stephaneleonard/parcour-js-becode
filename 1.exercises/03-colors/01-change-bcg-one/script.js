/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  var changeColor = color => {
    switch (color) {
      case "red":
        document.body.style.backgroundColor = "red";
        break;
      case "green":
        document.body.style.backgroundColor = "green";
        break;
      case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
      default:
        document.body.style.backgroundColor = "blue";
    }
  };
  // your code here
  Array.from(document.querySelectorAll("button")).forEach($btn =>
    $btn.addEventListener("click", () => (changeColor($btn.id), false))
  );
})();
