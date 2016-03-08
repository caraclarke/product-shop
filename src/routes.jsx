var React = require('react');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = require('react-router/lib/HashHistory').default;

// package importing
// router itself that we need
// individual routes
// 'show this when someone gets to the homepage'

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = (
  <Router history={HashHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="/product/:productId" component={ProductPage}></Route>
    </Route>
  </Router>
);

module.exports = Routes;