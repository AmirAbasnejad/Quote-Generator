const generateButton = document.querySelector("#gnrt-btn");
const container = document.querySelector(".container");

generateButton.addEventListener("click", function () {
    if (container) {
        container.innerHTML = '';
    }
    const color = "linear-gradient(300deg, #141E46 2.1%, #C70039 107.21%)";
    document.querySelector('body').style.background = color;
});