import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                <div id="text">{this.props.text}</div>
                <div id="author">{this.props.author}</div>
            </div>
        )
    }
}

export default Quote;