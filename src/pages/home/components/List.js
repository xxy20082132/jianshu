import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators';
import { ListItem, ListInfo, LoadMore } from '../style.js';

class List extends Component{
	render(){
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{ list.map((item, index) => (
					<Link key={index} to={'/detail/'+item.get('id')}>
						<ListItem>
							<img className="pic" alt='' src={item.get('imgUrl')}/>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
					</Link>
				))}
				<LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list:state.getIn(['home','articleList']),
		page:state.getIn(['home', 'articlePage'])
	}
};

const mapStateToDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page));
	}
});


export default connect(mapStateToProps, mapStateToDispatch)(List);
