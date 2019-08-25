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
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch');
  // })

  // db.collection('Todos').find({
  //   _id:new ObjectID('5cdbe0f94eda5a6784637dd0')
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch');
  // })

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos Count: ${count}`);
  },(err)=>{
    console.log('Unable to fetch');
  })

  console.log('Hi');

  client.close();
})
