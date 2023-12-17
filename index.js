const express = require("express");
const app = express();
require('dotenv').config
const cors = require("cors")
const { MongoClient, ServerApiVersion, LEGAL_TCP_SOCKET_OPTIONS,ObjectId } = require('mongodb');
const { register } = require("module");
const port = process.env.Port || 5000;

// middware
app.use(express.json())
app.use(cors())


const uri = "mongodb+srv://fullstack:B4qNiIUCPdLpawxQ@cluster0.ga6ydds.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {

    const NewUserCollection = client.db('AddUser').collection('Register');
    const NewloginCollection = client.db('Addlogin').collection('Login');
    // all user   login
    app.post('/Register', async (req, res) => {
        const newUser = req.body;
        console.log(newUser);
        const result = await NewUserCollection.insertOne(newUser);
        res.send(result);
       
      });


      // all user login create api 

      app.post('/Loing', async (req, res) => {
        const newLogin = req.body;
        console.log(newLogin);
        const result = await NewloginCollection.insertOne(newLogin);
        res.send(result);
       
      });



     // all new user get api 
      app.get('/Register', async (req, res) => {
        const cursor = NewUserCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // all login user get api 

    app.get('/Loing', async (req, res) => {
      const cursor = NewloginCollection.find();
      const result = await cursor.toArray();
      res.send(result);
  })


  


    // seller User
    app.get("/Register/sellers/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const register = await NewUserCollection.findOne(query);
      res.send(register);
    });
   

    // all byer 

    app.get("/Register/buyers/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const register = await NewUserCollection.findOne(query);
      res.send(register);
    });


    // seller speiced id 

    
   




   




 


   
  }
  finally {




  }
}
run().catch(error => console.log(error))



app.get('/', (req, res) => {
  res.send("Fullstack")


})





app.listen(port, () => {
  console.log(`Fullstack is running Port${port}`)
})




// user name fullstack
// user passoword B4qNiIUCPdLpawxQ