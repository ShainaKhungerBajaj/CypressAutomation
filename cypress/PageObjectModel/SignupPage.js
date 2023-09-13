

class SignUp {

    NUSignUp= "input[name='name']";
    RandmMail= "input[data-qa='signup-email']";
    ClicksignUp= "button[data-qa='signup-button']";
    Gender= "input[value='Mrs']";
    Pass= "//input[@id='password']";
    Day= "#days";
    Month= "#months";
    Year= "#years";
    CheckBox= "input[id='optin']";
    FstName= "//input[@name='first_name']";
    LstName= "[data-qa='last_name']";
    Addrs= "//input[@id='address1']";
    Cntry= "[data-qa='country']";
    Stat= "//input[@data-qa='state']";
    Cty= "#city";
    Zpcode= "#zipcode";
    Mobile= "//input[@id='mobile_number']";
    CrtAcct= "Create Account";
    Continue= "[data-qa='continue-button']";




    NewUserSignUp()
    {
        cy.get(this.NUSignUp).type('Smaira').should('have.attr', 'name')

    }

    RamdomEmail()
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
        cy.log(`Type ${randomail} for SignUp`);
        cy.get(this.RandmMail).type(randomEmail)
    }

    SignUp()
    {
        cy.get(this.ClicksignUp).should('have.text', 'Signup').click()
    }

    SelectGender()
    {
        cy.get(this.Gender).check().should('be.checked')
    }

    Password()
    {
        const password = 'Password';
        cy.log(`Type ${password} for Registration`);
        cy.xpath(this.Pass).type('Test@123').should('have.id', 'password')
    }

    SelectDay()
    {
        cy.log('Select Day')
        cy.get(this.Day).select('4').should('have.value','4')
    }

    SelectMonth()
    {
        cy.log('Select Month')
        cy.get(this.Month).select('February').should('have.value','2')
    }

    SelectYear()
    {
        cy.log('Select Year')
        cy.get(this.Year).select('2005').should('contain','2005')
    }

    SelectCheckbox()
    {
        cy.log('Select Checkbox')
        cy.get(this.CheckBox).check().should('be.checked')
    }

    FirstName()
    {   
        cy.log('First Name')
        cy.xpath(this.FstName).type('Smaira').should('have.value', 'Smaira')
    }

    LastName()
    {
        cy.log('Last Name')
        cy.get(this.LstName).type('Khan').should('have.value', 'Khan')
    }

    Address()
    {
        cy.log('Address')
        cy.xpath(this.Addrs).type('Down Town').should('have.value', 'Down Town')
    }

    Country()
    {
        cy.log('Country')
        cy.get(this.Cntry).select('Singapore').should('have.value', 'Singapore')
    }

    State()
    {
        cy.log('State')
        cy.xpath(this.Stat).type('Asia').should('have.id', 'state')
    }

    City()
    {
        cy.log('City')
        cy.get(this.Cty).type('East Region').should('have.id', 'city')
    }

    Zipcode()
    {
        cy.log('Zipcode')
        cy.get(this.Zpcode).type('179098').should('have.id', 'zipcode')
    }

    MobileNumber()
    {
        cy.log('Mobile Number')
        cy.xpath(this.Mobile).type('+17854626').should('have.id', 'mobile_number')
    }

    CreateAccount()
    {
        const createAccount = 'CreateAccount ';
        cy.log(`Click ${createAccount} for Registration`);
        cy.contains(this.CrtAcct).click().should('contain', 'Create Account')
    }

    ContinueButton()
    {
        cy.get(this.Continue).click().should('have.attr', 'href').and('have.string', '/')
    }
}


export default SignUp;