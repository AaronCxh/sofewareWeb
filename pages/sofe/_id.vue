<template>
  <div class="sofeDetail-wrapper layout-min-height">
    <div class="sofeDetail-header">
      <div class="float">
        <img src="~assets/images/shape-1.svg" alt="" class="shape-1" />
        <img src="~assets/images/shape-55.svg" alt="" class="shape-2" />
        <img src="~assets/images/shape-56.svg" alt="" class="shape-3" />
        <img src="~assets/images/shape-57.svg" alt="" class="shape-4" />
        <img src="~assets/images/shape-58.svg" alt="" class="shape-5" />
        <img src="~assets/images/shape-59.svg" alt="" class="shape-6" />
        <img src="~assets/images/shape-60.svg" alt="" class="shape-7" />
        <img src="~assets/images/shape-61.svg" alt="" class="shape-8" />
        <img src="~assets/images/shape-62.svg" alt="" class="shape-9" />
        <img src="~assets/images/shape-10.svg" alt="" class="shape-10" />
        <img src="~assets/images/shape-11.svg" alt="" class="shape-11" />
      </div>
      <div class="container">
        <a-row :gutter="30" type="flex" align="middle">
          <a-col :xs="24" :sm="24" :lg="12">
            <div class="sofeDetail-header__left">
              <div class="flex-box">
                <img
                  src="~assets/images/adobe-photoshop-2020-1.png"
                  class="lazyload"
                />
                <div class="con">
                  <div class="name">
                    Gifox Pro 2.2.5 破解版 (最好用的Gif动画录制工具)
                    <span class="text-muted">(TNT + 免激活)</span>
                  </div>
                  <div class="action-group">
                    <button class="button button-default">
                      <i class="iconfont">&#xe6f8;</i>
                      立即下载
                    </button>
                    <button class="button button-default-reverse">
                      <i class="iconfont">&#xe6fa;</i>
                      已赞 (1000)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :sm="24" :lg="12">
            <div class="sofeDetail-header__right">
              <div class="swiper-container" id="promo-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="https://cdn.macwk.com/public/uploads/_/originals/gifox-screen-01-1.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://cdn.macwk.com/public/uploads/_/originals/gifox-screen-01-1.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
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
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="sofeDetail-inner">
      <div class="sofeDetail-info">
        <div class="sofeDetail-info__cell">
          <div class="box">
            <div class="label text-muted">大小</div>
            <div class="value">24.4</div>
            <div class="suffix">MB</div>
          </div>
        </div>
        <div class="sofeDetail-info__cell">
          <div class="box">
            <div class="label text-muted">大小</div>
            <div class="value">24.4</div>
            <div class="suffix">MB</div>
          </div>
        </div>
        <div class="sofeDetail-info__cell">
          <div class="box">
            <div class="label text-muted">大小</div>
            <div class="value">24.4</div>
            <div class="suffix">MB</div>
          </div>
        </div>
        <div class="sofeDetail-info__cell">
          <div class="box">
            <div class="label text-muted">大小</div>
            <div class="value">24.4</div>
            <div class="suffix">MB</div>
          </div>
        </div>
        <div class="sofeDetail-info__cell">
          <div class="box">
            <div class="label text-muted">大小</div>
            <div class="value">24.4</div>
            <div class="suffix">MB</div>
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
  name: "sofeDetail",
  layout: "layout",
  data() {
    return {};
  },
  mounted() {
    console.log("软件详情");
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
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.sofeDetail-wrapper {
  padding: 24px 0 0;
  overflow: hidden;
  .sofeDetail-header {
    position: relative;
    padding: 24px 0;
    .shape-1 {
      position: absolute;
      top: 21%;
      right: 22%;
      animation: animationFramesTwo 13s linear infinite;
    }
    .shape-2 {
      position: absolute;
      top: 27%;
      left: 7%;
      animation: animationFramesFour 25s linear infinite alternate;
    }
    .shape-3 {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: animationFramesThree 35s linear infinite alternate;
    }
    .shape-4 {
      position: absolute;
      top: 70%;
      right: 3%;
      animation: animationFramesFour 20s linear infinite alternate;
    }
    .shape-5 {
      position: absolute;
      bottom: 2%;
      right: 28%;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-6 {
      position: absolute;
      bottom: 3%;
      left: 38%;
      animation: animationFramesFour 20s linear infinite alternate;
    }
    .shape-7 {
      position: absolute;
      left: 4%;
      bottom: 4%;
      animation: animationFramesOne 17s linear infinite;
    }
    .shape-8 {
      position: absolute;
      left: 4%;
      top: 60%;
      animation: animationFramesOne 20s linear infinite alternate;
    }
    .shape-9 {
      position: absolute;
      top: 22%;
      left: 41%;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-10 {
      top: 2%;
      right: 2%;
      position: absolute;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-11 {
      position: absolute;
      top: 6%;
      right: 4%;
      animation: animationFramesOne 15s linear infinite;
    }
    .sofeDetail-header__left {
      padding: 8px;
      .name {
        margin-bottom: 16px;
        font-size: 34px;
        color: $color-fontColor;
        span {
          font-size: 18px;
          margin-left: 8px;
          vertical-align: 4px;
        }
      }
      img {
        width: 128px;
        height: 127px;
        margin-right: 12px;
      }
      .action-group {
        .button {
          border-radius: 44px;
          height: 44px;
          font-size: 16px;
          font-weight: 600;
          .iconfont {
            font-weight: 100;
            font-size: 22px;
            margin-right: 5px;
            line-height: 1;
          }
        }
        .button-default {
          min-width: 200px;
        }
        .button-default-reverse {
          min-width: 166px;
          margin-left: 15px;
          &:hover {
            background: $color-default;
            color: #fff;
          }
        }
      }
    }
    .sofeDetail-header__right {
      .swiper-container {
        max-width: 576px;
        margin: 0 auto;
      }
      img {
        border: 2px solid #121212;
        border-radius: 2px;
        max-height: 360px;
        max-width: 576px;
      }
    }
  }
}
.sofeDetail-info {
  display: flex;
  .sofeDetail-info__cell {
    flex: 0 0 (100% / 5);
    .box {
      margin: 16px 0;
      .label {
        font-size: 10px;
      }
      .value {}
      .suffix {}
    }
  }
}
</style>
