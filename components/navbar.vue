<template>
  <div class="navbar">
    <div class="container">
      <div class="flex-box">
        <nuxt-link to="/" class="logo">
          <img src="~assets/images/首页_03.png" alt="" />
        </nuxt-link>
        <nav>
          <nuxt-link class="nav-link" to="/" exact-active-class="exact-active" :exact="false">首页</nuxt-link>
          <nuxt-link class="nav-link" to="/sofe">软件</nuxt-link>
          <nuxt-link class="nav-link" to="/special">专题</nuxt-link>
          <nuxt-link class="nav-link" to="/perfect">榜单</nuxt-link>
        </nav>
        <div class="fr">
          <search></search>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search";
import { isExternal } from '@/utils/validate'
import path from 'path'
import AppLink from '@/components/link'
export default {
  components: {
    search,
    AppLink
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #1c283b;
  // box-shadow: 0px 5px 7px 1px rgba(191, 191, 191, 0.08);
  border-bottom: 1px solid rgba($color: #78828c, $alpha: 0.09);
  .flex-box {
    height: 60px;
    width: 100%;
    align-items: center;
  }
  .logo {
    min-width: 180px;
    margin-right: 45px;
  }
  nav {
    display: flex;
    color: #A0B4C8;
    .nav-link {
      display: inline-block;
      padding: 8px 16px;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .fr {
    margin-left: auto;
  }
}
@media (max-width: 992px) {
  .navbar {
    .logo {
      min-width: 150px;
      margin-right: 0;
    }
  }
}
</style>
