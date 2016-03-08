var React = require('react');
var NavBar = require('./nav/navbar.jsx');

var navLinks = [{ title: "Home", href: "/" }];

var BasePage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" linkColor="" navData={navLinks}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;