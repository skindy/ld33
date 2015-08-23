import fetch from 'fetch';
import monsterFixture from './monster-fixture';
import encounterFixture from './encounter-fixture';
import authService from './auth-service';

export default {
  get: function(id) {
    return Promise.resolve(monsterFixture);
  },
  post: function(data) {
    var token = authService.token;
    return Promise.resolve(monsterFixture);
  },
  put: function(data) {
    return Promise.resolve({});
  },
  delete: function(id) {
    return Promise.resolve({});
  },
  encounter: function(id) {
    return Promise.resolve({enemy: monsterFixture});
  }
};
