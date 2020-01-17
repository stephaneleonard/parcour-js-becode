/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    let d = new Date();
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ];
    let occurences = [];
    for (month = 0; month < 12; month++) {
      d.setFullYear(document.getElementById('year').value, month, 13);
      if (d.getDay() == 5) {
        occurences.push(`${months[month]}`);
      }
    }
    alert(occurences);
  });
})();
