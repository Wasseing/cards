import React, {Component, PropTypes}       	          from 'react';
import {LightCard}                                    from 'components';
import ReactCSSTransitionGroup 												from 'react-addons-css-transition-group'

export default class CardList extends Component{

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
				justifyContent:"center",
				flexWrap:"wrap",
				paddingRight:5,
				paddingLeft:5,
			},
			cardContainer:{
				margin:5,
			}
		}
    return (
				<ReactCSSTransitionGroup
					style={styles.container}
					transitionName="lightCards"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={0}>
          {this.props.list.map((card,index)=>{
						return (
							<div key={index} style={styles.cardContainer}>
								<LightCard {...card}/>
							</div>
						)
					})}
				</ReactCSSTransitionGroup>
    )
  }


};

CardList.propTypes = {
  list:PropTypes.object,
}
