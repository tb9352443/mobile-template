<template>
  <div class="visitor-manager">
    <h1>访客管理</h1>
    <mt-button type="default" @click="jumpManager">获取数据</mt-button>
  </div>
</template>
<script>
import {getMock} from "../../api/api";
export default {
  name: "visitor-manager",
  methods: {
    jumpManager() {
      // getInfo({
      //   page: "1",
      //   size: "10",
      // }).then((res) => {
      //   console.log(res);
      // });
        getMock().then((res) => {
        console.log(res);
      });

      // this.$router.push("/visitor-register");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/index.less";
h1 {
  color: @color;
  background: @bgColor;
}
</style>