<template>
  <div class="appPage">
    <router-view></router-view>
    <tab-Control :tagList="tabList"></tab-Control>
  </div>
</template>
<script>
import TabControl from "../../components/TabControl";
export default {
  name: "app-tab",
  components: {
    TabControl,
  },
  data() {
    return {
      tabList: [
        {
          icon: "icon-home",
          name: "首页",
          path: "/app-tab/home-page",
        },
        {
          icon: "icon-fuwudiqiu",
          name: "服务地球",
          path: "/app-tab/global-page",
        },
        {
          icon: "icon-icon_shezhi",
          name: "设置",
          path: "/app-tab/setting-page",
        },
        {
          icon: "icon-shebeikaifa",
          name: "设备开发",
          path: "/app-tab/equipment-page",
        },
        {
          icon: "icon-My",
          name: "我的",
          path: "/loginin",
          // path: '/app-tab/my-page',
        },
      ],
    };
  },
  methods: {
    checkRoute() {},
  },
};
</script>
<style lang="less" scoped>
.appPage {
  // padding: 10px;
  height: 100%;
  .tab-control {
    border-top: 1px solid #d6d6d6;
    background: #f7f7f7;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #8F8F8F;
    padding: 8px 15px;
  }
}
</style>