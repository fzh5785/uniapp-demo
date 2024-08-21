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
		
		<view  class="navList">
			<block v-for="(item,index) in navList" :key="index">
				<image :src="item.pic_image_url" mode="widthFix" @click="handlerNavList" :id="index"></image>
			</block>
		</view>
		
		<view class="navList2">
			<view v-for="(item,index) in navList2" :key="index" class="navList2-item" @click="handlerNavList2" :id="index">
				<image :src="item.pic_image_url" mode="widthFix"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref, toRaw} from 'vue'
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
			navList.value = data?.data?.nav2s
			navList2.value = data?.data?.navs
		}
	})
	
	const navList = ref([])
	const handlerNavList = (e)=> {
		const nav = toRaw(navList.value)[e.currentTarget.id]
		if(nav.stype === '1'){
			uni.navigateTo({
				url:nav?.stype_link
			})
		}
	}
	
	const navList2 = ref([])
	const handlerNavList2 = (e)=> {
		const nav = toRaw(navList2.value)[e.currentTarget.id]
		console.log(nav)
		if(nav.stype === '1'){
			uni.navigateTo({
				url:nav?.stype_link
			})
		}
	}
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
				width: 100%;
				align-items: center;
				image {
					width: 100%;
					height: 100%;
					padding: 0 20rpx;
				}
			}
		}
		.navList {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 20rpx 0 ;
			overflow: hidden;
			height: 200rpx;
				image {
					padding: 0  20rpx;
					height: 100%;
					width: 100%;
				}
		}
		.navList2 {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			overflow: hidden;
			.navList2-item {
				display: flex;
				flex-direction: column;
				font-size: 12px;
				font-weight: blod;
				image {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	

</style>
