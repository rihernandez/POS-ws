import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import{createConnection} from 'typeorm';

export class App{

    public app : Application;

    constructor(){
        this.app = express();
        createConnection();
        this.config();
        this.routes();
        this.start();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){

    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port ', this.app.get('port'));
        })
    }

}