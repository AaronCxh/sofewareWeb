<template>
  <div class="app-main  py-8">
    <div class="promo-wrapper">
      <div class="container">
        <div class="swiper-container" id="promo-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner" :key="item.AutoID">
              <a target="_blank" :href="item.Link" class="flex-box align-center">
                <div class="swiper-box">
                  <h1>{{ item.Title }}</h1>
                  <p>
                    {{ item.Desc }}
                  </p>
                </div>
                <img class="img" :src="item.ContentImage" alt="" />
              </a>
            </div>
        
          </div>
          <div v-if="device != 'mobile'" class="swiper-pagination"></div>
          <div v-if="device != 'mobile'" class="swiper-btn button-prev">
            <i class="iconfont">&#xe6d4;</i>
          </div>
          <div v-if="device != 'mobile'" class="swiper-btn button-next">
            <i class="iconfont">&#xe600;</i>
          </div>
        </div>
      </div>
    </div>
    <div class="category-wrapper">
      <div class="container">
        <a-row type="flex" justify="start" :gutter="30">
          <a-col :span="6" v-for="nav in navTabs" :key="nav.name">
            <div>
              <router-link :to="nav.url" :class="`item ${nav.class}`">
                <img :src="nav.icon" alt="" />
                <span>{{ nav.name }}</span>
              </router-link>
              <div v-if="device == 'mobile'" class="text text-muted">{{ nav.mname }}</div>
            </div>
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
            <a href="/sofe" class="more">
              更多软件
              <i class="iconfont">&#xe600;</i>
            </a>
          </div>
        </div>
        <div class="bd">
          <a-spin :spinning="spinning" :delay="500">
            <div class="sofe-section">
              <sofe-list :data="sofeList"></sofe-list>
            </div>
          </a-spin>
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
          <!-- <div class="fr">
            <a href="/sofe/all" class="more">
              更多文章
              <i class="iconfont">&#xe600;</i>
            </a>
          </div> -->
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
import tutorialList from "@/components/tutorialList";
import { requestBanner } from "@/api/banner";
import { requestRecommendSoftList, requestRecommendArticle } from "@/api/soft";
import { mapGetters } from "vuex";

