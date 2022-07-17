import {request} from '@/common/apiConfig.js'

// 获取所有榜单内容摘要
export const topListDetail = () => request({
	url: '/toplist/detail'
})