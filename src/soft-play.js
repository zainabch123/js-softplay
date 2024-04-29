// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  let total = { adults: adults, children: children };
  return total;
};

console.log(occupancy());

let totalEntered = { adults: 0, children: 0 }

function newPeople(a, c) {
  if (a >= c) {
    adults = adults + a
    children = children + c
    totalEntered.adults = totalEntered.adults + a
    totalEntered.children = totalEntered.children + c
    return true;
  } else if (a < c) {
    adults = adults + 0
    children = children + 0
    return false
  }
  return occupancy()
}

console.log(newPeople(0, 0));
console.log(occupancy());

function total() {
  return totalEntered;
};

function leavingPeople(a, c) {
  let tempAdults = adults - a;
  let tempChildren = children - c;
  if (a >= c && tempAdults >= tempChildren && a <= adults && c <= children) {
    adults = adults - a
    children = children - c
    return true
  } else if (a < c || tempAdults < tempChildren || a > adults || c > children) {
    adults = adults - 0
    children = children - 0
    return false
  }
  return occupancy()
  }

console.log(leavingPeople(0, 0));
console.log(occupancy());


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: newPeople,
  leave: leavingPeople,
  occupancy: occupancy,
  total: total
}
