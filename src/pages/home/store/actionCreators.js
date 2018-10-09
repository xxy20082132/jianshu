import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const change_home_data = (data) =>({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	articleList: data.articleList,
	recommendList: data.recommendList,
	writerList: data.writerList
});

const addMoreList = (data, nextPage) => ({
	type:constants.GET_MORE_LIST,
	list:fromJS(data.articleList),
	nextPage
});

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res)=>{
			const data = res.data.data;
			dispatch(change_home_data(data));
		}).catch((res)=>{
			console.log('error')
		});
	}
}


export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page='+page).then((res) => {
			const data = res.data.data;
			dispatch(addMoreList(data,page+1));
			
		}).catch((res)=>{
			console.log('error');
		})
	}
}

export const toggleToShow = (show) => ({
	type:constants.SCROLL_TOP_SHOW,
	show
})