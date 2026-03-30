const express = require('express')
const app = express()
const routes = require('./routes/routes');
const cors = require("cors")


const PORT = process.env.PORT || 3000;




app.use(cors()); // permite cualquier origen
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});