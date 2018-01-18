const { ErrorException } = require('../../')

describe('mh::test::Unit::ErrorException', function () {
  
  it('should have a ErrorException', function() {
    expect(ErrorException).to.be.ok
  })

  it('should create a ErrorException', function() {
    let r = new ErrorException({ message: {} })
    expect(r).to.be.ok
  })

  describe('ErrorException instance', function () {
    
    let excpt = null

    before(function(){
      excpt = new ErrorException('standard message', {
        error: new Error('whatever'),
      })
    })

    it('should set an error', function(){
      expect( excpt.error ).to.be.an('Error')
      expect( excpt.error.message ).to.equal('whatever')
    })

  })

})