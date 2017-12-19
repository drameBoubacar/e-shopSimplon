import express from 'express';
import config from './config';
import routes from './routes/route';


const app = express()


app.use('/', routes)

app.listen(config.port, ()=>{
    console.log(`server running ${config.port}`);
})