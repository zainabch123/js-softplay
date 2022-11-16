describe("Soft Play Extensions", () => {
  let softplay

  beforeEach(() => {
    delete require.cache[require.resolve('../../src/soft-play.js')];
    softplay = require('../../src/soft-play.js')
  })

  it("shows total people entered", function() {
    softplay.enter(1, 1)
    softplay.enter(2, 1)
    softplay.leave(1, 0)
    softplay.enter(1, 1)
    softplay.enter(2, 1)
    softplay.leave(1, 1)

    expect(softplay.occupancy()).toEqual({adults: 4, children: 3})
    expect(softplay.total()).toEqual({adults: 6, children: 4})
  })

  it("shows total people entered", function() {
    softplay.enter(1, 2) // nope
    softplay.enter(2, 2)
    softplay.leave(1, 0) // nope
    softplay.enter(0, 1) // nope
    softplay.enter(1, 1)
    softplay.leave(3, 3)

    expect(softplay.occupancy()).toEqual({adults: 0, children: 0})
    expect(softplay.total()).toEqual({adults: 3, children: 3})
  })
})
