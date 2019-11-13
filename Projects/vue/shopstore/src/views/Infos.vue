<template>
  <div class="page infos">
    <!-- 基本信息 -->
    <div class="info-box">
      <img :src="data.imgUrl" />
      <div class="basic">
        <p class="name">{{data.title}}</p>
        <p class="des">{{data.des}}</p>
        <p class="stock">
          库存：
          <span>{{data.stock}}</span>件
        </p>
        <p class="price">
          单价：
          <span>{{data.price}} 元</span>
        </p>
      </div>
    </div>
    <!-- 选购信息 -->
    <div class="buy-info">
      <!-- 尺码 -->
      <LhySelect class="item" title="尺码" :source="data.size" @change="sizeSelect"></LhySelect>
      <!-- 颜色 -->
      <LhySelect class="item" title="颜色" :source="data.color" @change="colorSelect"></LhySelect>
      <!-- 数量 -->
      <div class="item nums">
        数量：
        <van-stepper
          v-model="order.num"
          min="1"
          :max="data.stock"
          button-size="30"
          input-width="50"
          integer
        />
      </div>
      <div class="total">
        总价：
        <span>{{total}}</span> 元
      </div>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <section class="btn shopping-cart" @click="insertShoppingCart">加入购物车</section>
      <section class="btn buy" @click="buy">立即购买</section>
    </div>
  </div>
</template>

<script>
import LhySelect from "../components/LHYSelect";
import isLogin from "../common/public";
import { mapState, mapMutations } from "vuex";
export default {
  name: "infos",
  data() {
    return {
      data: {},
      order: { num: 1 }
    };
  },
  created() {
    let _this = this;
    this.$axios(`/commodities?id=${_this.$route.query.id}`).then(res => {
      let obj = res.data.data[0];
      obj.size = obj.size.split("、");
      obj.color = obj.color.split("、");
      this.data = obj;
      // 处理订单对象
      for (let key in obj) {
        this.$set(this.order, key, obj[key]);
      }
      this.order.size = "";
      this.order.color = "";
    });
  },

  computed: {
    ...mapState(["shoppingCart"]),
    total() {
      return this.order.num * this.order.price;
    }
  },
  methods: {
    ...mapMutations(["SET_SHOPPING_CART"]),
    // => 选择尺寸
    sizeSelect(size) {
      this.order.size = size;
    },
    // => 选择颜色
    colorSelect(color) {
      this.order.color = color;
    },
    // => 加入购物车
    insertShoppingCart() {
      let _this = this;
      isLogin(this).then(() => {
        // 完善订单数据
        this.order.total = this.total;
        // 异常处理
        let { color, size } = this.order;
        if (!color || !size) {
          this.$toast.fail({
            message: "请完善订单！",
            duration: 500
          });
        } else {
          this.$toast.success({
            message: "添加成功！",
            duration: 500
          });
          // 获取购物车
          let _shoppingCart = this.shoppingCart.map(item =>
            Object.assign({}, item)
          );
          // 判断购物车是否已经存在对应的数据
          // 标题/尺寸/颜色
          let index = -1;
          for (let i = 0, len = _shoppingCart.length; i < len; i++) {
            let { title, size, color } = _shoppingCart[i];
            if (
              title == this.order.title &&
              size == this.order.size &&
              color == this.order.color
            ) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            _shoppingCart.push(this.order);
          } else {
            _shoppingCart[index].num += this.order.num;
          }
          // 更新购物车 SET_SHOPPING_CART
          _this.SET_SHOPPING_CART(_shoppingCart);
        }
      });
    },
    // => 立即购买
    buy() {}
  },
  components: {
    LhySelect
  }
};
</script>

<style lang="less" scoped>
#app .page {
  height: calc(100% - 64px);
  box-sizing: border-box;
  padding: 8px;
}
.info-box {
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  img {
    width: 45%;
    border: 1px solid #eeeeee;
  }
  .basic {
    width: 52%;
    font-weight: bold;
    color: #444444;
    .name {
      letter-spacing: 2px;
      font-size: 1rem;
    }
    .des {
      font-size: 0.65rem;
      font-weight: normal;
      color: gray;
      margin: 12px 0 20px;
    }
    .price,
    .stock {
      font-size: 0.35rem;
      color: gray;
      line-height: 30px;
    }
    .price span {
      font-size: 0.85rem;
      color: orange;
    }
  }
}

.buy-info {
  .item {
    margin: 12px 0;
  }
  .nums {
    display: flex;
    .van-stepper {
      button.van-stepper__minus,
      button.van-stepper__plus {
        background-color: gray !important;
      }
    }
  }
}

.btns {
  display: flex;
  justify-content: center;
  width: 80%;
  height: 42px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 18px;
  overflow: hidden;
  .btn {
    width: 50%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    letter-spacing: 2px;
  }
  .buy {
    background: linear-gradient(to right, rgb(251, 85, 51), rgb(237, 0, 37));
  }
  .shopping-cart {
    background: linear-gradient(to right, rgb(254, 207, 33), rgb(254, 133, 32));
  }
}
</style>