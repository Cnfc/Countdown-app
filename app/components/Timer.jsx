var React = require('react');
var {Link, IndexLink} = require('react-router');

var Timer = React.createClass({
  },
  render:function(){
    return(
        <div>
          Created by <Link to="/">Andrew Mead</Link>
        </div>
      </div>
    )
  }
});




module.exports = Timer;
