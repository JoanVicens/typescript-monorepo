import express, { Request, Response } from 'express';
import PromiseRouter from 'express-promise-router';
import bodyParser from 'body-parser';
import * as http from 'http';
import errorHandler from 'errorhandler';
import { registerRoutes } from './routes/intex';
import httpStatus from 'http-status';

export class Server {
    private express: express.Express;
    readonly port: string;
    httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;

        const router = PromiseRouter();
        router.use(errorHandler());

        registerRoutes(router);

        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));

        this.express.use(router);

        router.use((err: Error, _req: Request, res: Response, _next: Function) => {
          console.log(err.message);
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        });;
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
          this.httpServer = this.express.listen(this.port, () => {
            
            resolve();
          });
        });
      }
    
      async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
          if (this.httpServer) {
            this.httpServer.close(error => {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          }
    
          return resolve();
        });
      }
}