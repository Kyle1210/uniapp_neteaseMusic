import {request} from '@/common/apiConfig.js'

// 获取歌曲详情
export const reqGetMusicDetail = (ids) => request({
	url: `/song/detail?ids=${ids}`
})