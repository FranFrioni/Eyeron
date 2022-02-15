const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servidor abierto en puerto ' + port));
app.use(express.static('public'));
app.use(express.json());