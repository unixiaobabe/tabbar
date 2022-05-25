<template>
  <div class="my-tab-bar">
    <router-link
      :to="'/' + item.componentPath"
      class="tab-item"
      v-for="(item, i) in arr"
      :key="i"
      ><span class="iconfont" :class="item.iconText"></span>
      <span>{{ item.text }}</span></router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router-link-exact-active{
    color: lightblue;
}
</style>