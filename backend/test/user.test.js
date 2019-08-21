/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;

const signupUrl = '/api/v1/auth/signup';

chai.use(chaiHttp);

const regData = {
  email: 'jonathanaurugai12@gmail.com',
  firstName: 'Jonathan',
  lastName: 'Aurugai',
  password: 'Root1234',
};
const regDataWrongFirstName = {
  email: 'jonathanaurugai12@gmail.com',
  firstName: '',
  lastName: 'Aurugai',
  password: 'Root1234',
};
const regDataWrongLastName = {
  email: 'jonathanaurugai12@gmail.com',
  firstName: 'Jonathan',
  lastName: '',
  password: 'Root1234',
};
const regDataWrongEmail = {
  email: 'jonathanaurugai12',
  firstName: 'Jonathan',
  lastName: 'Aurugai',
  password: 'Root1234',
};
const regDataWrongPassword = {
  email: 'jonathanaurugai12@gmail.com',
  firstName: 'Jonathan',
  lastName: 'Aurugai',
  password: 'Root',
};

describe('User', () => {
  describe('creates an account', () => {
    it('with invaild properties', (done) => {
      chai.request(server).post(signupUrl).send(regData).end((_err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
    });
    it('with invaild first name', (done) => {
      chai.request(server).post(signupUrl).send(regDataWrongFirstName).end((_err, res) => {
        expect(res.status).to.eq(400);
        done();
      });
    });
    it('with invaild last name', (done) => {
      chai.request(server).post(signupUrl).send(regDataWrongLastName).end((_err, res) => {
        expect(res.status).to.eq(400);
        done();
      });
    });
    it('with invaild email', (done) => {
      chai.request(server).post(signupUrl).send(regDataWrongEmail).end((_err, res) => {
        expect(res.status).to.eq(400);
        done();
      });
    });
    it('with invaild password', (done) => {
      chai.request(server).post(signupUrl).send(regDataWrongPassword).end((_err, res) => {
        expect(res.status).to.eq(400);
        done();
      });
    });
  });
});
