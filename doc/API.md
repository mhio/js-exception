## Classes

<dl>
<dt><a href="#Exception">Exception</a></dt>
<dd><p><p>Exception extends the Error class to more easily annotate Javascript errors with metadata.</p></p>
<pre class="prettyprint source"><code> class MyException extends Exception {}
 throw new MyException('normal code error message', {
   label: 'A UI Label for the error', 
   simple: 'A simple human message',
   code: 14
 })</code></pre></dd>
<dt><a href="#ErrorException">ErrorException</a></dt>
<dd><p>An <code>Exception</code> that encapsulate an <code>Error</code></p></dd>
<dt><a href="#WebException">WebException</a></dt>
<dd><p>An <code>Exception</code> for the web</p></dd>
</dl>

<a name="Exception"></a>

## Exception
<p>Exception extends the Error class to more easily annotate Javascript errors with metadata.</p>
<pre class="prettyprint source"><code> class MyException extends Exception {}
 throw new MyException('normal code error message', {
   label: 'A UI Label for the error', 
   simple: 'A simple human message',
   code: 14
 })</code></pre>

**Kind**: global class  

* * *

<a name="Exception+toJSON"></a>

### exception.toJSON()
<p>Include important non enumerable properties that can be removed later for users.</p>

**Kind**: instance method of [<code>Exception</code>](#Exception)  
**Summary**: <p>Fix <code>Error.toJSON</code> for our Exception</p>  

* * *

<a name="ErrorException"></a>

## ErrorException
<p>An <code>Exception</code> that encapsulate an <code>Error</code></p>

**Kind**: global class  

* * *

<a name="ErrorException+setError"></a>

### errorException.setError(error)
**Kind**: instance method of [<code>ErrorException</code>](#ErrorException)  
**Summary**: <p>Attach an Error</p>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | <p>The error to attach</p> |


* * *

<a name="WebException"></a>

## WebException
<p>An <code>Exception</code> for the web</p>

**Kind**: global class  

* [WebException](#WebException)
    * [.statusCode](#WebException+statusCode)
    * [.toResponse()](#WebException+toResponse) ⇒ <code>object</code>


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

