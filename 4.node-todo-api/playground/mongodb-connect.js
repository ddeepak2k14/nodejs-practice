//const MongoClient = require('mongodb').MongoClient;
//ES-6 Object Destructing , pulling properties from object
const {MongoClient,ObjectID} = require('mongodb');
console.log(new ObjectID());
MongoClient.connect('mongodb://localhost:27017/tododb', { useNewUrlParser: true } , (err,client) => {
  if(err){
    return console.log('Unable to  connect to MongoDB',err);
  }
  console.log('Connectd To MongoDB Server');
  const db = client.db('tododb');
  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todos');
  //   }
  //
  //   console.log('Todo Added Sucessfully');
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // });
  // db.collection('Users').insertOne({
  //   name:'Deepak',
  //   age:26,
  //   location:'Noida'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to add user');
  //   }
  //   console.log('User added sucessfully');
  //   console.log(result.ops[0]._id);
  //   console.log(JSON.stringify(result.ops));
  // })
  // client.close();
})
