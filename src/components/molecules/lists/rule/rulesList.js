import React, {Component, PropTypes}       	from 'react';
import {RuleListItem, EmptyPlaceholder}		  from 'components';
import ReactCSSTransitionGroup 							from 'react-addons-css-transition-group'

export default class RulesList extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
		const styles = {
			container:{
				display:'flex',
				flex:1,
				flexDirection:'column',
				alignSelf:"stretch",
				alignItems:"stretch",
				justifyContent:"flex-start",
				paddingTop:10,
				paddingBottom:10,
			},
			ruleContainer:{
				marginTop:5,
				marginBottom:5,
			}
		}
		if(!this.props.list || !this.props.list.size ){
			return (
				<div style={styles.container}>
					<EmptyPlaceholder key={1} text={"No Rule"}/>
				</div>
			)
		}
    return (
				<ReactCSSTransitionGroup
					style={styles.container}
					transitionName="ruleListItem"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnterTimeout={0}
					transitionLeaveTimeout={0}>
					{
						this.props.list.map((rule,index)=>{
							return(
								<div key={index} style={styles.ruleContainer}>
                  <RuleListItem
										 isHighlighted={this.props.highlightedRule && this.props.highlightedRule.getId()  == rule.getId()}
										 onRuleClicked={(event)=>this.props.onRuleClicked && this.props.onRuleClicked(rule,event)}
										 onRuleActivated={()=>this.props.onRuleActivated && this.props.onRuleActivated(rule)}
										 onRuleDeactivated={()=>this.props.onRuleDeactivated && this.props.onRuleDeactivated(rule)}
										 rule={rule}/>
								</div>
							)
						})
					}
				</ReactCSSTransitionGroup>
    )
  }


};

RulesList.propTypes = {
  list:PropTypes.object,
	highlightedRules:PropTypes.number,
	onRuleClicked:PropTypes.func,
	onRuleActivated:PropTypes.func,
	onRuleDeactivated:PropTypes.func,
}
