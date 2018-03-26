import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import AboutRouter from "@/components/AboutRouter";
import AboutRedux from "@/components/AboutRedux";
import TemplateSyntax from "@/components/TemplateSyntax";
import AboutComponent from "@/components/AboutComponent";
import UserInfo from "@/components/UserInfo";
import AboutReduxList from "@/components/AboutReduxList";

Vue.use(Router);

export default new Router({
  linkActiveClass: "router-link-active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect: "/TemplateSyntax",
      children: [
        {
          path: "/TemplateSyntax",
          name: "TemplateSyntax",
          component: TemplateSyntax
        },
        {
          path: "/AboutComponent",
          name: "AboutComponent",
          component: AboutComponent
        },
        {
          path: "/AboutRouter",
          name: "AboutRouter",
          component: AboutRouter,
          redirect: "/AboutRouter/UserInfo/zhangsan",
          children: [
            {
              path: "UserInfo/:userName",
              name: "UserInfo",
              components: {
                routerView: UserInfo
              }
            }
          ]
        },
        {
          path: "/AboutRedux",
          name: "AboutRedux",
          component: AboutRedux
        }
      ]
    }
  ]
});
