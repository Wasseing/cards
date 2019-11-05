import React, { Component } from 'react';
import { LightCard } from 'components';

export class CardList extends Component {

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
				justifyContent: "center",
				flexWrap: "wrap",
				paddingRight: 5,
				paddingLeft: 5,
			},
			cardContainer: {
				margin: 5,
			}
		}
		return (
			<div
				style={styles.container}
			>
				{this.props.list.map((card, index) => {
					return (
						<div key={index} style={styles.cardContainer}>
							<LightCard {...card} />
						</div>
					)
				})}
			</div>
		)
	}


};