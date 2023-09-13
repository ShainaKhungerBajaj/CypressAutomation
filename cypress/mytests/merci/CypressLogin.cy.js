/// <reference types = "Cypress"/>

import login from "../../PageObjectModel/LoginPage"


describe ("Test Suite of Login" , ()=> {

    it("Test case of Login" , ()=> {

        cy.visit('https://automationexercise.com/login');

        
        let lp = new login();


        //lp.linkLogin();
        lp.EmailAddress();
        lp.LoginPassword();
        lp.LoginButton();
        




    })
})