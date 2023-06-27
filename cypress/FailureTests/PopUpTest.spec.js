/// reference types  ="Cypress" />

describe('Popup Test', function (){

    it('Test Suite', function(){

        // Popup / Alerts

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()             // alert popup and automatically it select ok
        cy.get('[value="Confirm"]').click()     // confirm popup and automatically it select ok

        //window:alert                          // confirm whether it is opening the popup and select ok
        
        cy.on('window:alert',(str)=> 
        {
             // Mocha   
            expect(str).to.equal('Hello , share this practice page and share your knowledge')     // alert pop up

        })

        //window:confirm

        cy.on('window:confirm',(str)=> 
        {
             // Mocha   
            expect(str).to.equal('Hello , Are you sure you want to confirm?')     // confirm pop up

        })

         cy.get('#opentab').invoke('removeAttr', 'target').click()       // child tab that open in same window

         cy.url().should('include', 'rahulshettyacademy')
         cy.go('back')


    })


})