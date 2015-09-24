var React = require('react');
var styles = require('./NowRoom.scss');

var RoomItem = require('../RoomItem/RoomItem');

var NowRoom = React.createClass({
  render: function () {
    return (
      <ul>
        <RoomItem />
      </ul>
    )
  }
});

module.exports = NowRoom;