var React = require('react');
var styles = require('./ChatRoom.scss');

var MessageItem = require('../MessageItem/MessageItem');

var Store = require('../../stores/stores');
var getSexValue = Store.getSex;

var ChatRoom = React.createClass({

  time: new Date().getTime(),

  getInitialState: function () {
    return {
      messages: []
    };
  },

  componentDidMount: function () {
    var that = this;
    socket.on('receiveMessage:' + nowRoomId, function (data) {
      if (that.time !== data.time) {

        var message = data.message;
        var sex = data.sex;

        var messages = that.state.messages;
        messages.push({
          rs: 'receive',
          content: message,
          sex: sex
        });

        that.setState({
          messages: messages
        }, that.scroll);
      }

    });
  },

  submit: function (event) {
    event.preventDefault();

    this.time = new Date().getTime();

    var message = this.refs.message.getDOMNode().value;
    if (!message) return;

    var messages = this.state.messages;
    var sex = getSexValue() ? '2' : '1';

    messages.push({
      rs: 'send',
      content: message,
      sex: sex
    });

    this.setState({
      messages: messages
    }, this.scroll);

    socket.emit('sendMessage', {message: message, id: nowRoomId, time: this.time, sex: sex});

    this.refs.message.getDOMNode().value = '';


  },

  receive: function () {
    if (Math.random() > 0.5) {
      var messages = this.state.messages;
      messages.push({rs: 'receive', content: "你好" + new Date().getTime(), avatar: 2});

      this.setState({
        messages: messages
      }, this.scroll);
    }
  },

  scroll: function () {

    var lists = this.refs.ul.getDOMNode().children;
    lists[lists.length - 1].scrollIntoView();

  },

  render: function () {
    var messages = this.state.messages;

    return (
      <div className={styles.chatroom}>
        <ul className={styles.chatlist} ref="ul">
        {
          messages.map((result, index) => <MessageItem rs={result.rs} content={result.content} avatar={result.sex} key={index} />)
          }
        </ul>
        <form className={styles.inputgroup} onSubmit={this.submit}>
          <input className={styles.input} type="text" ref="message"/>
          <button className={styles.submit} type="submit">
            <i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>
    )
  }
});

module.exports = ChatRoom;