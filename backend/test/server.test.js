/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.should();
chai.use(chaiHttp);

describe('/Homepage', () => {
  it('should return a welcome message', (done) => {
    chai
      .request(app)
      .get('/')
      .send()
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.status.should.equal(200);
        return done();
      });
  });
  it('should return page unknown', (done) => {
    chai
      .request(app)
      .get('/unknown')
      .send()
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.status.should.equal(404);
        return done();
      });
  });
});
