/**
 * Created by andrew on 15/02/16.
 */
import React, { PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";


class AuxErrorLabel extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    errors: PropTypes.array
  };

  static defaultProps = {
    label: '',
    errors: []
  };
  
//        <Input {...this.props}
//   bsStyle={(this.props.errors.length) ? "error" : null}
// onChange={this.handleInput.bind(this)} />
  render () {
    const { errors } = this.props;

    if (errors.length) {
      return (
        <div className='has-error'>
          { errors.map((err, i) => {
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
}

export default AuxErrorLabel;
