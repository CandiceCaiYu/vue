<template>
  <div class="redux-list">
    <!-- {{this.aboutReduxInput}} -->
    <h3>课程列表</h3>
    <!-- v-if与v-for一起使用for优先级高，考虑if放外层 -->
    <ul ref="reduxList" class="redux-list-ul" v-if="this.newItem">
      <li class="redux-list-li"><span class="nodeIndex">id</span>名称</li>
      <li v-for="item in this.allItem" :key="item.id"  is="newNode" :item="item"></li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Vue from "vue";
var newNode = {
  props: ["item"],
  template:
    '<li class="redux-list-li"><span class="nodeIndex">{{item.id}}</span>{{item.name}}<span @click.prevent="delItem" class="redux-list-list-del">x</span></li>',
  methods: {
    delItem: function(event) {
      let parentNode = this.$el;
      let curId = this.$el.children[0].innerText;
      this.$store.dispatch("delete", {
        delItemId: curId
      });
    }
  }
};

export default {
  name: "AboutReduxList",
  components: { newNode },
  computed: {
    ...mapGetters(["newItem", "allItem"]),
    ...mapState(["aboutReduxInput"])
  }
};
</script>
<style>
.redux-list {
  flex: 1;
  padding-bottom: 10px;
  border-right: 2px solid #ccc;
}
.redux-list-ul {
  padding: 0 80px;
}
.redux-list-li {
  position: relative;
  display: flex;
  border-bottom: 1px solid #000;
}
.redux-list-list-del {
  position: absolute;
  top: 0;
  right: 0;
  color: #f00;
  font-weight: bold;
  cursor: pointer;
}
.nodeIndex {
  display: inline-block;
  padding: 2px 30px;
}
</style>

