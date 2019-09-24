import { expect } from 'chai'
import {
  FsException,
  FsNotFoundException,
  FsAlreadyExistsException,
  FsNotPermittedException
} from '../..'


describe('unit::mhio::exceptions', function() {

  describe('FsException', function(){

    it('should have an FsException',function(){
      expect( FsException ).to.be.ok
    })
 
    it('should create an error', function(){
      let ori = new Error('Original error message')
      ori.code = 'PIPE'
      let ex = new FsException('fsmsg', ori)
      expect( ex ).to.be.an.instanceOf( Error )
      expect( ex.message ).to.equal( 'fsmsg' )
      expect( ex.name ).to.equal( 'FsException' )
      expect( ex.stack ).to.be.ok
      expect( ex.code ).to.equal( 'PIPE' )
    })

    it('should fail to create one without the error argument', function(){
      let fn = function(){ return new FsException('fsmsg') }
      expect( fn ).to.throw(/FsException requires a message and error/)
    })
  })


  describe('FsNotFoundException',function(){

    it('should have an FsNotFoundException',function(){
      expect( FsNotFoundException ).to.be.ok
    })

    it('should create an FsNotFoundException instance',function(){
      let err = new FsNotFoundException('a', {code:'ENOENT'})
      expect( err ).to.be.an.instanceof(FsNotFoundException)
      expect( err.code ).to.equal('ENOENT')
    })
  })

  describe('FsAlreadyExistsException',function(){

    it('should have an FsAlreadyExistsException',function(){
      expect( FsAlreadyExistsException ).to.be.ok
    })

    it('should create an FsAlreadyExistsException instance',function(){
      let err = new FsAlreadyExistsException('a', {code:'ENOENT'})
      expect( err ).to.be.an.instanceof(FsAlreadyExistsException)
      expect( err.code ).to.equal('ENOENT')
    })
  })

  describe('FsNotPermittedException',function(){

    it('should have an FsNotPermittedException',function(){
      expect( FsNotPermittedException ).to.be.ok
    })

    it('should create an FsNotPermittedException instance',function(){
      let err = new FsNotPermittedException('a', {code:'ENOENT'})
      expect( err ).to.be.an.instanceof(FsNotPermittedException)
      expect( err.code ).to.equal('ENOENT')
    })
  })

  describe('FsException#create',function(){

    it('should have an FsException.create',function(){
      expect( FsException.create ).to.be.a('function')
    })

    it('should create a plain FsException',function(){
      expect( FsException.create('msg', new Error()) ).to.be.instanceof(FsException)
    })

    it('should create a plain FsException',function(){
      let err = new Error()
      err.code = 712873821
      expect( FsException.create('msg', err) ).to.be.instanceof(FsException)
    })

    it('should create a FsNotFoundException',function(){
      let err = new Error()
      err.code = 'ENOENT'
      expect( FsException.create('msg', err) ).to.be.instanceof(FsNotFoundException)
    })
  })

})
