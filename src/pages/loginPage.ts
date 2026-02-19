class LoginPage {
    private usernameInput: string = 'input[name="username"]';
    private passwordInput: string = 'input[name="password"]';
    private loginButton: string = 'button[type="submit"]';
    
    constructor() {}

    public enterUsername(username: string): void {
        // Code to enter username
    }

    public enterPassword(password: string): void {
        // Code to enter password
    }

    public clickLogin(): void {
        // Code to click the login button
    }

    public login(username: string, password: string): void {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();