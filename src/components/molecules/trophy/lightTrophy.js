import React, {Component, PropTypes}      from 'react';
import {Card}															from 'material-ui/Card';
import {Icon,MainTheme}										from 'components';

export default class LightTrophy extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
		const styles = {
			container:{
				borderRadius:40,
			},
			icon:{
				display:'flex',
				flexDirection:'row',
				alignItems:"center",
				justifyContent:"center",
				padding:7,
				borderRadius:40,
				backgroundColor:this.props.trophy.backgroundColor,
				fontSize:15,
				color:this.props.trophy.iconColor,
			}
		}
    return (
				<Card key={"card"} title={this.props.trophy.description} style={styles.container}>
					<Icon style={styles.icon} family={this.props.trophy.iconFamily} name={this.props.trophy.iconName}/>
	      </Card>
    )
  }


};

LightTrophy.propTypes = {
  trophy:PropTypes.object,
}
