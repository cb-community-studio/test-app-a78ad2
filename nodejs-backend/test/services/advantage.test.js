const assert = require('assert');
const app = require('../../src/app');

describe('\'advantage\' service', () => {
  it('registered the service', () => {
    const service = app.service('advantage');

    assert.ok(service, 'Registered the service (advantage)');
  });
});
