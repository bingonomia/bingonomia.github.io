document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers-container');
    const numberDisplay = document.getElementById('number-display');
    const recentNumbers = document.querySelectorAll('.recent-number');
    const numberBall = document.getElementById('number-ball');

    let selectedNumbers = [];

    // Create buttons for numbers 1 to 90 in a 9x10 grid
    for (let i = 1; i <= 90; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = 'number-button';
        button.addEventListener('click', () => selectNumber(i));
        numbersContainer.appendChild(button);
    }

    function selectNumber(number) {
        if (!selectedNumbers.includes(number)) {
            selectedNumbers.push(number);
            numberDisplay.textContent = number;

            // Disable the selected button and mark it
            const button = Array.from(document.querySelectorAll('.number-button')).find(btn => parseInt(btn.textContent) === number);
            if (button) {
                button.classList.add('selected');
                button.removeEventListener('click', () => selectNumber(number));
            }

            updateRecentNumbers();
            animateNumberBall();
        }
    }

    function updateRecentNumbers() {
        recentNumbers.forEach((element, index) => {
            const recentNumber = selectedNumbers[selectedNumbers.length - 1 - index];
            element.textContent = recentNumber !== undefined ? recentNumber : '';
        });
    }

    function animateNumberBall() {
        // Add animation class to start animation
        numberBall.classList.add('animate');

        // Remove animation class after animation ends
        setTimeout(() => {
            numberBall.classList.remove('animate');
        }, 1000); // Duration of animation in milliseconds
    }
});
