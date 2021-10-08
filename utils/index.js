  export function debounce(func, wait, immediate) {
    var timeout
    return function() {
      var context = this,
        args = arguments
      var later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }


export function isMobile(val) {
  return /1\d{10}$/.test(val)
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  var getType = {}
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]'
  )
}

export const isUndefined = (val) => {
  // eslint-disable-next-line no-void
  return val === void 0
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}
