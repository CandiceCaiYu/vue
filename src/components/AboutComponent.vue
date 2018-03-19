<template>
  <div class="about-component">
    <h2>组件</h2>
      <Item :lists = "lists" />
      <Item :lists = "friuts" />
      <div class="addList">
        <label for="">添加元素： </label>
        <input type="text">
      </div>
  </div>
</template>
<script>
import Vue from "vue";

var Item = {
  props: {
    lists: Array
  },
  template:
    " <ul class='about-component-list' v-if='lists && lists.length > 0'><li class='about-component-item' v-for='item in lists' :key='item.id'>{{item.name}}</li></ul>"
};

export default {
  name: "aboutComponent",
  components: {
    Item
  },
  data: function() {
    return {
      lists: [
        {
          id: 0,
          name: "Chinese"
        },
        {
          id: 1,
          name: "Math"
        },
        {
          id: 2,
          name: "English"
        }
      ],
      friuts: [
        {
          id: 0,
          name: "Apple"
        },
        {
          id: 1,
          name: "Orange"
        },
        {
          id: 2,
          name: "Banana"
        },
        {
          id: 3,
          name: "watermelon"
        }
      ]
    };
  }
};
</script>
<style>
.about-component-list {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 30px;
  align-items: center;
  background: #ccc;
  border-left: 2px solid #746363;
  border-bottom: 2px solid #746363;
}
.about-component-item {
  flex: 1;
  line-height: 30px;
  border-right: 2px solid #746363;
}
</style>
