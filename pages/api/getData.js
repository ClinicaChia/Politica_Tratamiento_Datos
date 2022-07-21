import { MongoClient,ObjectId } from "mongodb";


export default  async function handler(req, res) {
    const {body} = req;
    const {ID} = body;
    console.log(ID )
    const client  = await MongoClient.connect("mongodb://173.16.10.151:27017");
    const db = await client.db("Matriz");
    const pacientes = await db.collection("politicas");
    var oid = ID?new ObjectId(ID):new ObjectId("000000000000");
  
    const query = await pacientes.find({_id: {"$gt": oid}}).limit(20).toArray();

    console.log(query.length);

    await client.close();

    res.status(200).json({query});
}