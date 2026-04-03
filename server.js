import express from 'express'
import cors from 'cors'
import routes from './routes/routes.js'
import cookieParser from 'cookie-parser';

const app = express()




const PORT = process.env.PORT || 3000;




app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); // permite cualquier origen
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});