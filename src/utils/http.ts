const baseURL = 'http://127.0.0.1:8080'
//添加拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //拦截前触发，options为请求内的参数
    //非http开头拼接地址
    if (!options.url.startsWith('http')) {
      //检查请求中url地址是否以http开头
      options.url = baseURL + options.url
    }
    //请求超时,默认60s,以毫秒为单位
    options.timeout = 10000
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = (options: UniApp.RequestOptions) => {
  return new Promise((resolve, reject) => {
    //返回Promise对象
    uni.request({
      ...options,
      success(res) {
        //请求成功
        resolve(res)
      },
    })
  })
}
