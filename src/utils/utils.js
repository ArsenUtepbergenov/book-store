// compare methods for sort callbacks
export function compareNumbers (firstParam, secondParam, direction) {
  if (direction)
    [firstParam, secondParam] = [secondParam, firstParam]
  return firstParam - secondParam
}

export function compareStrings (firstParam, secondParam, direction) {
  let str1 = firstParam.toLowerCase()
  let str2 = secondParam.toLowerCase()
  if (direction)
    [str1, str2] = [str2, str1]
  if (str1 < str2)
    return -1
  if (str1 > str2)
    return 1
  return 0
}

// compare objects
function isObject (object) {
  return object != null && typeof object === 'object'
}

export function compareObjects (first, second) {
  const keys1 = Object.keys(first)
  const keys2 = Object.keys(second)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    const val1 = first[key]
    const val2 = second[key]
    const areObjects = isObject(val1) && isObject(val2)
    if (areObjects && !compareObjects(val1, val2) ||
        !areObjects && val1 !== val2) {
      return false
    }
  }

  return true
}