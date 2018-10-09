import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style.js';

class Topic extends Component{
	render(){
		const { list } = this.props;
		return (
			<TopicWrapper>
				{ list.map((item, index) => {
					return (
							<TopicItem key={item.get('id')}>
								<img className="topic-pic" alt='' src={item.get('imgUrl')}/>
								{item.get('title')}
							</TopicItem>
						)
				})}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list:state.getIn(['home','topicList'])
	}
}
export default connect(mapStateToProps, null)(Topic);