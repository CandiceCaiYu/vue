<template>
<div>
 <div class="content-guide">
  首页 a < b 
  </div>
  <div class="content-main">主体
  </div>
 </div>

</template>
<script>

  export default {
    name: 'Content',
  }
</script>
<style scoped>
  .content-guide {
    width: 100%;
    height: 50px;
    line-height: 70px;
    background: #ccc;
    text-align: left;
    text-indent: 1em;
  }
  .content-main {
    margin-top: 10px;
    width: 100%;
    height: 400px;
    background: #ccc;
  }
</style>