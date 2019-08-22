'use strict';

const {server} = require('../src/app');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('category API', () => {
  it('can post() a new category', () => {
    let obj = {
      name: 'John',
      description: 'test',
      price: 5,
      category: 'test'
    };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        let record = data.body;
        //expect(data.status).toEqual(200);
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get() a new category', () => {
    let obj = {
      name: 'John',
      description: 'test',
      price: 5,
      category: 'test'
    };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a new category', () => {
    let obj = {
      name: 'John',
      description: 'test',
      price: 5,
      category: 'test'
    };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.delete(`/api/v1/categories/${data.body._id}`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a new category', () => {
    let obj = {
      name: 'John',
      description: 'test',
      price: 5,
      category: 'test'
    };
    return mockRequest.put(`/api/v1/categories/5d5dcbcac94ee326ed0a9191`)
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record.body[key]).toEqual(obj[key]);
            });
          });
      });
  });
});

