// Функція для генерації випадкового кольору в форматі hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

// Знаходимо необхідні елементи
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо слухача на кнопку Create
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  // Перевіряємо, чи значення в діапазоні від 1 до 100
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  // Очищуємо попередні елементи
  destroyBoxes();

  // Створюємо нові елементи
  createBoxes(amount);

  // Очищаємо поле вводу
  input.value = '';
});

// Додаємо слухача на кнопку Destroy
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення кількості <div> елементів, вказаних в параметрі amount
function createBoxes(amount) {
  const boxes = [];
  let size = 30; // Розмір першого <div> елемента

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    boxes.push(box); // Додаємо елемент до масиву
    size += 10; // Збільшуємо розмір для наступного елемента
  }

  // Додаємо всі створені елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення всіх створених <div> елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
