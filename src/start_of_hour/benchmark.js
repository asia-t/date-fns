// @flow
/* eslint-env mocha */

var startOfHour = require('./')
var moment = require('moment')

suite('startOfHour', function() {
  benchmark('date-fns', function() {
    return startOfHour(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('hour')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})
