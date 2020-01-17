/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementsByTagName("img")[0].addEventListener("mouseover", () => {
    let save = document.getElementsByTagName("img")[0].src;
    document.getElementsByTagName("img")[0].src = document
      .getElementsByTagName("img")[0]
      .getAttribute("data-hover");
    document.getElementsByTagName("img")[0].setAttribute('data-hover' , save);
  });
  document.getElementsByTagName("img")[0].addEventListener("mouseout", () => {
    let save = document.getElementsByTagName("img")[0].src;
    document.getElementsByTagName("img")[0].src = document
      .getElementsByTagName("img")[0]
      .getAttribute("data-hover");
      document.getElementsByTagName("img")[0].setAttribute('data-hover' , save);
  });
})();
