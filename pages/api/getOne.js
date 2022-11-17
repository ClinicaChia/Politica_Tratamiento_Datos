const { MongoClient } = require("mongodb");

export default async function handler(req, res) {
    
    const { cedula } = req.query

   const client = await new MongoClient(process.env.DB_URI)
   const db = await client.db("Matriz")
   const pacientes = await db.collection("politicas")

   const query = await pacientes.findOne({ Cedula:cedula })

    res.status(200).json({ user: query})
  }