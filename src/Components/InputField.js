import React from "react";

class InputField extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default InputField;