# Soft Play

## Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm install
```

## Requirements
You need to write a program that **maintains a count** of both the number of children and adults inside a soft player center. Inside the `src/soft-play.js` file, you should add the following functions:

### function enter(numChildren, numAdults) 
This function should **increase the count of children and adults** by the passed values and return `true`.

Since every child must also be accompanied by at least one adult, if the number of children is *greater* than the number of adults, then the function should return `false` and the adults and children should not be added to the current total.

### function leave(numChildren, numAdults)
This function should **decrease the count of children and adults** by the passed values and return `true`. 

However, if a child attempts to leave on their own without and adult, the function should return `false` and the counts should not be changed. 

Since there should be at least 1 adult for every child inside the soft play center, if an adult attempting to leave would cause there to be more children than adults left inside then the function should return `false` and the counts should not be changed.

The function should also return `false` if the number of adults or children attempting to leave is greater than the current counts - for example, if there is 1 adult and 1 child inside the center, 2 children and 2 adults attempting to leave should return `false` and the counts should not be changed.

### function occupancy()
This function should return an object with two keys - `adults` should contain the number of children currently inside the soft play center and `children` the number of children. For example:

```javascript
{ 
  adults: 4,
  children: 3
}
```

## Tips
Remember functions also have access to variables defined in their enclosing scope. For example both of the functions below update the same `counter` variable:

```javascript
let counter = 0

function incrementCounter() {
  counter++
}

function decrementCounter() {
  counter--
}
```

## Example
The REPL extract below illustrates the expected behavior of the functions.
```javascript
//counts start at 0
> occupancy()
{ adults: 0, children: 0 } 

//2 adults and 1 child enter
> enter(2, 1) 
true

//counts are updated
> occupancy()
{ adults: 2, children: 1 }  

//1 adult leaves
> leave(1, 0)
true

//Only 1 adult and 1 child remain
> occupancy()
{ adults: 1, children: 1 } 

//a child attempts to enter on their own, enter returns false
> enter(0,1)  
false

//counts stay the same
> occupancy()
{ adults: 1, children: 1 } 

//the last adult attempts to leave so false is returned (as child would be on their own in soft play)
> leave(1,0)
false

//counts stay the same
> occupancy() 
{ adults: 1, children: 1 }

//the last child and adult leave together
> leave(1,1) 
true

//both counts are now 0
> occupancy() 
{ adults: 0, children: 0 }
```
## Testing
A test has already been created for your function inside
`spec/soft-play.spec.js`. You should not need to modify this file. You can run the tests using npx:

```sh
$ npx jasmine spec/soft-play.spec.js
```

You can focus on passing one test at a time by implementing your functions step by step. When all the tests pass, you know your functions are complete. You can look at the test cases in the `spec/soft-play.spec.js` file, but you should not change any of the code.

## Extension
Once you have finished the basic functions, you can extend the exercise to include an additional function:

### total()
This function should return an object with the same structure as `occupancy`, but the values should be the all-time totals showing how many adults and children have entered the soft play center. For this extension exercise add your own test cases in to `spec/soft-play.spec.js`

## Reflection
Once you have completed the exercise, take a moment to ask yourself the following questions and consider how you could implement changes to your code to support these:

* The functions you have created only consider a single soft play center - what if we wanted to keep track of multiple soft play centers at the same time?
* If we do keep track of multiple soft play centers, imagine we also want to have different rules for different centers. For example, perhaps some centers a child must be accompanied by at least 2 adults. How would you implement this?