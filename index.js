const express = require('express');
const app = express();
app.listen(3000, () => console.log('Servidor abierto en puerto 3000'));
app.use(express.static('public'));
app.use(express.json());