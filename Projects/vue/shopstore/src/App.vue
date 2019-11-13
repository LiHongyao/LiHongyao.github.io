<template>
  <div id="app">
    <!-- 头部 -->
    <NavigationBar v-show="showNav" :show-back="showBack" :title="title" />
    <!-- 内容 -->
    <router-view />
    <!-- 尾部 -->
    <TabBar v-show="showTab"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavigationBar from "@/components/NavigationBar";
import TabBar from "@/components/TabBar";
export default {
  data() {
    return {
      showBack: false
    }
  },
  watch: {
    $route(to, from) {
      let names = ["infos", "loginRegister", "setting"]
      this.showBack = names.includes(to.name) ? true : false;
    }
  },
  computed: {
    ...mapState(["title", "showNav", "showTab"])
  },
  components: {
    NavigationBar,
    TabBar
  }
};
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
img {
  vertical-align: middle;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .page {
    height: calc(100% - 64px - 49px);
    overflow: hidden;
    overflow-y: scroll;
    background: #f5f5f5;
  }
}


// 商品数据
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 49%;
    // background: #ffffff;
    padding-bottom: 12px;
    margin-bottom: 3%;
    img {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid lightskyblue;
    }
    .name {
      font-size: 0.5rem;
      font-weight: bold;
      line-height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .des {
      font-size: 0.25rem;
      color: gray;
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .price {
      font-size: 0.8rem;
      font-weight: bold;
      color: orange;
    }
  }
}
</style>
