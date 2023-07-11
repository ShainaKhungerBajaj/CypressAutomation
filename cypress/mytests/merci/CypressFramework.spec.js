///<reference types="Cypress" />
/// <reference types="Cypress-xpath" />

describe('Test Suite Cypress framework', function(){
        
        it('Positive Test case of Cypress Framework', function(){

        cy.visit('https://automationexercise.com')

        cy.log("Click on the + icon")
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()

        cy.log ("Click on the Dress icon")
        cy.contains("Dress").click().should('have.text', 'Dress ')

        cy.log ('View Product of particular item')
        cy.contains('View Product').click().should('have.text', 'View Product')

        const productItem = 'Sleeveless Dress';
        cy.log(`Add ${productItem} to cart`);
        cy.xpath('//button[@type="button"]').click().should('have.class', 'btn btn-default cart' )

        cy.log ('Continue Shopping')
        cy.xpath('//button[contains(text(),"Continue Shopping")]').click().should('have.attr', 'class')

        cy.log('Madame')
        cy.contains('Madame').click().should('have.attr', 'href', '/brand_products/Madame')

        cy.log('Enlarge Product Image')
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > img').should('have.attr', 'src').and('have.string', '/get_product_picture/38')
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click().should('have.attr', 'href', '/product_details/38')

        
        cy.log('Expand the quantity')
        const numClicks = 3;                         // Number of times to click the up arrow with loop
        for (let i = 0; i < numClicks; i++) 
        {
            cy.get('input[name="quantity"]').click().type('{upArrow}')
        }

        const productName = 'Pink Rose Madame';
        cy.log(`Add ${productName} to cart`);
        cy.xpath('//button[@class="btn btn-default cart"]').click().should('have.attr', 'type')

        cy.log('View Cart')
        cy.contains("View Cart").click().should('have.attr', 'href').and('have.string', '/view_cart')

        cy.log('Proceed To Checkout')
        cy.contains("Proceed To Checkout").click().should('have.css', 'color', 'rgb(255, 255, 255)')

        cy.log('Login')

        const myLink = cy.get('.modal-body > :nth-child(2) > a > u')          // a href tag code to click on login/Registration page
        myLink.invoke('attr', 'href').then(href => 
        {
                cy.visit('https://automationexercise.com/login')
        })
        
        const fakeEmail = 'Random Email';
        cy.log(`Generate ${fakeEmail} for Login`);

        const faker = require('faker');                                         // Random Email Generation
        function getRandomEmail() 
        {
        const randomEmail = faker.internet.email();
        return randomEmail;
        }   

        const randomEmail = getRandomEmail();                                   // Usage

        cy.wrap(randomEmail).should('match', /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
        
        cy.log('Type Name')
        cy.get('input[name="name"]').type('Smaira').should('have.attr', 'name')

        const randomail = 'Random mail';
        cy.log(`Type ${randomail} for SignUp`);
        cy.get('input[data-qa="signup-email"]').type(randomEmail)

        cy.log('sign Up')
        cy.get('button[data-qa="signup-button"]').click().should('have.text', 'Signup')

        cy.log('Select 1 option')
        cy.get('input[value="Mrs"]').check().should('be.checked')                                       // Radio Button

        const password = 'Password';
        cy.log(`Type ${password} for Registration`);
        cy.xpath('//input[@id="password"]').type('Test@123').should('have.id', 'password')

        cy.log('Select Day')
        cy.get('#days').select('4').should('have.value','4')                                            // Drop down list
      
        cy.log('Select Month')
        cy.get('#months').select('February').should('have.value','2')

        cy.log('Select Year')
        cy.get('#years').select('2005').should('contain','2005')

        cy.log('Select Checkbox')
        cy.get('input[id="optin"]').check().should('be.checked')                                        // Checkbox

        cy.log('First Name')
        cy.xpath('//input[@name="first_name"]').type('Smaira').should('have.value', 'Smaira')

        cy.log('Last Name')
        cy.get('[data-qa="last_name"]').type('Khan').should('have.value', 'Khan')

        cy.log('Address')
        cy.xpath('//input[@id="address1"]').type('Down Town').should('have.value', 'Down Town')

        cy.log('Country')
        cy.get('[data-qa="country"]').select('Singapore').should('have.value', 'Singapore')

        cy.log('State')
        cy.xpath('//input[@data-qa="state"]').type('Asia').should('have.id', 'state')

        cy.log('City')
        cy.get('#city').type('East Region').should('have.id', 'city')

        cy.log('Zipcode')
        cy.get('#zipcode').type('179098').should('have.id', 'zipcode')

        cy.log('Mobile Number')
        cy.xpath('//input[@id="mobile_number"]').type('+17854626').should('have.id', 'mobile_number')

        const createAccount = 'CreateAccount ';
        cy.log(`Click ${createAccount} for Registration`);
        cy.contains('Create Account').click().should('contain', 'Create Account')

        cy.log('Continue Button')
        cy.get('[data-qa="continue-button"]').click().should('have.attr', 'href').and('have.string', '/')

        cy.log('View Cart')
        const myLink1 = cy.get('.shop-menu > .nav > :nth-child(3) > a')            // a href tag code to click on login/Registration page
        myLink1.invoke('attr', 'href').then(href => 
        {
                expect(href).to.eq('/view_cart')
                cy.visit('https://automationexercise.com' + href)
        })

        
        cy.log('Proceed To Checkout')
        cy.contains('Proceed To Checkout').click().should('contain', 'Proceed To Checkout')

        cy.log('Place Order')
        cy.contains('Place Order').click().should('have.text', 'Place Order')

        cy.log('Name on Card')
        cy.xpath('//input[@name="name_on_card"]').type('Smaira').should('have.text', '')                 // Payment

        cy.log('Card Number')
        cy.get('input[data-qa="card-number"]').type('5458745').should('have.class', 'form-control card-number')

        cy.log('CVC')
        cy.xpath('//input[@name="cvc"]').type('544').should('have.class', 'form-control card-cvc')

        cy.log('Expiry Month')
        cy.get('input[data-qa="expiry-month"]').type('05').should('have.length', '1')

        cy.log('Expiry Year')
        cy.xpath('//input[@name="expiry_year"]').type('2028').should('have.length', '1')

        cy.log('Pay Button')
        cy.get('[data-qa="pay-button"]').click().should('have.id', 'submit')

        cy.log('Continue')
        cy.contains('Continue').click().should('have.attr', 'href').and('have.string', '/')

    })
    
         it('Negative Test case of Cypress Framework', function(){

            cy.visit('https://automationexercise.com')

            cy.log('Login')
            const myLink = cy.get('.modal-body > :nth-child(2) > a > u')            // a href tag code to click on login/Registration page
            myLink.invoke('attr', 'href').then(href => 
            {
                    cy.visit('https://automationexercise.com/login')
            })

            cy.log('Invalid Email')
            cy.xpath('//input[@data-qa="login-email"]').type('bocave9429@carpetra.com').should('have.text', '')

            cy.log('Invalid Password')
            cy.xpath('//input[@placeholder="Password"]').type('abc@1234').should('have.text', '')

            cy.log('Click login button')
            cy.xpath('//button[@data-qa="login-button"]').click().should('have.class', 'btn btn-default')

            cy.log('Error message of Invalid Email & Password')
           


        })

             
    
})