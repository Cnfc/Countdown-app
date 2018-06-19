var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
  },
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className='menu'>
            <li className="menu-text">React Time App</li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul>
            <li className="menu-text">
              Created by <a href="#" target="_blank">Andrew Mead</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});




module.exports = Navigation;
