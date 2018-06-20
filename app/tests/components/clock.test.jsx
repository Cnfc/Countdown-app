var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');

var TestUtils = require('react-addons-test-utils');

var Clock = require("Clock");


describe('Clock', () => {
  it('should exists', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('shoud render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
    });
  });

  describe('formatSeconds', () => {
    it("shoud format seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it("shoud format seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
