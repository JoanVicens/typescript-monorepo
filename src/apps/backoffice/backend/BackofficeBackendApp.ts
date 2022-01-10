import { Server } from "./server";

export default class BackofficeBackendApp {

    private server?: Server;

    async start() {
        const port = process.env.PORT || '3000';
        this.server = new Server(port);
        return this.server.listen();
    }
    
    async stop() {
    await this.server?.stop();
    }
}