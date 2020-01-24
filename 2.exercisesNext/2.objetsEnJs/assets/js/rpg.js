(() => {
  //   const character = {
  //     name: "Joli Coquelicot",
  //     age: 20,
  //     item_to_give: ["l'amouur", "test", "tes", "te", "t"],
  //     giveItem: function() {
  //       return this.item_to_give[
  //         Math.floor(Math.random() * this.item_to_give.length)
  //       ];
  //     }
  //   };

  //   let shop = {
  //     itemToSell: [
  //       { title: "Sword", physic: 20, magic: 0, minLevel: 3, available: true },
  //       { title: "Bow", physic: 20, magic: 0, minLevel: 10, available: true },
  //       {
  //         title: "SpellBook",
  //         physic: 0,
  //         magic: 30,
  //         minLevel: 10,
  //         available: true
  //       },
  //       {
  //         title: "ElderWand",
  //         physic: 0,
  //         magic: 1000,
  //         minLevel: 100,
  //         available: false
  //       }
  //     ],
  //     displayItems: function() {
  //       this.itemToSell.forEach(e => {
  //         console.log(e);
  //       });
  //     },
  //     displayAvailableItems: function() {
  //       this.itemToSell.forEach(e => {
  //         if (e.available) console.log(e);
  //       });
  //     },
  //     displayBadAssItems: function() {
  //       this.itemToSell.forEach(e => {
  //         if (e.minLevel > 10) console.log(e);
  //       });
  //     }
  //   };

  //   const mainCharacter = {
  //     name: "Harry Potter",
  //     level: 20,
  //     life: 100,
  //     weapon: {
  //       name: "ElderWand",
  //       damage: 1000
  //     },
  //     attack: function() {
  //       return `${this.name} attaque avec l'arme ${
  //         this.weapon.name
  //       } les dégats sont ${this.level * this.weapon.damage}`;
  //     }
  //   };
  //   console.log(mainCharacter.attack());

  class character {
    constructor(name, level, life, weapon) {
      this.name = name;
      this.level = level;
      this.life = life;
      this.weapon = weapon;
    }
    attack = function(oponent) {
      oponent.recieveDamage(this.level * this.weapon.damage);
      console.log(`${this.name} attaque ${oponent.name}`);
      console.log(`avec l'arme ${this.weapon.name}`);
      console.log(
        `et lui inflige ${this.level * this.weapon.damage} de dégats`
      );
      console.log(`${oponent.name} a maintenant ${oponent.life} de vie`);
    };
    recieveDamage = function(damage) {
      this.life -= damage;
    };
  }

  let HarryPotter = new character("Harry Potter", 20, 6000, {
    name: "Wand",
    damage: 20
  });
  let Voldemort = new character("Tom Jedusor", 20, 2000, {
    name: "ElderWand",
    damage: 40
  });
  while (HarryPotter.life > 0 && Voldemort.life > 0) {
    Voldemort.attack(HarryPotter);
    HarryPotter.attack(Voldemort);
  }
})();
