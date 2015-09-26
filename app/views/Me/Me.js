var React = require('react');
var styles = require('./Me.scss');

var SexSwitch = require('../SexSwitch/SexSwitch');

var Store = require('../../stores/stores');
var getSexValue = Store.getSex;
var getNameValue = Store.getName;

var changeName = require('../../actions/changeName');

var Me = React.createClass({

  getInitialState: function () {
    return {
      sex: getSexValue(),
      inputDisplay: false,
      name: getNameValue()
    }
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChangeSex);
    Store.addChangeListener(this.onChangeName);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChangeSex);
    Store.removeChangeListener(this.onChangeName);
  },

  onChangeSex: function () {
    this.setState({
      sex: Store.getSex()
    });
  },

  onChangeName: function () {
    this.setState({
      name: getNameValue()
    })
  },

  showEdit: function () {
    this.setState({
      inputDisplay: !this.state.inputDisplay
    });
  },

  changeNameValue: function (event) {
    event.preventDefault();
    changeName.emitChangeName(this.refs.name.getDOMNode().value);
    this.setState({
      inputDisplay: !this.state.inputDisplay
    });
  },

  render: function () {
    var sex = this.state.sex ? '2' : '1';
    var isEdit = this.state.inputDisplay ? 'flex' : 'none';
    return (
      <div className={styles.me}>
        <img src={"img/avatar" + sex + ".svg"} />
        <p onClick={this.showEdit} className={styles.name} style={{
          display: this.state.inputDisplay ? 'none' : 'block'
        }}>{this.state.name} <i className={"fa fa-pencil-square-o " + styles.edit}></i></p>
        <form className={styles.inputgroup} style={{
          display: isEdit
        }} onSubmit={this.changeNameValue}>
          <input className={styles.nameinput} type="text" defaultValue={this.state.name} ref="name"/>
          <button className={styles.submit} type="submit"><i className="fa fa-check"></i></button>
        </form>
        <SexSwitch />
      </div>
    )
  }
});

module.exports = Me;