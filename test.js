var expect = require('chai').expect
  , az = require('./')

describe('az', function() {

  it('should sort by value', function() {
    var a = [{ val: 2 }, { val: 3 }, { val: 1 }, { val: 2 }]
    expect(a.sort(az('val'))).to.be.eql([{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }])
  })

  it('should sort property-less items too', function() {
    var a = [{}, { val: 2 }, {}, { val: 3 }, {}, { val: 1 }, {}, { val: 2 }]
    expect(a.sort(az('val'))).to.be.eql([{}, {}, {}, {}, { val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }])
  })

  it('should sort by string property', function() {
    var a = [{}, { val: 'b' }, {}, { val: 'c' }, {}, { val: 'a' }, {}, { val: 'b' }]
    expect(a.sort(az('val'))).to.be.eql([{}, {}, {}, {}, { val: 'a' }, { val: 'b' }, { val: 'b' }, { val: 'c' }])
  })

  it('should accept fn as key', function() {
    var a = [
      { base: 'USD', quote: 'GBP' }
    , { base: 'CAD', quote: 'GBP' }
    , { base: 'USD', quote: 'CHF' }
    , { base: 'CAD', quote: 'CHF' }
    , { base: 'USD', quote: 'EUR' }
    , { base: 'CAD', quote: 'EUR' }
    ]

    expect(a.sort(az(ccy))).to.be.eql([
      { base: 'CAD', quote: 'CHF' }
    , { base: 'CAD', quote: 'EUR' }
    , { base: 'CAD', quote: 'GBP' }
    , { base: 'USD', quote: 'CHF' }
    , { base: 'USD', quote: 'EUR' }
    , { base: 'USD', quote: 'GBP' }
    ])

    function ccy(d) {
      return d.base + d.quote
    }
  })


})