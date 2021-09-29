<template>
  <div class="item">
    <a href="#/sofe/1" class="" target="_blank"
      ><div class="flex-box align-center">
        <div class="box-icon mb-0 mr-4 delay-0">
          <img
            class="lazyload img"
            data-src="https://cdn.macwk.com/public/uploads/_/originals/todesk.png"
          />
        </div>
        <div class="con">
          <h5 class="title">
            ToDesk
          </h5>
          <p class="text text-muted">
            流畅的远程控制软件
          </p>
        </div>
        <div>
          <button class="btn btn-link px-0">
            <i class="icon-download fs-26"></i>
          </button>
        </div></div
    ></a>
    <div class="box-body">
      <p class="text-muted summary">
        ToDesk for Mac 是一款免费而流畅的远程协助软件。ToDesk 支持 1080P
        高清屏幕控制以及文件传输。通过多区域机房、G级宽带服务器加速以确保您每一次的远程访问稳定、流畅。在安全方面，通讯数据使用
        `端到端加密`，`连接密码仅存于您的设备`，ToDesk
        官方也无法窥探您的桌面以确保您的每次连接都是安全可靠的。
      </p>
      <div class="swiper-container promo-wrapper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/todesk-screen-02.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/todesk-screen-02.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
              alt=""
            />
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
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
  
    this.initSwiper();
  },
  data() {
    return {};
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
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
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.item {
  background-color: #1c283b;
  padding: 16px;
  color: var(--color-fontColor);
  .box-icon {
    margin-right: 16px;
    img {
      width: 56px;
      height: 56px;
    }
  }
  .flex-box {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--borderColor);
  }
  .con {
    flex: 1;
    line-height: 1.9;
    .title {
      font-size: 20px;
      line-height: 1.3;
      color: var(--color-fontColor);
      margin: 0;
    }
    .text {
      font-size: 15px;
      margin: 0;
    }
  }
  .summary {
    font-size: 16px;
    line-height: 1.9;
    @include clamp(3);
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .promo-wrapper {
    margin: 16px 0 0;
  }
}
</style>
