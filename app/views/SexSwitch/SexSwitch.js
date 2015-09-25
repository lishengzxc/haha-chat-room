var React = require('react');
var styles = require('./SexSwitch.scss');

var Switch = require('../Switch/Switch');

var SexSwitch = React.createClass({

  getSex: function () {

  },

  render: function () {
    return (
      <div className={styles.sex} onClick={this.getSex} >
        <p className={styles.content}>{'男生'}</p>
        <Switch ref="switch"/>
      </div>
    );
  }
});

module.exports = SexSwitch;