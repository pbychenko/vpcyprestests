describe('check main page', function() {
  // const tripTypes = ['Пеший', 'Водный', 'Вело', 'Горный', 'Выходного дня', 'Зимний'];

  beforeEach(() => {
      cy.visit('/instructors')
  })

  it('search by name', function() {
      cy.get('h1').should('contain','Наши инструкторы')
      cy.get('.field-instructorsearch-instructor .select2-search__field').click()
      cy.get('#select2-instructorsearch-instructor-results').as('names')
      cy.get('@names').should('be.visible')      
      cy.get('@names').find('li:nth-child(4)').then((spec) => {
        const name = spec.text()
        cy.wrap(spec).click()
        cy.get('.instructor_list_name a').should('have.length', 1).should('have.text', name)
      })
  })  
})