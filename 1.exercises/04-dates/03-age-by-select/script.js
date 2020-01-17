/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let yearAge = year - document.getElementById("dob-year").value;
    let monthAge;
    let dateAge;

    if (month >= document.getElementById("dob-month").value)
      monthAge = month - document.getElementById("dob-month").value;
    else {
      yearAge--;
      monthAge = 12 + month - document.getElementById("dob-month").value;
    }

    if (day >= document.getElementById("dob-day").value)
      dateAge = day - document.getElementById("dob-day").value;
    else {
      monthAge--;
      dateAge = 31 + day - document.getElementById("dob-day").value;
    }

    alert(`You are ${yearAge} and ${monthAge} and ${dateAge}`);
  });
})();
