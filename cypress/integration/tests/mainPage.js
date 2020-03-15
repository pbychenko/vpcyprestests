describe('check main page', function() {
    const mainNavigationLinks = ['Маршруты', 'Типы', 'Календарь походов', 'О нас', 'Инструкторы', 'Новости', 'Вопрос / Ответ', 'Отзывы', 'Фото / Видео', 'Контакты'];

    beforeEach(() => {
        cy.visit('/')
    })

    it('can see main elements', function() {
        cy.contains('Подобрать поход или активный тур')
        cy.get('#main-navigation').should('be.visible')
        cy.get('.main_slider').should('be.visible')
        cy.get('.main_page_filter').should('be.visible')
        cy.get('.main_page_articles').should('be.visible')
        cy.get('.main_page_hikes').should('be.visible')
        cy.get('.main_page_responses').should('be.visible')
    })

    it('can see main navigation links', function() {
        cy.get('#main-navigation>nav>ul>li>a').each((el,i) => {
            assert.equal(el.text().trim(), mainNavigationLinks[i])
        })
    })

    it('can see and submit trip form', function() {
        cy.get('.main_page_filter').should('be.visible').scrollIntoView()
        cy.get('.main_page_filter h2').contains('Подобрать поход или активный тур')
        cy.get('#routesearch-tag1').select('Восхождения', {force:true})
        cy.get('#main-page-hike-search-form').submit()
    })
})