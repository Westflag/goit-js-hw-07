// Знаходимо форму
const loginForm = document.querySelector('.login-form');

// Додаємо слухача події submit до форми
loginForm.addEventListener('submit', event => {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();

    // Отримуємо доступ до елементів форми
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    // Перевіряємо, чи всі поля заповнені
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    // Створюємо об'єкт з даними форми
    const formData = {
        email: email,
        password: password
    };

    // Виводимо об'єкт з даними в консоль
    console.log(formData);

    // Очищаємо форму після сабміту
    loginForm.reset();
});
