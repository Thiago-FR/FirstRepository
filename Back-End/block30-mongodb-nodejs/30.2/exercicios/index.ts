import RecordStoreController from "./src/controller/RecordStore";
import RecordStore from "./src/interface/RecordStore";
import CustomRouter from "./src/routes/Router";
import App from "./src/App";

const server = new App();

const recordStoreController = new RecordStoreController();

const recordStoreRouter = new CustomRouter<RecordStore>()
recordStoreRouter.addRoute(recordStoreController);

server.addRouter(recordStoreRouter.router);

server.startServer();