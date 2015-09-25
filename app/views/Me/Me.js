var React = require('react');
var styles = require('./Me.scss');

var SexSwitch = require('../SexSwitch/SexSwitch');

var Me = React.createClass({
  render: function () {
    return (
      <div className={styles.me}>
        <img src="img/avatar1.svg" />
        <p className={styles.name}>2333</p>
        <SexSwitch />
      </div>
    )
  }
});

module.exports = Me;