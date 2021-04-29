let csvToJson = require('convert-csv-to-json');

let fileInputName = 'testytest.csv'; 
let fileOutputName = 'testytest.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);