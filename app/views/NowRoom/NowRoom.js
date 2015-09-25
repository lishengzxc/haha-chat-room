var React = require('react');
var styles = require('./NowRoom.scss');

var Store = require('../../stores/stores');

var getNowRoom = function () {
  return Store.getNowRoomList();
};

var RoomItem = require('../RoomItem/RoomItem');

var NowRoom = React.createClass({

  getInitialState: function () {
    return {
      nowRoomList: getNowRoom()
    };
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onAddRoom);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onAddRoom);
  },

  onAddRoom: function () {
    this.setState({
      nowRoomList: getNowRoom()
    });
  },

  render: function () {
    return (
      <ul>
      {
        this.state.nowRoomList.map(function (result, index) {
          return <RoomItem key={index} name={result.name} id={result.id} />
        })
        }
      </ul>
    )
  }
});

module.exports = NowRoom;