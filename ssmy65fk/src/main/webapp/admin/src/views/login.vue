<template>
  <div>
    <div class="container" :style='{"minHeight":"100vh","padding":"200px 0","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230220/fe8de165616e4a958fb1e289132234fa.jpg) no-repeat center bottom / 100% auto","display":"block","width":"100%","position":"relative","justifyContent":"center"}'>

      <el-form :style='{"padding":"40px 40px 0","margin":"0 auto","borderColor":"#849acf","borderRadius":"10px","background":"rgba(255,255,255,1)","borderWidth":"10px","width":"800px","borderStyle":"outset","height":"auto"}'>
        <div v-if="true" :style='{"padding":"0 40px","margin":"0 0 30px 0","color":"#fff","textAlign":"center","overflow":"hidden","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230220/93da8688dea64d828ade3cf330fa6af5.png) no-repeat left bottom / auto 100%,url(http://codegen.caihongy.cn/20230220/567a2d3b7488444c893461a5b89e87e8.png) no-repeat right bottom / auto 100%,#0d3084","width":"100%","lineHeight":"64px","fontSize":"24px","position":"absolute","height":"64px"}' class="title-container">学生毕业论文管理系统登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"60%","margin":"0 auto 40px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}'>用户名：</div>
          <input :style='{"padding":"0 10px","borderColor":"#eee","color":"#999","borderRadius":"4px","borderWidth":"3px","background":"linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%)","width":"100%","fontSize":"14px","borderStyle":"ridge","height":"44px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"60%","margin":"0 auto 40px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#0d3084","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}'>密码：</div>
          <input :style='{"padding":"0 10px","borderColor":"#eee","color":"#999","borderRadius":"4px","borderWidth":"3px","background":"linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%)","width":"100%","fontSize":"14px","borderStyle":"ridge","height":"44px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>
        <div :style='{"width":"60%","margin":"30px auto"}' v-if="roles.length>1" prop="loginInRole" class="list-type">
          <el-radio v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
        </div>
        <div :style='{"width":"auto","margin":"40px 0 0 0px","alignItems":"left","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
          <el-button v-if="loginType==1" :style='{"cursor":"pointer","padding":"0","margin":"0","borderColor":"#fff","color":"#fff","bottom":"0","letterSpacing":"4px","minWidth":"150px","outline":"none","borderRadius":"0px","left":"0","background":"url(http://codegen.caihongy.cn/20230220/58c97d1b7dcd474d8bb0e0aaf358fc33.png) no-repeat left bottom / auto 100%,url(http://codegen.caihongy.cn/20230220/593adc3e479e4050bf3aaf94529768f8.png) no-repeat right bottom / auto 100%,#0d3084","borderWidth":"1px 0 0","width":"100%","fontSize":"24px","position":"absolute","borderStyle":"solid","height":"64px"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>

import menu from "@/utils/menu";
export default {
  data() {
    return {
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
        code: '',
      },
      menus: [],
      roles: [],
      tableName: "",
      codes: [{
        num: 1,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 2,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 3,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 4,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      }],
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

  },
  created() {
    this.getRandCode()
  },
  destroyed() {
	    },
  components: {
  },
  methods: {

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
        this.$storage.set("pageFlag", "register");
		this.$router.push({path:'/register'})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}

		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/index/" });
			} else {
				this.$message.error(data.msg);
			}
		});
    },
    getRandCode(len = 4){
		this.randomString(len)
    },
    randomString(len = 4) {
      let chars = [
          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
          "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
          "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
          "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
          "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
          "3", "4", "5", "6", "7", "8", "9"
      ]
      let colors = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
      let sizes = ['14', '15', '16', '17', '18']

      let output = [];
      for (let i = 0; i < len; i++) {
        // 随机验证码
        let key = Math.floor(Math.random()*chars.length)
        this.codes[i].num = chars[key]
        // 随机验证码颜色
        let code = '#'
        for (let j = 0; j < 6; j++) {
          let key = Math.floor(Math.random()*colors.length)
          code += colors[key]
        }
        this.codes[i].color = code
        // 随机验证码方向
        let rotate = Math.floor(Math.random()*60)
        let plus = Math.floor(Math.random()*2)
        if(plus == 1) rotate = '-'+rotate
        this.codes[i].rotate = 'rotate('+rotate+'deg)'
        // 随机验证码字体大小
        let size = Math.floor(Math.random()*sizes.length)
        this.codes[i].size = sizes[size]+'px'
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: url(http://codegen.caihongy.cn/20230220/fe8de165616e4a958fb1e289132234fa.jpg) no-repeat center bottom / 100% auto;
        
  .list-item /deep/ .el-input .el-input__inner {
		border-radius: 4px;
		padding: 0 10px;
		color: #999;
		background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
		width: 100%;
		font-size: 14px;
		border-color: #eee;
		border-width: 3px;
		border-style: ridge;
		height: 44px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border-radius: 4px;
  	  	padding: 0 20px;
  	  	outline: none;
  	  	margin: 0 20px 0 0;
  	  	color: #999;
  	  	background: linear-gradient(30deg, rgba(227,231,242,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(227,231,242,1) 100%);
  	  	width: calc(100% - 100px);
  	  	font-size: 14px;
  	  	border-color: #eee;
  	  	border-width: 3px;
  	  	border-style: ridge;
  	  	height: 44px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		background: rgba(53, 53, 53, 0);
		border-color: #666;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        background: #0d3084;
        border-color: #0d3084;
      }
  .list-type /deep/ .el-radio__label {
		color: #666;
		font-size: 14px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: #0d3084;
        font-size: 14px;
      }
}
</style>
