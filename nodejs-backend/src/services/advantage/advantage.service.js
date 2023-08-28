const { Advantage } = require('./advantage.class');
const createModel = require('../../models/advantage.model');
const hooks = require('./advantage.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/advantage', new Advantage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('advantage');

  service.hooks(hooks);
};