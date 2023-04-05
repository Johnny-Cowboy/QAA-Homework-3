/// <reference types="cypress" />
import HomePage from "../Pages/HomePage";

describe("Homework - 3", () => {
  let homePage;

  before(() => {
    homePage = new HomePage();
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
