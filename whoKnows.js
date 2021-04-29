let csvToJson = require('convert-csv-to-json');

let fileInputName = './addresses.csv';
let fileoutputName = './output.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileoutputName);
