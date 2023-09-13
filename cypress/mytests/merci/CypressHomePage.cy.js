///<reference types="Cypress" />
/// <reference types="Cypress-xpath" />

import Home from "../../PageObjectModel/HomePage";


    describe('Test Suite of Home Page' , ()=>{
        it('Test cases of Home Page', ()=>{

            cy.visit('https://automationexercise.com');

            const Hp = new Home();


            Hp.ExpandWomenIcon();
            Hp.DressIcon();
            Hp.ViewProdIcon();
            Hp.SleevelessDress();
            Hp.ContinueShopping();
            Hp.Madame();
            Hp.EnlargeProductImage();
            Hp.IncreaseQuantity();
            Hp.PinkRoseMadame();
            Hp.ViewCart();
            Hp.ProceedToCheckout();
            
        })
    })