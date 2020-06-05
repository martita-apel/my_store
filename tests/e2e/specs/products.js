describe("Products Page", () => {
  it("Filters product list", () => {
    cy.visit("http://localhost:8080");
    /*     cy.get(".navbar-burger").click();
     */ cy.get(".column").should("have.length", 14);
    cy.get("input").type("Casa");
    cy.get(".column").should("have.length", 1);
    cy.get("input")
      .clear()
      .type("Guitarra");
  });
  it("Add product to Cart", () => {
    cy.visit("http://localhost:8080");
    /*     cy.get(".navbar-burger").click();
     */ cy.get("button.button.is-pulled-right.is-warning")
      .first()
      .click();
    cy.get(".navbar-burger").click();
    cy.get("span.tag.is-warning").contains("1");
    cy.get("a.navbar-item.cart").click();
  });
  it("Delete some product", () => {
    cy.visit("http://localhost:8080");
    /*     cy.get(".navbar-burger").click();
     */ cy.get("button.button.is-pulled-right.is-warning")
      .first()
      .click();
    cy.get(".navbar-burger").click();
    cy.get("span.tag.is-warning").contains("1");
    cy.get("a.navbar-item.cart").click();
    cy.get(".modal-card-body")
      .find(".card-content")
      .should("have.length", 1);

    cy.get("button.button.is-danger.is-small").click();
    cy.get(".modal-card-body")
      .find(".card-content")
      .should("have.length", 0);

    cy.get("button.button.is-primary").click();
  });
});
