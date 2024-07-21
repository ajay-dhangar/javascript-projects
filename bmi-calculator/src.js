document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        const resultElement = document.getElementById('bmiValue');
        
        resultElement.textContent = `Your BMI is ${bmi}`;
        
        if (bmi < 18.5) {
            resultElement.textContent += ' (Underweight)';
            resultElement.style.color = '#ffc107';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultElement.textContent += ' (Normal weight)';
            resultElement.style.color = '#28a745';
        } else if (bmi >= 25 && bmi < 29.9) {
            resultElement.textContent += ' (Overweight)';
            resultElement.style.color = '#fd7e14';
        } else {
            resultElement.textContent += ' (Obesity)';
            resultElement.style.color = '#dc3545';
        }
        
        document.querySelector('.result').style.display = 'block';
    } else {
        alert('Please enter both weight and height');
    }
});
