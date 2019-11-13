<template>
  <div class=lhy-select>
   <p class="lhy-select-title">{{title}}：</p>
   <ul class="lhy-select-list">
       <li v-for="(text, index) in source" :key="index" :class="{'sel': selIndex === index}" @click="handleClick(text, index)">{{text}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: "lhy-select",
  data() {
      return {
          selIndex: ""
      }
  },
  props: ["title", "source", "type"],
  methods: {
   handleClick(text, index) {
       if(this.selIndex === index) {
           return;
       }
       this.$emit("change", text);
       this.selIndex = index;
   }
  }
};
</script>

<style lang="less" scoped>

.lhy-select {
    display: flex;
    align-items: center;
}
.lhy-select-list {
    display: flex;
    li {
        box-sizing: border-box;
        width: 50px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid gray;
        color: gray;
        margin: 0 6px;
        &.sel {
            background: gray;
            color: #ffffff;
        }
    }
}

</style>
