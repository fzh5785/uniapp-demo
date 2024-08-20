class Utils {
	getUserInfo(){
		uni.login({
		  success: res => {
			uni.request({
				url : 'http://159.75.169.224:7300/pz/auth/wxLogin',
				data : {
					code : res?.code || 'aaa'
				},
				success : result => {
					
				}
			})
		  }
		})
	}
}

export default new Utils()