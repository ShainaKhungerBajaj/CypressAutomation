///<reference types="Cypress" />
/// <reference types="Cypress-xpath" />

import * as path from 'path'

describe('Test Suite Cypress framework', function(){
        
        it('Positive Test case of Cypress Framework', function(){

        cy.visit('https://automationexercise.com')

        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.contains("Dress").click().should('have.text', 'Dress ')
        cy.contains("View Product").click().should('have.text', 'View Product')
        cy.xpath('//button[@type="button"]').click().should('have.class', 'btn btn-default cart' )
        cy.xpath('//button[contains(text(),"Continue Shopping")]').click().should('have.attr', 'class')

        cy.contains('Madame').click().should('have.attr', 'href', '/brand_products/Madame')
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > img').should('have.attr', 'src').and('have.string', '/get_product_picture/38')
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click().should('have.attr', 'href', '/product_details/38')

        const numClicks = 3;                         // Number of times to click the up arrow with loop
        for (let i = 0; i < numClicks; i++) 
        {
            cy.get('input[name="quantity"]').click().type('{upArrow}')
        }

        cy.xpath('//button[@class="btn btn-default cart"]').click().should('have.attr', 'type')
        cy.contains("View Cart").click().should('have.attr', 'href').and('have.string', '/view_cart')

        cy.contains("Proceed To Checkout").click().should('have.css', 'color', 'rgb(255, 255, 255)')

        const myLink = cy.get('.modal-body > :nth-child(2) > a > u')          // a href tag code to click on login/Registration page
        myLink.invoke('attr', 'href').then(href => 
        {
                cy.visit('https://automationexercise.com/login')
        })
        

        const faker = require('faker');                                         // Random Email Generation
        function getRandomEmail() 
        {
        const randomEmail = faker.internet.email();
        return randomEmail;
        }   

        const randomEmail = getRandomEmail();                                   // Usage

        cy.wrap(randomEmail).should('match', /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
        

        cy.get('input[name="name"]').type('Smaira').should('have.attr', 'name')
        cy.get('input[data-qa="signup-email"]').type(randomEmail)
        cy.get('button[data-qa="signup-button"]').click().should('have.text', 'Signup')


        cy.get('input[value="Mrs"]').check().should('be.checked')                                       // Radio Button
        cy.xpath('//input[@id="password"]').type('Test@123').should('have.id', 'password')
        cy.get('#days').select('4').should('have.value','4')                                            // Drop down list
        cy.get('#months').select('February').should('have.value','2')
        cy.get('#years').select('2005').should('contain','2005')
        cy.get('input[id="optin"]').check().should('be.checked')                                        // Checkbox

        cy.xpath('//input[@name="first_name"]').type('Smaira').should('have.value', 'Smaira')
        cy.get('[data-qa="last_name"]').type('Khan').should('have.value', 'Khan')
        cy.xpath('//input[@id="address1"]').type('Down Town').should('have.value', 'Down Town')
        cy.get('[data-qa="country"]').select('Singapore').should('have.value', 'Singapore')
        cy.xpath('//input[@data-qa="state"]').type('Asia').should('have.id', 'state')
        cy.get('#city').type('East Region').should('have.id', 'city')
        cy.get('#zipcode').type('179098').should('have.id', 'zipcode')
        cy.xpath('//input[@id="mobile_number"]').type('+17854626').should('have.id', 'mobile_number')
        cy.contains('Create Account').click().should('contain', 'Create Account')
        cy.get('[data-qa="continue-button"]').click().should('have.attr', 'href').and('have.string', '/')


        const myLink1 = cy.get('.shop-menu > .nav > :nth-child(3) > a')            // a href tag code to click on login/Registration page
        myLink1.invoke('attr', 'href').then(href => 
        {
                expect(href).to.eq('/view_cart')
                cy.visit('https://automationexercise.com' + href)
        })

        
        cy.contains('Proceed To Checkout').click().should('contain', 'Proceed To Checkout')
        cy.contains('Place Order').click().should('have.text', 'Place Order')


        cy.xpath('//input[@name="name_on_card"]').type('Smaira').should('have.text', '')                                  // Payment
        cy.get('input[data-qa="card-number"]').type('5458745').should('have.class', 'form-control card-number')
        cy.xpath('//input[@name="cvc"]').type('544').should('have.class', 'form-control card-cvc')
        cy.get('input[data-qa="expiry-month"]').type('05').should('have.length', '1')
        cy.xpath('//input[@name="expiry_year"]').type('2028').should('have.length', '1')
        cy.get('[data-qa="pay-button"]').click().should('have.id', 'submit')

        cy.contains('Continue').click().should('have.attr', 'href').and('have.string', '/')

    })
    
         it('Negative Test case of Cypress Framework', function(){

            cy.visit('https://automationexercise.com')

            const myLink = cy.get('.modal-body > :nth-child(2) > a > u')            // a href tag code to click on login/Registration page
            myLink.invoke('attr', 'href').then(href => 
            {
                    cy.visit('https://automationexercise.com/login')
            })

            cy.xpath('//input[@data-qa="login-email"]').type('bocave9429@carpetra.com').should('have.text', '')
            cy.xpath('//input[@placeholder="Password"]').type('abc@1234').should('have.text', '')
            cy.xpath('//button[@data-qa="login-button"]').click().should('have.class', 'btn btn-default')
           


        })

             
    
})