<template>
  <div class="search-wrapper">
    <div class="search-wrapper__input">
      <input class="search-wrapper__input--control" type="text" placeholder="输入关键词搜索软件或文章…">
      <button class="search-btn"><i class="iconfont ">&#xe6d3;</i></button>
    </div>
    <div class="search-wrapper__result"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/var/var.scss";
  @import "@/scss/mixins/mixins.scss";
  @include b(search-wrapper) {
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
        border: 1px solid #A0B4C8;
        display: block;
        width: 100%;
        border-radius: 40px;
        outline: none;
        transition: all 0.3s;
        &::placeholder {
          color: #A0B4C8;
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
  @media (max-width: 992px) {
    @include b(search-wrapper){
      width: 260px;
        
    }
  }
</style>