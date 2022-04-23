const express = require('express');
const app = express();
const port=3000;

//iniciamos el servidor
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});