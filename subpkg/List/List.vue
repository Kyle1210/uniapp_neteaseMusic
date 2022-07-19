<template>
	<view class="list">
		
		<!-- 背景图 START -->
		<view class="fixbg" :style="{'background-image': `url(${playList.coverImgUrl})`}"></view>
		<!-- 背景图 END -->
		
		<!-- 列表页头 START -->
		<view class="list-head">
			<!-- 左边图片部分 STRAT -->
			<view class="list-head-img">
				<img :src="playList.coverImgUrl" alt="">
				<text class="iconfont icon-bofang1">{{numberTransform}}</text>
			</view>
			<!-- 左边图片部分 END -->
			
			<!-- 右边内容部分 START -->
			<view class="list-head-text">
				<view class="title">
					<text>{{playList.name}}</text>
				</view>
				<view class="logo">
					<img :src="playList.creator.avatarUrl" alt="">
					<text>{{playList.creator.nickname}}</text>
				</view>
				<view class="content">
					<text>{{playList.description}}</text>
				</view>
			</view>
			<!-- 右边内容部分 END -->
		</view>
		<!-- 列表页头 END -->
		
		<!-- #ifdef MP-WEIXIN -->
			<!-- 分享 START -->
			<button class="list-share iconfont icon-fenxiang" open-type="share">
				<text class="">分享给微信好友</text>
			</button>
			<!-- 分享 END -->
		<!-- #endif -->
		
		<!-- 音乐列表 START -->
		<view class="music-list">
			<view class="music-list-title">
				<text class="iconfont icon-bofang1">
					<text>播放全部</text>
				</text>
				<text class="count">(共100首)</text>
			</view>
			<view class="music-list-item">
				<view class="index">
					1
				</view>
				<view class="text">
					<view class="music-name">关于你</view>
					<view class="author">薛之谦</view>
				</view>
				<view class="iconfont icon-bofang1"></view>
			</view>
			<view class="music-list-item">
				<view class="index">
					1
				</view>
				<view class="text">
					<view class="music-name">关于你</view>
					<view class="author">薛之谦</view>
				</view>
				<view class="iconfont icon-bofang1"></view>
			</view>
			<view class="music-list-item">
				<view class="index">
					1
				</view>
				<view class="text">
					<view class="music-name">关于你</view>
					<view class="author">薛之谦</view>
				</view>
				<view class="iconfont icon-bofang1"></view>
			</view>
			<view class="music-list-item">
				<view class="index">
					1
				</view>
				<view class="text">
					<view class="music-name">关于你</view>
					<view class="author">薛之谦</view>
				</view>
				<view class="iconfont icon-bofang1"></view>
			</view>
			<view class="music-list-item">
				<view class="index">
					1
				</view>
				<view class="text">
					<view class="music-name">关于你</view>
					<view class="author">薛之谦</view>
				</view>
				<view class="iconfont icon-bofang1"></view>
			</view>
		</view>
		<!-- 音乐列表 END -->
	</view>
</template>

<script>
	import {reqGetPlayListDetail} from '@/api/listApi.js'
	import {bigNumberTransform} from '@/utils/bigNumberTransform.js'
	export default {
		onLoad(options) {
			this.getPlayListDetail(options.id)
		},
		
		data() {
			return {
				playListId: null,
				playList: []
			};
		},
		
		methods: {
			// 获取歌单详情
			async getPlayListDetail(playListId) {
				const res = await reqGetPlayListDetail(playListId)
				this.playList = res.data.playlist
				console.log(this.playList);
			}
		},
		
		computed: {
			// 将数字转换为千、万、亿等单位
			numberTransform() {
				return bigNumberTransform(this.playList.playCount)
			}
		}
	}
</script>

<style lang="scss" scoped>
.list {
	.fixbg {
		z-index: -999;
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-image: url(../../static/logo.png);
		background-size: cover;
		background-position: center 0;
		filter: blur(10rpx);
		transform: scale(1.2);
	}
	.list-head {
		margin: 70rpx 30rpx 0 30rpx;
		display: flex;
		.list-head-img {
			position: relative;
			width: 260rpx;
			height: 260rpx;
			border-radius: 30rpx;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
			text {
				position: absolute;
				right: 10rpx;
				top: 10rpx;
				color: #FFFFFF;
				font-size: 28rpx
			}
		}
		.list-head-text {
			margin-left: 45rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			.title {
				font-size: 35rpx;
				color: #FFFFFF;
			}
			.logo {
				display: flex;
				align-items: center;
				img {
					width: 53rpx;
					height: 53rpx;
					border-radius: 53rpx;
					margin-right: 12rpx;
				}
				text {
					font-size: 20rpx;
					color: #FFFFFF;
				}
			}
			.content {
				font-size: 20rpx;
				color: #FFFFFF;
				text {
					line-height: 40rpx;
					// 超出两行...
					text-overflow: -o-ellipsis-lastline;  
					overflow: hidden;  
					text-overflow: ellipsis;  
					display: -webkit-box;  
					-webkit-line-clamp: 2;  
					-webkit-box-orient: vertical;
				}
			}
		}
	}
	
	.list-share {
		margin-top: 45rpx;
		width: 330rpx;
		height: 74rpx;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 37rpx;
		line-height: 74rpx;
		color: #FFFFFF;
		text {
			margin-left: 10rpx;
		}
	}
	
	.music-list {
		background-color: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 40rpx;
		padding: 0 30rpx;
		overflow: hidden;
		.music-list-title {
			margin-top: 30rpx;
			margin-bottom: 70rpx;
			text {
				font-size: 30rpx;
			}
			.icon-bofang1 {
				text {
					margin-left: 30rpx;
				}
			}
			.count {
				margin-left: 10rpx;
				font-size: 26rpx;
				color: #a9a9a9;
			}
		}
		.music-list-item {
			display: flex;
			align-items: center;
			margin-bottom: 65rpx;
			.index {
				width: 58rpx;
				height: 50rpx;
				color: #9a9a9a;
			}
			.text {
				flex: 1;
				.music-name {
					font-size: 30rpx;
					margin-bottom: 15rpx;
				}
				.author {
					font-size: 20rpx;
					color: #8b8b8b;
				}
			}
			.icon-bofang1 {
				width: 50rpx;
				height: 50rpx;
				font-size: 50rpx;
				color: #8b8b8b;
			}
		}
	}
}
</style>
