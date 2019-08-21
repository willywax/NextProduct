/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

const regData = {
    email: 'jonathanaurugai1@gmail.com',
    firstName: 'Jonathan',
    lastName: 'Aurugai',
    password: 'Root1234',
};

const product = {
    name: 'Netflix',
    description: 'Description Sample',
};

const invalidName = {
    name: '',
    description: 'Description Sample',
};

const invalidDescription = {
    name: 'Netflix',
    description: '',
};

let token;

before('should create a new user', (done) => {
    chai.request(app)
        .post('/api/v1/auth/signup')
        .send(regData)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            token = res.body.data.token;
            res.body.status.should.equal(201);
            return done();
        });
});
describe('/Product', () => {
    it('should have a valid token', (done) => {
        chai.request(app)
            .post('/api/v1/products')
            .send(product)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                res.body.status.should.equal(401);
                return done();
            });
    });
    describe('/Add', () => {
        it('should add a new product', (done) => {
            chai.request(app)
                .post('/api/v1/products')
                .set('authorization', `Bearer ${token}`)
                .send(product)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.status.should.equal(201);
                    return done();
                });
        });
        it('should enter valid name', (done) => {
            chai.request(app)
                .post('/api/v1/products')
                .set('authorization', `Bearer ${token}`)
                .send(invalidName)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.status.should.equal(400);
                    return done();
                });
        });
        it('should enter valid description', (done) => {
            chai.request(app)
                .post('/api/v1/products')
                .set('authorization', `Bearer ${token}`)
                .send(invalidDescription)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.status.should.equal(400);
                    return done();
                });
        });
    });
});
