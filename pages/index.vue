<template>
  <div class="app-main">
    <div class="promo-wrapper">
      <div class="container">
        <div class="swiper-container" id="promo-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="img-responsive" src="~assets/images/首页-恢复的_03.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img class="img-responsive" src="~assets/images/首页-恢复的_03.png" alt="" />
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
    <div class="category-wrapper">
      <div class="container">
        <a-row type="flex" justify="start" :gutter="30">
          <a-col :span="6">
            <a href="#" class="item green-item">
              <img src="~assets/images/icon-1.png" alt="" />
              <span>新人必备</span>
            </a>
          </a-col>
          <a-col :span="6">
            <a href="#" class="item orange-item">
              <img src="~assets/images/icon-2.png" alt="" />
              <span>图像处理工具</span>
            </a>
          </a-col>
          <a-col :span="6">
            <a href="#" class="item blue-item">
              <img src="~assets/images/icon-3.png" alt="" />
              <span>产品经理工具</span>
            </a>
          </a-col>
          <a-col :span="6">
            <a href="#" class="item purple-item">
              <img src="~assets/images/icon-4.png" alt="" />
              <span>更多专题</span>
            </a>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="sofe-wrapper">
      <div class="container">
        <div class="hd">
          <h1>
            <img src="~assets/images/icon_5.png" alt="" />
            精品软件
          </h1>
          <nav>
            <a
              class="nav-link"
              @click="onSofeClick"
              :data-index="index"
              :class="{ active: index == sofeActive }"
              v-for="(tab, index) in tabs"
              :key="tab.title"
              >{{ tab.title }}</a
            >
          </nav>
          <div class="fr">
            <a href="/sofe/all" class="more">
              更多软件
              <i class="iconfont">&#xe600;</i>
            </a>
          </div>
        </div>
        <div class="bd">
          <div class="sofe-section">
            <sofe-list :data="sofeList"></sofe-list>
          </div>
        </div>
      </div>
    </div>
    <div class="tutorial-wrapper">
      <div class="container">
        <div class="hd">
          <h1>
            <img src="~assets/images/icon-6.png" alt="" />
            教程文章
          </h1>
          <nav>
            <a
              class="nav-link"
              @click="onTutorialClick"
              :data-index="index"
              :class="{ active: index == tutorialActive }"
              v-for="(tab, index) in tutorialTabs"
              :key="tab.title"
              >{{ tab.title }}</a
            >
          </nav>
          <div class="fr">
            <a href="/sofe/all" class="more">
              更多软件
              <i class="iconfont">&#xe600;</i>
            </a>
          </div>
        </div>
        <div class="bd">
          <tutorial-list :data="tutorialList"></tutorial-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
