
import SignUp from "../../PageObjectModel/SignupPage"


describe ('Test suite of SignUp page', ()=>{

    it('Test cases of Signup page', ()=>{

        cy.visit('https://automationexercise.com/signup')

        let sp = new SignUp();
        sp.NewUserSignUp();
        sp.RamdomEmail();
        sp.SignUp();
        sp.SelectGender();
        sp.Password();
        sp.SelectDay();
        sp.SelectMonth();
        sp.SelectYear();
        sp.SelectCheckbox();
        sp.FirstName();
        sp.LastName();
        sp.Address();
        sp.Country();
        sp.State();
        sp.City();
        sp.Zipcode();
        sp.MobileNumber();
        sp.CreateAccount();
        sp.ContinueButton();

        

    })
})