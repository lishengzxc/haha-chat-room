var React = require('react');
var styles = require('./MessageItem.scss');

var cn = require('classnames');

var MessageItem = React.createClass({
  render: function () {
    var rs = this.props.rs;
    var content = this.props.content;
    var avatar = this.props.avatar;
    var name = this.props.name

    return (
      <li className={cn(styles.li, styles[rs])}>
        <small className={styles.small}>{name}</small>
        <div className={styles.div}>
          <img className={styles.avatar} src={"img/avatar" + avatar + ".svg"} />
          <p className={styles.content}>{content}</p>
        </div>
      </li>
    );
  }
});

module.exports = MessageItem;