var Room = (function () {
  var roomList = [];

  var addRoom = function (name) {
    name = name || '一个有趣的房间';
    roomList.push({
      id: getId(),
      name: name
    });

    console.log(roomList);
  };

  var getId = function () {
    return new Date().getTime();
  };

  var getRoomList = function () {
    return roomList;
  };

  var removeRoom = function () {
    //TODO
  };

  return {
    add: addRoom,
    get: getRoomList,
    remove: removeRoom
  }
}());

module.exports = Room;