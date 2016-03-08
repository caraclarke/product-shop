var React = require('react');
// package importing
var ReactRouter = require('react-router');
// router itself that we need
var Router = ReactRouter.Router;
// individual routes
var Routes = ReactRouter.Route;

// get rid of URL hashes
var CreateHistory = require('history/lib/createHistory');
// turning off hashes that appear in URL, there to support older browsers
var History = new CreateHistory({
  queryKey: false
});