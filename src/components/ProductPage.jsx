var React = require('react');

var ProductPage = React.createClass({
  getInitialState: function() {
    // without getInitialState this.state.whatever would come up null and you'd get an error
    // have to initialize your data to whatever you want it to be in its default state
    return {pId: ""};
  },
  componentDidMount: function() {
    this.setState({pId: this.props.params.productId});
    // if there are parameters passed in from route it will be available via this.props.params
  },
  componentWillReceiveProps: function(nextProps) {
    // called everytime property changes
    this.setState({pId: nextProps.params.productId});
  },
  // get data from state and show it in header
  render: function() {
    return(
      <h1>Product number {this.state.pId}</h1>
    );
  }
});

module.exports = ProductPage;