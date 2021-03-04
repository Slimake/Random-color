const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color-text");
const body = document.querySelector("body");

btn.addEventListener("click", function() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const randomColor = `rgb(${red}, ${green}, ${blue})`;
	body.style.backgroundColor = randomColor;
	colorText.classList.add("color-text-bg");
	colorText.textContent = randomColor;
});