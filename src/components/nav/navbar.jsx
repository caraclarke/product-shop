var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Product Shop</a>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;