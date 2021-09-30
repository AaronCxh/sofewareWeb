<template>
  <div class="special-wrapper layout-min-height">
    <div class="container">
      <a-row type="flex" :gutter="30" class="special-list">
        <a-col
          :class="`animation fadeInLeft delay-${index}`"
          :md="12"
          :lg="8"
          :xl="6"
          v-for="(item, index) in list"
          :key="index"
        >
          <router-link :to="item.Identifier" class="item" append>
            <div class="single-special-member">
              <div class="wrapper">
                <div class="img-box">
                  <img
                    :data-src="item.NodeImage"
                    src="~assets/images/ball-loading.svg"
                    class="lazyload blur_img"
                  />
                </div>
                <div class="info-meta">
                  <h6 class="name">
                    {{ item.NodeName }}
                    <span class="ml-2 text-muted fs-16">
                      ({{ item.Count }}款)
                    </span>
                  </h6>
                </div>
              </div>
              <div class="hover-content">
                <p>
                  <span><i class="iconfont">&#xe882;</i></span>
                  <span><i class="iconfont">&#xe605;</i></span>
                </p>
              </div>
            </div>
          </router-link>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { requestSpecial } from '@/api/special'
export default {
  name: "special",
  layout: "layout",
  data() {
    return {
      list: []
    };
  },
   async asyncData() {
     const res = await requestSpecial()
    return { list: res.dataList }
   }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.special-wrapper {
  padding: (16px * 3) 0;
  @at-root .special-list {
    .item {
      cursor: pointer;
      .single-special-member {
        position: relative;
        padding: 0 45px 55px 0;
        margin-bottom: 100px;
        .wrapper {
          position: relative;
          .img-box {
            img {
              border-radius: 4px;
              width: 100%;
            }
          }
          .info-meta {
            position: absolute;
            width: 100%;
            right: 0;
            bottom: 0;
            transform: translate(45px, 55px);
            padding: 20px 0 20px 40px;
            transition: all 0.3s ease-in-out;
            background: #202e44;
            box-shadow: 5.994px 14.835px 30px 0 rgba(12, 18, 26, 0.2);
            .name {
              font-size: 22px;
              margin-bottom: 0;
              color: $color-fontColor;
              span {
                opacity: 0.7;
                font-size: 16px;
                margin-left: 8px;
                color: $color-fontColor;
              }
            }
          }
        }
        .hover-content {
          position: absolute;
          width: 45px;
          right: 0;
          top: 0;
          bottom: 0;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: all 0.3s ease-in-out;
          background: #202e44;
          box-shadow: 8px 0 8.6px 1.4px rgba(12, 18, 26, 0.2);
          p {
            position: relative;
            top: 30%;
            transform: translateY(-50%);
            list-style: none;
            padding-left: 0;
            span {
              display: block;
              text-align: center;
              margin: 15px 0;
              .iconfont {
                font-size: 22px;
                color: $color-default;
              }
            }
          }
        }
        &:hover {
          .hover-content {
            transform: scale(1);
          }
          .wrapper {
            .info-meta {
              transform: translateY(55px);
              .name {
                color: $color-default;
              }
            }
          }
        }
      }
    }
  }
}
</style>
