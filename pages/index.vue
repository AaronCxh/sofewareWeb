<template>
  <div class="app-main">
    <div class="promo-wrapper">
      <div class="container">
        <div class="swiper-container" id="promo-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~assets/images/首页-恢复的_03.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="~assets/images/首页-恢复的_03.png" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="btn button-prev">
            <i class="iconfont">&#xe6d4;</i>
          </div>
          <div class="btn button-next">
            <i class="iconfont">&#xe600;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
export default {
  name: "index",
  layout: "layout",
  data() {
    return {
      color: "red"
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper("#promo-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.promo-wrapper {
  position: relative;
  margin: 24px 0 33px;
  .swiper-container {
    border-radius: 6px;
  }
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: rgba($color: #000000, $alpha: 0.8);
    cursor: pointer;
    .iconfont {
      color: #a0b4c8;
    }
    &.button-prev {
      left: 20px;
    }
    &.button-next {
      right: 20px;
    }
  }
}
</style>
<style lang="scss">
.promo-wrapper {
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 30px !important;
      height: 2px !important;
      background: rgba($color: #fff, $alpha: 0.9) !important;
      &.swiper-pagination-bullet-active {
        background: #a0b4c8 !important;
      }
    }
  }
}
</style>
