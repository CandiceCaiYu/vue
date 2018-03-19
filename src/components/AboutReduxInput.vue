<template>
  <div class="redux-input">
    <h3>redux input page</h3>
    <form action="">
      <label for="">课程</label>
      <input ref="inputMessage" v-model="message" class="redex-input-text" type="text" placeholder="课程名称">
    </form>
    <button @click="sumbitTimes" class="redux-input-submit" type="submit">提交 </button>
    <div class="submitTotol">已提交{{count}}次</div>
  </div>
</template>
<script>
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// // 状态管理
// const store = new Vuex.Store({
//   state: {
//     index: 0,
//     lists: []
//   },
//   mutations: {
//     increment(state, payload) {
//       state.lists.push({
//         id: state.index++,
//         name: payload
//       });
//     }
//   },
//   getters: {
//     newItem: state => {
//       let len = state.lists.length;
//       return state.lists[len - 1];
//     }
//   }
// });
export default {
  name: "AboutReduxInput",
  data: function() {
    return {
      count: 0,
      message: ""
    };
  },
  methods: {
    sumbitTimes: function() {
      this.$store.dispatch("increment", this.message);
      this.$emit("addMessage", { item: this.$store.getters.newItem });
      this.message = "";

      this.count++;
    }
  }
};
</script>
<style>
.redux-input {
  flex: 1;
  padding-bottom: 10px;
}
.redex-input-text {
  height: 30px;
  text-indent: 1em;
}
.redux-input-submit {
  width: 50px;
  height: 30px;
  margin: 10px;
  background: #0f0;
}
</style>
