class HomePage {
  getBurgerMenu() {
    return cy.get(".css-7afvtf");
  }

  getLogOffTest1() {
    return cy.get(":nth-child(9) > .css-bve2vl");
  }
  getLogOffTest2() {
    return cy.get(":nth-child(7) > .css-bve2vl");
  }
}
export default HomePage;
