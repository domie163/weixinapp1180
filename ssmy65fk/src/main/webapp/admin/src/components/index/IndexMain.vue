<template>
	<div style="height: 100%;">
		<index-aside v-if="'vertical' == 'vertical'" :style='{"boxShadow":"0px 0 0px  #e9e7da","padding":"0px","borderColor":"#92a3cb","alignItems":"flex-start","bottom":"0","display":"flex","overflow":"auto","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230217/299885ccff7a438eb2767ce47b3fac29.gif)","borderWidth":"0 1px 0 0","width":"220px","fontSize":"0px","position":"fixed","borderStyle":"solid","height":"100%","zIndex":"0"}'></index-aside>
		<el-main :style='"vertical" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 220px","position":"relative","background":"url(http://codegen.caihongy.cn/20230220/9defa2f73e75484caa13ae87e9063c88.jpg) no-repeat center bottom","display":"block"} : {"minHeight":"100%","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20230216/4dba6821f13e4ad68be5b2fefc4f0957.png) no-repeat center bottom,url(http://codegen.caihongy.cn/20230216/fc8b4150b70b4446b8bc1e4a5a9a6e8f.png) fixed,#fff"}'>
			<index-header :style='{"boxShadow":"0 0px 0px rgba(0, 0, 0, .3)","padding":"0 20px 0 0","alignItems":"center","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230220/93da8688dea64d828ade3cf330fa6af5.png) no-repeat left bottom / auto 100%,url(http://codegen.caihongy.cn/20230220/567a2d3b7488444c893461a5b89e87e8.png) no-repeat right bottom / auto 100%,#0d3084","display":"flex","width":"100%","position":"fixed","justifyContent":"space-between","zIndex":"1","height":"64px"}'></index-header>
			<index-aside v-if="'vertical' == 'horizontal'" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"none","borderWidth":"0 0 0px","height":"auto"}'></index-aside>
			<bread-crumbs :title="title" :style='{"padding":"0px 0px","boxShadow":"0px 0px 0px #bbb","margin":"100px 20px 0","borderColor":"#999","alignItems":"center","display":"flex","justifyContent":"space-between","borderRadius":"10px","flexWrap":"wrap","borderWidth":"0 0 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(185,193,210,1) 58%, rgba(93,111,153,1) 60%, rgba(13,48,132,1) 100%)","width":"calc(100% - 40px)","borderStyle":"solid"}' class="bread-crumbs"></bread-crumbs>
			<router-view class="router-view"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: ''
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
			console.log(console.log(this.$route.path))
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
