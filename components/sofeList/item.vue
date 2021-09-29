<template>
  <a href="#" class="sofe-wrapper__item border">
    <div class="sofe-wrapper__image">
      <div
        class="shadow"
        :style="{
          backgroundImage: `url(${require('@/assets/images/aliyun-drive-xiaobaiyang.png')})`
        }"
      ></div>
      <img
        :class="`img lazyload blur_img animation delay-${index} `"
        :data-src="require('@/assets/images/aliyun-drive-xiaobaiyang.png')"
        src="~assets/images/ball-loading.svg"
        alt=""
      />
    </div>
    <div class="sofe-wrapper__item--con">
      <div class="sofe-wrapper__item--version">
        {{ data.id }} 2021 22.4.3 + Neural Filters
      </div>
      <div class="sofe-wrapper__item--name">Adobe Photoshop</div>
      <div class="sofe-wrapper__item--summary">使用最多的图片处理</div>
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
