var expect = require('chai').expect
  , az = require('./')

describe('az', function() {

  it('should filter less than value', function() {
    var a = [{ val: 2 }, { val: 3 }, { val: 1 }, { val: 2 }]
    expect(a.sort(az('val'))).to.be.eql([{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }])
  })

  it('should sort property less items too', function() {
    var a = [{}, { val: 2 }, {}, { val: 3 }, {}, { val: 1 }, {}, { val: 2 }]
    expect(a.sort(az('val'))).to.be.eql([{}, {}, {}, {}, { val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }])
  })

  it('should sort by string property', function() {
    var a = [{}, { val: 'b' }, {}, { val: 'c' }, {}, { val: 'a' }, {}, { val: 'b' }]
    expect(a.sort(az('val'))).to.be.eql([{}, {}, {}, {}, { val: 'a' }, { val: 'b' }, { val: 'b' }, { val: 'c' }])
  })

})