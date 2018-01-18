class Exception extends Error {

  constructor( message, metadata = {} ){

    // Make it an `Error`
    super(message)

    // Standard `Error` things
    this.name = this.constructor.name
    this.message = message

    // Get a stack trace where we can
    /* istanbul ignore else */
    if (typeof Error.captureStackTrace === 'function'){
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }

    // A standard place to store a more human readable error messages
    if ('label' in metadata)   this.label  = metadata.label

    // Simple error message, for the hoomans
    if ('simple' in metadata)  this.simple = metadata.simple

    // An error code
    if ('code' in metadata)    this.code   = metadata.code

  }

  // Fix Errors `.toJSON` for our Exceptions
  toJSON(){
    let o = {}
    for (let key in this){
      o[key] = this[key]
    }
    // Non enumerable from `Error`
    o.message = this.message
    o.stack = this.stack
    return o
  }

}


class ErrorException extends Exception {
  constructor( message, metadata = {} ){

    // Make it an `Exception`
    super(message, metadata)

    this.error = metadata.error

  }
}


class WebException extends Exception {

  constructor( message, metadata = {} ){

    // Make it an `Exception`
    super(message, metadata)

    // A http status code
    if (this.constructor.status) this.status = this.constructor.status
    if ('status' in metadata)  this.status = metadata.status

  }

  // Support `.statusCode` for express
  get statusCode(){
    return this.status
  }
  set statusCode(val){
    this.status = val
  }

  toResponse(){
    let o = this.toJSON()
    if ( process && process.env && process.env.NODE_ENV !== 'development' ) delete o.stack
    return o
  }

}



module.exports = { Exception, WebException, ErrorException }
