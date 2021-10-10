//import app from './app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

// need to parse serverless.yml for the port .... uggghhhh
const baseUrl = 'http://localhost:3000';


describe('Hello API Request', () => {
  it('should return standard hello response ', async () => {
    const res = await chai.request(baseUrl).get('/');
    expect(res).to.have.status(200);
    expect(res.text).to.eql("{\"msg\":\"Hello World\"}");
    expect(res).to.be.json;
    expect(res.body).to.not.be.empty;
    expect(res.body).to.have.property('msg');
    expect(res.body.msg).to.be.eql('Hello World');
  })
})

