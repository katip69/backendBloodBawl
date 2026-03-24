const express = require('express')
const app = express()
const routes = require('./routes/routes');


const PORT = process.env.PORT || 3000;

app.get('/',routes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});