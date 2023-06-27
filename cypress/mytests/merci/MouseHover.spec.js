const { includes } = require("lodash")

describe('MouseHover Test', function() {

    it ('Test Suite', function(){


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // cy.get('.mouse-hover-content').invoke('show')       // mousehover with jquery (invoke)
        cy.contains('Top').click({force:true})                  // forcefully click on hidden element {force:true}
        cy.url().should('include', 'top')



    })

})