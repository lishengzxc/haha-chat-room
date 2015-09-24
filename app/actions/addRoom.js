var AppDispatcher = require('../dispatcher/app-dispatcher');

var addRoom = {
  emitAddRoom: function (data) {
    var action = {
      actionType: "ADDROOM",
      data: data
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = addRoom;