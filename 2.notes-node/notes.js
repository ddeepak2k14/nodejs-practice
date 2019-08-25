console.log('Starting notes Application');
//console.log(module); // module oject is available to all files
module.exports.age = 25;
module.exports.addNote = () => { //error function 
  return 'Notes added';
}
module.exports.addNumber = (num1,num2 )=>{
  const result =  num1+num2;
  return result;
}
