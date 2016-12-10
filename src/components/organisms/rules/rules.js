import React, {Component, PropTypes}       													from 'react';
import {Card} 																											from 'material-ui/Card';
import {List} 																											from 'immutable';
import {MainTheme, Text, RulesList, CardList} 											from 'components';

export default class Rules extends Component{

	constructor(props){
		super(props);
		this.state = {
			highlightedRule : null,
		}
	}

	componentWillUpdate(nextProps, nextState){
		if(nextProps.deck.get("currentCard") > this.props.deck.get("currentCard")){
			this.applyRules(nextProps);
		}
	}

	applyRules(nextProps){
		const increments = nextProps.rules.get("list").map((rule)=>{
			return rule.apply(nextProps.deck, nextProps.team);
		})
		this.props.onRulesApplied(increments);
	}

	getCardList(){
		if(!this.state.highlightedRule){return List([])};
		return this.state.highlightedRule.getEligibleCards(this.props.deck) ;
	}

	highlightRule(rule){
		if(!rule  || this.state.highlightedRule == rule.getId()){return}
		this.setState({highlightedRule:rule});
	}

  render(){
		const styles = {
			card:{
				padding:20,
        flex:1,
			},
			container:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:'flex-start',
        borderRadius:15,
      },
			content:{
				display:"flex",
				flex:1,
				flexDirection:"row",
				flexWrap:'wrap',
				alignItems:"stretch",
				justifyContent:'center',
			},
			title:{
				textAlign:"center",
				fontSize:50,
				fontWeight:"bold",
				margin:0,
			},
			separator:{
        height:1,
        backgroundColor:MainTheme.palette.primary3Color,
      },
      listContainer:{
				flex:1,
        display:"flex",
        flexDirection:'column',
				alignItems:"center",
				justifyContent:"center",
      },
			cardListContainer:{
				flex:1,
				display:"flex",
        flexDirection:'column',
				alignItems:"center",
				justifyContent:"center",
			},
		}
    return (
			<Card style={styles.card}>
				<div style={styles.container}>
					<Text style={styles.title}>DECK</Text>
          <div style={styles.separator}/>
					<div style={styles.content}>
						<div style={styles.listContainer}>
	            <RulesList
								highlightedRule={this.state.highlightedRule}
								onRuleClicked={this.highlightRule.bind(this)}
								onRuleActivated={this.props.onRuleActivated}
								onRuleDeactivated={this.props.onRuleDeactivated}
								list={this.props.rules.get("list")}/>
	          </div>
						<div style={styles.cardListContainer}>
	            <CardList list={this.getCardList()}/>
	          </div>
					</div>
				</div>
			</Card>
    )
  }


};

Rules.propTypes = {
	rules:PropTypes.object.isRequired,
	game:PropTypes.object.isRequired,
	deck:PropTypes.object.isRequired,
	team:PropTypes.object.isRequired,
	onRuleActivated:PropTypes.func,
	onRuleDeactivated:PropTypes.func,
	onRulesApplied:PropTypes.func,
}
