<template>
	<view v-if="showPage" style="overflow: hidden;">
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
		
		<!-- 喜欢部分 -->
		<view class="detail-like">
			<view class="title">
				<view class="text">喜欢这首歌的人也听</view>
				<button class="iconfont icon-bofang1">
					<text>一键收听</text>
				</button>
			</view>
			<!-- 列表部分 STRAT -->
			<view class="detail-like-item">
				<!-- 图片部分 START -->
				<view class="img">
					<img src="../../static/logo.png" alt="">
				</view>
				<!-- 图片部分 END -->
				<!-- 内容部分 -->
				<view class="text">
					<view class="music-name">
						<text>三国恋</text>
					</view>
					<view class="music-author">
						<img src="../../static/sq.png" alt="">
						<img src="../../static/vip.png" alt="">
						<text>网巨星-三国恋</text>
					</view>
				</view>
				<view class="play">
					<text class="iconfont icon-bofang1"></text>
				</view>
			</view>
			<!-- 列表部分 END -->
			
			<!-- 列表部分 STRAT -->
			<view class="detail-like-item">
				<!-- 图片部分 START -->
				<view class="img">
					<img src="../../static/logo.png" alt="">
				</view>
				<!-- 图片部分 END -->
				<!-- 内容部分 -->
				<view class="text">
					<view class="music-name">
						<text>三国恋</text>
					</view>
					<view class="music-author">
						<img src="../../static/sq.png" alt="">
						<img src="../../static/vip.png" alt="">
						<text>网巨星-三国恋</text>
					</view>
				</view>
				<view class="play">
					<text class="iconfont icon-bofang1"></text>
				</view>
			</view>
			<!-- 列表部分 END -->
			
			<!-- 列表部分 STRAT -->
			<view class="detail-like-item">
				<!-- 图片部分 START -->
				<view class="img">
					<img src="../../static/logo.png" alt="">
				</view>
				<!-- 图片部分 END -->
				<!-- 内容部分 -->
				<view class="text">
					<view class="music-name">
						<text>三国恋</text>
					</view>
					<view class="music-author">
						<img src="../../static/sq.png" alt="">
						<img src="../../static/vip.png" alt="">
						<text>网巨星-三国恋</text>
					</view>
				</view>
				<view class="play">
					<text class="iconfont icon-bofang1"></text>
				</view>
			</view>
			<!-- 列表部分 END -->
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
	filter: blur(20rpx);
	transform: scale(1.5);
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

.detail-like {
	padding: 10rpx 30rpx;
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 50rpx 0;
		.text {
		color: #FFFFFF;
		}
		button {
			color: #FFFFFF;
			border: 1rpx solid #EFEFEF;
			width: 180rpx;
			height: 60rpx;
			font-size: 24rpx;
			border-radius: 30rpx;
			margin: 0;
			background: rgba(0, 0, 0, 0);
		}
	}
	.detail-like-item {
		margin-top: 55rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		.img {
			width: 85rpx;
			height: 85rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin-right: 20rpx;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.text {
			flex: 1;
			.music-name {
				font-size: 30rpx
			}
			.music-author {
				// margin-top: rpx;
				img {
					width: 25rpx;
					height: 17rpx;
					margin-right: 10rpx;
				}
				text {
					font-size: 20rpx;
				}
			}
		}
		.play {
			text {
				width: 50rpx;
				height: 50rpx;
				font-size: 50rpx;
				color: #EFEFEF;
				text-align: center;
				line-height: 50rpx;
			}
		}
	}
}
</style>
