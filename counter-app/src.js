document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.landing-page').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});

const counterElement = document.getElementById('counter');
let counter = 0;

document.getElementById('increase').addEventListener('click', () => {
    counter++;
    updateCounter();
});

document.getElementById('decrease').addEventListener('click', () => {
    counter--;
    updateCounter();
});

document.getElementById('reset').addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counter;
    counterElement.animate([{ opacity: 0.5 }, { opacity: 1 }], { duration: 300 });
}