describe('Cypress test', () => {
  it('Can increment and decrement the counter', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h2').contains('0');
    cy.get('button#decrement').click();

    cy.get('h2').contains('-1');

    cy.get('button#increment').click();
    cy.get('h2').contains('0');
  });

  it('Should have a github link', () => {
    cy.get('a').should(
      'have.attr',
      'href',
      'https://github.com/kostaslib/delightful-clicker',
    );
  });
});
