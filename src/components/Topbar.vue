<template>
  <div class="topbar">
    <div class="container">
      <div class="topbar__content row">
        <div class="col-xs-2" @click="routerPages">
          <img src="../assets/img/logo-white.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  computed: {
    userName() {
      return "Tom"
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
.bfe-badge {
  vertical-align: top !important;
}
.topbar {
  border-style: solid;
  border-color: #dadada;
  border-width: 0px 0px 1px 0px;
  background-color: #be2e3e;
}

.topbar__content {
  padding: 10px 10px;
  min-height: 36px;
}

.topbar__links a {
  float: right;
  margin-left: 10px;
  margin-right: 6px;
  cursor: pointer;
  text-decoration: none;
}

.topbar__links a:hover {
  text-decoration: none;
}
</style>
