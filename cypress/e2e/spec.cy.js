describe("Checking links", () => {
  it("My Projects works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();

    const projectCard = cy.get(
      ".Projects_projects-container__L1tBf > :nth-child(1)"
    );

    cy.get(".page-header").should("contain", "My Projects");
    projectCard.should("be.visible");
  });

  it("About Me works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(3) > .NavItems_page-nav__-0Gj-").click();

    const lengthContainer = cy.get(".Bio_length-container__ESo-h");

    cy.get(".page-header").should("contain", "About Me");
    lengthContainer.should("be.visible");
  });

  it("Contact Me works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(4) > .NavItems_page-nav__-0Gj-").click();

    const formContainer = cy.get(".Contact_form-container__QGWa8");

    cy.get(".page-header").should("contain", "Contact me");
    formContainer.should("be.visible");
  });

  it("GitHub works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(5) > .NavItems_a__5U0IR")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "github.com/Knikkey");
  });

  it("Resume works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(6) > .NavItems_a__5U0IR")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", ".pdf");
  });
});
