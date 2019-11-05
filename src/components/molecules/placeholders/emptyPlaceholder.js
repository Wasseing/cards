import React, { Component } from 'react';
import { Text, MainTheme } from 'components';


export class EmptyPlaceholder extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const styles = {
			text: {
				textAlign: "center",
				fontSize: 20,
				margin: 0,
				color: MainTheme.palette.primary3Color,
			},
		}
		return (
			<Text style={styles.text}>{this.props.text}</Text>
		)
	}


};