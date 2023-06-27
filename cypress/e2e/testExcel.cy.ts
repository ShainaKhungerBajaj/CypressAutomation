import * as path from 'path'
import * as XLSX from 'xlsx'

describe('Testing Excel Data', () => {

    const xlsxPath: string = './cypress/downloads/URL.xlsx'
    const jsonName: string = 'path.basename(xlsxPath).replace('.xlsx' , '.json');
    
    before(() => {
        
        cy.task('convertXlsxToJson', xlsxPath)
    })

    beforeEach(() => {

        cy.fixture(jsonName).as('URLData')
    })

    it('Verify if file includes URL', () => {

        cy.get('@URLData').should('have.length', '1')
        cy.get('@URLData').then((URL) => {
            for (const URL of URL) {
                expect(URL['URL']).to.not.be.empty
    
            }
        })
    })

   


})