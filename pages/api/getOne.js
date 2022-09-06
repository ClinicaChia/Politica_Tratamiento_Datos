const { MongoClient } = require("mongodb");
const mongoURI = "mongodb://173.16.10.151:27017";
export default async function handler(req, res) {
    
    const { cedula } = req.query
    console.log(cedula)
   const client = await new MongoClient(mongoURI)
   const db = await client.db("Matriz")
   const pacientes = await db.collection("politicas")

   const query = await pacientes.findOne({ Cedula:cedula })

    res.status(200).json({ user: query})
  }