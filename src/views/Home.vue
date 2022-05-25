<template>
  <div>
    <router-view></router-view>
    <my-tab-bar :arr="tabList"></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from '@/components/MyTabBar.vue';
export default {
  components: { MyTabBar },
  data() {
    return {
      tabList: [
        {
          iconText:'icon-shuanglieliebiao',
          text:'商品列表',
          componentPath:'goodlist'
        },
        {
          iconText:'icon-chaxun',
          text:'商品搜索',
          componentPath:'goodsearch'
        },
        {
          iconText:'icon-xinxibar_zhanghu',
          text:'我的信息',
          componentPath:'userinfo'
        },
      ]
    }
  },
};
</script>

<style lang="css" scoped>
</style>