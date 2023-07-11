/// <reference types="Cypress" />

import HomePage from "../PageObjects/HomePage.cy"
import ProductPage from "../PageObjects/ProductPage.cy"

describe('My Framework Test', function()
{

    // before(function () {
    //     cy.fixture('example').then(function (data) {
    //       this.data = data
        
    //     })
    // })

  it('My Test Suite', function(){
    const homePage=new HomePage()
    const productPage=new ProductPage()

     cy.visit("https://rahulshettyacademy.com/angularpractice/")

     //cy.get(':nth-child(1) > .form-control').type("Shaina")                    // type name using CSS
    
     homePage.getEditBox().type("Arhaan")                // Type name using nth child   .type(this.data.name)   // .type("Arhaan")
     homePage.getGender().select("Male")                              // select from drop down list   .type(this.data.gender) //.type("Male")

     //cy.pause()                                                   // for debugging                    
     
     homePage.getTwoWayDataBinding().should('have.value', 'Arhaan')
     homePage.getEditBox().should('have.attr', 'minlength')
     homePage.getEntrepreneaur().should('be.disabled')
     homePage.getshopTab().click()

     cy.selectProduct('Nokia Edge')         //1 way to select the item
     cy.selectProduct('Blackberry')

    //  this.data.productName.forEach(function(element){            // for multiple options select rest code in example.json
        
    //   cy.selectProduct(element)

    //  });

     productPage.checkOutButton().click()
     cy.contains('Checkout').click()
     cy.get('#country').type('India')
     cy.get('.suggestions > ul > li > a').click()

     
     


     
    })





})