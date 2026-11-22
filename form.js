document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('playerForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginValue = document.getElementById('login').value.trim();
        const passwordValue = document.getElementById('password').value;
        const agreeValue = document.getElementById('agree').checked;
        const newPlayer = new Player(loginValue, passwordValue, agreeValue);
        newPlayer.printToConsole();

        alert(`Игрок "${loginValue}" успешно зарегистрирован!\nПроверьте консоль`);
        form.reset();
    });
});