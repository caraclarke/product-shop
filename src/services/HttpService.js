var Fetch = require('whatwg-fetch');
// fetch requires a url so you can hit whatever server you want to point to
// will change when project goes live
var baseUrl = 'http://localhost:6060';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then(function(response) {
      // fetch returning promise when it has completed its request - JS callback. fetch promising it will send something back
      // takes as param function you want to call when promise fulfilled
      return response.json();
      // response has multiple things, we want to get json out
    });
  },
  post: function(url, body) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(body)
    }).then(function(response) {
      return response;
      console.log('POST to SERVER success');
    });
  }
}

module.exports = service;