var DOMAIN = 'https://ls-230-xhr-demo.herokuapp.com';

var output;

function createFieldset() {
  var fieldset = document.createElement('fieldset');
  var legend = document.createElement('legend');
  legend.textContent = 'after load event fires';
  fieldset.appendChild(legend);
  output.appendChild(fieldset);
  output = fieldset;
}

function makeRequest(url) {
  output.innerHTML = '';

  log('var request = new XMLHttpRequest();');

  var request = new XMLHttpRequest();

  request.addEventListener('load', function(event) {
    var request = event.target;
    createFieldset();
    log('request.status', request.status);
    log('request.statusText', request.statusText);
    log('request.responseText', request.responseText);
    log('request.readyState', request.readyState);
    log(`request.getResponseHeader('Content-Type')`, request.getResponseHeader('Content-Type'));
  });

  request.open("GET", DOMAIN + url);
  request.send();

  log('request.send();');
}

function log(label, message) {
  var p = document.createElement('p');
  var code = document.createElement('code');
  code.textContent = label;
  p.appendChild(code);

  var span = document.createElement('span');
  if (message) {
    span.innerHTML = ` &raquo; ${message}`;
  }

  p.appendChild(span);
  output.appendChild(p);
}

document.addEventListener('DOMContentLoaded', function() {
  output = document.getElementById('output');

  document.getElementById('makeRequest').addEventListener('click', function() {
    makeRequest('/status/200');
  });
});