const { config } = require("bluebird");
const { initPlugin } = require ("cypress-plugin-snapshots/plugin");
const xlsx = require("xlsx");

module.exports = (on, config) =>{
    initPlugin(on, config);
    on("task", {
        generateJSONFromExcel :generateJSONFromExcel,
    });
    return config;
};

// Excel to JSON
function generateJSONFromExcel(agrs) {
    const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
    const ws = wb.Sheets[agrs.sheetName]; 
    return xlsx.utils.sheet_to_json(ws, { raw: false });
}