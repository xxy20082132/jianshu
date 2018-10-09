import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component{

	render(){
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
			</DetailWrapper>
		)
	}

	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title:state.getIn(['detail', 'title']),
	content:state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => {
	return {
		getDetail(id){
			const action = actionCreators.getDetail(id);
			dispatch(action);
		}
	}
};

export default connect(mapState, mapDispatch)(withRouter(Detail));