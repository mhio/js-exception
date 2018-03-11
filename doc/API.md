## Classes

<dl>
<dt><a href="#Exception">Exception</a> ⇐ <code>Error</code></dt>
<dd><p><p>Exception extends the Error class to more easily annotate Javascript errors with metadata.</p></p>
<pre class="prettyprint source"><code>class MyException extends Exception {}
throw new MyException('normal code error message', {
  label: 'A UI Label for the error', 
  simple: 'A simple human message',
  code: 14
})</code></pre></dd>
<dt><a href="#ErrorException">ErrorException</a> ⇐ <code><a href="#Exception">Exception</a></code></dt>
<dd><p>An <code>Exception</code> that can encapsulate an <code>Error</code></p></dd>
<dt><a href="#WebException">WebException</a> ⇐ <code><a href="#Exception">Exception</a></code></dt>
<dd><p>An <code>Exception</code> for the web</p></dd>
</dl>

<a name="Exception"></a>

## Exception ⇐ <code>Error</code>
<p>Exception extends the Error class to more easily annotate Javascript errors with metadata.</p>
<pre class="prettyprint source"><code>class MyException extends Exception {}
throw new MyException('normal code error message', {
  label: 'A UI Label for the error', 
  simple: 'A simple human message',
  code: 14
})</code></pre>

**Kind**: global class  
**Extends**: <code>Error</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>Name for the error, defaults to Class.name</p> |
| message | <code>string</code> | <p>Standard <code>Error</code> message</p> |
| stack | <code>string</code> | <p>Get a stack trace where we can</p> |
| label | <code>string</code> | <p>A standard place to store a more human readable error messages</p> |
| simple | <code>string</code> | <p>Simple error message, for the hoomans</p> |
| code | <code>string</code> \| <code>number</code> | <p>An error code</p> |


* [Exception](#Exception) ⇐ <code>Error</code>
    * [new Exception(message, metadata)](#new_Exception_new)
    * [.toJSON()](#Exception+toJSON) ⇒ <code>object</code>


* * *

<a name="new_Exception_new"></a>

### new Exception(message, metadata)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Standard <code>Error</code> message</p> |
| metadata | <code>object</code> | <p>Extra metadata for the <code>Exception</code></p> |
| metadata.label | <code>string</code> | <p>A UI label for the error</p> |
| metadata.simple | <code>string</code> | <p>A simple message for humans</p> |
| metadata.code | <code>string</code> \| <code>number</code> | <p>An error code</p> |


* * *

<a name="Exception+toJSON"></a>

### exception.toJSON() ⇒ <code>object</code>
<p>Includes important non enumerable properties</p>

**Kind**: instance method of [<code>Exception</code>](#Exception)  
**Summary**: <p>Fix <code>Error.toJSON</code> for our Exception</p>  

* * *

<a name="ErrorException"></a>

## ErrorException ⇐ [<code>Exception</code>](#Exception)
<p>An <code>Exception</code> that can encapsulate an <code>Error</code></p>

**Kind**: global class  
**Extends**: [<code>Exception</code>](#Exception)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | <p>The original error that is being wrapped</p> |


* [ErrorException](#ErrorException) ⇐ [<code>Exception</code>](#Exception)
    * [new ErrorException(message, metadata)](#new_ErrorException_new)
    * [.setError(error)](#ErrorException+setError)
    * [.toJSON()](#Exception+toJSON) ⇒ <code>object</code>


* * *

<a name="new_ErrorException_new"></a>

### new ErrorException(message, metadata)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Standard <code>Error</code> message</p> |
| metadata | <code>object</code> | <p>Extra metadata for the object</p> |
| metadata.error | <code>Error</code> | <p><code>Error</code> to attach to the <code>Exception</code></p> |


* * *

<a name="ErrorException+setError"></a>

### errorException.setError(error)
**Kind**: instance method of [<code>ErrorException</code>](#ErrorException)  
**Summary**: <p>Attach an Error</p>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | <p>The error to attach</p> |


* * *

<a name="Exception+toJSON"></a>

### errorException.toJSON() ⇒ <code>object</code>
<p>Includes important non enumerable properties</p>

**Kind**: instance method of [<code>ErrorException</code>](#ErrorException)  
**Summary**: <p>Fix <code>Error.toJSON</code> for our Exception</p>  

* * *

<a name="WebException"></a>

## WebException ⇐ [<code>Exception</code>](#Exception)
<p>An <code>Exception</code> for the web</p>

**Kind**: global class  
**Extends**: [<code>Exception</code>](#Exception)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | <p>HTTP status code</p> |
| statusCode | <code>number</code> | <p>Express uses <code>.statusCode</code>. See <code>status</code></p> |


* [WebException](#WebException) ⇐ [<code>Exception</code>](#Exception)
    * [new WebException(message, metadata)](#new_WebException_new)
    * [.statusCode](#WebException+statusCode)
    * [.toResponse()](#WebException+toResponse) ⇒ <code>object</code>
    * [.toJSON()](#Exception+toJSON) ⇒ <code>object</code>


* * *

<a name="new_WebException_new"></a>

### new WebException(message, metadata)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>Standard Error message</p> |
| metadata | <code>object</code> | <p>Extra metadata for the object</p> |
| metadata.status | <code>number</code> | <p>Integer HTTP status code</p> |


* * *

<a name="WebException+statusCode"></a>

### webException.statusCode
<p>Support <code>.statusCode</code> for express</p>

**Kind**: instance property of [<code>WebException</code>](#WebException)  
**Summary**: <p>statusCode</p>  

* * *

<a name="WebException+toResponse"></a>

### webException.toResponse() ⇒ <code>object</code>
<p>Turns the Exception into a format that can be sent to a client in a JSON response. <code>.stack</code> depends on the node environment (<code>NODE_ENV</code>)</p>

**Kind**: instance method of [<code>WebException</code>](#WebException)  
**Summary**: <p>Turn an error into a JSON response</p>  

* * *

<a name="Exception+toJSON"></a>

### webException.toJSON() ⇒ <code>object</code>
<p>Includes important non enumerable properties</p>

**Kind**: instance method of [<code>WebException</code>](#WebException)  
**Summary**: <p>Fix <code>Error.toJSON</code> for our Exception</p>  

* * *

