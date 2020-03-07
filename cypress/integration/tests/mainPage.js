describe('check main page', function() {
    it('first', function() {
        cy.visit('/')
        cy.contains('Приглашаем в путешествия')
    })
})