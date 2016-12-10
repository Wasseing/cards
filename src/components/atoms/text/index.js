import React, {Component, PropTypes}       													from 'react';

export default class Text extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
    return (
			<span onClick={this.props.onClick} style={{...this.props.style, fontFamily:'Roboto, sans-serif',userSelect:"none"}}>{this.props.children}</span>
    )
  }

};
