import { constants } from './index.js';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeList = (data) => ({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length/10)
});

export const searchFocusAction = () => ({
	type:constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
	type:constants.SEARCH_BLUR
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res)=>{
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch((res)=>{
			console.log('error');
		})
	}
};

export const mouseEnter = () => ({
	type:constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type:constants.MOUSE_LEAVE
});

export const changePage = (nextPage) => ({
	type:constants.CHANGE_PAGE,
	nextPage
});
