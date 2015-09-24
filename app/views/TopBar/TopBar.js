var React = require('react');
var styles = require('./TopBar.scss');

var CreateRoom = require('../CreateRoom/CreateRoom');

var TopBar = React.createClass({

  showCreateRoomPage: function () {
    CreateRoom.show();
  },

  render: function () {
    return (
      <header className={styles.header}>
        <img className={styles.avatar} src="img/avatar1.svg" />
        <div className={styles.title}>
          {
            {
              'now': '我的聊天室',
              'all': '所有聊天室',
              'me': '个人中心'
            }[this.props.title]
            }
        </div>
        <i className={styles.plus + ' fa fa-plus'} onClick={this.showCreateRoomPage}></i>
      </header>
    )
  }
});

module.exports = TopBar;