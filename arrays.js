var chocolateBars = ["snickers", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  [...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element)
  return array
}