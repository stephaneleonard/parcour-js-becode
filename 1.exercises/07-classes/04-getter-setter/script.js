/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get name() {
      return `${this.firstName} ${this.lastName}`;
    }

    set name(name) {
      this.firstName = name.split(" ")[0];
      this.lastName = name.split(" ")[1];
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    const stef = new Person("Stéphane", "Léonard");
    console.log(stef.name);
    stef.name = "joli coquelicot";
    console.log(stef);
  });
})();
