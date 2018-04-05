<template>
    <div class="app-header">
        <div class="content">
            <router-link :to="{path:'/'}">
                <a href="####" class="logo">
                    <img src="../../assets/logo.png">
                </a>
            </router-link>
            <ul class="list">
                <li><a href="####" @click="isShow()">登陆</a></li>
                <li><a href="####">丨</a></li>
                <li><a href="####" @click="isShow()">注册</a></li>
                <li><a href="####">丨</a></li>
                <li><a href="####" @click="isShow()">关于</a></li>
            </ul>
        </div>
        <app-mask :maskIsShow="maskIsShow" :loginIsShow="loginIsShow" :onIsShow="onIsShow" @closeMasks="close">
            <div slot="landed" class="landed">
                <div class="left">
                    <label>用户名：</label>
                    <label>密码：</label>
                </div>
                <div class="right">
                    <input type="text" placeholder="请输入用户名">
                    <input type="password" placeholder="请输入密码">
                    <span>登陆</span>
                </div>
            </div>
            <div slot="login" class="login">
                <span>登陆</span>
            </div>
            <div slot="on" class="on">
                本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
            </div>
        </app-mask>
    </div>
</template>

<script>
import appMask from "../page1/app-Mask/app-Mask";
export default {
  components: {
    appMask
  },
  data(){
      return{
          maskIsShow:false,
          landedIsShow:false,
          loginIsShow:false,
          onIsShow:false
      }
  },
  methods:{
      isShow(show){
          this.maskIsShow=true;
          this.masksIsShow=show;
      },
      close(){
          this.maskIsShow=false;
          console.log(2)
      }
  }
};
</script>

<style scoped>
.app-header {
  height: 90px;
  background: #363636;
  overflow: hidden;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  display: block;
  margin-top: 22px;
  float: left;
}
.logo img {
  width: 50px;
  height: 45px;
}
.list {
  float: right;
}
.list li {
  float: left;
  color: #b2b2b2;
  font-size: 15px;
  margin-left: 10px;
  line-height: 90px;
}
.landed,
.login,
.on {
  padding: 5px 20px;
  overflow: hidden;
}
.landed .left {
  width: 105px;
  float: left;
  font-size: 16px;
}
.landed .left label {
  display: block;
  line-height: 32px;
  margin-bottom: 30px;
}
.landed .right {
  float: left;
}
.landed .right input {
  width: 222px;
  height: 32px;
  box-sizing: border-box;
  display: block;
  margin-bottom: 30px;
  padding: 5px 10px;
}
.landed span,
.login span {
  display: block;
  width: 70px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: #4fc08d;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 25px;
}
.login span {
  margin-left: 105px;
}
.on {
  margin-bottom: 25px;
  line-height: 22px;
}
</style>