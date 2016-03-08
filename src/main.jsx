var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/navbar.jsx');

var navLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "Courses",
    href: "#courses"
  },
  {
    title: "Blog",
    href: "#blog"
  }
]

ReactDOM.render(
  <NavBar bgColor="#fff" titleColor="#3097d1" linkColor="" navData={navLinks}/>,
  document.getElementById('nav')
);