/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let isrunning = false;

  function changerun() {
    isrunning = !isrunning;
    console.log(isrunning);
  }

  function checkSize(int) {
    if (int.length == 1) return `0${int}`;
    else return int;
  }

  function roulette(btn, i) {
    if (isrunning) {
      if (
        i ==
        parseInt(
          document.getElementById(`${btn.slice(4)}`).getAttribute("data-max")
        )
      ) {
        document.getElementById(`${btn.slice(4)}`).value = checkSize(`${i}`);
        setTimeout(
          roulette,
          50,
          btn,
          parseInt(
            document.getElementById(`${btn.slice(4)}`).getAttribute("data-min")
          )
        );
      } else {
        document.getElementById(`${btn.slice(4)}`).value = checkSize(`${i}`);
        setTimeout(roulette, 50, btn, i + 1);
      }
    }
  }

  Array.from(document.getElementsByTagName("button")).forEach($btn =>
    $btn.addEventListener("click", () => {
      changerun();
      if (isrunning)
        roulette(
          $btn.id,
          parseInt(document.getElementById(`${$btn.id.slice(4)}`).value)
        );
      else {
        document.getElementById("target").innerHTML = `+${
          document.getElementById("part-one").value
        }${checkSize(document.getElementById("part-two").value)}${checkSize(
          document.getElementById("part-three").value
        )}${checkSize(document.getElementById("part-four").value)}`;
      }
    })
  );
})();
