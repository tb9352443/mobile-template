<template>
  <div class="HelloWorld">
    <div>{{msg}}</div>
    <mt-button type="default" @click="jumpManager">默认按钮</mt-button>
    <mt-popup v-model="popupVisible" position="bottom">上课就反对发射点</mt-popup>
  </div>
</template>

<script>
import { getInfo } from "../api/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    jumpManager() {
      getInfo({
        page: '1',
        size: "10",
      }).then((res) => {
        console.log(res);
      });
      console.log("000");
      this.$router.push("/visitor-managet");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped> -->
<style lang="less" scoped>
@import "../style/index.less";

div {
  color: @color;
}
</style>
