<template>
	<view class="nav">
		<view :style="'height:' + statusHeight + 'rpx'"></view>
		<view class="navbar" :style="'height:' + contentHeight + 'rpx'">
			<view v-if="true" class="back-icon" @click="handlerBackHome">
				<image v-if="pages > 1" src="../static/images/back.png"></image>
				<image v-else src="../static/images/tabBarImages/home.png"></image>
			</view>
			<view v-if="title" style="font-weight: bold;">{{title}}</view>
			<view style="width: 44rpx;"></view>
		</view>

	</view>
</template>

<script setup>
	import {onBeforeMount,ref,defineProps} from 'vue';
	const props = defineProps({
		title: String
	})
	const statusHeight = ref(0)
	const contentHeight = ref(0)
	const pages = ref(getCurrentPages().length)
	const  handlerBackHome = ()=> {
		if(pages.value > 1){
			uni.navigateBack()
		}else {
			uni.switchTab({
				url: '/pages/index/index'
			})
		}
	}
	const setNavSize = () => {
		const {system,statusBarHeight} = uni.getSystemInfoSync()
		statusHeight.value = statusBarHeight * 2
		if (system.indexOf('iOS') >= 0) {
			contentHeight.value = 88
		} else {
			contentHeight.value = 96
		}
	}
	onBeforeMount(() => {
		setNavSize()
	})
</script>

<style lang="scss">
	.nav {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
		.navbar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 10px;
			.back-icon {
				display: flex;
				align-items: center;
				width: 44rpx;
				height: 100%;
				>image {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}


	}
</style>