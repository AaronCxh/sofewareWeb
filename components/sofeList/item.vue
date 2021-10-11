<template>
  <component
    :is="type"
    v-bind="linkProps(data.AutoID)"
    class="sofe-wrapper__item border"
    @click="onClick"
  >
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
      <div class="sofe-wrapper__item--name">
        <span>
          {{ data.Title }}
        </span>
        <slot name="title" :data="data" />
      </div>
      <div class="sofe-wrapper__item--summary">
        {{ data.SubTitle }}<slot name="summary" :data="data" />
      </div>
      <div class="sofe-wrapper__item--more" v-if="showMore">
        <i class="iconfont">&#xe604;</i>
      </div>
    </div>
    <slot name="extend" :data="data" />
  </component>
  <!-- <router-link :to="`/sofe/${data.AutoID}`" class="sofe-wrapper__item border">
   
  </router-link> -->
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    isLike: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 0
    },
    showMore: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    type() {
      if (this.isLike) {
        return "router-link";
      }
      return "div";
    }
  },
  methods: {
    onClick() {
      if (this.isLike) {
        return
      }
      this.$emit('click', this.data)
    },
    linkProps(id) {
      if (this.isLike) {
        return {
          to: `/sofe/${id}`
        };
      }
      return {};
    }
  }
};
</script>

<style></style>
