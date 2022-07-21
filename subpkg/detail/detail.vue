<template>
	<view v-if="showPage">
		<!-- 背景图 -->
		<view class="fixbg" :style="{'background-image': `url(${songs[0].al.picUrl})`}"></view>
		<view class="detail-play">
			<img src="../../static/logo.png" alt="">
			<text class="iconfont icon-zanting"></text>
			<view class="play-strip"></view>
		</view>
		
		<!-- 歌词部分 -->
		<view class="detail-lyric">
			<view class="detail-lyric-wrap">
				<view class="detail-lyric-item">测试测试</view>
				<view class="detail-lyric-item active">测试测试一下一下</view>
				<view class="detail-lyric-item">测试测试dsads打sad </view>
			</view>
		</view>
	</view>
</template>

<script>
	import {reqGetMusicDetail} from '@/api/detailAPI.js'
	export default {
		onLoad(options) {
			this.getMusicDetail(options.ids)
		},
		
		data() {
			return {
				songs: [],
				showPage: false
			};
		},
		
		methods: {
			// 获取歌单详情的数据
			async getMusicDetail(ids) {
				const res = await reqGetMusicDetail(ids)
				console.log(res);
				this.songs = res.data.songs
				console.log(this.songs[0].al);
				this.showPage = true
			}
		}
	}
</script>

<style lang="scss" scoped>
.fixbg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: -9;
	background-size: cover;
	background-position: center;
	filter: blur(10rpx);
	transform: scale(1.2);
}

.detail-play {
	width: 580rpx;
	height: 580rpx;
	background-image: url(~@/static/disc.png);
	background-size: cover;
	margin: 215rpx auto 0 auto;
	position: relative;
	img {
		width: 370rpx;
		height: 370rpx;
		border-radius: 185rpx;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}
	text {
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}
	.play-strip {
		width: 230rpx;
		height: 360rpx;
		background-image: url(~@/static/needle.png);
		position: absolute;
		background-size: cover;
		left: 100rpx;
		right:0;
		top: -200rpx;
		margin: auto;
	}
}

.detail-lyric {
	font-size: 32rpx;
	line-height: 82rpx;
	height: 246rpx;
	text-align: center;
	overflow: hidden;
	color: #6F6E73;
	.detail-lyric-item {
		height: 82rpx;
		&.active {
			color: #FFFFFF;
		}
	}
}
</style>
