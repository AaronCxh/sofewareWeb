<template>
  <div class="special-wrapper layout-min-height">
    <div class="container">
      <a-row :gutter="30">
        <a-col :sm="24" :xxl="{ span: 20, offset: 2 }">
          <header class="text-center">
            <h1>
              Best Tools for
              <a-popover
                trigger="click"
                placement="bottomLeft"
                overlayClassName="my-popover"
              >
                <template slot="content">
                  <div>
                    <router-link class="nav-link" to="gif"
                      >Gif动画制作</router-link
                    >
                    <router-link class="nav-link" to="2"
                      >Adobe 2021</router-link
                    >
                    <router-link class="nav-link" to="3">图像处理</router-link>
                    <router-link class="nav-link" to="4">产品经理</router-link>
                    <router-link class="nav-link" to="5">思维导图</router-link>
                    <router-link class="nav-link" to="6">项目管理</router-link>
                    <router-link class="nav-link" to="7">原型设计</router-link>
                    <router-link class="nav-link" to="8">新人必备</router-link>
                  </div>
                </template>
                <span>Gif动画制作 <i class="iconfont">&#xe72a;</i></span>
              </a-popover>
            </h1>
            <h5 class="text-muted">
              在这里，您可以找到面向gif动画制作的最佳应用工具。<br />
              如果您认为我们有所遗漏，请在
              <a target="_blank" href="#/feedback">意见建议</a>
              处提交给我们，谢谢。
            </h5>
          </header>
          <div class="wrapper">
            <a-row :gutter="30" type="flex">
              <a-col
                :xs="24"
                :md="12"
                :lg="6"
                v-for="(item, index) in list"
                :key="index"
              >
                <a target="_blank" href="#/sofe/1" class="sofe-wrapper__item border">
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <div class="sofe-wrapper__image">
                    <img
                      :class="`img lazyload blur_img animation delay-${index} `"
                      :data-src="
                        require('@/assets/images/aliyun-drive-xiaobaiyang.png')
                      "
                      src="~assets/images/ball-loading.svg"
                      alt=""
                    />
                  </div>
                  <div class="sofe-wrapper__item--con">
                    <div class="sofe-wrapper__item--name">
                      <span class="fw600">Gifox</span>
                    </div>
                    <div class="sofe-wrapper__item--version">
                      Pro 2.2.5
                    </div>
                    <div class="sofe-wrapper__item--summary">
                      使用最多的图片处理
                    </div>
                  </div>
                  <div class="sofe-wrapper__item--extend">
                    <div class="download">
                      <i class="iconfont">&#xe6f9;</i>
                      260911
                    </div>
                    <div class="update">
                      <i class="iconfont">&#xe6ce;</i>
                      09-04
                    </div>
                  </div>
                </a>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialList",
  layout: "layout",
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}]
    };
  },
  mounted() {
    console.log("挂载");
  },
  destroyed() {
    console.log("销毁");
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.special-wrapper {
  padding-bottom: 80px;
  header {
    padding: vw(128) 0;
    h1 {
      font-weight: 600;
      font-size: 60px;
      color: $color-fontColor;
      margin-bottom: 8px;
      span {
        color: $color-default;
        cursor: pointer;
        align-items: center;
        .iconfont {
          font-size: 60px;
          line-height: 1;
          margin-top: 15px;
          font-weight: 400;
        }
        &:hover {
          transition: border-bottom-width 0.3s;
          border-bottom: 4px dashed;
        }
      }
    }
    h5 {
      font-size: 20px;
      margin-bottom: 8px;
    }
    @at-root .nav-link {
      display: block;
      padding: 12px 24px;
      font-size: 26px;
    }
  }
  .wrapper {
    @include b(sofe-wrapper) {
      @include e(item) {
        line-height: 1.9;
        margin-bottom: 30px;
        .snow-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(194, 215, 255, 0.5);
          z-index: -1;
          display: none;
          opacity: 0.5;
          &:nth-child(7n + 1) {
            top: 25px;
            left: 41%;
            z-index: 1;
            animation: scale-upOne 1s ease-in infinite alternate;
          }
          &:nth-child(7n + 2) {
            top: 25px;
            left: 78%;
            animation: scale-upOne 1.1s ease-in infinite alternate;
          }
          &:nth-child(7n + 3) {
            top: 75px;
            left: 61%;
            animation: scale-upOne 0.8s ease-in infinite alternate;
          }
          &:nth-child(7n + 4) {
            top: 136px;
            left: 84%;
            animation: scale-upOne 1s ease-in infinite alternate;
          }
          &:nth-child(7n + 5) {
            bottom: 35px;
            right: 12%;
            animation: scale-upOne 1.2s ease-in infinite alternate;
          }
          &:nth-child(7n + 6) {
            bottom: 80px;
            right: 31%;
            animation: scale-upOne 0.9s ease-in infinite alternate;
          }
          &:nth-child(7n + 7) {
            bottom: 40px;
            right: 51%;
            animation: scale-upOne 1s ease-in infinite alternate;
          }
        }
        @include m(con) {
          padding: 32px 5px 48px;
        }
        &:hover {
          .snow-dot {
            display: inline-block;
            transition: display 0.3s ease-in-out;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
:root {
  --popoverBackgroundColor: #16202f;
}
.my-popover {
  width: 300px;
  .ant-popover-inner {
    background: var(--popoverBackgroundColor);
    border: 1px solid rgba(120, 130, 140, 0.09);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .ant-popover-arrow {
    border-top-color: var(--popoverBackgroundColor) !important;
    border-left-color: var(--popoverBackgroundColor) !important;
  }
  .ant-popover-inner-content {
    padding: 12px !important;
    color: rgba(160, 180, 200, 0.9);
  }
}
</style>
