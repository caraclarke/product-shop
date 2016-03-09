var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber) {
    HTTP.post('/subscribers', subscriber)
      .then(function(response) {
        var msg = "";
        
        if (response.state === 200) {
          msg = "Email submitted!";
        } else {
          msg = "Submission failed";
        }
        
        this.trigger(msg);
        // trigger what you call on reflux when you want to call something
      }.bind(this));
  }
});

module.exports = EmailStore;