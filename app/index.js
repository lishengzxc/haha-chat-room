var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var Store = require('./stores/stores');

var addRoom = require('./actions/addRoom');

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});


socket.on('addRoomOK', function (data) {
  addRoom.emitAddRoom(data);
  console.log(Store.getAllRoomList());
});