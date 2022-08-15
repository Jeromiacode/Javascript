let chaiseAddBtn = document.getElementById("chaiseAdd");
let chaiseDelBtn = document.getElementById("chaiseDel");
let countClicks = 0;
const div = document.createElement("div");
document.querySelector("body").appendChild(div).innerHTML = countClicks

chaiseAddBtn.addEventListener("click", function () {
    countClicks += 1;
    div.innerHTML = countClicks
});
chaiseDelBtn.addEventListener("click", function () {
    if (countClicks > 0) {
    countClicks -= 1;
    div.innerHTML = countClicks
    }
});