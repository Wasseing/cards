import React, {Component, PropTypes}       	          				from 'react';
import {Card,Toggle}											                    from 'material-ui';
import {Text, MainTheme, CardList}      	                    from 'components';

export default class RuleListItem extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	onClick(event){
		this.props.onRuleClicked && this.props.onRuleClicked();
	}

	onToggle(event,value){
		value?this.activate():this.deactivate();
	}

	activate(){
		this.props.onRuleActivated && this.props.onRuleActivated()
	}

	deactivate(){
		this.props.onRuleDeactivated && this.props.onRuleDeactivated();
	}

  render(){
		const styles = {
			card:{
				padding:20,
				backgroundColor:this.props.isHighlighted?MainTheme.palette.accent2Color:null,
				cursor:"pointer",
			},
			container:{
        display:'flex',
				flexDirection:'column',
				alignItems:"stretch",
			},
			line:{
				display:'flex',
				flexDirection:'row',
				alignItems:"center",
				justifyContent:"space-between",
			},
			name:{
				cursor:"pointer",
				textAlign:"left",
				fontSize:20,
      },
		}
    return (
      <Card onClick={this.onClick.bind(this)} style={styles.card}>
				<div style={styles.container}>
					<div style={styles.line}>
						<Text style={styles.name}>{this.props.rule.getName()}</Text>
						<div>
							<Toggle onToggle={this.onToggle.bind(this)} defaultToggled={this.props.rule.isActivated()} style={styles.toggle}/>
						</div>
					</div>
        </div>
      </Card>
    )
  }


};

RuleListItem.propTypes = {
	isHighlighted:PropTypes.bool,
	rule:PropTypes.object.isRequired,
	onRuleClicked:PropTypes.func,
	onRuleActivated:PropTypes.func,
	onRuleDeactivated:PropTypes.func,
}
