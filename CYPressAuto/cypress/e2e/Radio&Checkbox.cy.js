

describe('Radiobuttons',()=>{

    it('test1',()=>{
        cy.visit("https://qa-automation-practice.netlify.app/radiobuttons.html")
        //radio btn visible
        cy.get("#radio-button1").should('be.visible')
        cy.get("#radio-button2").should('be.visible')
        //select radio btn
        cy.get("#radio-button1").check().should('be.checked')
        cy.get("#radio-button2").check().should('be.checked')
        cy.get("#radio-button1").should('not.be.checked')
    })

    it('CheckBox',()=>{
        cy.visit("https://qa-automation-practice.netlify.app/checkboxes")
        //check-box visible
        cy.get("#checkbox1").should('be.visible')
        cy.get("#checkbox2").should('be.visible')
        //select check box
        cy.get("#checkbox1").check().should('be.checked')
        cy.get("#checkbox3").check().should('be.checked')
        //unselect checkbox
        cy.get("#checkbox1").uncheck().should('not.be.checked')
    })
})