

describe('Xpathlocators',()=>{
    it('test-1',()=>{
        cy.visit("https://institute.leo1.in/institute/login")
        cy.xpath("//input[@placeholder='Enter your email']").type("siddharth.bidwan@leo1.in")
        cy.xpath("//input[@placeholder='Enter your password']").type("lw@123")
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//div[contains(@class,'col-lg-9')]").contains("Welcome, Siddharth Bidwan!")
    })
})