import {request} from '@/common/apiConfig.js'

// 获取歌单详情
export const reqGetPlayListDetail = (id) => request({
	url: `/playlist/detail?id=${id}`
})