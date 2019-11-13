<template>
  <div class="page shopping-cart">
    <ul class="cart-list">
      <li v-for="(item, index) in shoppingCart" :key="index">
        <input type="checkbox">
        <img src="" alt="">
        <div class="infos">
          <p class="title">{{item.title}}</p>
          <p class="des">{{item.des}}</p>
          <p class="color-ze">{{item.color}} - {{item.size}}</p>
          <p class="num">{{item.num}}</p>
          <p class="total">{{item.total}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'shoppingCart',
  mounted() {
    console.log(this.shoppingCart);
  },
  computed: {
    ...mapState(["shoppingCart"])
  }
}
</script>