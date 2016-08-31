/**
 * Created by andrew on 15/02/16.
 */
import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import Spinner from "react-loader";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    spinColorDark: PropTypes.string,
    spinColorLight: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  static defaultProps = {
    icon: <Glyphicon glyph="heart" />,
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3
    },
    spinColorDark: "#444",
    spinColorLight: "#fff",
    children: <span>Submit</span>,
    style: {}
  };

  renderIcon () {
    let icon;

    if (this.props.loading) {
      let spinColor = (!this.props.bsStyle || this.props.bsStyle === "default")
        ? this.props.spinColorDark
        : this.props.spinColorLight;

      icon = <Spinner {...this.props.spinConfig} color={spinColor} loaded={false} />;
    } else {
      icon = this.props.icon;
    }

    return (
      <div style={{
        position: "relative",
        display: "inline-block",
        marginRight: "6px",
        width: "10px",
        height: "10px",
        top: "1px"
      }}>
        {icon}
      </div>
    );
  }

  render () {
    return (
      <Button
        onClick={this.props.onClick}
        disabled={this.props.disabled || this.props.loading}
        bsStyle={this.props.bsStyle}
        className={this.props.className}
        type={this.props.type}
        style={this.props.style}
        bsSize={this.props.bsSize}>
        {this.renderIcon()} {this.props.children}
      </Button>
    );
  }
}

export default ButtonLoader;
