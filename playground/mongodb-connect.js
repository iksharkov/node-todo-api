// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>  {
    if(err) {
      return  console.log('Unable to connect mongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // },(err, result)=> {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ivan',
    //     age: 28,
    //     location: 'Plovdiv'
    // },(err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});