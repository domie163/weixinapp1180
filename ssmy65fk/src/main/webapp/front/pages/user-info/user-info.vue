<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"40rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<view :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>学号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>学生姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view v-if="tableName=='xuesheng'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" @tap="xueshengtouxiangTap" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>学生手机</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.xueshengshouji" placeholder="学生手机"></input>
			</view>
			<view v-if="tableName=='xuesheng'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">就读学校</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="xueshengjiuduxuexiaoChange" :value="xueshengjiuduxuexiaoIndex" :range="xueshengjiuduxuexiaoOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.jiuduxuexiao?ruleForm.jiuduxuexiao:"请选择就读学校"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>院系</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yuanxi" placeholder="院系"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>专业</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.zhuanye" placeholder="专业"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>教师工号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.jiaoshigonghao" placeholder="教师工号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>教师姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jiaoshixingming" placeholder="教师姓名"></input>
			</view>
			<view v-if="tableName=='jiaoshi'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="jiaoshixingbieChange" :value="jiaoshixingbieIndex" :range="jiaoshixingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" @tap="jiaoshizhaopianTap" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>照片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.zhaopian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.zhaopian" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view v-if="tableName=='jiaoshi'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">职称</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="jiaoshizhichengChange" :value="jiaoshizhichengIndex" :range="jiaoshizhichengOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.zhicheng?ruleForm.zhicheng:"请选择职称"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>联系电话</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.lianxidianhua" placeholder="联系电话"></input>
			</view>
			<view v-if="tableName=='jiaoshi'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"24rpx","borderWidth":"0px 0px 0px 0px","background":"rgba(255,255,255,.9)","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">任职学校</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="jiaoshirenzhixuexiaoChange" :value="jiaoshirenzhixuexiaoIndex" :range="jiaoshirenzhixuexiaoOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.renzhixuexiao?ruleForm.renzhixuexiao:"请选择任职学校"}}</view>
				</picker>
			</view>
			<view :style='{"width":"100%","margin":"64rpx 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #b3d7cb","margin":"0 20rpx","borderColor":"#9F9FEC","color":"#fff","minWidth":"240rpx","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221229/cc29bcfe2df04ab1aa46ec462dfb6f8c.png) no-repeat center top / 100% 100%","borderWidth":"0px 0px 0px","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"dashed","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ddd","margin":"0 20rpx","borderColor":"#aaa","color":"#fff","minWidth":"240rpx","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221229/6ba8b9e9161443399b33d0717c237b3e.png) no-repeat center top / 100% 100%","borderWidth":"0px 0px 0px","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"dashed","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				xueshengxingbieOptions: [],
				xueshengxingbieIndex: 0,
				xueshengjiuduxuexiaoOptions: [],
				xueshengjiuduxuexiaoIndex: 0,
				jiaoshixingbieOptions: [],
				jiaoshixingbieIndex: 0,
				jiaoshizhichengOptions: [],
				jiaoshizhichengIndex: 0,
				jiaoshirenzhixuexiaoOptions: [],
				jiaoshirenzhixuexiaoIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='xuesheng'){
				this.xueshengxingbieOptions = "男,女".split(',');
				this.xueshengxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.xueshengxingbieIndex = index;
					}
				});
			}
			// 下拉框
			if(this.tableName=='xuesheng'){
				res = await this.$api.option(`yuanxiao`,`yuanxiao`,{});
				this.xueshengjiuduxuexiaoOptions = res.data;
                this.xueshengjiuduxuexiaoOptions.unshift("请选择就读学校");
				this.xueshengjiuduxuexiaoOptions.forEach((item, index) => {
					if(item==this.ruleForm.jiuduxuexiao) {
						this.xueshengjiuduxuexiaoIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='jiaoshi'){
				this.jiaoshixingbieOptions = "男,女".split(',');
				this.jiaoshixingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.jiaoshixingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='jiaoshi'){
				this.jiaoshizhichengOptions = "高级讲师,讲师,助教,教师,副教授".split(',');
				this.jiaoshizhichengOptions.forEach((item, index) => {
					if(item==this.ruleForm.zhicheng) {
						this.jiaoshizhichengIndex = index;
					}
				});
			}
			// 下拉框
			if(this.tableName=='jiaoshi'){
				res = await this.$api.option(`yuanxiao`,`yuanxiao`,{});
				this.jiaoshirenzhixuexiaoOptions = res.data;
                this.jiaoshirenzhixuexiaoOptions.unshift("请选择任职学校");
				this.jiaoshirenzhixuexiaoOptions.forEach((item, index) => {
					if(item==this.ruleForm.renzhixuexiao) {
						this.jiaoshirenzhixuexiaoIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            // 下拉变化
            xueshengxingbieChange(e) {
                    this.xueshengxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.xueshengxingbieOptions[this.xueshengxingbieIndex]
            },
			xueshengtouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            xueshengjiuduxuexiaoChange(e) {
                    this.xueshengjiuduxuexiaoIndex = e.target.value
                    this.ruleForm.jiuduxuexiao = this.xueshengjiuduxuexiaoOptions[this.xueshengjiuduxuexiaoIndex]
            },
            // 下拉变化
            jiaoshixingbieChange(e) {
                    this.jiaoshixingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]
            },
			jiaoshizhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            jiaoshizhichengChange(e) {
                    this.jiaoshizhichengIndex = e.target.value
                    this.ruleForm.zhicheng = this.jiaoshizhichengOptions[this.jiaoshizhichengIndex]
            },
            // 下拉变化
            jiaoshirenzhixuexiaoChange(e) {
                    this.jiaoshirenzhixuexiaoIndex = e.target.value
                    this.ruleForm.renzhixuexiao = this.jiaoshirenzhixuexiaoOptions[this.jiaoshirenzhixuexiaoIndex]
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
					this.$utils.msg(`学号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.xueshengshouji&&(!this.$validate.isMobile(this.ruleForm.xueshengshouji))){
					this.$utils.msg(`学生手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.jiuduxuexiao) && `xuesheng` == this.tableName){
					this.$utils.msg(`就读学校不能为空`);
					return
				}
				if((!this.ruleForm.jiaoshigonghao) && `jiaoshi` == this.tableName){
					this.$utils.msg(`教师工号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$utils.msg(`教师姓名不能为空`);
					return
				}
				if(`jiaoshi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if((!this.ruleForm.renzhixuexiao) && `jiaoshi` == this.tableName){
					this.$utils.msg(`任职学校不能为空`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
