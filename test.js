'use strict'

var test = require('tape')
var requireDeps = require('./')

test(function (t) {
  t.equal(requireDeps([]), '')
  t.equal(requireDeps('foo'), 'require(\'foo\');')
  t.equal(requireDeps(['foo']), 'require(\'foo\');')
  t.equal(requireDeps(['foo', 'bar']), 'require(\'foo\');require(\'bar\');')
  t.end()
})
