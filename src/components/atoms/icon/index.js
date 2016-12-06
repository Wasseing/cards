import React, {Component, PropTypes}           from 'react';
import * as FontAwesome                        from 'react-icons/lib/fa';
import * as MaterialIcons                      from 'react-icons/lib/md';
import * as IonicIcons                         from 'react-icons/lib/io';

export const ICONS_FONT_NAMES = {
  FA:FontAwesome,
  MD:MaterialIcons,
  IO:IonicIcons,
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
