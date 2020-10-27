<template>
  <div class="home-page">
    <div class="header">
      <i class="iconfont icon-fuwudiqiu"></i>
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <input type="text" />
      </div>
      <div>
        <i class="iconfont icon-My" @click="toHome"></i>
      </div>
    </div>
    <div class="main">
      <!-- <tab-Control :list="homeTabData"></tab-Control> -->
      <div class="bannner">
        <!-- <mt-swipe :auto="4000">
          <mt-swipe-item
            ><img src="../../assets/pic-one.jpg" alt=""
          /></mt-swipe-item>
          <mt-swipe-item
            ><img src="../../assets/pic-two.jpg" alt=""
          /></mt-swipe-item>
          <mt-swipe-item
            ><img src="../../assets/pic-three.jpg" alt=""
          /></mt-swipe-item>
        </mt-swipe> -->
        <swiper
          :list="imgList"
          auto
          dots-class="custom-bottom"
          dots-position="center"
        ></swiper>
      </div>
      <tab-Control :tagList="homeTabData"></tab-Control>
      <div class="home-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TabControl from "../../components/TabControl";
const list = [
  "https://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603436657&t=f7dd833d7112eb10aecdb69dca8456ed",
  "https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603436657&t=87579d17dba445b0ac6778baa11df69d",
  "https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603436657&t=8f915bfcb672f00fc30a684584002405",
];
const demoList = list.map((one) => ({
  url: "javascript:",
  img: one,
}));
export default {
  name: "home-page",
  components: {
    TabControl,
  },
  data() {
    return {
      homeTabData: [
        {
          name: "关注",
          path: "/app-tab/home-page/routeone",
        },
        {
          name: "推荐",
          path: "/app-tab/home-page/routetwo",
        },
        {
          name: "项目介绍",
          path: "/app-tab/home-page/routethree",
        },
        {
          name: "功能区",
          path: "/app-tab/home-page/routefour",
        },
      ],
      imgList: demoList,
      // index:'1'
    };
  },
  methods: {
    toHome() {
      this.$router.push("/loginin");
    },
  },
};
</script>
<style lang="less" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    background: url(../../assets/bg-pic.jpg) no-repeat;
    background-size: 100% 100%;
    padding: 10px 15px 100px 15px;
    border-radius: 0 0 3px 3px;
    height: 160px;
    .search-input {
      border: 1px solid #014dfb;
      border-radius: 10px;
      padding: 3px;
      line-height: 20px;
      background: #ffff;
      width: 70%;
      height: 28px;
      .iconfont {
        margin: 2px;
        font-size: 14px;
        color: #a1a2a5;
      }
      input {
        width: 70%;
      }
    }
    .iconfont {
      margin: 2px;
      font-size: 22px;
      color: #ffff;
    }
  }
  .main {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 2;
    background: #f0f0f0;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 6px;
  }
  .bannner {
    height: 190px;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
    /deep/.vux-slider {
      //   width: 100% !important;
      height: 100%;
      .vux-swiper {
        height: 100% !important;
      }
      //   margin: 0 !important;
      // .vux-img {
      //   background-size: 100% 100%;
      // }
    }
  }
  .home-main {
    margin-top: 10px;
    background: #ffff;
    border-radius: 6px;
    flex: 1;
    text-align: center;
    overflow-y: auto;
  }
  .tab-control {
    padding: 0px 3px;
  }
}
</style>