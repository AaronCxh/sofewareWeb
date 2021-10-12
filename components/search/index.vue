<template>
  <div class="search-wrapper">
    <div class="search-wrapper__input">
      <input
        class="search-wrapper__input--control"
        type="text"
        placeholder="输入关键词搜索软件或文章…"
        v-model="searchKey"
        @focus="onFocus"
        @input="onSearch"
      />
      <button class="search-btn"><i class="iconfont ">&#xe6d3;</i></button>
    </div>
    <div class="search-wrapper__result">
      <div class="autosuggest__results" v-if="searchKey != 0 && focus">
        <a-spin :spinning="loading">
          <div class="tab-header">
            <div class="flex-box">
              <a
                @click="onTab(0)"
                class="flex-item"
                :class="{ active: active == 0 }"
              >
                <span>软件</span>
                <span>({{ softCount }})</span>
              </a>
              <a
                @click="onTab(1)"
                class="flex-item"
                :class="{ active: active == 1 }"
              >
                <span>文章</span>
                <span>({{ articleCount }})</span>
              </a>
            </div>
          </div>
          <ul>
            <li v-for="item in (active == 0 ? softList  : articleList)" :key="item.AutoID">
              <div class="autosuggest__results-item">
                <router-link target="_blank" :to="active == 0 ? `/sofe/${item.AutoID}` : `/artilce/${item.AutoID}`"  class="flex-box align-center">
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <span class="snow-dot"></span>
                  <div class="icon">
                    <img
                      :src="active == 0 ? item.Icon : item.ContentImage"
                      alt=""
                    />
                  </div>
                  <div class="con">
                    <div class="name" :class="{ nowrap: active == 0 }">
                      <span
                        >{{ item.Title }}</span
                      >
                      <span class="text" v-if="active == 0"
                        ><i>-</i> {{ item.Version }}</span
                      >
                    </div>
                    <div class="summary" v-if="active == 0">
                      {{ item.SubTitle }}
                    </div>
                  </div>
                  <div class="more">
                    <i class="iconfont">&#xea67;</i>
                  </div>
                </router-link>
              </div>
            </li>
            <li class="empty" v-if="(active == 0 && !softList.length) || (active == 1 && !articleList.length)">
              <div>搜索结果为空</div>
            </li>
          </ul>
          <div class="button-group" v-if="(active == 0 && softList.length) || (active == 1 && articleList.length)">
            <button @click="onNavTo" class="button">查看更多 <span>({{ active == 0 ? softCount : articleCount }}条)</span></button>
          </div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import request from "@/utils/request";
export default {
  data() {
    return {
      active: 0,
      searchKey: "",
      loading: false,
      softList: [],
      articleList: [],
      articleCount: 0,
      softCount: 0,
      focus: false
    };
  },
  mounted() {
    document.body.addEventListener('click', (e) => {
      this.focus = false
    })
    document.querySelector('.search-wrapper').addEventListener('click', (e) => {
      e.stopPropagation()
    })
  },
  methods: {
    onTab(val) {
      this.active = val;
    },
    onSearch: debounce(function(e) {
      console.log(e.target.value);
      const key = e.target.value;
      this.loading = true;
      if (!key) {
        return
      }
      request({
        url: "/include/getdata",
        params: {
          apiname: "getsearch",
          key: key
        }
      }).then(res => {
        console.log(res);
        this.articleCount = res.contCount
        this.softCount = res.softCount
        this.articleList = res.contList
        this.softList = res.softList
        this.loading = false
      });
    }, 250),
    onFocus() {
      this.focus = true
    },
    onNavTo() {
      this.focus = false
      if (this.active == 0) {
        this.$router.push({
          path: '/sofe/list/all',
          query: {search: this.searchKey}
        })
      } else {

      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var.scss";
@import "@/scss/mixins/mixins.scss";
@include b(search-wrapper) {
  position: relative;
  width: 360px;
  @include e(input) {
    position: relative;
    width: 100%;
    @include m(control) {
      background: transparent;
      color: #fff;
      font-size: 14px;
      height: 40px;
      padding: 5px 25px;
      box-shadow: none;
      border: 1px solid #a0b4c8;
      display: block;
      width: 100%;
      border-radius: 40px;
      outline: none;
      transition: all 0.3s;
      &::placeholder {
        color: #a0b4c8;
      }
      &:focus {
        border-color: $color-default;
      }
    }
    .search-btn {
      position: absolute;
      width: 38px;
      height: 38px;
      right: 8px;
      top: 1px;
      font-size: 16px;
      text-align: center;
      line-height: 36px;
      .iconfont {
        color: #a0b4c8;
      }
    }
  }
}
.search-wrapper__result {
  width: 100%;
  .autosuggest__results {
    position: absolute;
    top: 55px;
    width: 100%;
    margin: 0;
    border: 1px solid rgba(120, 130, 140, 0.09);
    border-radius: 5px;
    background: #fff;
    max-height: 600px;
    z-index: 10000001;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
    background-color: #1a2638;
    .tab-header {
      overflow: hidden;
      .flex-box {
        padding: 0 24px;
      }
      .flex-item {
        position: relative;
        font-size: 16px;
        padding: 12px 0;
        text-align: center;
        &.active {
          color: var(--color-default);
          &:after {
            content: "";
            position: absolute;
            left: calc(50% - 8px);
            width: 16px;
            height: 3px;
            bottom: 0;
            background-color: var(--color-default);
          }
        }
        span {
          &:last-child {
            font-size: 12px;
          }
        }
      }
    }
  }
  .button-group {
    .button {
      padding: 12px;
      font-size: 14px;
      border-top: 1px solid var(--borderColor);
      width: 100%;
      background: transparent;
      line-height: 1.9;
      height: auto;
      font-weight: 600;
      span {
        font-weight: 400;
        margin-left: 4px;
      }
      &:hover {
        color: var(--color-default);
      }
    }
  }
}
.autosuggest__results-item {
  .flex-box {
    position: relative;
    padding: 10px 20px 11px;
    color: var(--color-fontColor);
    overflow: hidden;
    &:hover {
      .con {
        .name {
          span {
            &:first-child {
              color: var(--color-default);
            }
          }
        }
      }
      .more {
        .iconfont {
          color: var(--color-default);
        }
      }
      .snow-dot {
        display: block;
        transition: display 0.3s ease-in-out;
      }
      background-color: #1c283b;
      box-shadow: 0 0 36px rgba(9, 13, 19, 0.4);
      z-index: 9;
    }
    .snow-dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(194, 215, 255, 0.5);
      display: none;
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
    .icon {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .con {
      flex: 1;
      width: 1%;
      .name {
        span {
          transition: all 0.3s;
          &.text {
            opacity: 0.5;
          }
        }
      }
      .summary {
        font-size: 15px;
        opacity: 0.5;
        line-height: 1.9;
        @include nowrap();
      }
    }
    .more {
      margin-left: 8px;
      .iconfont {
        transition: all 0.3s;
      }
    }
  }
}
.ant-spin-nested-loading {
  height: auto;
  min-height: initial;
}
.empty {
  padding: 32px 0;
  text-align: center;
  opacity: 0.5;
}
@media (max-width: 992px) {
  @include b(search-wrapper) {
    width: 260px;
  }
}
</style>
