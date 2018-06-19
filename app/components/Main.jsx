var React = require('react');
var Navigation = require('Navigation');
var Clock = require('Clock');



var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <Clock/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
