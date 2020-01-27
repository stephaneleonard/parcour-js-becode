(() => {
  document
    .getElementsByTagName("body")[0]
    .addEventListener("keydown", event => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 38:
          document.getElementById("up").classList.add("hilight");
          break;
        case 37:
          document.getElementById("left").classList.add("hilight");
          break;
        case 40:
          document.getElementById("down").classList.add("hilight");
          break;
        case 39:
          document.getElementById("right").classList.add("hilight");
          break;
      }
    });
  document
    .getElementsByTagName("body")[0]
    .addEventListener("keyup", event => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 38:
          document.getElementById("up").classList.remove("hilight");
          break;
        case 37:
          document.getElementById("left").classList.remove("hilight");
          break;
        case 40:
          document.getElementById("down").classList.remove("hilight");
          break;
        case 39:
          document.getElementById("right").classList.remove("hilight");
          break;
      }
    });
})();
