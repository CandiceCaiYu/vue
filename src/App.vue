<template>
  <div id="app">
    <div v-if="!show" class="app-begin">
      <ul class="feature-list">
        <li class="feature-item" @click="addFeature1">
          <h3>渐进式框架</h3>
           <transition name="fade">        
              <p v-if="feature1">
                {{feature1}}
                </p>
           </transition>
        </li>
        <li class="feature-item" @click="addFeature2">
          <h3>SPA</h3>
          <transition name="bounce">
          <p v-if="feature2">{{feature2}}</p>
          </transition>
          
        </li>
        <li class="feature-item" @click="addFeature3">
          <h3>单一数据流</h3>
          <p>{{feature3}}</p>
        </li>
      </ul>
      <button class="enter-home" @click="enterHome">进入</button>
    </div>
    <router-view v-show="show"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      show: false,
      feature1: "",
      feature2: "",
      feature3: ""
    };
  },
  methods: {
    addFeature1: function() {
      this.feature1 = "Component";
    },
    addFeature2: function() {
      this.feature2 = "Vue-Router";
    },
    addFeature3: function() {
      this.feature3 = "Vuex";
    },
    enterHome: function() {
      this.show = true;
    }
  }
};
</script>

<style>
@keyframes bounce-animation {
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-begin {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d2b0b0;
}
.feature-list {
  display: flex;
  width: 80%;
  margin: 200px auto;
}
.feature-item {
  flex: 1;
  margin-right: 20px;
  width: 10%;
  height: 150px;
  border-radius: 4px;
  font-size: 20px;
  background: #463131;
  color: #fff;
  cursor: pointer;
}
.feature-item h3 {
  margin: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-animation 0.8s;
}
.bounce-leave-active {
  animation: bounce-animation 0.8s;
}
.enter-home {
  width: 108px;
  height: 50px;
  font-size: 20px;
  border-radius: 4px;
}
li {
  list-style: none;
}
a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #fff;
}
p {
  margin: 0;
  padding: 0;
}
</style>
