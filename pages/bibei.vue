<template>
  <div class="bibei-wrapper layout-min-height">
    <div class="container">
      <div class="inner">
        <div class="hd">
          <h4>系统工具</h4>
        </div>
        <a-row :gutter="[20, 20]">
          <a-col
            :span="12"
            :md="8"
            :lg="6"
            :xl="4"
            v-for="(item, index) in list"
            :key="index"
          >
            <a href="/soft/paste" class="item" target="_blank">
              <div class="inner">
                <span class="text-muted ">3.0.11</span>
                <h4 class="nowrap">
                  Paste
                </h4>
                <p class="text-muted">
                  剪切板增强工具
                </p>
                <div class="btn-box">
                  <i class="iconfont">&#xe604;</i>
                </div>
                <div class="icon-box">
                  <div class="border-layer"></div>
                  <img
                    class="lazyload img"
                    src="~assets/images/ball-loading.svg"
                    data-src="https://cdn.macwk.com/public/uploads/_/originals/paste-bs.png"
                  />
                </div>
              </div>
            </a>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <div class="hd">
          <h4>系统工具</h4>
        </div>
        <a-row :gutter="[20, 20]">
          <a-col
            :span="12"
            :md="8"
            :lg="6"
            :xl="4"
            v-for="(item, index) in list"
            :key="index"
          >
            <a href="/soft/paste" class="item" target="_blank">
              <div class="inner">
                <span class="text-muted ">3.0.11</span>
                <h4 class="nowrap">
                  Paste
                </h4>
                <p class="text-muted">
                  剪切板增强工具
                </p>
                <div class="btn-box">
                  <i class="iconfont">&#xe604;</i>
                </div>
                <div class="icon-box">
                  <div class="border-layer"></div>
                  <img
                    class="lazyload img"
                    src="~assets/images/ball-loading.svg"
                    data-src="https://cdn.macwk.com/public/uploads/_/originals/paste-bs.png"
                  />
                </div>
              </div>
            </a>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layout",
  name: "bibei",
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  }
};
</script>

<style lang="scss">
.bibei-wrapper {
  padding: 32px 0 80px;
  .container {
    margin-bottom: 52px;
  }
  .hd {
    margin-bottom: 24px;
    h4 {
      font-size: 1.52344rem;
      color: var(--color-fontColor);
      text-align: left;
    }
  }
  .item {
    background-color: #1c283b;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 35px 30px 30px;
    border-radius: 5px;
    transition: all 0.5s ease;
    border: 1px solid var(--borderColor);
    line-height: 1.9;
    .inner {
      span {
        position: relative;
        display: block;
        font-size: 14px;
        line-height: 20px;
        color: #979b9e;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      h4 {
        position: relative;
        line-height: 28px;
        font-size: 21px;
        font-weight: 500;
        color: rgba(160, 180, 200, 0.9);
        margin-bottom: 8px;
      }
      p {
        line-height: 1.9;
        margin-bottom: 32px;
      }
    }
    .icon-box {
      position: relative;
      display: inline-block;
      font-size: 60px;
      line-height: 60px;
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
      transition: all 0.5s ease;
      .border-layer {
        position: absolute;
        width: 86px;
        height: 86px;
        left: -11px;
        top: -4px;
        border: 2px solid #50a1ff;
        border-radius: 50%;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%, 0 0);
        transition: all 0.5s ease;
        animation: service_hexagon 2s linear infinite;
        animation-play-state: paused;
        opacity: 0;
        animation-play-state: running;
        &::before {
          position: absolute;
          content: "";
          background: #50a1ff;
          width: 8px;
          height: 8px;
          left: 8px;
          bottom: 7px;
          border-radius: 50%;
        }
      }
    }
    .img {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }
    .btn-box {
      position: absolute;
      right: 30px;
      bottom: 35px;
      display: inline-block;
      width: 55px;
      height: 55px;
      line-height: 55px;
      text-align: center;
      border-radius: 50%;
      font-size: 24px;
      .iconfont {
        font-size: 20px;
      }
    }
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 0%;
      left: 0;
      bottom: 0;
      border-radius: 5px;
      transition: all 0.5s ease;
      background: -webkit-linear-gradient(
        0deg,
        rgba(80, 161, 255, 0.04),
        #1c283b 100%
      );
    }
    &:hover {
      .inner {
        h4 {
          color: var(--color-default);
        }
      }
      &::before {
        height: 100%;
        top: 0;
      }
      .icon-box {
        color: var(--color-default);
        .border-layer {
          opacity: 1;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
      }
      .btn-box {
        .iconfont {
          color: var(--color-fontColor);
        }
      }
    }
  }
}
</style>
