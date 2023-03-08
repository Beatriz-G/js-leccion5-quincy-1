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