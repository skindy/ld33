import fetch from 'fetch';
import monsterFixture from './monster-fixture';

export default {
  get: function(id) {
    return Promise.resolve(monsterFixture);
  },
  post: function(data) {
    return Promise.resolve(monsterFixture);
  },
  put: function(data) {
    return Promise.resolve({});
  },
  delete: function(id) {
    return Promise.resolve({})
  }
};
