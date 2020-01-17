/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = operation => {
    // perform the operation
    let one = document.getElementById("op-one").value;
    let two = document.getElementById("op-two").value;
    if (isNaN(one) || isNaN(two)) {
      alert("enter valid numbers");
    } else {
      switch (operation) {
        case "addition":
          // code block
          alert(parseInt(one) + parseInt(two));
          break;
        case "substraction":
          // code block
          alert(parseInt(one) - parseInt(two));
          break;
        case "multiplication":
          alert(parseInt(one) * parseInt(two));
          break;
        default:
          alert(parseInt(one) / parseInt(two));
      }
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
