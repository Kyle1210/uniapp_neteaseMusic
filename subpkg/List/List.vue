<template>
	<view class="list">
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
	// background-image: var(--playList.creator.backgroundUrl);
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
				// color: #FFFFFF;
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
					font-size: 20rpx
				}
			}
			.content {
				font-size: 20rpx;
				color: #F1CEDA;
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
}
</style>
