import React, { Component } from 'react';
import { RuleListItem, EmptyPlaceholder } from 'components';

export class RulesList extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const styles = {
			container: {
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				alignSelf: "stretch",
				alignItems: "stretch",
				justifyContent: "flex-start",
				paddingTop: 10,
				paddingBottom: 10,
			},
			ruleContainer: {
				marginTop: 5,
				marginBottom: 5,
			}
		}
		if (!this.props.list || !this.props.list.size) {
			return (
				<div style={styles.container}>
					<EmptyPlaceholder key={1} text={"No Rule"} />
				</div>
			)
		}
		return (
			<div
				style={styles.container}
			>
				{
					this.props.list.map((rule, index) => {
						return (
							<div key={index} style={styles.ruleContainer}>
								<RuleListItem
									isHighlighted={this.props.highlightedRule && this.props.highlightedRule.getId() == rule.getId()}
									onRuleClicked={(event) => this.props.onRuleClicked && this.props.onRuleClicked(rule, event)}
									onRuleActivated={() => this.props.onRuleActivated && this.props.onRuleActivated(rule)}
									onRuleDeactivated={() => this.props.onRuleDeactivated && this.props.onRuleDeactivated(rule)}
									rule={rule} />
							</div>
						)
					})
				}
			</div>
		)
	}


};