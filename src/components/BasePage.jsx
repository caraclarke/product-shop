var React = require('react');
var NavBar = require('./nav/navbar.jsx');

var navLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "iOS Course",
    href: "/product/55"
  },
  {
    title: "Angular Course",
    href: "/product/67"
  }
];

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