import express from 'express';
import ClassesController from './controllers/classesControler';
import ConnectionsControlller from './controllers/connnectionsController';

const routes = express.Router();
const classControllers = new ClassesController();
const connectionsController = new ConnectionsControlller();  

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;