const color = require('../src/color')

describe('Color', function () {
  it('should respond with a value of G50', function(done) {
    const value = color.Bootstrap('G50')
    expect(value).toEqual('G50')
    done()
  })
})
