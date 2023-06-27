///reference types= "Cypress" />

describe('Checkbox Test', function() {

    it ('Test Suite', function(){

        // Checkboxes

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')   // checkbox checked and also verify the option
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')                         //unchecked that selected checkbox
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])                       // multiple checkbox selection 
       
        // Static Dropdown

        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic Dropdown

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()==="India")
            {
                $e1.click()
            }

        })

        //autocomplete

        cy.get('#autocomplete').should('have.value', 'India')

        // Visible and Hide elements

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()                         // click on hide
        cy.get('#displayed-text').should('not.be.visible')      // not be visible because we want to hide it
        cy.get('#show-textbox').click()                         // click on show
        cy.get('#displayed-text').should('be.visible')          // be visible because we want to show it

        
        // Radio Buttons
        
        cy.get('[value="radio2"]').check().should('be.checked')
    
    
    
    })


})