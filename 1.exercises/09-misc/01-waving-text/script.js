/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  var text = document.getElementById("target").innerHTML;
  document.getElementById("target").innerHTML = '';
  var textArray = text.split("");
  console.log(textArray);
  let s = 0;
  for(let i = 0 ; i< textArray.length ; i++){
    var x = document.createElement("SPAN");
    x.innerHTML = `${textArray[i]}`
    x.style.fontSize = `${20 + 40 * Math.sin(s/5)}px`;
    document.getElementById('target').appendChild(x);
    s = s+1;
  }
})();
