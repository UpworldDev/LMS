process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var server = require('../../server');

describe('routes : index', function() {

  beforeEach(function(done) {
    done();
  });

  afterEach(function(done) {
    done();
  });

  describe('GET /', function() {
    it('should render the index', function(done) {
      chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.redirects.length.should.equal(0);
        res.status.should.equal(200);
        res.type.should.equal('text/html');
        //res.text.should.contain('<title>Centralized Login</title>');
        done();
      });
    });
  });

  describe('GET /404', function() {
    it('should throw an error', function(done) {
      chai.request(server)
      .get('/404')
      .end(function(err, res) {
        res.redirects.length.should.equal(0);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
        res.body.message.should.eql('Not Found');
        done();
      });
    });
  });

});
