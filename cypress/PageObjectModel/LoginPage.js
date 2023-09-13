
class login
{
    Email = '[data-qa="login-email"]';
    PassLogin = '[data-qa="login-password"]'; 
    ClickLogin = '[data-qa="login-button"]';
   
    

    
    
    EmailAddress()
    {
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

        const randomail = 'Random mail';
        cy.log(`Type ${this.Emailail} for Login`);
        cy.get(this.Email).type(randomEmail)
    }

    LoginPassword()
    {
        const password = 'Password';
        cy.log(`Type ${password} for Login`);
        cy.get(this.PassLogin).type('Test@123')
    }

    LoginButton()
    {
        cy.get(this.ClickLogin).click()
    }



}

export default login;