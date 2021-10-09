<template>
  <div class="artilce-detail layout-min-height">
    <div class="container-sm">
      <div class="artilce-banner">
        <img
          class="lazyload img-responsive"
          src="~assets/images/ball-loading.svg"
          :data-src="image"
          alt=""
        />
      </div>
      <div class="artilce-content">
        <h1>
          {{ title }}
        </h1>
        <div class="flex-box align-center">
          <!-- <img
            class="avatar"
            src="~assets/images/special-photo-edit.jpg"
            alt=""
          /> -->
          <div class="con">
            <div class="name">admin</div>
            <div class="time">{{ update }}</div>
          </div>
        </div>
        <div v-html="content"></div>
   
      </div>
      <aside v-show="show">
        <a-anchor class="my-anchor" :offsetTop="50" @change="onChange">
          <a-anchor-link
            :href="`#${$route.path}#${h2}`"
            :title="h2"
            v-for="h2 in h2s"
            :key="h2"
          />
        </a-anchor>
      </aside>
    </div>
  </div>
</template>

<script>
import { requestArticleDetail } from "@/api/article.js";
export default {
  name: "artilceDetail",
  layout: "layout",
  async asyncData(app) {
    console.log(app);
    const res = await requestArticleDetail(app.params.id);
    console.log("文章详情", res);
    return {
      image: res.ContentImage,
      title: res.Title,
      content: res.Content,
      update: res.AutoTimeStamp
    };
  },
  data() {
    return {
      h2s: [],
      show: false,
      image: "",
      title: "",
      name: "",
      content: "",
      update: ""
    };
  },
  mounted() {
    const h2s = document.querySelectorAll(".content-markdown h2");
    h2s.forEach(h2 => {
      this.h2s.push(h2.id);
    });
  },
  methods: {
    onChange(currentActiveLink) {
      if (!currentActiveLink) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";

.artilce-detail {
  padding: 32px 0;
  .artilce-banner {
    .lazyload {
      height: 384px;
      object-fit: scale-down;
    }
  }
  .artilce-content {
    color: rgba(160, 180, 200, 0.9);
    padding: vw(48) vw(144);
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    h1 {
      color: $color-fontColor;
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 32px;
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 16px;
    }
    .name {
      font-size: 15px;
      font-weight: 600;
    }
    .time {
      font-size: 14px;
      font-weight: 500;
    }
    .blockquote {
      margin-top: 32px;
      &::before {
        content: "“";
        display: inline-block;
        font-size: 4rem;
        line-height: 0.2;
        font-weight: 600;
        padding-top: 0px;
        vertical-align: -30px;
        opacity: 0.1;
      }
      .text-muted {
        color: $color-fontColor;
        opacity: 0.7;
        font-style: italic;
        line-height: 2;
      }
    }
    .content-markdown {
      margin-top: 32px;
      color: $color-fontColor;
      h2 {
        position: relative;
        font-size: 24px;
        display: table;
        margin-top: 32px;
        margin-bottom: 32px;
        color: inherit;
        font-weight: 600;
        &:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          height: 4px;
          width: 80%;
          background: $color-default;
        }
      }
      ul,
      ol {
        list-style-position: inside;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 4px;
      }
      li {
        padding-top: 8px;
        padding-bottom: 8px;
      }
      p {
        line-height: 2;
        padding-top: 4px;
        padding-bottom: 4px;
        margin-bottom: 4px;
      }
      code {
        color: #50a1ff;
        background-color: #16202f;
        font-size: 13px;
        border-radius: 3px;
        overflow: auto;
      }
      pre {
        position: relative;
        border-radius: 4px;
        padding: 0;
        background: #eff2f4;
        border: 0;
        margin-top: 8px;
        margin-bottom: 16px;
        overflow: unset;
        code {
          background: #25354e;
          padding: 12px 16px;
          display: block;
          line-height: 1.75;
          color: $color-fontColor;
        }
      }
      img {
        display: block;
        margin: 25px auto;
        max-width: 100%;
        height: auto;
        border: 0;
        border-radius: 5px;
      }
      h4 {
        margin-bottom: 8px;
        margin-top: 16px;
        font-weight: 600;
      }
      .btn {
        padding: 6px 12px;
        border: 1px solid $color-default;
        display: inline-block;
        color: $color-default;
        border-radius: 3px;
        font-weight: 600;
        &:hover {
          background: $color-default;
          color: #fff;
        }
      }
    }
    .list-item {
      margin: 16px 0;
      padding: 15px 25px;
      border: 1px solid rgba(120, 130, 140, 0.07);
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        margin: 0 25px 0 0;
      }
      .list-body {
        flex: 1;
        h3 {
          a {
            color: var(--color-default);
            font-size: 20px;
            font-weight: 700;
          }
        }
        span {
          font-size: 14px;
          margin-top: 8px;
        }
      }
      .btn {

      }
    }
  }
}
aside {
  position: fixed;
  z-index: 999;
  left: calc(50% - 550px);
  top: 100px;
}
</style>
<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.my-anchor {
  .ant-anchor-wrapper {
    background: transparent;
    a {
      color: $color-fontColor;
    }
    .ant-anchor-link-active {
      a {
        color: $color-default;
      }
    }
    .ant-anchor-ink {
      &::before {
        display: none !important;
      }
    }
  }
}
</style>
