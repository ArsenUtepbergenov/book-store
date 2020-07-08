// compare method for sort callbacks
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