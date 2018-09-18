var chocolateBars = ["snickers", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  element.push(array)
}

function destructivelyAddElementToEndOfArray(array, element) {
  element.push(array)
}