var React = require('react');
var styles = require('./Switch.scss');

var Switch = React.createClass({

  getInitialState: function () {
    return {
      check: this.props.check
    }
  },

  onChange: function () {
    this.setState({
      check: !this.state.check
    });
  },

  render: function () {
    return (
      <label className={styles.switch}>
        <input className={styles.checkbox} type="checkbox" checked={this.state.check} onChange={this.onChange} />
      </label>
    );
  }
});

module.exports = Switch;