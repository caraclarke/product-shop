var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber) {
    HTTP.post('/subscribers', subscriber)
      .then(function(response) {
        var msg = "";
        
        if (response.status === 200) {
          msg = "Submission success";
        } else {
          msg = "Submission failure!";
        }
        
        this.trigger(msg);
        // trigger what you call on reflux when you want to call something
      }.bind(this));
  }
});

module.exports = EmailStore;