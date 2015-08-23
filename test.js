var expect = require('chai').expect
  , az = require('./')

describe('az', function() {
  it('should filter less than value', function() {
    var a = [{ val: 3 }, { val: 1 }, { val: 2 }]
    expect(a.sort(az('val'))).to.be.eql([{ val: 1 }, { val: 2 }, { val: 3 }])
  })
})