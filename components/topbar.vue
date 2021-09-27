<template>
  <div class="topbar">
    <div class="container">
      <nav>
        <nuxt-link to="/bibei">装机必备</nuxt-link>
        <nuxt-link to="/feedback">留言反馈</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .topbar {
    height: 40px;
    background: #121A26;
    nav {
      a {
        color: #A0B4C8;
        font-size: 12px;
        line-height: 40px;
        margin-right: 25px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
