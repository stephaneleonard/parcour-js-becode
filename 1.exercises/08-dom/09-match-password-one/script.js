/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
      if(document.getElementById('pass-one').value !== document.getElementById('pass-two').value){
        document.getElementById('pass-one').style.borderColor = 'red';
        document.getElementById('pass-two').style.borderColor = 'red';
      }
      else{
        document.getElementById('pass-one').style.borderColor = 'grey';
        document.getElementById('pass-two').style.borderColor = 'grey';
      }
  });
})();
