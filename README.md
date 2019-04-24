# @cspoels:Element

## Install

```
yarn add @cspoels/Element
```


## Use
To start, load the script
```js
const Element = require('@cspoels/Element')
```

To create a new element in the body of the document
```js
let element = new Element(document.body).create()
```

An element will be created, it will remember the root for appending alter. The root parameter can be 
 - A string: To search by id
 - A DOM element to appen dto
 - Another Element instance

you can alter the element with functions as:
```js
element.class('is-primary').id('super-element').text('I am the best element').deploy()
```

Dont forget to `deploy()` to append the element to the previously provided root element. 

