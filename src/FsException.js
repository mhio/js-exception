 import { Exception, ErrorException } from './Exception'

// ### FsException

// Create errors for the `fs` module that don't suck so much

// #### `new FsException(new_message, original_error)`

export class FsException extends ErrorException {

  static create( message, error, metadata ) {
    switch(error.code) {
      case 'ENOENT': return new FsNotFoundException(`${message} : ${error.syscall} ${error.path}`, error, metadata)
      case 'EEXIST': return new FsAlreadyExistsException(`${message} : ${error.syscall} ${error.path}`, error, metadata)
      case 'EPERM': return new FsNotPermittedException(`${message} : ${error.syscall} ${error.path}`, error, metadata)
      default : return new FsException(`${message} : ${error.message}`, error, metadata)
    }
  }

  constructor( message, error ){
    if (!message) throw new Exception('FsException requires a message paramater')
    if (!error) throw new Exception('FsException requires a message and error paramater')
    super(message, error)
    this.code = error.code
    this.errno = error.errno
    this.syscall = error.syscall
    this.path = error.path
  }

}

// ### FsNotFoundException

// #### `new FsNotFoundError(new_message, original_error)`

export class FsNotFoundException extends FsException {}
export class FsAlreadyExistsException extends FsException {}
export class FsNotPermittedException extends FsException {}

