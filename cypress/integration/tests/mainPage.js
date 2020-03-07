describe('check main page', function() {
    it('first', function() {
        cy.visit('/')
        // cy.contains('ПОДОБРАТЬ ПОХОД ИЛИ АКТИВНЫЙ ТУР')
        cy.get('nav > :nth-child(1) > .item_1 > :nth-child(1)').trigger('mouseover')
    })
})