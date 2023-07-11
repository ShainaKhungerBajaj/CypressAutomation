/// <reference types ="Cypress" />
/// <reference types ="cypress-iframe" />
 
import 'cypress-iframe'

describe('Frame Test', function() {
    it('My Test Suite', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()


        //cy.xpath('//button[@id="openwindow"]').click()

        
       


    })






})