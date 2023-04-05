/// <reference types="cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/Login";

describe("Homework - 2", () => {
  let homePage;
  let loginPage;

  before(() => {
    homePage = new HomePage();
    loginPage = new LoginPage();
  });

  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login ");
  });

  it("Test-1", () => {
    cy.login("user888@gmail.com", "1234567890");

    homePage.getBurgerMenu().click();
    homePage.getLogOffTest1().click();
  });

  it("Test-2", () => {
    cy.login("testowyqa@qa.team", "QA!automation-1");

    homePage.getBurgerMenu().click();
    homePage.getLogOffTest2().click();
  });
});
