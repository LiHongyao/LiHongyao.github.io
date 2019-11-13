<template>
  <div class="page mine">
    <div class="infos">
      <!-- 头像 -->
      <div class="head-portrait"></div>
      <p class="nike-name">木子李</p>
      <p class="autograph">曾将沧海难为水，除却巫山不是云。</p>
    </div>
    <!-- 功能列表 -->
    <ul class="func-list" v-for="(items, i) in funcs" :key="i">
      <li v-for="(item, j) in items" :key="j" @click="handleFuncClick(i, j, item.text)">
        <section>
          <i :class="item.icon"></i>
          <span class="text">{{item.text}}</span>
        </section>
        <i class="fas fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      funcs: [
        [{ text: "支付", icon: "fab fa-amazon-pay" }],
        [
          { text: "收藏", icon: "fas fa-dice-d6" },
          { text: "关于", icon: "fas fa-info-circle" },
          { text: "卡包", icon: "fas fa-credit-card" },
          { text: "表情", icon: "fas fa-smile" }
        ],
        [{ text: "设置", icon: "fas fa-cog" }]
      ]
    };
  },
  methods: {
    handleFuncClick(i, j, text) {
      if (text != "设置") {
        this.$toast.fail({
          message: "敬请期待！",
          duration: 500
        });
      } else {
        this.$router.push("/setting");
      }
    }
  }
};
</script>


<style lang="less" scoped>
.infos {
  height: 150px;
  background: #444444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 0 8px;
  text-align: center;
  .head-portrait {
    width: 25%;
    padding-top: 25%;
    background: pink;
    border-radius: 50%;
    background: url("http://b-ssl.duitang.com/uploads/item/201709/22/20170922162149_snyk3.jpeg")
      no-repeat center center;
    background-size: cover;
  }
  .nike-name {
    color: #ffffff;
    font-size: 0.5rem;
    line-height: 30px;
  }
  .autograph {
    font-size: 0.5rem;
    color: #ffffff;
  }
}
.func-list {
  background: #ffffff;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 8px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;
    line-height: 45px;
    &:not(:last-child) {
      border-bottom: 1px solid #eeeeee;
    }
    .text {
      margin-left: 8px;
    }
  }
}
</style>