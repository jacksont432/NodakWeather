let csvToJson = require('convert-csv-to-json');

let json = csvToJson.formatValueByType().getJsonFromCsv('addresses.csv');
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}