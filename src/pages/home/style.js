import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;

export const HomeLeft = styled.div`
	width:625px;
	float:left;
	margin-left:15px;
	padding-top:30px;
	.banner-img{
		width:625px;
		height:270px;
	}
`;

export const HomeRight = styled.div`
	width:280px;
	float:left;
	padding:30px 0 0;
	margin-left:30px;
	.down-banner{
		margin-bottom: 30px;
	    padding: 10px 22px;
	    width: 100%;
	    border: 1px solid #f0f0f0;
	    border-radius: 6px;
	    background-color: #fff;
	}
	.down-img{
		width: 60px;
	    height: 60px;
	    opacity: .85;
	}
	.down-info{
		display: inline-block;
	    vertical-align: top;
	    margin-left: 7px;
	    margin-top:15px;
	}
	.description{
    	margin-top: 4px;
	    font-size: 13px;
	    color: #999;
    }
`;

export const TopicWrapper = styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-18px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float:left;
	height:32px;
	line-height:32px;
	margin-left:18px;
	margin-bottom:18px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display:block;
		float:left;
		width:32px;
		height:32px;
		margin-right:10px;
	}
`;

export const ListItem = styled.div`
 	overflow:hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		width:125px;
		height:100px;
		display:block;
		float:right;
		border-radius:10px;
	}
`;

export const ListInfo = styled.div`
	width:500px;
	float:right;
	.title{
		font-size:18px;
		font-weight:700;
		line-height:1.5;
		margin: -7px 0 4px;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`;

export const RecommendWrapper = styled.div`
	width:280px;
	margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`;

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	background:url(${(props)=>{return props.imgUrl}});
	background-size:contain;
`;

export const WriterWrapper = styled.div`
	overflow:hidden;
	margin: 0 0 20px;
    text-align: left;
`

export const WriterItem = styled.div`
	margin-top:15px;
	line-height:20px;
	.pic{
		float:left;
		width:48px;
		height:48px;
		border-radius:50%;
		margin-right:10px;
	}
`

export const Attention = styled.span`
	float:right;
	.iconfont{
		color:#42c02e;
		font-size:13px;
		font-weight:400;
	}
`

export const WriterInfo = styled.div`
	padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    .title{
    	color:#333;
    }
    .info{
    	margin-top:2px;
    	color:#969696;
    	font-size:12px;
    }
`

export const LoadMore = styled.div`
	margin:30px 0;
	background-color: #a5a5a5;
	border-radius: 20px;
	width:100%;
	padding:15px 15px;
	font-size:15px;
	text-align:center;
	cursor: pointer;
	color:#fff;
`

export const BackTop = styled.div`
	position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 0 5px;
    width:60px;
    height:60px;
    font-size:12px;
    text-align:center;
    line-height:60px;
    border:1px solid #dcdcdc;
    cursor:pointer;
`