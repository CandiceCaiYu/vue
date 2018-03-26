<template>
  <div class="template-syntax" id="syntax">
    <h3>模板语法</h3>
    <ul class="template-syntax-insert-value">
      <li class="list"><p>插值:</p> <div class="content">{{message}}</div></li>

      <li class="list"><p>非原生HTML(普通文本):</p> <div class="content">{{rawHtml}}</div></li>

      <li class="list"><p>原生HTML:</p> <div class="content" v-html="rawHtml"></div></li>
      <hr />

      <li class="list"><p>指令v-bind:</p> <div class="content" v-bind:id = "id">我的id ---- {{id}}</div></li>
      <li class="list"><p>指令v-show:</p> <div class="content" v-show="show">展示</div></li>

      <hr />
      <li class="list"><p>条件v-if: </p> <div class="content" v-if="show">展示</div></li>
      <li class="list"><p>条件v-for: </p> <div class="content">
        <ul v-if="list">
          <li v-for="item in list" :key="item.id">{{item.id}}. {{item.name}}</li>
          <!-- <li v-for="(item, index) in list" :key="item.id">{{index}}. {{item.name}}</li> -->
          <!-- <li v-for="(value, key, index) in obj" :key="index">{{key}}. {{value}}</li> -->
        </ul>
        </div></li>
      <li class="list"><p>v-if/v-for优先级: </p></li>

      <hr />
      <li class="list" v-on:click.prevent="add"><p>事件v-on: </p> <div class="content" >{{count}}</div></li>
      
      <hr />
      <li class="list"><p>表单相关: </p> <div class="content">
          <p>{{inputMsg}}</p>
          <!-- 修饰符lazy, number, trim -->
          <input type="text" v-model="inputMsg">
          <!-- v-for :value  -->
          <!-- <input type="checkbox" value="apple" id="apple" v-model="inputMsg">
          <label for="apple" >apple:</label>
          <input type="checkbox" value="orange" id="orange"  v-model="inputMsg">
          <label for="orange">orange:</label>
          <input type="checkbox" value="banana" id="banana"  v-model="inputMsg">
          <label for="banana">banana:</label> -->
        </div></li>
      <hr />
      
      
      <li class="list"><p>计算属性: </p> <div class="content" >{{sortArr}}</div></li>
      <li class="list"><p>侦听器: </p> <div class="content" >{{fullName}}</div></li>

      <hr />
      
      <!-- :style vue自动加前缀 transition -->
      <li class="list"><p :class="changeStyle">class/style:</p><div class="content" :style="{color: initColor, fontSize: '20px'}">类和样式绑定</div></li>
      
      <hr />

      <!-- vm.$set(arr,index, newValue), splice(index, 1, newValue) -->
      <li class="list"><p :class="changeStyle">数组/对象:  </p><div class="content"><button @click="addItem">添加</button></div></li>
      <li class="list"><p>过渡样式: </p> 
      <transition name="fade">
        <div class="content" v-if="show">展示</div>
      </transition>
      </li>

      <hr />


      <!-- .exact, 精确系统组合键 -->
      <!-- 自定义Vue.config.keyCodes.f1 = 112 -->
      <li class="list"><p>按键修饰符: </p> <div class="content"><input type="text" @keyup="useKeys"></div></li>
    </ul >
  </div>
</template>
<script>
 export default {
  name: "TemplateSyntax",
  data: function() {
    return {
      message: "Hello world",
      rawHtml: '<span style="color:#f00">哈哈哈</span>',
      id: "007",
      show: true,
      count: 0,
      arr: [1, 3, 17, 5, 2],
      // fullName: "hh",
      firstName: "Cai",
      lastName: "Yu",
      style: "textDanger",
      initColor: "#ccc",
      list: [
        { id: 1, name: "Chinese" },
        { id: 2, name: "Math" },
        { id: 3, name: "English" }
      ],
      inputMsg: []
    };
  },
  // 异步/输入框
  // watch: {
  //   firstName: function(val) {
  //     this.fullName = val + " " + this.lastName;
  //   },
  //   lastName: function(va) {
  //     this.fullName = this.firstName + " " + val;
  //   }
  // },
  computed: {
    sortArr: function() {
      return this.arr.sort(function(a, b) {
        return a - b;
      });
    },
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    changeStyle: function() {
      // 字符串拼接
      // return (this.style += " textInfo");
      // 数组
      return [this.style, "textInfo"];
    }
  },
  methods: {
    add: function() {
      this.count++;
    },
    addItem: function() {
      this.list.push({
        id: this.list.length + 1,
        name: "课程00" + this.list.length
      });
    },
    useKeys: function(event) {
      console.log("键码：" + event.keyCode);
      console.log("键名：" + event.code);
      if (event.keyCode === 32 && event.code === "Space") {
        console.log("hi");
        this.initColor = "#0f0";
      } else {
        this.initColor = "#ccc";
      }
    }
  }
};
</script>
<style scoped>
.template-syntax {
  width: 100%;
  background: #c1a3a3;
}
.template-syntax-insert-value {
  border-bottom: 2px solid #ccc;
  text-align: left;
}
.template-syntax-insert-value .list {
  display: flex;
  /* height: 50px; */
  line-height: 50px;
}
.template-syntax-insert-value .content {
  margin-left: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.textDanger {
  font-size: 20px;
  color: #f00;
}
.textInfo {
  color: #0f0;
}
</style>