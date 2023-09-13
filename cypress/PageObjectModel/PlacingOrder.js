
class PlacingOrder
{

    Dress= ":nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn";
    Cart= '.modal-body > :nth-child(2) > a > u';   //".shop-menu > .nav > :nth-child(3) > a"
    Checkout= "Proceed To Checkout";
    linkLogin = '.modal-body > :nth-child(2) > a > u'; 
    Mail = '[data-qa="login-email"]';
    Pass = '[data-qa="login-password"]';
    LoginButton = '[data-qa="login-button"]';
    MenuCart = '.shop-menu > .nav > :nth-child(3) > a';
    Order= "Place Order";
    CardName= "//input[@name='name_on_card']";
    CardNo= "input[data-qa='card-number']";
    Cvc= "//input[@name='cvc']";
    ExpryMnth= "input[data-qa='expiry-month']";
    ExpryYr= "//input[@name='expiry_year']";
    Pay= "[data-qa='pay-button']";
    Contue= "Continue";

    
    AddSleevelessDress()
    {
        cy.get(this.Dress).click();
    }

    ViewCart()
    {
        const myLink1 = cy.get(this.Cart)            // a href tag code to click on login/Registration page
        // myLink1.invoke('attr', 'href').then(href => 
        // {
        //     expect(href).to.eq('/view_cart')
        //     cy.visit('https://automationexercise.com' + href)
        // })
    }

    ProceedToCheckout()
    {
        cy.log('Proceed To Checkout')
        cy.contains(this.Checkout).click().should('contain', 'Proceed To Checkout')
    }

    LoginLink()
    {
        cy.get(this.linkLogin).click();
    }

    Email()
    {
        cy.get(this.Mail).type('Kody_Yost26@gmail.com');
    }

    Password()
    {
        cy.get(this.Pass).type('Test@123');
    }

    Login()
    {
        cy.get(this.LoginButton).click();
    }

    CartLink()
    {
        cy.get(this.MenuCart).click();
    }


    PlaceOrder()
    {
        cy.log('Place Order')
        cy.contains(this.Order).click().should('have.text', 'Place Order')
    }

    NameOnCard()
    {
        cy.log('Name on Card')
        cy.xpath(this.CardName).type('Smaira').should('have.text', '') 
    }

    CardNumber()
    {
        cy.log('Card Number')
        cy.get(this.CardNo).type('5458745').should('have.class', 'form-control card-number')
    }

    CVC()
    {
        cy.log('CVC')
        cy.xpath(this.Cvc).type('544').should('have.class', 'form-control card-cvc')
    }

    ExpiryMonth()
    {
        cy.log('Expiry Month')
        cy.get(this.ExpryMnth).type('05').should('have.length', '1')
    }

    ExpiryYear()
    {
        cy.log('Expiry Year')
        cy.xpath(this.ExpryYr).type('2028').should('have.length', '1')
    }

    PayButton()
    {
        cy.log('Pay Button')
        cy.get(this.Pay).click().should('have.id', 'submit')
    }

    Continue()
    {
        cy.log('Continue')
        cy.contains(this.Contue).click().should('have.attr', 'href').and('have.string', '/')
    }

}

export default PlacingOrder;

