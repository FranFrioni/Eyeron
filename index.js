const express = require('express');
const app = express();
app.listen(80, () => console.log('Servidor abierto en puerto 80'));
app.use(express.static('public'));
app.use(express.json());