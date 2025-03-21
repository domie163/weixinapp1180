<template>
	<view class="content">
		<view :style='{"padding":"40rpx 0 160rpx","borderColor":"#21d5ae","alignItems":"stretch","display":"block","minHeight":"100vh","overflow":"hidden","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"0px 0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"40rpx auto 40rpx","borderColor":"#c8c8ef","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 60rpx)","borderStyle":"dotted dashed solid","height":"auto","order":"2"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"block","width":"calc(100% - 220rpx)","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" class="userinfo">
					<image :style='{"padding":"0px","margin":"20rpx 0 20rpx","borderColor":"#1bd0a9","objectFit":"cover","textAlign":"center","right":"-180rpx","borderRadius":"24rpx","top":"0","background":"none","borderWidth":"0px 0px 0px","width":"160rpx","position":"absolute","borderStyle":"solid","height":"160rpx","zIndex":"19999"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"24rpx 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 auto","borderColor":"#c8c8ef","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","minHeight":"320rpx","borderRadius":"0px","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 20rpx","boxShadow":"inset 0px 0px 0px 0px #ffaeae","borderColor":"#2dca96","margin":"0 0 16rpx","color":"#333","borderWidth":"0 0 2rpx","background":"none","width":"90%","lineHeight":"52rpx","fontSize":"24rpx","borderStyle":"solid"}'>{{user.xuehao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"block","width":"calc(100% - 220rpx)","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" class="userinfo">
					<image :style='{"padding":"0px","margin":"20rpx 0 20rpx","borderColor":"#1bd0a9","objectFit":"cover","textAlign":"center","right":"-180rpx","borderRadius":"24rpx","top":"0","background":"none","borderWidth":"0px 0px 0px","width":"160rpx","position":"absolute","borderStyle":"solid","height":"160rpx","zIndex":"19999"}' :src="user.zhaopian?baseUrl+user.zhaopian:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"24rpx 24rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 auto","borderColor":"#c8c8ef","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","minHeight":"320rpx","borderRadius":"0px","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 20rpx","boxShadow":"inset 0px 0px 0px 0px #ffaeae","borderColor":"#2dca96","margin":"0 0 16rpx","color":"#333","borderWidth":"0 0 2rpx","background":"none","width":"90%","lineHeight":"52rpx","fontSize":"24rpx","borderStyle":"solid"}'>{{user.jiaoshigonghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"180rpx 0 0","margin":"0px 20rpx 0 0px","borderColor":"#1bd0a9","alignItems":"flex-start","borderRadius":"24rpx","background":"rgba(255,255,255,.3)","borderWidth":"2rpx 2rpx 2rpx","display":"flex","width":"200rpx","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="setting">
					<view :style='{"border":"0","borderColor":"#a2a2e5","color":"#333","borderRadius":"100%","textAlign":"center","background":"rgba(255,255,255,0)","borderWidth":"0px","width":"160rpx","fontSize":"80rpx","lineHeight":"140rpx","borderStyle":"inset","height":"160rpx"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"20rpx 0px 0","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"40rpx 32rpx 0","borderColor":"#1bd0a9","alignItems":"flex-start","display":"flex","justifyContent":"space-between","borderRadius":"0px","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 64rpx)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","borderColor":"#c8c8ef","margin":"0 auto 32rpx","whiteSpace":"nowrap","alignItems":"center","display":"flex","overflow":"hidden","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","textOverflow":"ellipsis","borderStyle":"dotted dashed solid","height":"80rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"48rpx","lineHeight":"48rpx","fontSize":"48rpx","color":"#2dca96"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 20rpx","fontSize":"28rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#555"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
