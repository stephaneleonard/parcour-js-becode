(() => {
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");
  let shot = [];
  let lastshot = 0;
  let score = 10;
  var startTime;
  let elapsed;
  let background = new Image();
  background.src = "../assets/img/background.png";
  let bird = new Image();
  bird.src = "../assets/img/bird.png";
  let bullet = new Image();
  bullet.src = "../assets/img/bullet.png";

  // Canon
  class Canon {
    constructor(gameWidth, gameHeight) {
      this.width = 20;
      this.height = 50;
      this.maxSpeed = 7;
      this.speed = 0;

      this.position = {
        x: gameWidth / 2 - this.width / 2,
        y: gameHeight - this.height
      };
    }

    draw(ctx) {
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
      this.speed = -this.maxSpeed;
    }

    moveRight() {
      this.speed = this.maxSpeed;
    }

    stop() {
      this.speed = 0;
    }

    update() {
      this.position.x += this.speed;
      if (this.position.x < 0) this.position.x = 0;
      if (this.position.x + this.width > 800) {
        this.position.x = 800 - this.width;
      }
    }

    reset() {
      this.speed = 0;
      this.position.x = 800 / 2 - this.width / 2;
    }
  }

  //Bullet
  class Bullet {
    constructor(gameWidth, gameHeight, positionX) {
      this.width = 10;
      this.height = 10;
      this.radius = 10;
      this.position = {
        x: positionX + 10,
        y: gameHeight - 50
      };
    }

    draw(ctx) {
      ctx.drawImage(bullet, this.position.x, this.position.y, this.radius+20 , this.radius+20);
    }

    update(i) {
      this.position.y -= 20;
      if (this.position.y > 0) {
        this.draw(ctx);
        if (this.colision()) {
          shot.splice(i, 1);
          score++;
          updateTarget();
          console.log("touché");
        }
      } else {
        console.log("dépasser");
        shot.splice(i, 1);
      }
    }

    colision() {
      let distance_x = this.position.x - target.position.x;
      let distance_y = this.position.y - target.position.y;
      let radii_sum = this.radius + target.radius;
      //calc if collision or not
      if (
        distance_x * distance_x + distance_y * distance_y <=
        radii_sum * radii_sum
      )
        return true;
    }
  }

  //Target
  class Target {
    constructor(gameWidth, gameHeight) {
      this.width = 40;
      this.height = 40;
      this.radius = 40;
      this.speed = Math.floor(Math.random() * 14) - 6;
      this.borderLeft = Math.floor(Math.random() * 400);
      this.borderRight = Math.floor(Math.random() * 400) + 400;
      this.position = {
        x: Math.floor(
          Math.random() *
            (this.borderRight + this.radius - this.borderLeft + 1) +
            this.borderLeft +
            -this.radius
        ),
        y: Math.floor(Math.random() * 200 + 30)
      };
    }

    draw(ctx) {
      ctx.drawImage(bird, this.position.x, this.position.y, this.radius+20 , this.radius+20);
    }

    update() {
      this.position.x += this.speed;
      if (

        this.position.x < this.borderLeft ||
        this.position.x > this.borderRight
      )
        this.speed = -this.speed;
    }
  }
  let canon = new Canon(800, 600);
  let target = new Target(800, 600);

  //game functions
  function updateTarget() {
    target = new Target(800, 600);
  }

  function newGame() {
    score = 0;
    canon.reset();
    startTime = new Date().getTime();
  }

  document.addEventListener("keydown", event => {
    if (score < 10) {
      switch (event.keyCode) {
        case 37:
          canon.moveLeft();
          break;
        case 39:
          canon.moveRight();
          break;
        case 32:
          if (!lastshot) {
            console.log("fire");
            shot.push(new Bullet(800, 600, canon.position.x));
            lastshot = 20;
          } else {
            console.log("cant shoot now");
          }
          break;
      }
    } else {
      if (event.keyCode == 13) {
        console.log("new game");
        newGame();
      }
    }
  });

  //eventListeners
  document.addEventListener("keyup", event => {
    if (score < 10) {
      switch (event.keyCode) {
        case 37:
          console.log("stop");
          if (canon.speed < 0) canon.stop();
          break;
        case 39:
          console.log("stop");
          if (canon.speed > 0) canon.stop();
          break;
      }
    }
  });

  //gameLoop
  function gameloop() {
    //clear canvas
    ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(background, 0, 0);
    if (score < 10) {
      ctx.font = "30px Arial";
      ctx.fillText(score, 750, 50);
      //update objects
      target.draw(ctx);
      target.update();
      canon.update();
      canon.draw(ctx);
      for (let i = 0; i < shot.length; i++) {
        shot[i].update(i);
      }

      //update time before next shot
      if (lastshot) lastshot--;

      //update elapsed Time
      let now = new Date().getTime();
      elapsed = now - startTime;
      var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
      var milliseconds = Math.floor(elapsed % 1000);
      ctx.font = "30px Arial";
      ctx.fillText(`${minutes}m:${seconds}s:${milliseconds}ms`, 50, 50);
    } else {
      ctx.font = "30px Arial";
      ctx.fillText("Piou-Piou", 330, 300);
      if (elapsed) {
        var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
        var milliseconds = Math.floor(elapsed % 1000);
        ctx.font = "30px Arial";
        ctx.fillText(`${minutes}m:${seconds}s:${milliseconds}ms`, 300, 350);
      }
      ctx.fillText("Press enter to play", 250, 400);

      ctx.fillText("<- -> space", 570, 570);
    }
    requestAnimationFrame(gameloop);
  }

  gameloop();
})();