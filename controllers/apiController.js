const api = require('../config/api');

const apiController = {
  getStates: (req, res) => {
    api.get('/estados')
      .then(statesReturned => {
        const states = statesReturned.data;
        console.log(states);
        return res.render('index', { states: states } )
      })
      .catch((req, res) => {
        res.render('error')
      })
  }
};

module.exports = apiController;