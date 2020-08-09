import express from 'express';
import ClassesController from './controllers/classesControler';

const routes = express.Router();
const classControllers = new ClassesController()

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

export default routes;