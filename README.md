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

You need to write a program that maintains a count of the number of children and adults inside a soft player center. Inside the `src/soft-play.js` file, you should add the following functions:

### enter(numChildren, numAdults) 
This function should increase the number of children and adults by the passed values and return true - as long as the following conditions are met:

* A child must also be accompanied by at least one adult
* An adult must not be responsible for more than 3 children 

If any of these conditions are false, the function should return false and the adults and children should not be added to the current total.

### leave(numChildren, numAdults)
This function should decrease the number of children and adults by the passed values and return true - as long as the following conditions are met:

* A child cannot leave on their own.
* There should be at least 1 adult for every 3 children left inside the soft player center

### occupancy()
This function should return an object with two keys - `adults` should contain the number of children currently inside the soft play center and `children` the number of children. For example:

```javascript
{ 
  adults: 4,
  children: 3
}
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
* If we do keep track of multiple soft play centers, imagine we also want to have different rules for different centers. For example, perhaps some centers a child must be accompanied by 1 adult only. How would you implement this?