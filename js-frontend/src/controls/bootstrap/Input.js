/**
 * Created by andrew on 15/02/16.
 */
import React, { PropTypes } from "react";
import { Input, Glyphicon } from "react-bootstrap";

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.array
  };

  static defaultProps = {
    label: '',
    value: null,
    errors: []
  };

  handleInput (ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList () {

    if (this.props.errors.length) {
      return (
        <div className="auth-error-message has-error">
          {this.props.errors.map((err, i) => {
            return (
              <p className="control-label inline-error-item"
                 style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}
                 key={i}>

                <Glyphicon glyph="exclamation-sign"
                           style={{
                             position: "absolute",
                             left: 0,
                             top: 2
                           }}
                /> {this.props.label} {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return <span />;
    }
  }

  render () {
    return (
      <div>
        <Input {...this.props}
          bsStyle={(this.props.errors.length) ? "error" : null}
          onChange={this.handleInput.bind(this)} />
        {this.renderErrorList()}
      </div>
    );
  }
}

export default AuthInput;
