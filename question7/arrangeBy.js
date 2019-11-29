const arrangeBy = propName => arr => {
  return arr.reduce((result, obj) => {
    if (!obj || typeof obj !== 'object') return result
    if (!Object.prototype.hasOwnProperty.call(obj, propName)) return result

    const propValue = obj[propName]
    if (!Object.prototype.hasOwnProperty.call(result, propValue)) {
      result[propValue] = []
    }

    // if were being more picky about mutation, we can spread the object here
    result[propValue].push(obj)

    return result
  }, {})
}

module.exports = arrangeBy
