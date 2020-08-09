import express from "express";
import ClassesController from "./Controllers/ClassesController";
import ConnectionsController from "./Controllers/ConnectionControllers";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;
