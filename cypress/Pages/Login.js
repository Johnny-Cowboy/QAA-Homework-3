class LoginPage {
  getEmailInput() {
    return cy.get("#user_email");
  }

  getPasswordInput() {
    return cy.get("#user_password");
  }

  getSignInButton() {
    return cy.get(".e1wro88c0");
  }
}

export default LoginPage;
