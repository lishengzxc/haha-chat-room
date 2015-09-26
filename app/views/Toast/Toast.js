var React = require('react');
var styles = require('./Toast.scss');

var Toast = React.createClass({

  componentWillUnmount: function () {
    document.body.removeChild(document.querySelector('.toast'));
  },

  render: function () {
    return (
      <div className={styles.toast}>
      {this.props.content}
      </div>
    )
  }

});

Toast.timer;

Toast.show = function (content) {
  if (document.querySelector('.toast')) {
    Toast.hide();
  }

  var toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);
  React.render(<Toast content={content + ' 进入房间~'} />, document.querySelector('.toast'));
  Toast.timer = setTimeout(function () {
    Toast.hide();
  }, 2000);

};

Toast.hide = function () {
  clearTimeout(Toast.timer);
  React.unmountComponentAtNode(document.querySelector('.toast'));
};

module.exports = Toast;