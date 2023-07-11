//reference types="Cypress"/>


describe('My test Suite', ()=>{

    it('My Test Case', ()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        //visible as well as nonvisible products
        cy.get('.product').should('have.length', 5)
        
        //Visible Products
        cy.get('.product:visible').should('have.length', 4)

        //Parent Child Chaining
        cy.get('.products').find('.product').should('have.length', 4)

        //select index value like 2 out of 4 then contains that particular text and click over it
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('sk')   

        cy.get('.products').find('.product').each(($e1, index, $list) => {              //Iteration through an array like structure (each)

            const textVeg=$e1.find('h4.product-name').text()    //to hit particular text
            if(textVeg.includes('Cashews'))                     // to find sub-text
            {
                $e1.find('button').click()
            }
        })


        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')


        //this is to print in test runner logs
        cy.get('.brand').then(function(logoelement)                 //when u are throughing any variable then use promise (then) so that cypress can understand and resolve the variable
        {
            cy.log(logoelement.text())

        })

    })
    


})