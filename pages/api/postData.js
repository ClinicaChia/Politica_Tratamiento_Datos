const fs = require("fs"),
request = require("request");
const { MongoClient } = require("mongodb");



export default  async function handler(req, res) {
  const { body } = req;
  const post = body.URI
  var data = post.replace(/^data:image\/\w+;base64,/, "");
  var buf = Buffer.from(data, "base64");
  fs.writeFile(`firmas/${body.Nombre}_${body.Cedula}_${body.Acepto}.png`, buf, function (err) {
    
  });

    const client = await new MongoClient(process.env.DB_URI);
    const db = await client.db("Matriz");
    const pacientes = await db.collection("politicas");
   
    const result = await pacientes.findOne({Cedula:body.Cedula});

    if(result){
   
      await pacientes.updateOne({Cedula:body.Cedula},{$set:
      
        {
          Nombre: body.Nombre,
          Cedula: body.Cedula,
          AceptoPolitica: body.Acepto["0"],
          AceptoMedico: body.Acepto["1"],
          Celular: body.Celular,
          FechaI: body.FechaI,
          FechaF: body.FechaS,
          Servicio: body.Servicio,
          URI : body.URI
      }
      
      });
    }
    else{
      const politica = await pacientes.insertOne({
        Nombre: body.Nombre,
        Cedula: body.Cedula,
        AceptoPolitica: body.Acepto["0"],
        AceptoMedico: body.Acepto["1"],
        Celular: body.Celular,
        FechaI: body.FechaI,
        FechaF: body.FechaS,
        Servicio: body.Servicio,
        URI : body.URI
    });
    }

    await client.close();
    
  res.status(200).json("Muchas Gracias por llenar la encuesta que tenga un excelente dia 😁");
}
