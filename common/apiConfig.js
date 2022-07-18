// 封装uniapp的request请求

// 配置api的根路径
const BASE_URL = 'http://localhost:3000'
export const request = (options) => { //暴露一个function：myRequest，使用options接收页面传过来的参数
        return new Promise((resolve, reject) => { //异步封装接口，使用Promise处理异步请求
            uni.request({ //发送请求
                url: BASE_URL + options.url, //接收请求的API
                method: options.method || 'GET', //接收请求的方式,如果不传默认为GET
                data: options.data || {}, //接收请求的data,不传默认为空
                success: (res) => { //数据获取成功
                    if (res.data.code !== 200) { //因为200是返回成功的状态码，如果不等于200,则代表获取失败,
                        return uni.showToast({
                            title: "数据获取失败！",
														icon:"error"
                        })
                    }
                    resolve(res) //成功,将数据返回
                },
                fail: (err) => { //失败操作
                    uni.showToast({
                        title: "请求接口失败！",
												icon:"error"
                    })
                    reject(err)
                }
            })
        })
    }