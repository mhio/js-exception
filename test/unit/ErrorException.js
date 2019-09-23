/* global expect */
const { ErrorException } = require('../../')

describe('mh::test::Unit::ErrorException', function () {
  
  it('should have a ErrorException', function() {
    expect(ErrorException).to.be.ok
  })

  it('should create a ErrorException', function() {
    let r = new ErrorException('message', new Error())
    expect(r).to.be.ok
  })

  describe('ErrorException instance', function () {
    
    let ex

    before(function(){
      ex = new ErrorException('standard message', new Error('whatever'), {})
    })

    it('should set an error', function(){
      expect( ex.error ).to.be.an('Error')
      expect( ex.error.message ).to.equal('whatever')
    })

    it('should set an error', function(){
      let err = new Error('newone')
      ex.setError(err)
      expect( ex.error ).to.be.an('Error')
      expect( ex.error.message ).to.equal('newone')
    })

  })

})
