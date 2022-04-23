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




//iniciamos el servidor
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
