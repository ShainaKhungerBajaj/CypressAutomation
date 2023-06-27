const { defineConfig } = require("cypress");
import { writeFileSync } from 'fs';
import * as path from 'path'
import * as XLSX from 'xlsx'


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',        // for html reports
  //defaultCommandTimeout: 3000,


  projectId: "spy5j8",
  e2e: 
  {
    setupNodeEvents(on, config) 
    {  
      on('task', {
        ConvertXlsxToJson(filePath) {
          const workbook = XLSX.readFile(filePath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)

          const fileName = path.basename(filePath, '.xlsx')
          const jsonFilePath ='./cypress/fixtures/${fileName}.json'
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2))
          return null
        }
      })
    },
  
  specPattern:'cypress/mytests/merci/*.js',
    
   
  //require('cypress-mochawesome-reporter/plugin')(on);    // for html reports

  
  },
});

