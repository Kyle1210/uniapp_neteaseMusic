<template>
	<view>
			<!-- 搜索区域 -->
			<view class="search">
				<text class="iconfont icon-Magnifier"></text>
				<input type="text" placeholder="搜索歌曲">
			</view>
			<!-- 列表区域 -->
			<view class="list">
				<!-- 列表项 -->
				<view class="list-item" v-for="item in topListDetail" :key="item.id" @click="goToList(item)">
					<!-- 列表项的图片 -->
					<view class="list-item-img">
						<img :src="item.coverImgUrl" alt="">
						<text>{{item.updateFrequency}}</text>
					</view>
					<!-- 列表项的右侧部分 -->
					<view class="list-item-text">
						<view v-for="(track,index) in item.tracks">{{index+1}}.{{track.first}} - {{track.second}}</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {topListDetail} from '@/api/indexApi.js'
	export default {
	
		data() {
			return {
				topListDetail: []
			}
		},
		onLoad() {
			this.getTopListDetail()
		},
		methods: {
			// 获取所有榜单内容摘要
			async getTopListDetail() {
				const {data: res} = await topListDetail()
				this.topListDetail = res.list
				this.topListDetail.length = 4
			},
			
			// 跳转到列表页
			goToList(item) {
				uni.navigateTo({
					url: `../../subpkg/List/List?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.search {
	margin: 70rpx 30rpx;
	background-color: #F4F4F4;
	display: flex;
	height: 70rpx;
	align-items: center;
	border-radius: 35rpx;
	.icon-Magnifier {
		margin: 0 28rpx;
		font-size: 26rpx;
	}
	input {
		font-size: 26rpx
	}
}

.list {
	padding: 0 30rpx;
	.list-item {
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
		.list-item-img {
			width: 212rpx;
			height: 212rpx;
			position: relative;
			border-radius: 30rpx;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
			text {
				left: 12rpx;
				bottom: 16rpx;
				position: absolute;
				color: #FFFFFF;
				font-size: 20rpx
			}
		}
		.list-item-text {
			flex: 1;
			margin-left: 22rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			view {
				font-size: 24rpx;
				line-height: 66rpx;
			}
		}
	}
}
</style>
