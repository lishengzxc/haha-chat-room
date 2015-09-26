var React = require('react');
var styles = require('./TopBar.scss');

var CreateRoom = require('../CreateRoom/CreateRoom');

var Store = require('../../stores/stores');
var getSexValue = Store.getSex;

var TopBar = React.createClass({

  getInitialState: function () {
    return {
      sex: getSexValue()
    }
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChangeSex);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChangeSex);
  },

  onChangeSex: function () {
    this.setState({
      sex: Store.getSex()
    });
  },

  showCreateRoomPage: function () {
    CreateRoom.show();
  },

  render: function () {
    var sex = this.state.sex ? '2' : '1';
    return (
      <header className={styles.header}>
        <img className={styles.avatar} src={"img/avatar" + sex + ".svg"} />
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