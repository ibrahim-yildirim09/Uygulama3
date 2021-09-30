const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri = YOUR_CONNECTION_STRING
var client;
var mongoClient = new MongoClient(uri, { reconnectTries : 
Number.MAX_VALUE, autoReconnect : true, useNewUrlParser : true })
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})

app.get('/todo', (req, res) => {
    const cols = client.db("deneme").collection("todos")
  cols.find().toArray(function (err, results) {
      if (err) {
        console.log(err)
        res.send([])
        return
      }
      
      res.send(results)
    })
  })

  app.post('/addTodo', (req, res) => {
    const col = client.db('deneme').collection('todos')
    var todo = req.body.todo;
    col.insertOne({title: todo}, function (err, results) {
      if (err) {
        console.log(err);
        res.send('');
        return
      }
      res.send(results.ops[0]);
    })
  })