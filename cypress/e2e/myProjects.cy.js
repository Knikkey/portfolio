describe("My Projects page", () => {
  it("accordion arrows open/close accordion", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();

    const arrowLeft = cy.get(
      ':nth-child(1) > .flex-col > .Projects_bullet-container__61yQy > :nth-child(1) > [data-testid="onClickDiv"] > .Accordion_dropdown-icon__hyIfw'
    );
    const arrowRight = cy.get(
      ':nth-child(1) > .flex-col > .Projects_bullet-container__61yQy > :nth-child(2) > [data-testid="onClickDiv"] > .Accordion_dropdown-icon__hyIfw'
    );

    arrowLeft.click();

    cy.get(".Accordion_small-text__Gnzbb > :last-child").should("be.visible");

    arrowLeft.click();
    cy.get(".Accordion_small-text__Gnzbb > :last-child").should(
      "not.be.visible"
    );

    arrowRight.click();

    cy.get(".Accordion_small-text__Gnzbb").should("be.visible");

    arrowRight.click();

    cy.get(".Accordion_small-text__Gnzbb").should("not.be.visible");
  });

  it("filter works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();

    cy.get(":nth-child(1) > .Filter_select__kWGao").select(
      "Vanilla JavaScript"
    );

    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > :nth-child(2)"
    ).should("contain", "Vanilla JavaScript");

    cy.get(":nth-child(1) > .Filter_select__kWGao").select("React");

    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > :nth-child(2)"
    ).should("contain", "React");

    cy.get(":nth-child(1) > .Filter_select__kWGao").select("Firebase");

    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > :nth-child(2)"
    ).should("contain", "Firebase");

    cy.get(":nth-child(1) > .Filter_select__kWGao").select("SASS/SCSS");

    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > :nth-child(2)"
    ).should("contain", "SASS/SCSS");
  });

  it("sort works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();

    cy.get(":nth-child(3) > .Filter_select__kWGao").select("Date (oldest)");

    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > .subtitle"
    ).should("contain", "Dave's Donuts");
  });

  it("GitHub link works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();
    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > .Projects_links__H58Vt > :nth-child(1) > a"
    )
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "github.com/Knikkey");
  });

  it("Website link works", () => {
    cy.visit("https://nick-bingham.netlify.app/");
    cy.get(":nth-child(2) > .NavItems_page-nav__-0Gj-").click();
    cy.get(
      ":nth-child(1) > .Projects_project-header__HgCh- > .Projects_links__H58Vt > :nth-child(2) > a"
    )
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "netlify.app");
  });
});
