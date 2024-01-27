describe('test1',()=>{

    it('Postive case',()=>{
        cy.visit("https://institute.leo1.in/institute/login")
        cy.get("input#formEmail").type("siddharth.bidwan@leo1.in")
        cy.get("input#formpassword").type("lw@123")
        cy.get("button[type='submit']").click()
        cy.get("div.col-lg-9").contains("Welcome, Siddharth Bidwan!")
        
    })
    it('Negative case',()=>{
        cy.visit("https://institute.leo1.in/institute/login")
        cy.get("input#formEmail").type("siddharth.bidwan@leo1.in")
        cy.get("input#formpassword").type("lw@123")
        cy.get("button[type='submit']").click()
        cy.get("div.col-lg-9").contains("Exit, Siddharth Bidwan!")

    })

}
)