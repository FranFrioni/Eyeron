//Server
    const { response } = require('express');
const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('Servidor abierto en puerto ' + port));
    app.use(express.static('public'));
    app.use(express.json());

//Database
    const Datastore = require('nedb');
    const users = new Datastore('store/users.db');
    users.loadDatabase();

//Endpoints

    //Post Endpoints
        app.post('/users', (request, response) => {
            let username = request.body["username"];
            let password = request.body["password"];
            
            users.find({ username: username }, (error, data) => {
                if (data.length === 0){
                    users.insert({username: username, password: password});
			        response.json(true);
                }  else {
                    response.json(false);
                }
            });
        });

    //Get Endpoints
        app.get('/users/:username/:password', (request, response) => {
            users.find({username: request.params.username, password: request.params.password},(error, data) => {
                if (data.length === 0){
                    response.json(false);
                } else {
                    response.json(data);
                }
            });
        });

