const users = require("./users/users.service.js");
const advantage = require("./advantage/advantage.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(advantage);
  // ~cb-add-configure-service-name~
};
