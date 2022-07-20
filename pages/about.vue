<template>
  <div class="layout-min-height">
    <div class="about-section">
      <div class="icon-wrapper">
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/downie-4.png"
          alt=""
          class="people"
        />
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/xmin-zen.png"
          alt=""
          class="people"
        />
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/sketch-1.png"
          alt=""
          class="people"
        />
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/imazing.png"
          alt=""
          class="people"
        />
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/alfred-powerpack.png"
          alt=""
          class="people"
        />
        <img
          src="https://cdn.macwk.com/public/uploads/_/originals/movist.png"
          alt=""
          class="people"
        />
      </div>
      <div class="container">
        <h1>{{ data.Title }}</h1>
        <p>{{ data.Summary }}</p>
        <div class="about-inner">
          <div class="main-content">
            <div class="richText" v-html="data.Content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestSiteConfig } from "@/api/app";
export default {
  name: "about",
  layout: "layout",
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      requestSiteConfig("about").then(res => {
        console.log("关于我们asd", res);
        this.data = res
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.about-section {
  margin: 115px 0 170px;
  position: relative;
}
.icon-wrapper {
  .people {
    position: absolute;
    width: 110px;
    height: 110px;
    &:first-child {
      top: 12%;
      left: 18%;
      animation: scale-up-one 14s linear infinite;
    }
    &:nth-child(2) {
      top: 44%;
      left: 9%;
      animation: scale-up-two 9s linear infinite;
    }
    &:nth-child(3) {
      bottom: 7%;
      left: 15%;
      animation: scale-up-three 8s linear infinite;
    }
    &:nth-child(4) {
      top: 12%;
      right: 18%;
      animation: scale-up-two 10s linear infinite;
    }
    &:nth-child(5) {
      top: 42%;
      right: 7%;
      animation: scale-up-three 11s linear infinite;
    }
    &:nth-child(6) {
      bottom: 7%;
      right: 15%;
      animation: scale-up-one 12s linear infinite;
    }
  }
}
h1 {
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
  color: var(--color-fontColor);
}
p {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
.about-inner {
  width: 50%;
  margin: 60px auto 0;
  position: relative;
  z-index: 1;
  text-align: center;
  .main-content {
    background: #23334b;
    box-shadow: 0 16px 25px 0 rgba(0, 0, 0, 0.03);
    position: relative;
    border-radius: 20px;
    padding: 80px 70px 55px;
    z-index: 5;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 35px;
    right: 35px;
    height: 200px;
    border-radius: 20px;
    z-index: -1;
    background: #23334b;
    box-shadow: 0 15px 23px 0 rgba(35, 49, 64, 0.09);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -55px;
    left: 80px;
    right: 80px;
    height: 200px;
    border-radius: 20px;
    z-index: -3;
    background: #23334b;
    box-shadow: 0 15px 23px 0 rgba(0, 0, 0, 0.03);
  }
}
.richText {
  font-size: 20px;
  line-height: 40px;
}
</style>
