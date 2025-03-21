<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 0px","background":"#fff","height":"auto"}'>
		<swiper :style='{"padding":"0px 0 0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#8989eb","outline":"0px solid #bbb","margin":"0px auto 40rpx","borderRadius":"0","background":"rgba(255,255,255,1)","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","borderStyle":"ridge","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 0px)","margin":"0 auto","position":"relative","borderRadius":"0","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 0px)","margin":"0px auto","objectFit":"cover","borderRadius":"0","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"20rpx 0 20rpx 1%","boxShadow":"0px 8rpx 0px #51a286,inset 0px 0px 64rpx 0px #6de6a8","margin":"40rpx auto 80rpx","borderColor":"#6de6a8","display":"flex","outline":"0px solid #ccc","borderRadius":"40rpx","flexWrap":"wrap","background":"#fff","borderWidth":"12rpx 12rpx","width":"calc(100% - 40rpx)","borderStyle":"solid","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"padding":"12rpx 0","boxShadow":"0px 0px 0px #afb0ee","margin":"10rpx 2% 10rpx 0","borderRadius":"20%","background":"none","width":"23%","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"8rpx 0","margin":"0px auto","color":"#333","borderRadius":"20rpx","textAlign":"center","background":"none","display":"block","width":"100%","lineHeight":"64rpx","fontSize":"64rpx","height":"auto"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 新闻资讯 -->
		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"border":"0px solid #5959d9","padding":"0px 0 0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"0px auto 0px","display":"flex","justifyContent":"space-between","minHeight":"132rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221229/62fd669820954f7c9e5443e70e79633a.png) no-repeat center top / 100% 100%","width":"calc(90% - 0px)","lineHeight":"100rpx","position":"relative"}'>
				<view :style='{"padding":"0 0 0 160rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#fff","borderRadius":"0px","textAlign":"center","background":"none","display":"inline-block","width":"calc(100% - 160rpx)","fontSize":"32rpx"}'>公告信息</view>
				<text :style='{"padding":"0 40rpx 0 0","margin":"0px 72rpx 0 0","color":"#75bfb6","textAlign":"right","background":"none","display":"block","fontSize":"28rpx","minWidth":"160rpx","position":"absolute","right":"0"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  
			
			
		  <!-- 样式4 -->
		  
		  <!-- 样式5 -->
		  <view class="news-box2" :style='{"padding":"0px 40rpx 120rpx","margin":"40rpx auto 0","borderColor":"#6de6a8","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%)","borderWidth":"0 0 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}'>
			<block v-for="(item,index) in news" :key="index">
			  <view @tap="onNewsDetailTap(item.id)" v-if="index==0" class="list-item" :style='{"width":"100%","padding":"0","margin":"0 0 20rpx","position":"relative","height":"auto"}'>
				<image :style='{"width":"100%","objectFit":"cover","borderRadius":"24rpx 24rpx 0 0","display":"block","height":"328rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
				<view :style='{"padding":"0 20rpx","boxShadow":"inset 0px 0px 64rpx 0px #eee","margin":"0","whiteSpace":"nowrap","color":"#333","overflow":"hidden","borderRadius":"0 0 24rpx 24rpx","background":"rgba(255,255,255,1)","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","textOverflow":"ellipsis","zIndex":"1"}' class="title ">{{item.title}}</view>
			  </view>
			  <view @tap="onNewsDetailTap(item.id)" v-if="index>0" class="list-item" :style='{"width":"100%","margin":"0 0 20rpx","height":"auto"}'>
				<view :style='{"boxShadow":"inset 0px 0px 64rpx 0px #eee","padding":"0 20rpx","borderColor":"rgba(255,1,0,.2)","whiteSpace":"nowrap","color":"#333","overflow":"hidden","borderRadius":"24rpx","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,1)","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid"}' class="title ">{{item.title}}</view>
			  </view>
			</block>
		  </view>
		  
		  <!-- 样式6 -->
		  
		  <!-- 样式7 -->
		  
		  <!-- 样式8 -->
		  
		  <!-- 样式9 -->
			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 新闻资讯 -->
		
		<!-- 关于我们 -->
		<view :style='{"padding":"60rpx 0px 136rpx","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"20rpx auto 40rpx","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%)","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"border":"0px solid #5959d9","padding":"0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"0","color":"#fff","textAlign":"center","minHeight":"132rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221229/62fd669820954f7c9e5443e70e79633a.png) no-repeat center top / 100% 100%","width":"calc(90% - 0px)","lineHeight":"100rpx","fontSize":"32rpx"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0px 0 0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px 0 52rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"40rpx 0 0 0px","borderColor":"#eeeefa","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"32rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221229/b6039b4057604496b75cbb76ddbb64a4.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/dbc6812065c448deb177ce84a4f65b7f.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/a258c18c995f4dab98e55735b4842c8d.png) repeat-y center center / 100% auto","borderWidth":"0px","width":"90%","borderStyle":"solid","height":"auto","order":"1"}'>
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 0px 0px #7fccd3","margin":"0","borderColor":"rgba(255,1,0,.3)","objectFit":"cover","borderRadius":"48rpx","borderWidth":"0px 0px 0px 0px","background":"none","display":"inline-block","width":"100%","borderStyle":"groove","height":"360rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"padding":"16rpx","margin":"0px","borderColor":"#a9a9e8","objectFit":"cover","borderRadius":"0","borderWidth":"2rpx 8rpx 2rpx 2rpx","background":"rgba(255,255,255,1)","display":"none","width":"48%","borderStyle":"solid","height":"300rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"border":"0","padding":"20rpx","margin":"-32rpx 0 0","borderColor":"#6de6a8","color":"#555","textIndent":"2em","float":"left","minHeight":"240rpx","borderRadius":"0","background":"rgba(255,255,255,.93)","borderWidth":"0","width":"82%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto","order":"2"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"80%","position":"absolute","top":"196rpx","background":"url() no-repeat","display":"block","height":"36rpx "}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		
		<!-- 系统简介 -->
		<view :style='{"padding":"40rpx 0 136rpx","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"0px auto 20rpx","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%)","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"border":"0px solid #5959d9","padding":"0px 0px 0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"0","color":"#fff","textAlign":"center","minHeight":"132rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221229/62fd669820954f7c9e5443e70e79633a.png) no-repeat center top / 100% 100%","width":"90%","lineHeight":"100rpx","fontSize":"32rpx"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"20rpx","margin":"60rpx 0 0px 0","borderColor":"#6de6a8","display":"flex","justifyContent":"space-between","borderRadius":"16rpx 16rpx 0 0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221229/61ac3de5887b45a58571005b6c25088d.png) no-repeat right top,rgba(255,255,255,.93)","borderWidth":"16rpx 12rpx 0px 12rpx","width":"90%","position":"relative","borderStyle":"inset","height":"auto"}'>
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0 0 12rpx","borderColor":"#ccc","objectFit":"cover","borderRadius":"8%","borderWidth":"0 0 8rpx","background":"rgba(255,255,255,1)","display":"block","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#ccc","objectFit":"cover","borderRadius":"8%","borderWidth":"8rpx 0 0","display":"block","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"0px","margin":"0","borderColor":"#fff","objectFit":"cover","borderRadius":"0","borderWidth":"0px","display":"none","width":"49%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"padding":"0px 32rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"0px 0 0px 0","borderColor":"#6de6a8","color":"#555","textIndent":"2em","minHeight":"240rpx","borderRadius":"0  0 24rpx 24rpx","background":"url(http://codegen.caihongy.cn/20221229/dc439b53449f47b1829198630982aa50.png) no-repeat left bottom,rgba(255,255,255,.93)","borderWidth":"0px 12rpx 12rpx 12rpx","width":"calc(90% - 0px)","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"outset","height":"auto"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"82%","position":"absolute","top":"208rpx","background":"url() no-repeat","display":"block","height":"36rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
																																																								<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
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
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				news: [],
			}
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
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
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
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
