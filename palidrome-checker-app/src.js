document.getElementById('palindrome-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const text = document.getElementById('text').value.trim();
    const isPalindrome = checkPalindrome(text);

    document.getElementById('text-result').value = text;
    document.getElementById('is-palindrome').value = isPalindrome ? 'Yes' : 'No';

    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
    resultsDiv.classList.add('show');
});

function checkPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
