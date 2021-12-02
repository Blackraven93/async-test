import './db';
// import './models/..'

import app from './server';

const PORT = process.env.BACKPORT || 3200;

const handleListening = () => {
    console.log( `✔ Server Listening on port ${PORT}` )
}

app.listen(PORT, handleListening);