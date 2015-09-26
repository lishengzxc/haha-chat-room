var React = require('react');
var styles = require('./RoomItem.scss');

var colors = require('../../util/color');

var enterRoom = require('../../actions/enterRoom');


var RoomItem = React.createClass({

  chooseRoom: function (event) {
    if (window.location.hash.substr(2) === 'all') {
      if (confirm('确认要进入这个房间吗？')) {
        enterRoom.emitEnterRoom(this.props);
      } else {
        return event.preventDefault()
      }
    }
    nowRoomId = this.props.id;
  },

  render: function () {
    return (
      <li className={styles.item}>
        <a className={styles.a} href="#/chat" onClick={this.chooseRoom}>
          <i className={styles.icon + " fa fa-users"} style={{color: colors.get()}}></i>
          <div className={styles.content}>
            <p className="name">{this.props.name}
              <small className={styles.small}>{this.props.id}</small>
            </p>
          </div>
        </a>
      </li>
    )
  }
});

module.exports = RoomItem;