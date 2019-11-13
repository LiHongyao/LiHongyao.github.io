<template>
  <div class="tab-bar">
      <section class="item" v-for="(link, index) in links" :key="index">
          <router-link exact :to="link.path">
            <i :class="link.icon"></i>
            {{link.title}}
          </router-link>
      </section>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      links: [
        { path: "/", title: "商城首页", icon: "fas fa-home" },
        { path: "/search", title: "搜索", icon: "fas fa-search" },
        { path: "/shopping-cart", title: "购物车", icon: "fas fa-shopping-cart" },
        { path: "/mine", title: "我的", icon: "fas fa-user" }
      ]
    };
  }
};
</script>


<style lang="less" scoped>

.flex(@axis:row, @principal:center, @cross:center, @wrap: wrap) {
    display: flex;
    flex-direction: @axis;
    flex-wrap: @wrap;
    justify-content: @principal;
    align-items: @cross;
}

.tab-bar {
    .flex();
    height: 49px;
    .item {
        width: 25%; height: 100%;
        a {
            .flex(column);
            width: 100%; height: 100%;
            background: #eeeeee;
            color: #444444;
            font-size: .25rem;
            .fas {
              font-size: 1rem;
            }
            &.router-link-active {
                color: green;
            }
        }  
    }
}
</style>