<template>
  <div class="page search">
    <!-- 搜索框 -->
    <form action="javascript:;">
      <van-search placeholder="请输入搜索关键词" v-model="keywords" />
    </form>
    <!-- 搜索内容 -->
    <ul class="list">
      <li v-for="(item, index) in searchRes" :key="index" @click="goDetails(index)">
        <img :src="item.imgUrl">
        <p class="name">{{item.title}}</p>
        <p class="des">{{item.des}}</p>
        <p class="price">¥ {{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keywords: "", // 搜索关键字
      source: [],   // 搜索数据源
    };
  },
  created() {
    this.request();
  },
  computed: {
    searchRes() {
      // 1. 创建正则
      let reg = new RegExp(this.keywords);
      // 2. 过滤数据
      return this.source.filter(data => reg.test(JSON.stringify(data)));
    }
  },
  methods: {
    // => 请求数据源
    request() {
      this.$axios("/commodities").then(res => {
        this.source = res.data.data;
      })
    },
    goDetails(index) {
      let {id} = this.source[index];
      this.$router.push(`/infos?id=${id}`);
    }
  }
};
</script>


<style lang="less" scoped>
.page {
  height: calc(100% - 49px) !important; 
}
.list {
  height: calc(100% - 54px);
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 8px;
}
.van-search {
  background: #eeeeee !important;
}
.van-search__content  {
  border-radius: 16px;
}
</style>