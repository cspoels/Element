# @cspoels:element

## Install

```
yarn add @cspoels/Element
```


## Use
To start, load the script
```js
const Element = require('@cspoels/element')
```

To create a new element in the body of the document
```js
let element = new Element(document.body).create()
```

An element will be created, it will remember the root for appending alter. The root parameter can be 
 - A string: To search by id
 - A DOM element to appen dto
 - Another Element instance
 - [Default] null, will transform to document.body

you can alter the element with functions as:
```js
element.class('is-primary').id('super-element').text('I am the best element')
```
