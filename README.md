Exception - [@mhio/exception](http://npmjs.com/package/@mhio/exception)
----------

ES2015+ Exception class extending Error

## Install

```
yarn add @mhio/exception
npm install @mhio/exception
```

## Usage

[API Docs](doc/API.md)

```
import { Exception } from '@mhio/exception'

class MyException extends Exception {
  constructor( message, options = {} ){
    super(message, options)
    this.myprop = options.myprop
  }
}


throw new MyException('Normal error message', { simple: 'Set a simple message', label: 'UI Label', myprop: 13 })
```

## Links

- Github - [mhio/node-exception](https://github.com/mhio/js-exception)
- npm - [@mhio/exception](https://www.npmjs.com/package/@mhio/exception)
