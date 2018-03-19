
<template>
<!-- 动态匹配路径 -->
  <div class="user-info">
    <h3 class="user-title">个人信息</h3> 
    <p class="user-name">姓名：{{$route.params.userName}}</p>
  </div>
</template>
<script>
export default {
  name: "UserInfo"
};
</script>
<style>
.user-info {
  margin: auto;
  width: 300px;
  height: 100px;
  background: #ff0;
}
.user-title {
  margin-bottom: 0;
  padding: 10px 0;
}
.user-name {
  margin-top: 10px;
}
</style>

