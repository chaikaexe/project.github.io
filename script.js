const buttons = document.querySelectorAll(".btt");
const activeButtonClass = "active";
const imageSrcMap = {
"bt1": "/images/fdmn.png",
"bt2": "/images/drmn.png",
"bt3": "/images/tkaway.png"
};
const image = document.getElementById("image");

function handleButtonClick(event) {
const clickedButton = event.target;
if (!clickedButton.classList.contains(activeButtonClass)) {
buttons.forEach((button) => {
button.classList.remove(activeButtonClass);
});
clickedButton.classList.add(activeButtonClass);
image.src = imageSrcMap[clickedButton.id];
}
}

buttons.forEach((button) => {
button.addEventListener("click", handleButtonClick);
});
