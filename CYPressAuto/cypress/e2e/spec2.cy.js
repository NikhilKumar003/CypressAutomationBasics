const cypress = require("cypress")


describe('test1',()=>{

    it('test11',()=>{
        cy.visit("https://institute.leo1.in/institute/login")
        cy.title().should('eq','Institute Login - LEO1')
        cypress.title().should('eq', '')
    })

}
)