var Room = require('./room');

var io = require('socket.io')();
io.listen(3000);
io.sockets.on('connection', function (socket) {
  console.log('hello world!');
  io.sockets.emit('addRoomOK', Room.get());
  socket.on('addRoom', function (data) {
    Room.add(data.name);
    io.sockets.emit('addRoomOK', Room.get());
  });

  socket.on('sendMessage', function (data) {
    console.log(data);
    io.sockets.emit('receiveMessage:' + data.id, data);
  });

});
