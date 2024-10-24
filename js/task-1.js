// Отримуємо всі елементи li з класом item всередині ul#categories
const categories = document.querySelectorAll('#categories .item');

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимося по кожному елементу li.item
categories.forEach(category => {
    // Знаходимо і виводимо текст заголовка h2
    const title = category.querySelector('h2').textContent;
    // Знаходимо і виводимо кількість елементів li в кожній категорії
    const itemsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});
