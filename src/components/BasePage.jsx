var React = require('react');
var NavBar = require('./nav/navbar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx');

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
    var style = {
      paddingTop: 15
    }
    
    return(
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" linkColor="" navData={navLinks}/>
        <div className="container" style={style}>
          <div className="row">
            <div className="col-sm-8 col-md-8">
              {this.props.children}
            </div>
            <div className="col-sm-4 col-md-4">
              <LeadCapture />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;