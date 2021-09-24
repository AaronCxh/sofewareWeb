<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  layout: 'layout',
  data() {
    return {
      color: 'red'
    }
  }
}
</script>
