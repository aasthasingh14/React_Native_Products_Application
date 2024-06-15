import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import bodyParser  from 'body-parser';
import apiRouter from './routes/api.js';
import { connect} from 'mongoose';

//express
const app = express();

//Cross-origin resource sharing (CORS) - pull data from external APIs that are public or authorized.
app.use(cors())

//middleware
app.use(bodyParser.json());

//routes
app.use('/api', apiRouter);

connect(process.env.MONGO_URI, {dbName: 'product'}).then(() => {
    console.log('Mongoose connect success.')
}).catch((err) => {
    console.error('Mongoose connect failed.');
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
