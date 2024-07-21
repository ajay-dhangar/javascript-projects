document.addEventListener('DOMContentLoaded', () => {
    const characterInput = document.getElementById('character');
    const getUnicodeButton = document.getElementById('get-unicode');
    const resultDisplay = document.getElementById('result');

    getUnicodeButton.addEventListener('click', () => {
        const char = characterInput.value.trim();
        if (char.length === 1) {
            const unicodeValue = char.charCodeAt(0);
            resultDisplay.textContent = `Unicode value of '${char}' is ${unicodeValue}`;
        } else {
            resultDisplay.textContent = 'Please enter a single character.';
        }
    });

    characterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getUnicodeButton.click();
        }
    });
});
