/* global expect */
const { Exception } = require('../../')

describe('mhio::exceptions::unit::Exception', function () {
  
  it('should have a Exception', function() {
    expect(Exception).to.be.ok
  })

  it('should create a Exception', function() {
    let r = new Exception('message')
    expect(r).to.be.ok
  })

  it('should create a Exception', function() {
    let r = new Exception('message', { message: {} })
    expect(r).to.be.ok
  })

  it('should create a Exception', function() {
    let r = new Exception('message', undefined)
    expect(r).to.be.ok
  })

  it('should create a Exception', function() {
    let r = ()=> new Exception('message', null)
    expect(r).to.be.throw(/Error metadata must be an object/)
  })

  it('should create a Exception', function() {
    let r = ()=> new Exception('message', false)
    expect(r).to.be.throw(/Error metadata must be an object/)
  })

  describe('Exception instance', function () {
    
    let excpt = null

    before(function(){
      excpt = new Exception('standard message', {
        label: 'a user label',
        simple:'a user simple message',
        code: 'someC0DE',
      })
    })

    it('should set a label', function(){
      expect( excpt.label ).to.equal('a user label')
    })

    it('should set a simple', function(){
      expect( excpt.simple ).to.equal('a user simple message')
    })

    it('should set a code', function(){
      expect( excpt.code ).to.equal('someC0DE')
    })

  })

})
