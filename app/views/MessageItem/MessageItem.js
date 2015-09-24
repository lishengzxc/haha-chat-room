var React = require('react');
var styles = require('./MessageItem.scss');

var MessageItem = React.createClass({
  render: function () {
    var rs = this.props.rs;
    var content = this.props.content;
    var avatar = this.props.avatar;

    return (
      <li className={styles[rs]}>
        <img className={styles.avatar} src={"img/avatar" + avatar + ".svg"} />
        <p className={styles.content}>{content}</p>
      </li>
    );
  }
});

module.exports = MessageItem;