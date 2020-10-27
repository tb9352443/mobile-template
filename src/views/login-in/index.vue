<template>
  <div class="login">
    <div class="loginContainer">
      <div class="loginName">用户登录</div>
      <div class="container username">
        <i class="iconfont icon-heads"></i>
        <input type="text" class="ivu-input" />
      </div>
      <div class="container password">
        <i class="iconfont icon-password"></i>
        <input :type="type" class="ivu-input" />
        <i
          class="iconfont icon-eye"
          v-if="showPassword"
          @click="changeState(1)"
        ></i>
        <i class="iconfont icon-eye1" v-else @click="changeState(0)"></i>
      </div>
      <button class="container loginButton" @click="toHome">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      showPassword: true,
      type: "password",
    };
  },
  methods: {
    changeState(state) {
      if (state == "1") {
        this.showPassword = false;
        this.type = "text";
      } else {
        this.showPassword = true;
        this.type = "password";
      }
    },
    toHome(){
      this.$router.push('/app-tab/home-page')
    }
  },
};
</script>
<style lang="less" scoped>
// @color-A:#447EFB;
.login {
  width: 100%;
  height: 100%;
  .loginContainer {
    position: absolute;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loginName {
      font-size: 20px;
      text-align: center;
      margin-bottom: 40px;
      color: #447efb;
      font-weight: 700;
    }
    .container {
      border: 1px solid #447efb;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      box-sizing: border-box;
      position: relative;
      background: #ffff;
      &:hover {
        box-shadow: #8aacf7 0px 0px 2px 1px;
      }
    }
    .iconfont {
      margin: 5px;
      color: #7da0f1;
    }

    .icon-eye1,.icon-eye{
      position: absolute;
      right: 10px;
      top: 4px;
    }
    .ivu-input,
    .loginButton {
      border: none;
      &:focus {
        outline: none;
      }
    }
    .ivu-input {
      width: 68%;
    }
    .loginButton {
      width: 100%;
      background: #447efb;
      color: #ffffff;
      &:hover {
        box-shadow: #8aacf7 0px 0px 4px 1px;
      }
    }
  }
}
</style>