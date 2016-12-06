import React, {Component, PropTypes}       	          from 'react';
import {LightTrophy}                                  from 'components';
import ReactCSSTransitionGroup 												from 'react-addons-css-transition-group'

export default class TrophyList extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
		const styles = {
			container:{
				alignSelf:'stretch',
				display:'flex',
				flexDirection:'row',
				alignItems:"center",
				justifyContent:"flex-start",
				paddingRight:5,
				paddingLeft:5,
			},
			trophyContainer:{
				marginRight:5,
				marginLeft:5,
			}
		}
    return (
				<ReactCSSTransitionGroup
					style={styles.container}
					transitionName="trophy"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={0}>
          {this.props.list.map((trophy)=>{
						return (
							<div key={trophy.name} style={styles.trophyContainer}>
								<LightTrophy trophy={trophy}/>
							</div>
						)
					})}
				</ReactCSSTransitionGroup>
    )
  }


};

TrophyList.propTypes = {
  list:PropTypes.object,
}
