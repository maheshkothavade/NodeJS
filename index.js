const fs = require('fs');
const biodata = {
    name:"MAHESH",
    Contact:"9284916081",
    roll : 53,
    Division :'A'
}

///console.log(biodata.roll);
// When object to be converted in JSON use stringify or parse

// const JSONData = JSON.stringify(biodata);

// const objData = JSON.parse(JSONData);
// console.log(objData);

// challnege
// 1.convert it into JSON 👍
// 2.add into other file 👍
// 3.readfile
// 4.again convert json back to origin
// 5.console the object
const jsonData = JSON.stringify(biodata);

// fs.writeFile('json1.json',jsonData,(err)=>{
//      console.log('done');
// })
fs.readFile('json1.json',"utf-8",(err,data)=>{
    //console.log(data);
    const original = JSON.parse(data);
    console.log(original);
})

