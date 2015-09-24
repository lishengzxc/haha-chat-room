var React = require('react');
var styles = require('./CreateRoom.scss');

var CreateRoom = React.createClass({

  componentWillUnmount: function () {
    document.body.removeChild(document.querySelector('.createRoom'));
  },

  hide: function (event) {
    event.preventDefault();
    React.unmountComponentAtNode(document.querySelector('.createRoom'));
  },

  addNewRoom: function (event) {
    event.preventDefault();
    socket.emit('addRoom', { name: this.refs.roomName.getDOMNode().value });
    this.hide(event);
  },

  render: function () {
    return (
      <div className={styles.create}>
        <form className={styles.form} onSubmit={this.addNewRoom}>
          <input className={styles.input} placeholder="请输入你要创建的房间名字" ref="roomName" />
          <div className={styles.buttongroup}>
            <button type="submit" className={styles.submit}>
              <i className="fa fa-check"></i>
            </button>
            <button className={styles.submit} onClick={this.hide}>
              <i className="fa fa-remove"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
});

CreateRoom.show = function () {
  var createRoom = document.createElement('div');
  createRoom.className = 'createRoom';
  document.body.appendChild(createRoom);
  React.render(<CreateRoom />, document.querySelector('.createRoom'));
};

CreateRoom.hide = function () {
  React.unmountComponentAtNode(document.querySelector('.createRoom'));
};

module.exports = CreateRoom;