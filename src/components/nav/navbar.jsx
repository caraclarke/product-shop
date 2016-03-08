var React = require('react');
var NavItem = require('./navitem.jsx');

var NavBar = React.createClass({
  render: function() {
    var createLinkItem = function(item, index) {
      return <NavItem key={item.title + index} href={item.href} title={item.title}/>
      // making key = getting title from array in main.jsx and adding index to create unique key
    }
    
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
        <div className="collapse navbar-collapse" id="nav-collapse">
          <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;