import sofeList from "@/components/sofeList";
import tutorialList from '@/components/tutorialList'
import { login } from '@/api/user'
export default {
  name: "index",
  layout: "layout",
  components: {
    sofeList,
    tutorialList
  },
  data() {
    return {
      tabs: [
        { title: "新鲜发布" },
        { title: "热门下载" },
        { title: "站长推荐" },
        { title: "最多评论" }
      ],
      sofeActive: 0,
      sofeList: [
        { AutoID: 1 },
        { AutoID: 2 },
        { AutoID: 3 },
        { AutoID: 4 },
        { AutoID: 5 },
        { AutoID: 6 },
        { AutoID: 7 },
        { AutoID: 8 },
        { AutoID: 9 },
        { AutoID: 10 },
        { AutoID: 11 },
        { AutoID: 12 }
      ],
      tutorialActive: 0,
      tutorialTabs: [{title: '新鲜发布'}, {title: '站长推荐'}],
      tutorialList: [{ AutoID: 1 },
          { AutoID: 2 },
          { AutoID: 3 },
          { AutoID: 4 },
          { AutoID: 5 },
          { AutoID: 6 },]
    };
  },
  mounted() {
    this.initSwiper();
    login({
      username: 'admin',
      password: '123456'
    })
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
    },
    onSofeClick(e) {
      const { index } = e.currentTarget.dataset;
      this.sofeActive = index;
      if (index == 1) {
        this.sofeList = [
          { AutoID: 1 },
          { AutoID: 2 },
          { AutoID: 3 },
          { AutoID: 4 },
          { AutoID: 5 },
          { AutoID: 6 },
          { AutoID: 7 },
          { AutoID: 8 },
          { AutoID: 9 },
          { AutoID: 10 },
          { AutoID: 11 },
          { AutoID: 12 }
        ];
      } else if (index == 2) {
        this.sofeList = [
          { AutoID: 13 },
          { AutoID: 14 },
          { AutoID: 15 },
          { AutoID: 16 },
          { AutoID: 17 },
          { AutoID: 18 },
          { AutoID: 19 },
          { AutoID: 20 },
          { AutoID: 21 },
          { AutoID: 22 },
          { AutoID: 11 },
          { AutoID: 12 }
        ];
      } else {
        this.sofeList = [
          { AutoID: 130 },
          { AutoID: 140 },
          { AutoID: 150 },
          { AutoID: 160 },
          { AutoID: 170 },
          { AutoID: 180 },
          { AutoID: 190 },
          { AutoID: 200 },
          { AutoID: 210 },
          { AutoID: 220 },
          { AutoID: 110 },
          { AutoID: 120 }
        ];
      }
    },
    onTutorialClick(e) {
      const { index } = e.currentTarget.dataset;
      this.tutorialActive = index;
      if (index == 1) {
        this.tutorialList = [{ AutoID: 10 },
          { AutoID: 20 },
          { AutoID: 30 },
          { AutoID: 40 },
          { AutoID: 50 },
          { AutoID: 60 },]
      } else {
        this.tutorialList = [{ AutoID: 1 },
          { AutoID: 2 },
          { AutoID: 3 },
          { AutoID: 4 },
          { AutoID: 5 },
          { AutoID: 6 },]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";

.category-wrapper {
  color: #fff;
  .item {
    height: 81px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 17px;
    justify-content: center;
    img {
      margin-right: 5px;
    }
    &:hover {
      color: #fff;
    }
    &.green-item {
      background: linear-gradient(45deg, #7fe496, #7fe496);
    }
    &.orange-item {
      background: linear-gradient(45deg, #fe9078, #f1b87f);
    }
    &.blue-item {
      background: linear-gradient(45deg, #6cacfd, #93c8ff);
    }
    &.purple-item {
      background: linear-gradient(45deg, #a682e4, #c1a7e9);
    }
  }
}

.sofe-wrapper {
  padding: 39px 0 64px;
  @at-root .hd {
    display: flex;
    color: #a0b4c8;
    align-items: center;
    margin-bottom: 32px;
    h1 {
      color: inherit;
      font-size: 24px;
      display: flex;
      align-items: center;
      margin-bottom: 0;
      margin-right: 62px;
      img {
        margin-right: 15px;
      }
    }
    nav {
      a {
        display: inline-block;
        margin-right: 37px;
        font-size: 15px;
        &:hover {
          color: $color-default;
        }
        &.active {
          color: $color-default;
        }
      }
    }
    .more {
      display: flex;
      align-items: center;
      margin-left: auto;
      font-size: 16px;
    }
  }
}
.tutorial-wrapper {
  background-color: var(--tutorialBackgroundColor);
  padding: 60px 0 70px
}
</style>
<style lang="scss">
.promo-wrapper {
  position: relative;
  margin: 24px 0 33px;
  @at-root .swiper-pagination {
    .swiper-pagination-bullet {
      width: 30px !important;
      height: 2px !important;
      background: rgba($color: #fff, $alpha: 0.9) !important;
      &.swiper-pagination-bullet-active {
        background: #a0b4c8 !important;
      }
    }
  }
  @at-root .swiper-container {
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
