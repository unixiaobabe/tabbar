<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in arr" :key="item.id">
        <slot name="body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
</style>