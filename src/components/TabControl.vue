<template>
  <div class="tab-control">
    <router-link
      v-for="(item, index) in tagList"
      :key="index"
      class="tabItem"
      :class="isActive(item.path) ? 'active' : ''"
      :to="item.path"
      tag="div"
    >
      <i class="iconfont" :class="item.icon" v-if="item.icon"></i>
      <div class="tabTitle">{{ item.name }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "tab-control",
  props: {
    tagList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    isActive(route) {
      return this.$route.path.includes(route);
    },
  },
};
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  width: 100%;
  justify-content: space-between;
//   padding: 8px 15px;
  box-sizing: border-box;
  z-index: 333;
  .tabItem {
    text-align: center;
    .tabTitle {
      margin-top: 3px;
    }
    .iconfont {
      font-size: 18px;
    }
  }
  .active {
    color: #014DFB;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(11);
    transform: scale(1.1);
    // font-weight: 600
  }
}
</style>