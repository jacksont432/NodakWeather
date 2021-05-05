 let csvToJson = require('convert-csv-to-json');

 let fileInputName = 'data.csv';
 let fileOutputName = 'testData.json';

 csvToJson.formatValueByType().generateJsonFileFromCsv(fileInputName, fileOutputName);

// Fargo: line 1 - 5215
// Bismarck: 5126 - 10429
// Grand Forks: 10430 - 15643
// Minot: 15644 - 20505
// Williston: 20506 - 24872
// Dickinson: 24873 - 29745
// Jamestown: 29746 - 34970



