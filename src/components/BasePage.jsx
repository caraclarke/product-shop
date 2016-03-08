var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [{ title: "Home", href: "/" }];

var BasePage = React.createclass({
  render: function() {
    return(
      <NavBar bgColor="#fff" titleColor="#3097d1" linkColor="" navData={navLinks}/>
      {this.props.children}
    );
  }
});

module.exports = BasePage;