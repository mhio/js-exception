/* global expect, _ */
const { WebException } = require('../../')

describe('mh::test::Unit::WebException', function(){
  
  it('should have a WebException', function() {
    expect(WebException, 'WebException module').to.be.ok
  })

  it('should create a WebException instance', function() {
    let r = new WebException({ message: {} })
    expect(r).to.be.ok
  })

  describe('WebException instance', function(){
    
    let excpt = null

    //let WebException_pattern = `{
    //  "message":  String,
    //  "status":   Integer AND range(400, 599),
    //  "name":     "WebException",
    //  "stack":    String,
    //}`

    beforeEach(function(){
      excpt = new WebException('standard message', {
        status: 401
      })
    })

    it('should set an status', function(){
      expect( excpt.status ).to.equal(401)
    })

    it('should set an statusCode', function(){
      expect( excpt.statusCode ).to.equal(401)
    })

    it('should set via statusCode', function(){
      excpt.statusCode = 402
      expect( excpt.statusCode ).to.equal(402)
      expect( excpt.status ).to.equal(402)
    })

    it('should get .toJSON', function(){
      let ejson = excpt.toJSON()
      expect( ejson ).to.matchPattern({
        message: 'standard message',
        name: 'WebException',
        status: 401,
        stack: _.isString,
      })
    })

    it('should get .toResponse', function(){
      let eresponse = excpt.toResponse()
      expect( eresponse ).to.matchPattern({
        message: 'standard message',
        status: 401,
        name: 'WebException',
      })
    })

  })

  describe('extended class', function(){

    class MyStatusException extends WebException {}
    MyStatusException.status = 209

    it('should add the class static status', function(){
      let mys = new MyStatusException('whatever')
      expect( mys.status ).to.equal(209)
    })
  })

})