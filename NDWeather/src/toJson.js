let csvToJson = require('convert-csv-to-json');

let fileInputName = 'data.csv';
let fileOutputName = 'testData.json';

csvToJson.formatValueByType().generateJsonFileFromCsv(fileInputName, fileOutputName);
