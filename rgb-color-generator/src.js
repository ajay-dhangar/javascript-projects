// src.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rgb-form");
    const resultsDiv = document.getElementById("results");
    const rgbResultInput = document.getElementById("rgb-result");
    const hexResultInput = document.getElementById("hex-result");
    const colorDisplay = document.getElementById("color-display");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const red = document.getElementById("red").value;
        const green = document.getElementById("green").value;
        const blue = document.getElementById("blue").value;

        const rgb = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbToHex(red, green, blue);

        rgbResultInput.value = rgb;
        hexResultInput.value = hex;
        colorDisplay.style.backgroundColor = rgb;

        resultsDiv.classList.remove("hidden");
    });

    function rgbToHex(r, g, b) {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }

    function componentToHex(c) {
        const hex = parseInt(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
});