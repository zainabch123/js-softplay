// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  const total = { adults: adults, children: children }
  return total
}

console.log(occupancy())

const totalEntered = { adults: 0, children: 0 }

function newPeople(adultNum, childNum) {
  if (adultNum >= childNum) {
    adults = adults + adultNum
    children = children + childNum
    totalEntered.adults = totalEntered.adults + adultNum
    totalEntered.children = totalEntered.children + childNum
    return true
  } else if (adultNum < childNum) {
    adults = adults + 0
    children = children + 0
    return false
  }
  return occupancy()
}

console.log(newPeople(0, 0))
console.log(occupancy())

function total() {
  return totalEntered
}

function leavingPeople(adultNum, childNum) {
  const tempAdults = adults - adultNum
  const tempChildren = children - childNum
  if (
    adultNum >= childNum &&
    tempAdults >= tempChildren &&
    adultNum <= adults &&
    childNum <= children
  ) {
    adults = adults - adultNum
    children = children - childNum
    return true
  } else if (
    adultNum < childNum ||
    tempAdults < tempChildren ||
    adultNum > adults ||
    childNum > children
  ) {
    adults = adults - 0
    children = children - 0
    return false
  }
  return occupancy()
}

console.log(leavingPeople(0, 0))
console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: newPeople,
  leave: leavingPeople,
  occupancy: occupancy,
  total: total
}
