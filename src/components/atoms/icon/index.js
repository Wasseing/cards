import React, {Component, PropTypes}           from 'react';
import * as FontAwesome                        from 'react-icons/lib/fa';

export const ICONS_FONT_NAMES = {
  FA:FontAwesome,
}

export default class Icon extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
    const Component = ICONS_FONT_NAMES[this.props.family][this.props.name];
    return (
      <Component style={this.props.style}/>
    )
  }


};

Icon.propTypes = {
  name:PropTypes.string,
  family:PropTypes.string,
  style:PropTypes.object,
}
