<template>
  <div class="home">
    <h1 class="home-header">About Vue</h1>
    <div class="left-nav">
      <NavList />
    </div>
    <div class="right-content">
      <ContentGuide />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavList from "./NavList";
import Content from "./Content";
import ContentGuide from "./ContentGuide";
export default {
  name: "Home",
  components: {
    NavList,
    ContentGuide
  }
};
</script>
<style scoped>
.home {
  margin: auto;
  padding-bottom: 80px;
  width: 900px;
  /* height: 600px; */
  background: #eab2b2;
}
.home-header {
  line-height: 90px;
}

.left-nav {
  float: left;
  /* border: 1px solid #9e6c6c; */
  width: 150px;
}
.right-content {
  margin-left: 160px;
  /* border: 1px solid #9e6c6c; */
  width: auto;
}
</style>