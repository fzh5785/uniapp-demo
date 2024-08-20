<template>
	<view class="content">
		<navBar title='首页'/>
		<view class="ps">
				<uni-notice-bar showIcon showClose single text='点击右上角添加到"我的小程序",方便下次找到!' style="width: 100%;"></uni-notice-bar>
		</view>
		<swiper autoplay circular :interval="4000" :duration="500"  class="swiperA">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.pic_image_url" mode="widthFix" show-menu-by-longpress></image>
				</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import navBar from '../../components/navBar.vue'
	const app = getApp()
	const swiperList = ref([])
	const getSwiperData = () => uni.request({
		url: 'http://159.75.169.224:7300/pz/Index/index',
		data: {
			aid : 1
		},
		success: ({data}) => {
			console.log(data)
			swiperList.value = data?.data?.slides
			console.log(swiperList.value)
		}
	})
	onLoad(()=> {
		app.globalData.utils.getUserInfo()
		getSwiperData()
		
	})
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.ps {
			margin-top: 130rpx;
			display: flex;
			width: 100%;
		}
		.swiperA {
			overflow: hidden;
			width: 100%;
			height: 320rpx;
			swiper-item {
				display: flex;
				justify-content: center;
				image {
					width: 100%;
					height: 100%;
				
				}
			}
		}
	}
	

</style>
