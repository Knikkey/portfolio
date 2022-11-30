describe("About Me page", () => {
  it("base length is correct", () => {
    //init
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(3) > .NavItems_page-nav__-0Gj-").click();

    //check 1st p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(1)"
    ).should("be.visible");

    //check 2nd p doesn't exist
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(2)"
    ).should("not.exist");

    //check 3rd p doesn't exist
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(2)"
    ).should("not.exist");
  });

  it("med length selector works", () => {
    //init
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(3) > .NavItems_page-nav__-0Gj-").click();
    cy.get("#Medium").click();

    //check 1st p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(1)"
    ).should("be.visible");

    //check 2nd p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(2)"
    ).should("be.visible");

    //check 3rd p does not exist
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(3)"
    ).should("not.exist");
  });

  it("long length selector works", () => {
    //init
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(3) > .NavItems_page-nav__-0Gj-").click();
    cy.get("#Long").click();

    //check 1st p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(1)"
    ).should("be.visible");

    //check 2nd p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(2)"
    ).should("be.visible");

    //check 3rd p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(3)"
    ).should("be.visible");
  });

  it("short length selector works", () => {
    //init
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(3) > .NavItems_page-nav__-0Gj-").click();
    cy.get("#Long").click();
    cy.get("#Short").click();

    //check 1st p is visible
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(1)"
    ).should("be.visible");

    //check 2nd p does not exist
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(2)"
    ).should("not.exist");

    //check 3rd p does not exist
    cy.get(
      ".Bio_bio-container__kdmfM > .flex-col > div > :nth-child(3)"
    ).should("not.exist");
  });
});
