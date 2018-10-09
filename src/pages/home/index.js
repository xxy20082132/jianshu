import React, { Component } from 'react';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
//import { changeHomeData } from './store/actionCreators';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js';

class Home extends Component{

	BackToTop(){
		window.scroll(0,0);
	}
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" alt='' src="//upload.jianshu.io/admin_banners/web_images/4381/3cdf43257e95766122959099cd4b41b495e6adfc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<div className="down-banner">
						<img className='down-img' alt='' src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
						<div className='down-info'>
							<h3>下载简书手机App</h3>
							<div className="description">随时随地发现和创作内容</div>
						</div>
					</div>
					<Writer />
				</HomeRight>
				{ this.props.showCroll? <BackTop onClick={this.BackToTop}>回到顶部</BackTop>:null}
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnMount(){
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents(){
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapStateToProps = (state) => ({
	showCroll:state.getIn(['home', 'showCroll'])
});

const mapStateToDispatch = (dispatch) =>{
	return {
		changeHomeData(){
			const action = actionCreators.getHomeInfo();
			dispatch(action);
		},
		changeScrollTopShow(e){
			if(document.documentElement.scrollTop > 400){
				dispatch(actionCreators.toggleToShow(true));
			}else{
				dispatch(actionCreators.toggleToShow(false));
			}
		}
	}
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);