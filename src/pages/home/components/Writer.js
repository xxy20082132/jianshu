import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem, Attention, WriterInfo } from '../style';

class Writer extends Component{
	render(){
		const { list } = this.props;
		return (
			<WriterWrapper>
				{ list.map((item) => {
					return (
						<WriterItem key={item.get('id')}>
							<Attention>
								<i className="iconfont">&#xe63f;</i>关注
							</Attention>
							<img className="pic" alt='' src={item.get('imgUrl')}/>
							<WriterInfo>
								<p className="title">{item.get('title')}</p>
								<p className="info">{item.get('info')}</p>
							</WriterInfo>
						</WriterItem>
					)
				})}
			</WriterWrapper>
		)
	}
}

const mapState = (state) => {
	return {
		list:state.getIn(['home', 'writerList'])
	}
}

export default connect(mapState, null)(Writer);