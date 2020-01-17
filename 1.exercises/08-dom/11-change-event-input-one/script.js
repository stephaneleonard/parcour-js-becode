/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('pass-one').addEventListener('keypress' , e => {
        let l = document.getElementById('pass-one').value.length+1;
        console.log(l)
        document.getElementById('counter').innerHTML = `${l}/10`
        if(l >= 10) e.preventDefault();
    });
})();
