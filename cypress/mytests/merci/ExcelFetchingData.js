///<reference types ="Cypress" />


describe("Working with cy.task()", function() {
  it("URL Test - generateJSONFromExcel", function() {

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
    

    const excelFilePath = "cypress/downloads/Registration.xlsx";
    const sheetName = "Registration";

    cy.task("generateJSONFromExcel", { excelFilePath, sheetName  }).then((user) => {
          cy.get("#id_gender2").check();
          cy.get("#password").type(user.Password);
          cy.get('#days').select(user.Day);
        }
      );
      
    });
  
  });