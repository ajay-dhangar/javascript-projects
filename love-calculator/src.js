const loveCalculator = () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === '' || name2 === '') {
        alert('Please enter both names');
    } else {
        const random = Math.floor(Math.random() * 100) + 1;
        document.getElementById('result').innerHTML = `Your love percentage is ${random}%`;
    }
}