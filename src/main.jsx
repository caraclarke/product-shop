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
  <NavBar bgColor="red" titleColor="white" linkColor="yellow" navData={navLinks}/>,
  document.getElementById('nav')
);