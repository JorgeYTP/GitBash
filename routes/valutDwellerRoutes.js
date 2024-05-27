const vaultDwellerController = require ('../controllers/vaultDwellerControlles');

module.exports = (app) => {

    app.post('/api/vaultdweller/create', vaultDwellerController.register);

}