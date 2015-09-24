var React = require('react');
var styles = require('./Me.scss');

var Me = React.createClass({
  render: function () {
    return (
      <div className={styles.me}>
        <img src="img/avatar1.svg" />
        <p className={styles.name}>2333</p>
      </div>
    )
  }
});

module.exports = Me;