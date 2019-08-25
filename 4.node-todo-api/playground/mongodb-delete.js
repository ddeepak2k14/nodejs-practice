//const MongoClient = require('mongodb').MongoClient;
//ES-6 Object Destructing , pulling properties from object
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/tododb', { useNewUrlParser: true } , (err,client) => {
  if(err){
    return console.log('Unable to  connect to MongoDB',err);
  }
  console.log('Connectd To MongoDB Server');
  const db = client.db('tododb');
  //deleteMany
  //deleteOne
  //findOneDelete

  // db.collection('Todos').deleteMany({
  //   text:"something to do"
  // }).then((result)=>{
  //   console.log(`Deleted element from Todos: ${result.deletedCount}`);
  // },(err)=>{
  //   console.log('Unable to delete');
  // })

  // db.collection('Todos').deleteOne({
  //   text:"something to do"
  // }).then((result)=>{
  //   console.log(`Deleted element from Todos: ${result.deletedCount}`);
  // },(err)=>{
  //   console.log('Unable to delete');
  // })

  db.collection('Todos').findOneAndDelete({
    completed:true
  }).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('Unable to delete');
  })

  client.close();
})
