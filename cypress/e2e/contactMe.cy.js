describe("Contact Me", () => {
  it("failed send modal appears properly", () => {
    //init
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(4) > .NavItems_page-nav__-0Gj-").click();

    //type name
    cy.get("#name").type("test");

    //type email
    cy.get("#email").type("test@test.com");

    //type subject
    cy.get("#subject").type("test");

    //type message
    cy.get("#message").type("test");

    //send
    cy.get(".Contact_btn__3sduE").click();

    cy.contains("error").should("be.visible");
  });
});
