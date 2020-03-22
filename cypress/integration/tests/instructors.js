describe('check instroctors page', function() {
  // const tripTypes = ['Пеший', 'Водный', 'Вело', 'Горный', 'Выходного дня', 'Зимний'];

  beforeEach(() => {
      cy.visit('/instructors')
  })

  // it('search by name', function() {
  //     cy.get('h1').should('contain','Наши инструкторы')
  //     cy.get('.field-instructorsearch-instructor .select2-search__field').click()
  //     cy.get('#select2-instructorsearch-instructor-results').as('names')
  //     cy.get('@names').should('be.visible')      
  //     cy.get('@names').find('li:nth-child(4)').then((spec) => {
  //       const name = spec.text()
  //       cy.wrap(spec).click()
  //       cy.get('.instructor_list_name a').should('have.length', 1).should('have.text', name)
  //     })
  // })

  it('search by direct', function() {
    cy.get('.field-instructorsearch-direction .select2-search__field').click()
    cy.get('#select2-instructorsearch-direction-results').as('directions')
    cy.get('@directions').should('be.visible') 
    cy.get('@directions').find('>li:nth-child(1) ul li:nth-child(2)').then((spec) => {
      const name = spec.text()
      cy.wrap(spec).click()
      cy.wait(3000)
      cy.get('.instructor_list_tags:nth-child(2) ul').each(ul => {
        // cy.wrap(ul).contains(name)
        // cy.log(ul)
        const c = ul.find('li span').text()
        cy.log(typeof c)
      })
       // cy.get('.instructor_list_name a').should('have.length', 1).should('have.text', name)
    })
  })  
})