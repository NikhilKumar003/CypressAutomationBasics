// / <reference types="Cypress" />

describe('DropDownTypes',()=>{

    it.skip('SelectDD',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('hungary').should('have.value','hungary')

    })
    it.skip('BootStrapDD',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //selct dropdown
        cy.get("#select2-billing_country-container").click()
        //enter value
        cy.get(".select2-search__field").type('germany').type('{enter}')
        //verfiy value is correct or not
        cy.get("#select2-billing_country-container").should('have.text','germany')

        

    })
    it.skip('AutoSuggestDD',()=>{

        cy.visit("https://www.wikipedia.org/")
        //selct dropdown
        cy.get("#search-input").type("warangal")
        //enter value
        // cy.get(".select2-search__field").type('warangal')
        //verfiy value is correct or not
        cy.get(".suggestion-title").contains("Warangal Fort").click()

        

    })
    it('Dynamic DDs',()=>{

        cy.visit("https://www.wikipedia.org/")
        //selct dropdown
        cy.get("#search-input").type("warangal")
        
        cy.get(".suggestion-text>h3").should('have.length','6')

        cy.get(".suggestion-text>h3").each(($el,index,$list) =>{
               if($el.text()=='Warangal district')
               {
                cy.wrap($el).click()
               } 

        })

        

    })
})