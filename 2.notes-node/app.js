console.log('starting application');
//  when the variable is not reassigned & let when the variable is reassigned
const fs = require('fs');//fetch all the content of fs module
const os = require('os');
var user = os.userInfo();
const notes= require('./notes.js')//to include our own files
const _ = require('lodash');//require used for third party library, first search for core module then checks for node modules
var note = notes.addNote();
var result = notes.addNumber(2,3);
console.log(result);
console.log(_.isString('deepak'));
console.log(_.isString(true));
console.log(_.uniq([1,2,3,'deep','deep','deep']))//removes duplicates
// console.log(user);

//fs.appendFile('greeting.txt','HellowWorld !'); // if gives error try below options

//Option 1
// fs.appendFileSync('greeting.txt','HellowWorld !',function(err){
//   if(err){
//     console.log('Error writing to file');
//   }
// });

//Option 2
fs.appendFileSync('greeting.txt',`Hello! ${user.username} you are of age ${notes.age}`);

//var scope is visible to whole function evenr if used in block but let scope is visible in it's block only
// testVarLet1();
// testVarLet2();
//
// function testVarLet1(){
//   for (var i = 0 ;i<=5;i++){
//   console.log(`var ${i}`);
// }
// console.log(`final var ${i}`);
// }
//
// function testVarLet2() {
//   for (let i = 0 ;i<=5;i++){
//   console.log(`let ${i}`);
// }
// //console.log(`final let ${i}`); not visible here
// }


var commandLineArg = process.argv[2];//arg startes from 3rd 1st two is node.exe and app.js path
console.log(commandLineArg);
