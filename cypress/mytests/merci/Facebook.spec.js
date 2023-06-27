
///<reference types="Cypress" />

const { visible } = require("ansi-colors")

describe('Test Suite of facebook framework', function(){
    it('Test case of facebook framework', function(){
        
        cy.visit("https://www.facebook.com")                // Launch website
        cy.get('a[title="English (UK)"]').click()           // Change the language

        cy.contains('Create new account').click()           // Create new account
        cy.get('input[name="firstname"]').type("Arhaan")
        cy.get('input[name="lastname"]').type("Bajaj")
        cy.get('input[name="reg_email__"]').type("arhaanbajaj@gmail.com")
        cy.get('input[name="reg_email_confirmation__"]').type("arhaanbajaj@gmail.com")
        cy.get('#password_step_input').type('Arhaan@12345')
        cy.get('#day').select('11')
        cy.get('#month').select('Apr')
        cy.get('#year').select('2016')
        cy.get('input[name="sex"][value="2"]').check()
        cy.get('[type="submit"][name="websubmit"]').click()

        cy.get('[data-testid="royal_email"]:visible').type("arhaanbajaj@gmail.com")         // Login
        cy.get('#passContainer').type('Arhaan@12345')
        cy.get('button[name="login"]').click()
        
        


        
           

        



    })



})