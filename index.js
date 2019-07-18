module.exports = class Element {
  constructor (root = null) {
    this.el = {
      root: null, // Parent element to put this Element element into
      container: null, // This element
    }
    if (typeof root === 'string') {
      this.el.root = document.getElementById(root)
      if (this.el.root == null) throw new Error('Can not find element with this id')
    } else if (root instanceof Element) {
      this.el.root = root.el.container
    } else if (root == null) {
      this.el.root = document.body
    } else if (typeof root === 'object') {
      this.el.root = root
    }
  }

  create (elementType = 'div') {
    this.el.container = document.createElement(elementType)
    this.el.root.appendChild(this.el.container)
    return this
  }
  
  id (idName) {
    this.el.container.setAttribute('id', idName)
    return this
  }
  
  class (className) {
    this.el.container.classList.add(className)
    return this
  }

  append (child) {
    this.el.container.appendChild(child)
    return this
  }

  text (t) {
    this.el.container.innerText = t
    return this
  }
  value (v) {
    this.el.container.setAttribute('value', v)
    return this
  }
}
