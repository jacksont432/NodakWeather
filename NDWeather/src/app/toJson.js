let csvToJson = require('convert-csv-to-json');

let fileInputName = 'myInputFile.csv'; 
let fileOutputName = 'weatherData.json';

csvToJson.formatValueByType().generateJsonFileFromCsv(fileInputName, fileOutputName);
