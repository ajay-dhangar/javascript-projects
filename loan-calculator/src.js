document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').value = monthly.toFixed(2);
        document.getElementById('total-payment').value = (monthly * calculatePayments).toFixed(2);
        document.getElementById('total-interest').value = ((monthly * calculatePayments) - principal).toFixed(2);

        document.getElementById('results').classList.remove('hidden');
    } else {
        showError('Please check your numbers');
    }
});

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';

    const container = document.querySelector('.container');
    const form = document.querySelector('#loan-form');

    errorDiv.appendChild(document.createTextNode(error));
    container.insertBefore(errorDiv, form);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.error').remove();
}