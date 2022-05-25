<template>
  <div>
    <my-table :arr="list">
      <template #header>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #body="scope">
        <th scope="row">{{ scope.item.id }}</th>
        <td>{{ scope.item.goods_name }}</td>
        <td>{{ scope.item.goods_price }}</td>
        <td>
          <!-- {{ scope.item.tags }} -->
          <input
            type="text"
            @blur="scope.item.inputVisible = false"
            v-gfocus
            v-if="scope.item.inputVisible"
            class="form-control"
            @keydown.enter="enterFn(scope.item)"
            v-model="scope.item.inputValue"
            @keydown.esc="scope.item.inputValue=''"
          />
          <button
            type="button"
            @click="scope.item.inputVisible = true"
            class="btn btn-primary"
            v-else
          >
            +Tag
          </button>
          <br />
          <span class="tags" v-for="(ite, ind) in scope.item.tags" :key="ind">
            {{ ite }}
          </span>
        </td>
        <td>
          <button
            @click="removeData(scope.item.id, scope.index)"
            type="button"
            class="btn btn-danger btn-sm"
          >
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
export default {
  components: { MyTable },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    async getGoodList() {
      let { data: res } = await this.$axios.get("api/goods");
      console.log("goodlist", res);
      this.list = res.data;
    },
    removeData(id, index) {
      //使用下标
      // this.list.splice(index,1)

      //使用id
      let ind = this.list.findIndex((item) => {
        item.id == id;
      });
      this.list.splice(ind, 1);
    },
    enterFn(item){
      if(item.inputValue.trim().length == 0){
        alert('请添加数据')
        return 
      }
      item.tags.push(item.inputValue)
      item.inputValue = ''
    }
  },
};
</script>

<style lang="css" scoped>
.tags {
  padding: 0px 10px;
  background-color: lightblue;
  color: #000;
  margin-right: 8px;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>