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
				<view class="list-item">
					<!-- 列表项的图片 -->
					<view class="list-item-img">
						<img src="../../static/logo.png" alt="">
						<text>每天更新</text>
					</view>
					<!-- 列表项的右侧部分 -->
					<view class="list-item-text">
						<view>1.与我无关 - 阿容</view>
						<view>1.与我无关 - 阿容</view>
						<view>1.与我无关 - 阿容</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.search {
	margin: 30rpx 30rpx;
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
	margin: 0 30rpx;
	.list-item {
		display: flex;
		align-items: center;
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
			margin-left: 22rpx;
			view {
				font-size: 24rpx;
				line-height: 66rpx;
			}
		}
	}
}
</style>
