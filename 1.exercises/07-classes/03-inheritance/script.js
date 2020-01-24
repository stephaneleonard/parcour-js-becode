/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }

  class Dog extends Animal {
    static greeting = "Hello";
    constructor(name) {
      super(Animal);
      this.name = name;
    }
  }

  class Cat extends Animal {
    static greeting = "Hi";
    constructor(name) {
      super(Animal);
      this.name = name;
    }
  }

  // your code here
  document.getElementById("run").addEventListener("click", () => {
    const dogo = new Dog("good dogo");
    console.log(dogo.sayHello());
    const kitty = new Cat("kitty");
    console.log(kitty.sayHello());
  });
})();
