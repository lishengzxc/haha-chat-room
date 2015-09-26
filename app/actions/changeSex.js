var AppDispatcher = require('../dispatcher/app-dispatcher');

var changeSex = {
  emitChangeSex: function () {
    var action = {
      actionType: "CHANGESEX"
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = changeSex;