import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    );
  }
} 

export default SubmitButton;