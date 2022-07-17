<template>
	<view>
		123
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

<style lang="scss">

</style>
