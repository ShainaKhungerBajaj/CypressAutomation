const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for HTML reports
  projectId: "9ygkpq",
  reporterOptions: {
    reportDir: "mochawesome.html",
    overwrite: "true",
    html: "true",
    json: "true",
   timestamp: "mmddyyyy_HHMMss"
  },


 
  e2e: {
    
    setupNodeEvents(on, config) {
      on('task', {
        generateJSONFromExcel: async () => {
          // Logic for generating JSON from Excel goes here
          // You can use any libraries or methods to perform the conversion
          
          // Return the generated JSON data
          return config;
        }
        
      });
   },

   "pageLoadTimeout": 9000000,

   
   
   specPattern: 'cypress/mytests/merci/*.js',
   //specPattern: "**/PageObjectModel/**/*.@(js|json)"
  

      
    
    
    //require('cypress-mochawesome-reporter/plugin')(on)  // for HTML reports
  },

  

});
