var React = require('react');


var Clock = React.createClass({
  formatSeconds: function (totlalSeconds) {
    var seconds = totlalSeconds % 60;
    var minuts = Math.floor(totlalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minuts < 10) {
      minuts = '0' + minuts;
    }

    return minuts + ':' + seconds;
  },
  render:function () {
    return <p>clocks</p>
    }
});




module.exports = Clock;
