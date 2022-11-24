//core module
//file system
const fs = require('fs');
const { default: test } = require('node:test');
// console.log(fs)

//menuliskan string ke file (Synchronous)
// fs.writeFileSync('test.txt', 'Hello World secara synchronous!')

fs.readFile('test.txt','utf-8',(err, data) => {
    if (err) throw err;
    fs.writeFileSync('test.txt', data+'\nHello World secara synchronous!')
})