export default {
  name: "index",
  layout: "layout",
  components: {
    sofeList,
    tutorialList
  },
  data() {
    return {
      banner: [],
      test: [],
      tabs: [
        { title: "新鲜发布", value: "new" },
        { title: "热门下载", value: "hot" },
        { title: "站长推荐", value: "recommend" }
      ],
      sofeActive: 0,
      sofeList: [],
      spinning: false,
      tutorialActive: 0,
      tutorialTabs: [
        { title: "新鲜发布", value: "new" },
        { title: "站长推荐", value: "recommend" }
      ],
      tutorialList: [],
      navTabs: [
        {
          name: "新人必备",
          icon: require( "@/assets/images/icon-1.png"),
          class: "green-item",
          url: "special/8",
          mname: "软件",
          murl: ""
        },
        {
          name: "图形处理工具",
          icon: require( "@/assets/images/icon-2.png"),
          class: "orange-item",
          url: "special/3",
          mname: "文章",
          murl: ""
        },
        {
          name: "产品经理工具",
          icon: require( "@/assets/images/icon-3.png"),
          class: "blue-item",
          url: "special/4",
          mname: "专题",
          murl: ""
        },
        {
          name: "更多专题",
          icon: require( "@/assets/images/icon-4.png"),
          class: "purple-item",
          url: "special",
          mname: "精选",
          murl: ""
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["device"])
  },
  async asyncData(app) {
    const [bannerData, softData, artilceData] = await Promise.all([
      requestBanner(),
      requestRecommendSoftList({
        filter: "new"
      }),
      requestRecommendArticle({
        filter: "new"
      })
    ]);
    return {
      banner: bannerData.dataList,
      sofeList: softData.dataList,
      tutorialList: artilceData.dataList
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    async getRecommendSoftList() {
      this.spinning = true;
      const res = await requestRecommendSoftList({
        filter: this.tabs[this.sofeActive].value
      });
      this.spinning = false;
      this.sofeList = res.dataList;
    },
    initSwiper() {
      new Swiper("#promo-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        },
        centeredSlides: true,
        slidesPerView: 1.11,
        spaceBetween: 0,
        centeredSlidesBounds: true,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 1,
          }
        }
      });
    },
    onSofeClick(e) {
      const { index } = e.currentTarget.dataset;
      this.sofeActive = index;
      this.getRecommendSoftList();
    },
    onTutorialClick(e) {
      const { index } = e.currentTarget.dataset;
      this.tutorialActive = index;
      requestRecommendArticle({
        filter: this.tutorialTabs[this.tutorialActive].value
      }).then(res => {
        this.tutorialList = res.dataList;
      });
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
  padding: 60px 0 70px;
}
</style>
<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";

#promo-swiper {
  .swiper-slide {
    height: 400px;
    background: #1c283b;
    .flex-box {
      height: 400px;
    }
    .swiper-box {
      width: 600px;
      min-width: 600px;
      padding-left: 144px;
      h1 {
        font-size: 33px;
        font-weight: 400;
        margin-bottom: 8px;
        color: var(--color-fontColor);
      }
      p {
        font-size: 18px;
        color: var(--color-textColor);
        line-height: 1.9;
        opacity: 0.7;
        margin: 0;
      }
    }
    .img {
      position: absolute;
      right: 100px;
      top: 20px;
      width: auto;
      height: calc(100% - 40px);
    }
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  #promo-swiper {
    .swiper-slide {
      .swiper-box {
        width: 100%;
        min-width: 100%;
        padding: 0 80px;
        z-index: 100;
        text-align: center;
      }
      .img {
        opacity: 0.1;
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1260px) {
  #promo-swiper {
    .swiper-slide {
      .swiper-box {
        padding-left: 80px;
        width: 460px;
        min-width: 460px;
      }
      .img {
        width: 360px;
        height: auto;
        top: 50px;
        right: 80px;
      }
    }
  }
}
@media (max-width: 768px) {
  #promo-swiper {
    .swiper-pagination {
      display: none;
    }
    .btn {
      display: none;
    }
    .swiper-slide {
      height: auto;
      height: 180px;
      background-color: transparent;
      padding: 16px 9px;
      &.swiper-slide-active {
        .flex-box {
          background-color: #50a1ff;
          box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
        }
        .swiper-box {
          h1 {
            color: #fff;
          }
          p {
            color: #fff;
          }
        }
      }
      .flex-box {
        height: 100%;
        background-color: #d4e4f7;
        border-radius: 6px;
        overflow: hidden;
      }
      .swiper-box {
        padding: 0;
        text-align: center;
        width: 100%;
        min-width: 100%;
        h1 {
          font-size: 20px;
          font-weight: 700;
        }
        p {
          font-size: 15px;
          @include nowrap();
          padding: 0 50px;
        }
      }
      .img {
        display: none;
      }
    }
  }
  .promo-wrapper {
    margin: 0 0 16px;
    .container {
      padding: 0;
    }
  }
  .category-wrapper {
    .container {
      padding: 0 32px;
    }
    .item {
      height: auto !important;
      padding: 16px;
      img {
        margin-right: 0 !important;
      }
      span {
        display: none;
      }
    }
    .text {
      text-align: center;
      line-height: 28px;
      margin-top: 8px;
    }
  }
  .sofe-wrapper {
    padding: 30px 0 0 !important;
    .hd {
      padding: 0 17px;
      margin-bottom: 12px;
      h1 {
        font-weight: 700;
        font-size: 20px;
        img {
          display: none;
        }
      }
      nav,
      .fr {
        display: none;
      }
    }
  }
  .tutorial-wrapper {
    padding: 32px 0 !important;
    display: none !important;
    .hd {
      padding: 0 17px;
      margin-bottom: 12px;
      h1 {
        font-weight: 700;
        font-size: 20px;
        img {
          display: none;
        }
      }
      nav,
      .fr {
        display: none !important;
      }
    }
  }
}
</style>
