/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const performOperation = btn => {
    // perform the operation
    function checkSize(int) {
      if (int.length == 1) return `0${int}`;
      else return int;
    }

    document.getElementById(btn).innerHTML =
      checkSize(`${parseInt(document.getElementById(btn).innerHTML) + 1}`);
    document.getElementById("target").innerHTML = `+${
      document.getElementById("part-one").innerHTML
    }${checkSize(document.getElementById("part-two").innerHTML)}${checkSize(
      document.getElementById("part-three").innerHTML
    )}${checkSize(document.getElementById("part-four").innerHTML)}`;
  };

  Array.from(document.getElementsByTagName("button")).forEach($btn =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
