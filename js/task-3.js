// Знаходимо елементи input і span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача події input до поля вводу
nameInput.addEventListener('input', event => {
    // Очищаємо значення від пробілів по краях
    const inputValue = event.target.value.trim();

    // Якщо інпут порожній або містить лише пробіли, ставимо "Anonymous"
    nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});
