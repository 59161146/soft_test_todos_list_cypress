describe("Todos", () => {
  it("should be OK", () => {
    expect(true).to.equal(true);
    cy.visit("http://todomvc.com/examples/vue/")
    cy.get('.new-todo').type('Hello World')
  });
});
