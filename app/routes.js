var React = require('react');
var Router = require('react-router');

var Route = Router.Route;

var App = require('./app');
var NowRoom = require('./views/NowRoom/NowRoom');
var AllRoom = require('./views/AllRoom/AllRoom');
var Me = require('./views/Me/Me');
var ChatRoom = require('./views/ChatRoom/ChatRoom');

var routes = (
  <Route handler={App}>
    <Route path="now" handler={NowRoom} />
    <Route path="all" handler={AllRoom} />
    <Route path="me" handler={Me} />
    <Route path="chat" handler={ChatRoom} />
  </Route>
);

module.exports = routes;

