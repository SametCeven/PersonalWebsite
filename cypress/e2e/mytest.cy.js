describe('template spec', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:5173/")
  })
  it('switching darkMode from on to off', () => {
    cy.get(`.switch`).click()
    cy.get(`[data-cy="app"`).should("not.have.class","bg-titleBold")
  })
  it('switching lang from en to tr', () => {
    cy.get(`[data-cy="langButton"]`).click()
    cy.get(`[data-cy="introHeader"]`).contains("Yaratıcı")
  })
})