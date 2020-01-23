export class AuthService {
  constructor() { }
  private isLoggedIn = false;

  loggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  authenticate() {
    return this.isLoggedIn;
  }
}
