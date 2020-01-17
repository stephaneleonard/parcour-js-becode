/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let confirmed = false;
    let age , sex , city;

    while(confirmed != true){
        age = prompt("What's your age ?");
        sex = prompt("What's your sex ?");
        city = prompt("What's your city ?");
        confirmed = confirm("Press a button!");
    }

    alert(`Your age is ${age} you are a ${sex} and you live in ${city}`);
})();
