var AppDispatcher = require('../dispatcher/app-dispatcher');

var enterRoom = {
  emitEnterRoom: function (data) {
    var action = {
      actionType: "ENTERROOM",
      data: data
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = enterRoom;