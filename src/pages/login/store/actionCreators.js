import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type:constants.CHANGE_LOGIN,
	value:true
});

export const logout = () => ({
	type:constants.LOGOUT,
	value:false
});

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json').then((res)=>{
			const data = res.data.data;
			if(data){
				dispatch(changeLogin());
			}
		}).catch((res)=>{
			console.log('error');
		});
	}
}