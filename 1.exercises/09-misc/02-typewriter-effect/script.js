/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  var text = document.getElementById("target").innerHTML;
  document.getElementById("target").innerHTML = "";
  var textArray = text.split("");
  let c = 0;
  draw(0);

  function draw() {
    if (c < textArray.length) {
      var x = document.createElement("SPAN");
      x.innerHTML = `${textArray[c]}`;
      document.getElementById("target").appendChild(x);
      c++;
      setTimeout(draw, Math.floor(Math.random()*200));
    }
  }

  //   var text = document.getElementById("target").innerHTML;
  //   document.getElementById("target").innerHTML = "";
  //   var textArray = text.split("");
  //   console.log(textArray);
  //   for (let i = 0; i < textArray.length; i++) {
  //     var x = document.createElement("SPAN");
  //     x.innerHTML = `${textArray[i]}`;
  //     document.getElementById("target").appendChild(x);
  //     sleep(1000);
  //   }
})();
