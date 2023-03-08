var friends = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

friends.addEventListener("mouseover", function () {
    friends.innerText = "123k";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47k";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20k";
});

var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

themeSwitchInput.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        body.classList.remove("loght");
        ball.classList.remove("move-right");
        h1.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});