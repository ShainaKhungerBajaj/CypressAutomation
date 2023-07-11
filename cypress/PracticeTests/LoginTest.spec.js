/// <reference types="Cypress" />

describe('Test Suite Cypress framework', function(){
    it('Test case of Cypress Framework', function(){


        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.xpath('//input[@placeholder="Username"]').type('Admin')
        // cy.xpath('//input[@placeholder="Password"]').type('admin123')
        // cy.xpath('//button[@type="submit"]').click()



        cy.visit('http://automationpractice.pl/index.php')
        cy.xpath('//a[@title="Women"]').click()

        

// describe('free crm app' , ()=>{
    
//     it('login test' , ()=>{

//         cy.visit('http://classic.crmpro.com/')

//         cy.get('input[name="username"]').type('shaina')

//         cy.get('input[name="password"]').type('Arhaan@1122')

//         cy.get('input[type="Login"]').click()

//         cy.title().should('have', 'CRMPRO')

//         cy.get('Contacts').click()


    })
    
})