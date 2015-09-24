var React = require('react');
var styles = require('./FootBar.scss');

var FootBar = React.createClass({
  render: function () {
    var visibility = this.props.status === 'chat' ? 'none' : 'flex';
    return (
      <footer className={styles.footer} style={{'display': visibility}}>
        <i className={styles.item}><a href="#/now"><span className="fa fa-comment"></span></a></i>
        <i className={styles.item}><a href="#/all"><span className="fa fa-compass"></span></a></i>
        <i className={styles.item}><a href="#/me"><span className="fa fa-user"></span></a></i>
      </footer>
    )
  }
});

module.exports = FootBar;