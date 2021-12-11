const {enter, leave, occupancy, reset} = require('../src/soft-play.js')

describe("Soft Play", () => {  
  
  it("Initial state is empty", function() {
    reset()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave when adults 2 and children 1", function() {
    reset()
    enter(2,1)
    expect(leave(1,0)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    reset()
    enter(1,1)
    expect(leave(1,0)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More children cannot leave than are in the soft play center", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(leave(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot enter on own", function() {
    reset()
    expect(enter(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot leave on own", function() {
    reset()
    enter(1,1)
    expect(leave(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave with children", function() {
    reset()
    enter(2,1)
    expect(leave(2,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })
})