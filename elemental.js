(function () {
  'use strict'

  /**
  * Generate HTML structure
  * @name String
  * @text String
  * @atts Object
  * @tags Array
  **/

  var h = function (name, text, atts, tags) {
    var el = document.createElement(name)
    if(text){
      el.textContent = text
    }
    // for @atts object
    for(var key in atts){
      var value = atts[key]
      if(value) {
        el.setAttribute(key, value)
      }
    }
    // for @tags array
    if(tags) {
      for(var tag of tags) {
        el.appendChild(tag)
      }
    }

    return el
  }

  window.h = h

}())
