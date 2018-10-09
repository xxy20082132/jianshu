import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index:0;
	position:absolute;
	top:56px;
	bottom:0;
	left:0;
	right:0;
	background:#eee;
`

export const LoginBox = styled.div`
	width:400px;
	height:220px;
	background:#fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
	margin:80px auto;
	padding-top:20px;
`

export const Input = styled.input`
	width:200px;
	height:30px;
	line-height:30px;
	padding:0 10px;
	display:block;
	margin:20px auto;
	color:#777;
`

export const Button = styled.div`
	width:220px;
	background:#3194d0;
	height:40px;
	color:#fff;
	line-height:40px;
	border-radius:20px;
	margin:30px auto;
	text-align:center;
	cursor:pointer;
`