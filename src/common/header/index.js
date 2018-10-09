import React , { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, 
	SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style.js';
import { actionCreators }  from  './store';
import { actionCreators as loginActionCreator } from '../../pages/login/store';

//实现热门搜索框的显示和隐藏有两种方法
//1、可以增加样式名，<SearchInfo className={focused ? 'show':'hide'}> 根据focused这个变量来显示，然后在style.js中增加判断
//&.show{display:block} &.hide{display:none}
/*增加一个函数通过参数判断
const getListArea = (show) => {
	if(show){
		return (<SearchInfo>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch>换一批</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchInfoList>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>思维导图</SearchInfoItem>
									<SearchInfoItem>时间管理</SearchInfoItem>
									<SearchInfoItem>交友</SearchInfoItem>
									<SearchInfoItem>自律</SearchInfoItem>
								</SearchInfoList>
							</SearchInfo>)
	}else{
		return null;
	}
}
*/

class Header extends Component{
	render(){
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
				<HeaderWrapper>
					<Link to='/'>
						<Logo></Logo>
					</Link>
					<Nav>
						<NavItem className='left active'>首页</NavItem>
						<NavItem className='left'>下载App</NavItem>
						{ login ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>}
						<NavItem className='right'>
							<i className="iconfont">&#xe636;</i>
						</NavItem>
						<SearchWrapper>
							<CSSTransition
								timeout={200}
								in={focused}
								classNames="slide"
							>
								<NavSearch 
									className={focused ? 'focused':''}
									onFocus={() => handleInputFocus(list)}
									onBlur={handleInputBlur}></NavSearch>
							</CSSTransition>
							<i className={focused?'iconfont focused zoom':'iconfont zoom'}>&#xe60c;</i>
							{ this.getListArea() }
						</SearchWrapper>
					</Nav>
					<Addtion>
						<Link to='/writer'>
							<Button className='writting'>
								<i className="iconfont">&#xe615;</i>写文章
							</Button>
						</Link>
						<Button className='reg'>注册</Button>
					</Addtion>
				</HeaderWrapper>
			)
	}
	getListArea(){
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS(); //将immutable类型的数组转换成普通的js数组
		const pageList = [];

		if(newList.length){
			for(let i=(page-1)*10; i<page*10;i++){
				if(newList[i]){
					pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
				}
			}
		}

		if(focused || mouseIn){
			return (<SearchInfo 
								onMouseEnter={handleMouseEnter} 
								onMouseLeave={handleMouseLeave}>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
										<i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i> 换一批
									</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchInfoList>
									{pageList}
								</SearchInfoList>
							</SearchInfo>)
		}else{
			return null
		}
	}
}


const mapStateToProps = (state) => {
	return {
		//使用了immutable后这里state.header是一个immutable对象，此时不能使用.focused来获取数据，
		//获取数据需要使用get， 设置数据需要使用set
		//在总的reducer文件中使用了redux-immutable库后，此时的state是一个immutable对象
		//getIn的用法
		//state.getIn(['header', 'focused']) 等效下面
		focused:state.get('header').get('focused'),
		list:state.get('header').get('list'),
		totalPage:state.get('header').get('totalPage'),
		page:state.getIn(['header', 'page']),
		mouseIn:state.getIn(['header', 'mouseIn']),
		login:state.getIn(['login', 'login'])
	}
}

//组件改变store的数据时需要调用dispatch方法。
const mapDispatchToProps = (dispatch) => {
	return {
			handleInputFocus(list){
				/*
				if(!list.size){
					dispatch(actionCreators.getList());  //派发一个action
				}*/
				(list.size === 0) && dispatch(actionCreators.getList());
				dispatch(actionCreators.searchFocusAction());
			},
			handleInputBlur(){
				dispatch(actionCreators.searchBlurAction());
			},
			handleMouseEnter(){
				dispatch(actionCreators.mouseEnter());
			},
			handleMouseLeave(){
				dispatch(actionCreators.mouseLeave());
			},
			handleChangePage(page, totalPage, spin){
				let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
				if(originAngle){
					originAngle = parseInt(originAngle, 10);
				}else{
					originAngle = 0;
				}
				spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
				let nextPage = page + 1;
				if(nextPage > totalPage){
					nextPage = 1;
				}
				dispatch(actionCreators.changePage(nextPage));
			},
			logout(){
				dispatch(loginActionCreator.logout());
			}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);