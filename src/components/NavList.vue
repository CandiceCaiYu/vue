<template>
 <div class="nav-list">
  <h2>分类</h2>
  <ul class="nav-list-ul">
  <li class="nav-list-item"><router-link :to="{name: 'TemplateSyntax'}">核心</router-link></li>
  <!-- <li class="nav-list-item"><router-link :to="{name: 'AboutComponent'}">组件</router-link></li> -->
  <li class="nav-list-item"><router-link :to="{name: 'AboutRouter'}">路由</router-link></li>
  <li class="nav-list-item"><router-link :to="{name: 'AboutRedux'}">状态管理</router-link></li>
  </ul>
 </div>
</template>
<script>
export default {
  name: "NavList"
  // data:
};
</script>
<style scoped>
.nav-list-ul {
  padding: 0;
}
.nav-list-item {
  margin-bottom: 8px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  list-style: none;
  background: #ccc;
}
.nav-list-item a {
  text-decoration: none;
  color: #fff;
}
.router-link-active {
  background: #933d3d;
}
</style>