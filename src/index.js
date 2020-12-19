import "./styles.css";

let change = document.querySelector(".color-picker");
let body = document.getElementById("body");

let css = document.querySelector("h3");

function attemptChange(event) {
  let color1 = event.pageX;
  let color2 = event.pageY;
  change.style.background = "rgba(2, " + color1 + ", " + color2 + ")";
  css.textContent = change.style.background;
  color2 <= 100
    ? (css.style.color = "white")
    : (css.style.color = "rgba(0, 0, 0, 0.5)");
}

body.addEventListener("mouseenter", attemptChange);
body.addEventListener("mousemove", attemptChange);

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const users = { user1: 18273, user2: 92833, user3: 90315 };
const arrayUser = Object.entries(users);
const multi = Object.values(arrayUser * 2);
console.log(multi);

/**
 
 * let experiencePoints = winBattle? 10: 1


 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
