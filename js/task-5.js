// Функція для генерації випадкового кольору в форматі hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

// Знаходимо необхідні елементи
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Додаємо слухача події 'click' до кнопки
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону на <body>
  body.style.backgroundColor = randomColor;

  // Вставляємо значення кольору в span.color
  colorSpan.textContent = randomColor;
});
