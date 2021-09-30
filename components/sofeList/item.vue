<template>
  <a href="#" class="sofe-wrapper__item border">
    <div class="sofe-wrapper__image">
      <div
        class="shadow"
        :style="{
          backgroundImage: `url(${data.Icon})`
        }"
      ></div>
      <img
        :class="`img lazyload blur_img animation delay-${index} `"
        :data-src="data.Icon"
        src="~assets/images/ball-loading.svg"
        alt=""
      />
    </div>
    <div class="sofe-wrapper__item--con">
      <div class="sofe-wrapper__item--version">
        {{ data.Version }}
      </div>
      <div class="sofe-wrapper__item--name">{{ data.Title }}</div>
      <div class="sofe-wrapper__item--summary">{{ data.SubTitle }}</div>
      <div class="sofe-wrapper__item--more" v-if="showMore">
        <i class="iconfont">&#xe604;</i>
      </div>
    </div>
    <slot name="extend" />
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    showMore: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style></style>
