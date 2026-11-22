class Player {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    // Метод форматированного вывода на консоль
    printToConsole() {
        console.log(
            "%cНовый игрок",
            "color: #727eb3; font-weight: bold; font-size: 16px;"
        );
        console.log(
            `%cЛогин: %c${this.login}`,
            "color: #727eb3; font-size: 14px;",
            "color: #727eb3; font-weight: bold; font-size: 14px;"
        );
        console.log(
            `%cПароль: %c${'*'.repeat(this.password.length)}`,
            "color: #727eb3; font-size: 14px;",
            "color: #727eb3; font-size: 14px;"
        );
    }
}