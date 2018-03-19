export default {
  // 初始状态
  state: {
    index: 0,
    lists: []
  },
  mutations: {
    // 添加节点
    increment(state, payload) {
      if (state.lists.length < 1) {
        state.index = 0;
      }
      state.lists.unshift({
        id: state.index++,
        name: payload
      });
    },
    // 删除节点
    delete(state, payload) {
      state.lists.map((item, index) => {
        if (item.id == payload.delItemId) {
          state.lists.splice(index, 1);
        }
      });
    }
  },
  actions: {
    increment(context, payload) {
      // setTimeout(() => {
      //   context.commit("increment", payload);
      // }, 1000);
      context.commit("increment", payload);
    },
    delete({ commit }, payload) {
      commit("delete", payload);
    }
  },
  // 处理数据
  getters: {
    newItem: state => {
      let len = state.lists.length;
      return state.lists[len - 1];
    },
    allItem: state => {
      return state.lists;
    }
  }
};
