import React, { Component } from 'react';
import { LightTrophy } from 'components';

export class TrophyList extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const styles = {
			container: {
				alignSelf: 'stretch',
				display: 'flex',
				flexDirection: 'row',
				alignItems: "center",
				justifyContent: "flex-start",
				paddingRight: 5,
				paddingLeft: 5,
			},
			trophyContainer: {
				marginRight: 5,
				marginLeft: 5,
			}
		}
		return (
			<div
				style={styles.container}
			>
				{this.props.list.map((trophy) => {
					return (
						<div key={trophy.name} style={styles.trophyContainer}>
							<LightTrophy trophy={trophy} />
						</div>
					)
				})}
			</div>
		)
	}


};