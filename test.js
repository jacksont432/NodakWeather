let csvToJson = require('convert-csv-to-json');

let objects = JSON.parse(csvToJson);
console.log("printing objects: " + objects);
for(let object in objects) {
    console.log(object);
}
