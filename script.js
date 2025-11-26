document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageEl = document.getElementById('message');

    let messages = [];

    if (name === '') {
        messages.push('Ім’я не може бути порожнім');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messages.push('Некоректний email');
    }

    if (password.length < 6) {
        messages.push('Пароль повинен бути мінімум 6 символів');
    }

    if (password !== confirmPassword) {
        messages.push('Паролі не збігаються');
    }

    if (messages.length > 0) {
        messageEl.style.color = 'red';
        messageEl.innerHTML = messages.join('<br>');
    } else {
        messageEl.style.color = 'green';
        messageEl.innerHTML = 'Форма успішно відправлена!';
        this.reset();
    }
});
