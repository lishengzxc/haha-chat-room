var React = require('react');
var styles = require('./ChatRoom.scss');

var MessageItem = require('../MessageItem/MessageItem');

var ChatRoom = React.createClass({

  getInitialState: function () {
    return {
      messages: []
    };
  },

  componentDidMount: function () {
    //setInterval(this.receive, 1000);
  },

  submit: function (event) {
    event.preventDefault();
    var message = this.refs.message.getDOMNode().value;
    if (!message) return;

    var messages = this.state.messages;
    messages.push({rs: 'send', content: message, avatar: 1});

    this.setState({
      messages: messages
    }, this.scroll);

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
          messages.map((result, index) => <MessageItem rs={result.rs} content={result.content} avatar={result.avatar} key={index} />)
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