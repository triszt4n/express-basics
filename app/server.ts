import express from 'express';
import {WelcomeController} from './controllers';

const app: express.Application = express();
const port: number = 3000;

app.use('/welcome', WelcomeController);
app.use(express.static('public'))

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
