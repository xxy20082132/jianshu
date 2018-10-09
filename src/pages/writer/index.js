import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Writer extends Component{
	render(){
		if(this.props.loginStatus){
			return (
				<div>写文章界面</div>
			)
		}else{
			return <Redirect to='/login' />
		}
	}
}

const mapState = (state) => ({
	loginStatus:state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Writer);
