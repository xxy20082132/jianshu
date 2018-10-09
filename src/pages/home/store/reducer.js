import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	writerList:[],
	articlePage:1,
	showCroll:false
});

export default (state=defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			const { topicList, articleList, recommendList, writerList } = action;
			return state.merge({
				topicList:fromJS(topicList),
				articleList:fromJS(articleList),
				recommendList:fromJS(recommendList),
				writerList:fromJS(writerList)
			});

		case constants.GET_MORE_LIST:
			return state.set('articleList', state.get('articleList').concat(action.list)).set('articlePage', action.nextPage);
		
		case constants.SCROLL_TOP_SHOW:
			return state.set('showCroll', action.show);
		
		case 'delete_recommend_item':
			const newRecommendList = JSON.parse(JSON.stringify(state.get('recommendList')));
			for(let [index, item] of newRecommendList.entries()){
				if(item['id'] === action.id){
					newRecommendList.splice(index, 1);
					break;
				}
			}
			return state.set('recommendList', fromJS(newRecommendList))
		default:
			return state;
	}
}