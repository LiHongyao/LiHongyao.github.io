<template>
  <div class="navigation-bar">
    <!-- 返回 -->
    <span v-show="showBack" class="goback" @click="goback">
      <i class="fas fa-angle-left"></i>
      返回
    </span>
    <!-- 标题 -->
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    title: {
      type: String,
      default: "首页",
      required: true
    },
    showBack: {
      type: Boolean
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>

.navigation-bar {
    width: 100%;
    height: 64px;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    color: #444444;
    font-size: .5rem;
    letter-spacing: 2px;
}
.goback {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
}




</style>
