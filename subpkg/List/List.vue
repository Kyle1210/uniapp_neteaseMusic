<template>
	<view>
		<!-- 背景图 -->
		<view class="fixbg"></view>
		<!-- 列表页头 -->
		<view class="list-head">
			<view class="lits-head-img">
				<img src="../../static/logo.png" alt="">
				<text class="iconfont icon-zuojiantou">30亿</text>
			</view>
			<view class="lits-head-text">
				<view class="title"></view>
				<view class="logo">
					<img src="" alt="">
					<text>网易云音乐</text>
				</view>
				<view class="content">
					<text>云音乐中每天热度上升最快的100首单曲，每日更新 ></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {reqGetPlayListDetail} from '@/api/listApi.js'
	export default {
		onLoad(options) {
			this.playListId = options.id
			this.getPlayListDetail()
		},
		
		data() {
			return {
				playListId: null
			};
		},
		
		methods: {
			// 获取歌单详情
			async getPlayListDetail() {
				const res = await reqGetPlayListDetail(this.playListId)
				console.log(res);
			}
		}
	}
</script>

<style lang="scss" scoped>
.fixbg {
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	// background-image: url('@/static/logo.png');
	// background-size: cover;
	// background-position: center 0; 
	// // 毛玻璃效果
	// filter: blur(10px);
	// // 放大容器，隐藏白边
	// transform: scale(1.2);
}

.list-head {
	display: flex;
	padding: 30rpx;
	.list-head-img {
		width: 264rpx;
		height: 264rpx;
		border-radius: 30rpx;
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
		text {
			position: absolute;
			right: 8rxp;
			top: 8rpx;
			color: white;
			font-size: 26rpx
		}
	}
	.list-head-text {
		flex: 1;
	}
}
</style>
