<template>
	<view>
		<!-- 自定义导航栏 -->
		<!-- 这个view是用于适配微信小程序 -->
		<view class="status_bar"></view>
		<view class="head">
			<view class="head-icon">
				<text class="iconfont icon-zuojiantou"></text>
				|
				<text class="iconfont icon-shouye"></text>
			</view>
			<text class="content">
				{{title}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Musichead",
		
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
.head {
	margin-top: 20px;
	color: black;
	height: 30px;
	font-size: 16px;
	text-align: center;
	line-height: 30px;
	position: relative;
	.head-icon {
		position: absolute;
		background: rgba(0, 0, 0,0.4);
		width: 90px;
		display: flex;
		justify-content: space-evenly;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		color: #FFFFFF;
	}
}
</style>