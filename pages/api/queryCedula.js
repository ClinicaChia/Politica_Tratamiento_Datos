const { MongoClient } = require("mongodb");
const mongoURI = "mongodb://173.16.10.151:27017";
export default async function handler(req, res) {
    // extract params
    const { Cedula } = req.query
    const client = await new MongoClient(mongoURI)
    const db = await client.db("Matriz")
    const pacientes = await db.collection("politicas")

    const query = await pacientes.findOne({ Cedula })
    const hasId = query? true : false
   

    res.status(200).json({ hasId })
  }
  