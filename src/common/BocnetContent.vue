<template>
  <div class="page-container">
    <div class="container page-container-main" v-if="!fullScreen">
      <router-view></router-view>
    </div>
    <router-view v-if="fullScreen"></router-view>
  </div>
</template>

<script>
export default {
  name: 'BocnetContent',
  data() {
    return {
      fullScreen: false  // 默认不全屏
    };
  },
  beforeMount() {
    if(this.$route.meta.fullScreen) {
      this.fullScreen = true;
    }else{
      this.fullScreen = false;
    }
  },
  watch: {
    $route: function() {
      if(this.$route.meta.fullScreen) {
        this.fullScreen = true;
      }else{
        this.fullScreen = false;
      }
    }
  }
}
</script>

<style>
.page-container{
  height: 100%;
}
.page-container-main {
  min-height: 700px;
  padding: 0px 20px;
  background-color: #eee;
}
</style>
