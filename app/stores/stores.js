var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;

function assign(target, ...sources) {
  sources.forEach(source => {
    Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {}));
  });
  return target;
}


var nowRoomList = [];
var allRoomList = [];

var Store = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getAllRoomList: function () {
    return allRoomList;
  },

  getNowRoomList: function () {
    return nowRoomList;
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {

    case 'ADDROOM':
      allRoomList = action.data;
      Store.emitChange();
      break;

    case 'ENTERROOM':
      var tmpList = nowRoomList.filter(function (result) {
        return result.id !== action.data.id;
      });
      tmpList.push(action.data);
      nowRoomList = tmpList;

      Store.emitChange();
      break;
  }
});

module.exports = Store;