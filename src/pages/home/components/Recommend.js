import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component{
	render(){
		const { list, handleDeleteItem } = this.props;
		return (
			<RecommendWrapper>
				{ list.map((item) => {
					return (
						<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} onClick={() => {handleDeleteItem(item.get('id'))}}></RecommendItem>
					)
				})}
			</RecommendWrapper>
		)
	}
}

const mapStateToprops = (state) => {
	return {
		list:state.getIn(['home', 'recommendList'])
	}
}

const mapStateToDispatch = (dispatch) => {
	return {
		handleDeleteItem(id){
			const action = {
				type:'delete_recommend_item',
				id
			};
			dispatch(action);
		}
	}
}
export default connect(mapStateToprops, mapStateToDispatch)(Recommend);
