var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minuts = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minuts < 10) {
      minuts = '0' + minuts;
    }

    return minuts + ':' + seconds;
  },
  render: function () {
    var {totalSeconds} = this.props;

    return (
      <div className='clock'>
        <span className='clock-text'>
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
