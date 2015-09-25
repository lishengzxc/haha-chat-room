var React = require('react');
var styles = require('./AllRoom.scss');

var Store = require('../../stores/stores');

var getAllRoom = function () {
  return Store.getAllRoomList();
};

var RoomItem = require('../RoomItem/RoomItem');

var AllRoom = React.createClass({

  getInitialState: function () {
    return {
      allRoomList: getAllRoom()
    }
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onAddRoom);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onAddRoom);
  },

  onAddRoom: function () {
    this.setState({
      allRoomList: getAllRoom()
    });
  },

  render: function () {
    return (
      <ul>
      {
        this.state.allRoomList.map(function (result, index) {
          return <RoomItem key={index} name={result.name} id={result.id} />
        })
        }
      </ul>
    )
  }
});

module.exports = AllRoom;