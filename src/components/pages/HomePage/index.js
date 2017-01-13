import React, {Component}       																																from 'react';
import {connect}                																																from 'react-redux';
import { PageTemplate, Team, Deck, ScoreShares, ScoreTimeline, Rules, FindTarget }   						from 'components';
import { TeamActionner, DeckActionner, GameActionner, RulesActionner }													from 'reduxApp';

class HomePage extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	onPlayerAdded(playersName){
		this.props.dispatch(TeamActionner.addPlayer(playersName));
	}

	onPlayerRemoved(player){
		this.props.dispatch(TeamActionner.removePlayer(player));
	}

	onPlayerClick(player){
		this.props.dispatch(TeamActionner.incrementPlayerScore(player, 1, null));
	}

	onRulesApplied(incrementsByRule){
		if(!incrementsByRule){return};
		incrementsByRule.map((ruleIncrements)=>{
			if(!ruleIncrements){return};
			ruleIncrements.map((increment)=>{
				increment.giving?
				this.props.dispatch(TeamActionner.incrementPlayerGave(increment.player, increment.value, increment.rule))
				:
				this.props.dispatch(TeamActionner.incrementPlayerScore(increment.player, increment.value, increment.rule))
			})
		})
	}

	onThrophysRulesApplied(actionsByRule){
		if(!actionsByRule){return};
		actionsByRule.map((actions)=>{
			if(!actions){return};
			actions.map((action)=>{
				action.giving?
				this.props.dispatch(TeamActionner.addTrophyToPlayer(action.player, action.trophy, action.rule))
				:
				this.props.dispatch(TeamActionner.removeTrophyToPlayer(action.player, action.trophy, action.rule))
			})
		})
	}

	onRuleActivated(rule){
		if(!rule || !rule.getId){return}
		this.props.dispatch(RulesActionner.activateRule(rule.getId()));
	}

	onRuleDeactivated(rule){
		if(!rule || !rule.getId){return}
		this.props.dispatch(RulesActionner.deactivateRule(rule.getId()));
	}

	onSetPlayerColorClick(player){
		this.props.dispatch(TeamActionner.setPlayerColor(player));
	}

	onCardClick(card){
		this.props.dispatch(GameActionner.nextRound());
		this.props.dispatch(DeckActionner.next());
		this.props.dispatch(TeamActionner.next());
	}

	onSetRandomPlayerClicked(){
		this.props.dispatch(TeamActionner.setRandomPlayerAsCurrent());
	}

	onShuffleDeck(){
		this.props.dispatch(DeckActionner.shuffle());
	}

	onDeckReset(){
		this.props.dispatch(DeckActionner.reset());
	}

	addDeck(){
		this.props.dispatch(DeckActionner.addDeck());
	}

	onResetTeam(){
		this.props.dispatch(TeamActionner.reset());
	}

  render(){
    return (
      <PageTemplate>
				<div style={{margin:10, display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<Deck addDeck={this.addDeck.bind(this)} onResetDeck={this.onDeckReset.bind(this)} onShuffleDeck={this.onShuffleDeck.bind(this)} onCardClick={this.onCardClick.bind(this)} deck={this.props.deck}/>
				</div>
				<div style={{margin:10, display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<Team onSetPlayerColorClick={this.onSetPlayerColorClick.bind(this)} onResetTeam={this.onResetTeam.bind(this)} onSetRandomPlayerClicked={this.onSetRandomPlayerClicked.bind(this)} onPlayerClick={this.onPlayerClick.bind(this)} team={this.props.team} playerAdded={this.onPlayerAdded.bind(this)} playerRemoved={this.onPlayerRemoved.bind(this)}/>
				</div>
				<div style={{margin:10,minWidth:"90%", display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<Rules onRuleDeactivated={this.onRuleDeactivated.bind(this)} onRuleActivated={this.onRuleActivated.bind(this)} onRulesApplied={this.onRulesApplied.bind(this)} onThrophysRulesApplied={this.onThrophysRulesApplied.bind(this)} game={this.props.game} deck={this.props.deck} team={this.props.team} rules={this.props.rules} />
				</div>
				<div style={{margin:10, minWidth:"90%", display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<ScoreTimeline team={this.props.team} />
				</div>
				<div style={{margin:10, display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<ScoreShares team={this.props.team} />
				</div>
				<div style={{margin:10, minWidth:"25%", display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"center"}}>
					<FindTarget team={this.props.team} />
				</div>
			</PageTemplate>
    )
  }

};

function selectPropertyFromStore(state) {
	return {
		team:state.Team,
		game:state.Game,
		deck:state.Deck,
		rules:state.Rules,
	}
}

export default connect(selectPropertyFromStore)(HomePage);
