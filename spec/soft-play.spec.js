describe("Soft Play", () => {
  let softplay

  beforeEach(() => {
    delete require.cache[require.resolve('../src/soft-play.js')];
    softplay = require('../src/soft-play.js')
  })

  it("Initial state is empty", function() {
    expect(softplay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child softplay.enter", function() {
    expect(softplay.enter(1,1)).toBeTrue()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Single adult with 2 children cannot softplay.enter", function() {
    expect(softplay.enter(1,2)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("2 adults with 1 child can softplay.enter", function() {
    expect(softplay.enter(2,1)).toBeTrue()
    expect(softplay.occupancy()).toEqual({adults: 2, children: 1})
  })

  it("Adult can softplay.leave when adults 2 and children 1", function() {
    softplay.enter(2,1)
    expect(softplay.leave(1,0)).toBeTrue()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot softplay.leave when adults 1 and children 1", function() {
    softplay.enter(1,1)
    expect(softplay.leave(1,0)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot softplay.leave when adults 2 and children 2", function() {
    softplay.enter(2,2)
    expect(softplay.leave(1,0)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 2, children: 2})
  })

  it("More children cannot softplay.leave than are in the soft play softplay.center", function() {
    expect(softplay.enter(1,1)).toBeTrue()
    expect(softplay.leave(1,2)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More adults cannot softplay.leave than are in the soft play softplay.center", function() {
    expect(softplay.enter(1,1)).toBeTrue()
    expect(softplay.leave(2,1)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot softplay.enter on own", function() {
    expect(softplay.enter(0,1)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot softplay.leave on own", function() {
    softplay.enter(1,1)
    expect(softplay.leave(0,1)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot softplay.leave with multiple children", function() {
    softplay.enter(2,2)
    expect(softplay.leave(1,2)).toBeFalse()
    expect(softplay.occupancy()).toEqual({adults: 2, children:2})
  })

  it("Multiple adults can softplay.leave with multiple children", function() {
    softplay.enter(2,2)
    expect(softplay.leave(2,2)).toBeTrue()
    expect(softplay.occupancy()).toEqual({adults: 0, children:0})
  })
})
