<template>
  <div class="about-router">
    <ul class="user-list">
      <li class="user-item"><router-link exact :to="{name: 'UserInfo', params:{userName: 'zhangsan'}}">张三</router-link> </li>
      <li class="user-item"><router-link :to="{name: 'UserInfo', params:{userName: 'Lisi'}}">李四</router-link> </li>
      <li class="user-item"><router-link :to="{name: 'UserInfo', params:{userName: 'Wanger'}}">王二</router-link> </li>
    </ul>
    <router-view name="routerView"></router-view>
  </div>
</template>
<script>
export default {
  name: "AboutRouter"
};
</script>
<style scoped>
.about-router {
  width: 100%;
  background: #b78686;
  color: #000;
  margin-top: 10px;
  padding-bottom: 10px;
}
.user-list {
  display: flex;
}
.user-item {
  margin-right: 10px;
  width: 110px;
  height: 30px;
  line-height: 30px;
  background: #ccc;
}
.router-link-active {
  background: #fdff00;
  color: #000;
}
.router-link-exact-active {
  background: #fdff00;
  color: #000;
}
</style>