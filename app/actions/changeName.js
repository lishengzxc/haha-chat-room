var AppDispatcher = require('../dispatcher/app-dispatcher');

var changeName = {
  emitChangeName: function (data) {
    var action = {
      actionType: "CHANGENAME",
      data: data
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = changeName;