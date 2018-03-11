
/** 
 * Exception extends the Error class to more easily annotate Javascript errors with metadata.
 *
 * ```
 * class MyException extends Exception {}
 * throw new MyException('normal code error message', {
 *   label: 'A UI Label for the error', 
 *   simple: 'A simple human message',
 *   code: 14
 * })
 * ``` 
 *
 * @extends Error
 * @param {string} message            - Standard `Error` message
 * @param {object} metadata           - Extra metadata for the `Exception`
 * @param {string} metadata.label     - A UI label for the error
 * @param {string} metadata.simple    - A simple message for humans
 * @param {string|number} metadata.code      - An error code
 * @property {string} name            - Name for the error, defaults to Class.name
 * @property {string} message         - Standard `Error` message
 * @property {string} stack           - Get a stack trace where we can
 * @property {string} label           - A standard place to store a more human readable error messages
 * @property {string} simple          - Simple error message, for the hoomans
 * @property {string|number} code     - An error code
 */

class Exception extends Error {

  constructor( message, metadata = {} ){
    super(message)

    this.name = this.constructor.name
    this.message = message

    /* istanbul ignore else */
    if (typeof Error.captureStackTrace === 'function'){
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }

    if ('label' in metadata)   this.label  = metadata.label
    if ('simple' in metadata)  this.simple = metadata.simple
    if ('code' in metadata)    this.code   = metadata.code

  }

  /**
   * @summary Fix `Error.toJSON` for our Exception
   * @description Includes important non enumerable properties
   * @returns {object} 
   */ 
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


/** 
 * An `Exception` that can encapsulate an `Error` 
 * @extends Exception
 * @property {Error} error         - The original error that is being wrapped
 * @param {string} message         - Standard `Error` message
 * @param {object} metadata        - Extra metadata for the object
 * @param {Error} metadata.error   - `Error` to attach to the `Exception`
*/
class ErrorException extends Exception {

  constructor( message, metadata = {} ){
    super(message, metadata)

    // Required but undefined is fine. 
    this.error = metadata.error
  }

  /**
   * @summary Attach an Error
   * @param {Error} error - The error to attach
   */
  setError( error ){
    return this.error = error
  }

}


/** 
 * An `Exception` for the web 
 * @extends Exception
 * @property {number} status        - HTTP status code
 * @property {number} statusCode    - Express uses `.statusCode`. See `status`
 * @param {string} message          - Standard Error message
 * @param {object} metadata         - Extra metadata for the object
 * @param {number} metadata.status  - Integer HTTP status code
 */
class WebException extends Exception {

  constructor( message, metadata = {} ){
    super(message, metadata)
    if (this.constructor.status) this.status = this.constructor.status
    if ('status' in metadata)  this.status = metadata.status
  }

  /**
   * @summary statusCode
   * @description Support `.statusCode` for express
   */
  get statusCode(){
    return this.status
  }
  set statusCode(val){
    this.status = val
  }

  /**
   * @summary Turn an error into a JSON response
   * @description Turns the Exception into a format that can be sent to a client in a JSON response. `.stack` depends on the node environment (`NODE_ENV`)
   * @returns {object}
   */
  toResponse(){
    let o = this.toJSON()
    if ( process && process.env && process.env.NODE_ENV !== 'development' ) delete o.stack
    return o
  }

}



module.exports = { Exception, WebException, ErrorException }
