var React = require('react');

var NavItem = React.createClass({
  getInitialState: function() {
    // react allows you to use logic to build views
    // code, conditionals, if/else whichever
    return {hover: false};
  },
  mouseOver: function(e) {
    this.setState({hover: true});
  },
  mouseOut: function(e) {
    this.setState({hover: false});
    // conditionally based style, need LI to update accordingly
    // className is CSS class
  },
  // on mouseover & mouseout call a function
  // checking if this.state.hover is true
  render: function() {
    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <a style={this.props.aStyle} href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem;