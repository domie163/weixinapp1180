<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"40rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">学号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xuehao" v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">学生姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">院系</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yuanxi" v-model="ruleForm.yuanxi" placeholder="院系"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">过程标题</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.guochengbiaoti" v-model="ruleForm.guochengbiaoti" placeholder="过程标题"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">添加时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.tianjiashijian" @change="tianjiashijianChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.tianjiashijian?ruleForm.tianjiashijian:"请选择添加时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0px 0px 0px","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="guochengtupianTap">
				<view :style='{"width":"auto","padding":"0 24rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">过程图片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.guochengtupian" :src="baseUrl+ruleForm.guochengtupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"12rpx 20rpx","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderRadius":"24rpx","borderWidth":"0 0 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">过程内容</view>
                <xia-editor ref="editor" :style='{"minHeight":"240rpx","padding":"24rpx 24rpx 64rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#c8c8ef","borderRadius":"0px","color":"#555","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' v-model="ruleForm.guochengneirong" placeholder="过程内容" @editorChange="guochengneirongChange"></xia-editor>
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
				xuehao: '',
				xueshengxingming: '',
				yuanxi: '',
				guochengbiaoti: '',
				tianjiashijian: '',
				guochengtupian: '',
				guochengneirong: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   xuehao : false,
                   xueshengxingming : false,
                   yuanxi : false,
                   guochengbiaoti : false,
                   tianjiashijian : false,
                   guochengtupian : false,
                   guochengneirong : false,
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
            this.ruleForm.tianjiashijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.xuehao = this.user.xuehao
			this.ro.xuehao = true;
			this.ruleForm.xueshengxingming = this.user.xueshengxingming
			this.ro.xueshengxingming = true;
			this.ruleForm.yuanxi = this.user.yuanxi
			this.ro.yuanxi = true;



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
				res = await this.$api.info(`xueshengguochengwendang`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
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
					if(o=='yuanxi'){
					this.ruleForm.yuanxi = obj[o];
					this.ro.yuanxi = true;
					continue;
					}
					if(o=='guochengbiaoti'){
					this.ruleForm.guochengbiaoti = obj[o];
					this.ro.guochengbiaoti = true;
					continue;
					}
					if(o=='tianjiashijian'){
					this.ruleForm.tianjiashijian = obj[o];
					this.ro.tianjiashijian = true;
					continue;
					}
					if(o=='guochengtupian'){
					this.ruleForm.guochengtupian = obj[o].split(",")[0];
					this.ro.guochengtupian = true;
					continue;
					}
					if(o=='guochengneirong'){
					this.ruleForm.guochengneirong = obj[o];
					this.ro.guochengneirong = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            guochengneirongChange(e) {
                this.ruleForm.guochengneirong = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			tianjiashijianChange(e) {
				this.ruleForm.tianjiashijian = e.target.value;
				this.$forceUpdate();
			},



			guochengtupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.guochengtupian = 'upload/' + res.file;
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
				if((!this.ruleForm.guochengbiaoti)){
					this.$utils.msg(`过程标题不能为空`);
					return
				}
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
					let res = await this.$api.list(`xueshengguochengwendang`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`xueshengguochengwendang`, this.ruleForm);
						}else{
							await this.$api.add(`xueshengguochengwendang`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`xueshengguochengwendang`, this.ruleForm);
					}else{
						await this.$api.add(`xueshengguochengwendang`, this.ruleForm);
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
