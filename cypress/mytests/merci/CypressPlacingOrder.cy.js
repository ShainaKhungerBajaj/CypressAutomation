///<reference types="Cypress" />
/// <reference types="Cypress-xpath" />

import HomePage from "../../PageObjectModel/HomePage";
import PlacingOrder from "../../PageObjectModel/PlacingOrder";




describe('Test Suite of Placing Order', ()=>{

    it('Test cases of Placing Order', ()=>{

        cy.visit("https://automationexercise.com")

        let orderplace = new PlacingOrder();
        let hp = new HomePage();
       

        orderplace.AddSleevelessDress();
        hp.ViewCart();
        orderplace.ViewCart();
        orderplace.ProceedToCheckout();
        orderplace.LoginLink();
        orderplace.Email();
        orderplace.Password();
        orderplace.Login();
        orderplace.CartLink();
        orderplace.ProceedToCheckout();
        orderplace.PlaceOrder();
        orderplace.NameOnCard();
        orderplace.CardNumber();
        orderplace.CVC();
        orderplace.ExpiryMonth();
        orderplace.ExpiryYear();
        orderplace.PayButton();
        orderplace.Continue();


    })

})

        
            