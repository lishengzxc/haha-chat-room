var AppDispatcher = require('../dispatcher/app-dispatcher');

var changeSex = {
  emitChangeSex: function (data) {
    var action = {
      actionType: "CHANGESEX",
      data: data
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = changeSex;