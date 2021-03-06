"use strict";

var React = require("react/dist/react.min");

var ZIndexController = React.createClass({

  getInitialState: function() {
    return {
      zIndex: this.props.zIndex || 0
    };
  },

  render: function() {
    return (
      <div className="zindex-controller">
        layer position: <span className="zmod" onClick={this.zDown}>◀</span> {this.state.zIndex} <span className="zmod" onClick={this.zUp}>▶</span>
      </div>
    );
  },

  zUp: function() {
    this.setState({ zIndex: this.state.zIndex + 1 }, function() {
      if(this.props.onChange) {
        this.props.onChange(this.state.zIndex);
      }
    });
  },

  zDown: function() {
    this.setState({ zIndex: Math.max(0, this.state.zIndex - 1) }, function() {
      if(this.props.onChange) {
        this.props.onChange(this.state.zIndex);
      }
    });
  }
});

module.exports = ZIndexController;
