<template>
  <div class="footer">
    <div class="container">
      <div class="flex-box">
        <a href="#" class="logo">
          <img src="~assets/images/首页_03.png" alt="" />
        </a>
        <nav>
          <nuxt-link class="nav-link" to="/">首页</nuxt-link>
          <nuxt-link class="nav-link" to="/about">关于</nuxt-link>
          <nuxt-link class="nav-link" to="/contact">联系</nuxt-link>
          <nuxt-link class="nav-link" to="/privacy">隐私</nuxt-link>
        </nav>
        <div class="icq">
          <a href="#">粤ICP备19036164号</a>
          <span>www.729.com © 2019. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var.scss";
.footer {
  background: #1c283b;
  nav {
    color: #a0b4c8;
  }
  .flex-box {
    align-items: center;
    height: 76px;
    justify-content: space-between;
  }
  .nav-link {
    display: inline-block;
    padding: 0 25px;
    &:hover {
      color: $color-default;
    }
  }
  .icq {
    color: #A0B4C8;
    font-size: 15px;
    span {
      margin-left: 25px;
    }
  }
}
</style>
