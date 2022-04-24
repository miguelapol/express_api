const express = require('express');
const app = express();
app.use(express.json());
const port=3000;

//creamos un endpoint para obtener todos los usuarios
app.get('/v1/explorers', (req, res) => {
    console.log(`Api explorers GET ALL request ${new Date()}`);

    const explorer1 = {
        id: 1,
        name: 'Explorer 1'
    }
    const explorer2 = {
        id: 2,
        name: 'Explorer 2'
    }
    const explorer3 = {
        id: 3,
        name: 'Explorer 3'
    }
    const explorers=[explorer1, explorer2, explorer3];
    //aqui enviamos la respuesta usamos como codigo de estado 200

    res.status(200).send(explorers);
});
//creamos un endpoint para obtener un usuario
app.get('/v1/explorers/:id', (req, res) => {
          const explorer1 = {
            id: 1,
            name: 'Explorer 1'
          }
            //aqui enviamos la respuesta usamos como codigo de estado 200
            res.status(200).json(explorer1);
        });   
//creamos un endpoint para crear un usuario usando POST para crear un usuario
app.post('/v1/explorers', (req, res) => {
    console.log(`Api explorers POST request ${new Date()}`);
    const requestBody = req.body;//para metros del ciente
    res.status(201).json({message:"Created"});
})

//iniciamos el servidor
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
