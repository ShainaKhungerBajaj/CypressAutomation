const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for HTML reports
  projectId: "spy5j8",

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

   //"pageLoadTimeout": 100000,

    specPattern: 'cypress/mytests/merci/*.js',
    //require('cypress-mochawesome-reporter/plugin')(on)  // for HTML reports
  },

});
