/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("pass-one").addEventListener("keypress", e => {
    let l = document.getElementById("pass-one").value.length + 1;
    console.log(
      document.getElementById("pass-one").value.replace(/[^0-9]/g, "").length+1
    );
    if (
      l > 8 &&
      document.getElementById("pass-one").value.replace(/[^0-9]/g, "").length+1 >=
        2
    ) {
      document.getElementById("validity").innerHTML = `ok`;
    } else {
      document.getElementById("validity").innerHTML = `pas ok`;
    }
  });
})();
