var React = require('react');
var styles = require('./RoomItem.scss');

var colors = require('../../util/color');

var RoomItem = React.createClass({
  render: function () {
    return (
      <li className={styles.item}>
        <a className={styles.a} href="#/chat">
          <i className={styles.icon + " fa fa-users"} style={{color: colors.get()}}></i>
          <div className={styles.content}>
            <p className="name">哈哈的房间</p>

          </div>
        </a>
      </li>
    )
  }
});

module.exports = RoomItem;