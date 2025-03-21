<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"40rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">教师工号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.jiaoshigonghao" v-model="ruleForm.jiaoshigonghao" placeholder="教师工号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">教师姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.jiaoshixingming" v-model="ruleForm.jiaoshixingming" placeholder="教师姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="zhaopianTap">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">照片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.zhaopian" :src="baseUrl+ruleForm.zhaopian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">任职学校</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.renzhixuexiao" v-model="ruleForm.renzhixuexiao" placeholder="任职学校"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">联系电话</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.lianxidianhua" v-model="ruleForm.lianxidianhua" placeholder="联系电话"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">学号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xuehao" v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">学生姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">学生手机</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xueshengshouji" v-model="ruleForm.xueshengshouji" placeholder="学生手机"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">就读学校</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.jiuduxuexiao" v-model="ruleForm.jiuduxuexiao" placeholder="就读学校"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">院系</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yuanxi" v-model="ruleForm.yuanxi" placeholder="院系"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">专业</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.zhuanye" v-model="ruleForm.zhuanye" placeholder="专业"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">选择时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.xuanzeshijian" @change="xuanzeshijianChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xuanzeshijian?ruleForm.xuanzeshijian:"请选择选择时间"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"12rpx 20rpx","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0 0 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">个人简介</view>
                <xia-editor ref="editor" :style='{"minHeight":"240rpx","padding":"24rpx 24rpx 64rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#c8c8ef","borderRadius":"0px","color":"#555","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' v-model="ruleForm.gerenjianjie" placeholder="个人简介" @editorChange="gerenjianjieChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #cfcfe3","margin":"0 40rpx 0 0","borderColor":"#9F9FEC","color":"#fff","display":"inline","minWidth":"240rpx","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221229/cc29bcfe2df04ab1aa46ec462dfb6f8c.png) no-repeat center top / 100% 100%","borderWidth":"0px 0px 0px","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"dashed","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				jiaoshigonghao: '',
				jiaoshixingming: '',
				zhaopian: '',
				renzhixuexiao: '',
				lianxidianhua: '',
				xuehao: '',
				xueshengxingming: '',
				xueshengshouji: '',
				jiuduxuexiao: '',
				yuanxi: '',
				zhuanye: '',
				xuanzeshijian: '',
				gerenjianjie: '',
				shhf: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   jiaoshigonghao : false,
                   jiaoshixingming : false,
                   zhaopian : false,
                   renzhixuexiao : false,
                   lianxidianhua : false,
                   xuehao : false,
                   xueshengxingming : false,
                   xueshengshouji : false,
                   jiuduxuexiao : false,
                   yuanxi : false,
                   zhuanye : false,
                   xuanzeshijian : false,
                   gerenjianjie : false,
                   sfsh : false,
                   shhf : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.xuanzeshijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.xuehao = this.user.xuehao
			this.ro.xuehao = true;
			this.ruleForm.xueshengxingming = this.user.xueshengxingming
			this.ro.xueshengxingming = true;
			this.ruleForm.xueshengshouji = this.user.xueshengshouji
			this.ro.xueshengshouji = true;
			this.ruleForm.jiuduxuexiao = this.user.jiuduxuexiao
			this.ro.jiuduxuexiao = true;
			this.ruleForm.yuanxi = this.user.yuanxi
			this.ro.yuanxi = true;
			this.ruleForm.zhuanye = this.user.zhuanye
			this.ro.zhuanye = true;



			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`shishengshuangxuan`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='jiaoshigonghao'){
					this.ruleForm.jiaoshigonghao = obj[o];
					this.ro.jiaoshigonghao = true;
					continue;
					}
					if(o=='jiaoshixingming'){
					this.ruleForm.jiaoshixingming = obj[o];
					this.ro.jiaoshixingming = true;
					continue;
					}
					if(o=='zhaopian'){
					this.ruleForm.zhaopian = obj[o].split(",")[0];
					this.ro.zhaopian = true;
					continue;
					}
					if(o=='renzhixuexiao'){
					this.ruleForm.renzhixuexiao = obj[o];
					this.ro.renzhixuexiao = true;
					continue;
					}
					if(o=='lianxidianhua'){
					this.ruleForm.lianxidianhua = obj[o];
					this.ro.lianxidianhua = true;
					continue;
					}
					if(o=='xuehao'){
					this.ruleForm.xuehao = obj[o];
					this.ro.xuehao = true;
					continue;
					}
					if(o=='xueshengxingming'){
					this.ruleForm.xueshengxingming = obj[o];
					this.ro.xueshengxingming = true;
					continue;
					}
					if(o=='xueshengshouji'){
					this.ruleForm.xueshengshouji = obj[o];
					this.ro.xueshengshouji = true;
					continue;
					}
					if(o=='jiuduxuexiao'){
					this.ruleForm.jiuduxuexiao = obj[o];
					this.ro.jiuduxuexiao = true;
					continue;
					}
					if(o=='yuanxi'){
					this.ruleForm.yuanxi = obj[o];
					this.ro.yuanxi = true;
					continue;
					}
					if(o=='zhuanye'){
					this.ruleForm.zhuanye = obj[o];
					this.ro.zhuanye = true;
					continue;
					}
					if(o=='xuanzeshijian'){
					this.ruleForm.xuanzeshijian = obj[o];
					this.ro.xuanzeshijian = true;
					continue;
					}
					if(o=='gerenjianjie'){
					this.ruleForm.gerenjianjie = obj[o];
					this.ro.gerenjianjie = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            gerenjianjieChange(e) {
                this.ruleForm.gerenjianjie = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			xuanzeshijianChange(e) {
				this.ruleForm.xuanzeshijian = e.target.value;
				this.$forceUpdate();
			},



			zhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {































//跨表计算判断
				var obj;
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`shishengshuangxuan`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`shishengshuangxuan`, this.ruleForm);
						}else{
							await this.$api.add(`shishengshuangxuan`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`shishengshuangxuan`, this.ruleForm);
					}else{
						await this.$api.add(`shishengshuangxuan`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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
