var React = require('react');


var Clock = React.createClass({
  getDefaultProps: function () {
    totlalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
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
