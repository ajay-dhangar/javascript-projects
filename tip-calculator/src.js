document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const landingPage = document.querySelector(".landing-page");
    const container = document.querySelector(".container");
    const resultSection = document.querySelector(".result");

    startBtn.addEventListener("click", () => {
        landingPage.classList.add("hidden");
        container.classList.remove("hidden");
    });

    document.getElementById("tip-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const billAmount = parseFloat(document.getElementById("bill-amount").value);
        const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            alert("Please enter valid numbers for both fields.");
            return;
        }

        const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
        const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

        document.getElementById("tip-amount").textContent = tipAmount;
        document.getElementById("total-amount").textContent = totalAmount;

        resultSection.classList.remove("hidden");
    });
});
