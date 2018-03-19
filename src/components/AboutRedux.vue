<template>
<div class="about-redux">
  <AboutReduxList/>  
  <AboutReduxInput  />
</div>
</template>
<script>
import AboutReduxList from "./AboutReduxList";
import AboutReduxInput from "./AboutReduxInput";
export default {
  name: "AboutRedux",
  components: {
    AboutReduxList,
    AboutReduxInput
  },
  created: function() {
    console.log("created: " + new Date().getTime());
  },
  beforeMount: function() {
    console.log("beforeMount: " + new Date().getTime());
  },
  mounted: function() {
    console.log("mounted: " + new Date().getTime());
  },
  beforeUpdated: function() {
    console.log("beforeUpdated: " + new Date().getTime());
  },
  updated: function() {
    console.log("updated: " + new Date().getTime());
  }
};
</script>
<style scoped>
.about-redux {
  display: flex;
  margin-top: 30px;
  width: 100%;
  background: #ff0;
}
</style>