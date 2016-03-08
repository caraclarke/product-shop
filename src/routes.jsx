var React = require('react');
// package importing
var ReactRouter = require('react-router');
// router itself that we need
var Router = ReactRouter.Router;
// individual routes
var Routes = ReactRouter.Route;
// 'show this when someone gets to the homepage'
var IndexRoute = ReactRouter.IndexRoute;

// get rid of URL hashes
var CreateHistory = require('history/lib/createHistory');
// turning off hashes that appear in URL, there to support older browsers
var History = new CreateHistory({
  queryKey: false
});

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = {
  <Router history={History}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/product/:productId" component={Product} />
    </Route>
  </Router>
};

module.exports = Routes;