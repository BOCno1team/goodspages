<template>
  <div class="menus">
    <header>
      <ul class="menu-items">
        <li class="menu-logo">
          <router-link :to="'indexNew'"><img src="../assets/img/lang-english.png" /></router-link>
        </li>
        <!--<li class="menu__item">
          <router-link :to="'websocket'" :class="{'active': $route.meta.menuName === 'websocket'}">WebSocket
          </router-link>
        </li>
        <li class="menu__item">
          <router-link :to="'nav3'" :class="{'active': $route.meta.menuName === 'nav3'}">导航三
          </router-link>
        </li>
        <li class="menu__item">
          <router-link :to="'nav4'" :class="{'active': $route.meta.menuName === 'nav4'}">导航四
          </router-link>
        </li>
        <li class="menu__item">
          <router-link :to="'nav5'" :class="{'active': $route.meta.menuName === 'nav5'}">导航五
          </router-link>
        </li> -->
      </ul>
    </header>
  </div>
</template>

<script>
/**
 * 菜单组件
 */
export default {
  name: 'Menus',
  methods: {

  }
}
</script>

<style>
.menus {
  min-height: 85px;
  background-color: #be2e3e;
  width: 100%;
  top: 0;
  left: 0;
  /* padding: 0 20px; */
  z-index: 1;
  /* box-sizing: border-box; */
}

.menus header {
  min-height: 85px;
}

.menu-logo {
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 35px;
}

.menu-items {
  display: inline-block;
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.menu__item {
  display: inline-block;
  vertical-align: middle;
  padding: 0 20px;
  margin: 0 0px;
  line-height: 85px;
  cursor: pointer;
  min-height: inherit;
}

.menu__item:hover {
  background-color: #b6002a;
}

.menu-items li a {
  display: inline-table;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  width:100%;
}

.menu-items li a.active {
  color: #fff;
}
</style>
