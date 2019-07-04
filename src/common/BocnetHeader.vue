<template>
  <div class="header-container" v-if="!fullScreen">
    <topbar></topbar>
  </div>

</template>

<script>
import Topbar from '../components/Topbar'
export default {
  name: 'BocnetHeader',
  data() {
    return {
      fullScreen: false  // 默认不全屏
    };
  },
  components: {
    'Topbar': Topbar
  },
  beforeMount() {
    if (this.$route.meta.fullScreen) {
      this.fullScreen = true;
    } else {
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
