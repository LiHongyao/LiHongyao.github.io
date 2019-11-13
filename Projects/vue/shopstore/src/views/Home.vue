<template>
  <div class="page home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" :height="190" indicator-color="orange">
      <van-swipe-item v-for="(image, index) in slides" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>·
    </van-swipe>
    <!-- 广告 -->
    <div class="ad">
      <i class="fas fa-volume-down"></i>
      双十一促销活动，您的愿望11为您实现~
    </div>
    <!-- 商品分类展示 -->
    <div class="commodities">
      <div v-for="(kind, i) in commodities" :key="i" :class="kind.class">
        <!-- 标题 -->
        <h3 class="title">{{kind.title}}</h3>
        <!-- 商品展示 -->
        <ul class="list">
          <li v-for="(item, j) in kind.contentlist" :key="j" @click="goDetails(i, j)">
            <img :src="item.imgUrl" />
            <p class="name">{{item.title}}</p>
            <p class="des">{{item.des}}</p>
            <p class="price">¥ {{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "vant/lib/index.css";

export default {
  name: "home",
  data() {
    return {
      slides: [], // 轮播图数据
      commodities: [] // 分类商品集合
    };
  },
  created() {
    // => 请求数据
    this.request();
  },
  methods: {
    goDetails(i, j) {
      const {id} = this.commodities[i]["contentlist"][j];
      // 跳转至详情页
      this.$router.push(`/infos?id=${id}`);
    },
    // => 请求数据
    request() {
      const requests = [
        this.$axios.get("/banner"),
        this.$axios.get("/commodities?kind=sale"),
        this.$axios.get("/commodities?kind=clothes"),
        this.$axios.get("/commodities?kind=pants"),
        this.$axios.get("/commodities?kind=shoes"),
        this.$axios.get("/commodities?kind=packages")
      ];
      // => 请求页面数
      this.$axios.all(requests).then(
        this.$axios.spread((banner, sale, clothes, pants, shoes, packages) => {
          // 1. 处理轮播图数据
          this.slides = banner.data.data;
          // 2. 处理商品数据
          let _kinds = [sale, clothes, pants, shoes, packages];
          let _class = ["sale", "clothes", "pants", "shoes", "packages"];
          let _title = ["热销", "衣服", "褲子", "鞋子", "包包"];
          for (let i = 0, len = _kinds.length; i < len; i++) {
            this.commodities.push({
              class: _class[i],
              title: _title[i],
              contentlist: _kinds[i].data.data
            });
          }
        })
      );
    }
  }
};
</script>


<style lang="less" scoped>
// 轮播图
.van-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
// 广告
.padding {
  box-sizing: border-box;
  padding: 0 8px;
}
.ad {
  .padding;
  font-size: 0.85rem;
  line-height: 50px;
  color: gray;
}
// 商品展示
.commodities {
  .padding;
  .title {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    margin-bottom: 10px;
    &::before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 14px;
      margin-right: 8px;
      background: darkred;
    }
  }
  
}
</style>
