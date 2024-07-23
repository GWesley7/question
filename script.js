const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const animation = document.getElementById('animation');

noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    let newX = Math.random() * (containerRect.width - noButtonRect.width);
    let newY = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

yesButton.addEventListener('click', () => {
    animation.classList.remove('hidden');
});