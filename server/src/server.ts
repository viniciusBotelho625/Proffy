import express, { response } from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, reponse) => {
    return reponse.json({ message: 'Hello Word'})
});

app.listen(3333);
