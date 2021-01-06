<template>
  <div id="app">
    <div class="title">
      <img src="../assets/index/LOGO.png" alt="" />
      <span>创建属于你的公会</span>
    </div>
    <div class="login">
      <!-- <img src="../assets/index/beijing.png" alt="" width="100%" /> -->
      <p>真声公会后台</p>
      <div class="login_box">
        <el-form>
          <el-form-item>
            <el-input placeholder="请输入用户名" v-model="username">
                <i slot="prefix">
                    <img class="icon" src="../assets/index/yonghuming.png" alt="">
                </i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" type="password" v-model="password">
                <i slot="prefix">
                    <img class="icon" src="../assets/index/mima.png" alt="">
                </i>
            </el-input>
          </el-form-item>
          <el-from-item class="from_thrid">
            <span>忘记密码</span>
            <el-button @click="login()">登录</el-button>
          </el-from-item>
        </el-form>
      </div>
    </div>
    <div class="footer">
      <div class="foot_title">
        <span>联系我们</span>
        <span>公司简介</span>
        <span>免责声明</span>
      </div>
      <span>版权所有©2020-2023郑州寻山文化传媒有限公司豫ICP备1903259号</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        login(){
            console.log(this.username,this.password)
            this.$router.push('/home')
        }
    }
};
</script>

<style  scoped>
.title {
  width: 30%;
  margin: 5px auto;
}

.el-input{
    width:90% !important;

}

.login {
  width: 100%;
  height: 80%;
  text-align: center;
  background: url("../assets/index/beijing.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 188px;
}

.login p {
    margin-top: 0px;
  font-size: 42px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
}

.title span {
  border-left: 2px solid #dfdcdc;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
  font-size: 26px;
  padding-left: 8px;
  margin-left: 8px;
}

.login_box {
  width: 310px;
  height: 161px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(5, 0, 6, 0.35);
  border-radius: 12px;
  margin: 0 auto;
  padding: 25px;
}

.footer {
  text-align: center;
}
.fooer span {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
}
.foot_title span {
  margin: 0 8px;
}

.from_thrid{
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.from_thrid span{

font-size: 15px;
font-family: PingFang SC;
font-weight: 500;
color: #AAAAAA;
line-height: 36px;
}

.icon{
    height: 55%;
    margin-top: 30%;
    margin-right: 5px;
}

.el-button:focus, .el-button:hover{
    color:#fff;
    border-color: #E93DFC;
    background: #E93DFC;
}
.el-button{
    color:#fff;
    border-color: #E93DFC;
    background: #E93DFC;
    line-height: 0;
}

.el-input--prefix .el-input__inner{
    padding-left: 37px !important; 
}

</style>