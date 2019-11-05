import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa';

export const ICONS_FONT_NAMES = {
  FA: FontAwesome,
}

export class Icon extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const Component = ICONS_FONT_NAMES[this.props.family][this.props.name];
    return (
      <Component style={this.props.style} />
    )
  }


};
