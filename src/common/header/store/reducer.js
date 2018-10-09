import * as constants from './constants';
import { fromJS } from 'immutable';

//此时会将里面的list的普通的数组也会变成一个immutable类型的对象
//所以在改变的时候需要注意类型统一
const defaultState = fromJS({
	focused:false,
	mouseIn:false,
	list:[],
	page:1,
	totalPage:1,
	login:true
});

export default (state=defaultState, action) => {
	switch(action.type){
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			//要改变state里面的多个数据的优雅方法使用   而不是set
			//return state.set('list', action.data)
			//.set('totalPage',action.totalPage);
			return state.merge({
				list:action.data,
				totalPage:action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.nextPage);
		default:
			return state;
	}
}