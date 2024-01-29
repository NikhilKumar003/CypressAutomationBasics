describe('Assertion types',()=>{

    it('implicit asserts',()=>{
        // cy.visit("https://institute.leo1.in/institute/login")
        // cy.url().should('include','institute.leo1')
        // cy.url().should('eq','https://institute.leo1.in/institute/login')
        // cy.url().should('contain','leo1.in')
        /*cy.visit("https://institute.leo1.in/institute/login")
        cy.url().should('include','institute.leo1.in')
        .should('eq','https://institute.leo1.in/institute/login')
        .should('contain','leo1.in')*/
        cy.visit("https://institute.leo1.in/institute/login")
        cy.url().should('include','institute.leo1')
        .and('eq','https://institute.leo1.in/institute/login')
        .and('contain','leo1.in')
        .and('not.contain','neo')
           //title 
        cy.title().should('include','Institute')
        .and('eq','Institute Login - LEO 1 | Pay fees and get rewarded')
        .and('include','Institute')
        //logo
        cy.get('[alt="logo-light"]').should('be.visible').and('exist')

        // cy.xpath("//a").should('have.length','7')
        // cy.get("#formEmail").type("Adminacc")
        // .should('have.value','Adminacc')


    })
    it('explicit asserts',()=>{
        cy.visit("https://institute.leo1.in/institute/login")
        cy.get("input#formEmail").type("siddharth.bidwan@leo1.in")
        cy.get("input#formpassword").type("lw@123")
        cy.get("button[type='submit']").click()
        cy.get("div.col-lg-9").contains("Welcome, Siddharth Bidwan!")

        let expName= "Welcome, Siddharth Bidwan!"

        cy.get("div.col-lg-9").then( (x)=>{

            let actName =x.text()
            expect(actName).to.equal(expName)


        })
    })
})