
import Vue from 'vue';
import Router from 'vue-router';
import login from '@/pages/login/login';
// import { resolve } from 'url';

Vue.use(Router);

export const normalRouter = [
  {
    path: '/',
    component: login
  },
  {
    path: '/index',
    component: resolve => require(['@/pages/index/index'], resolve),
    redirect: '/home',
    name: '首页',
    children: [
      {
        path: '/home',
        component: resolve => require(['@/pages/home/home'], resolve),
        name: '工作台',
        icon: 'el-icon-menu'
      },
      {
        path: '/data',
        component: resolve => require(['@/pages/system/system'], resolve),
        name: '数据管理',
        icon: 'el-icon-menu',
        children:[
          {
            path: '/userlist',
            component: resolve => require(['@/pages/userlist/userlist'], resolve),
            name: '用户列表',
          },
          {
            path: '/shoplist',
            component: resolve => require(['@/pages/shoplist/shoplist'], resolve),
            name: '商家列表',
          },
          {
            path: '/goodlist',
            component: resolve => require(['@/pages/goodlist/goodlist'], resolve),
            name: '商品列表',
          },
          {
            path: '/orderlist',
            component: resolve => require(['@/pages/orderlist/orderlist'], resolve),
            name: '订单列表',
          }
        ]
      },
      {
        path: '/add',
        component: resolve => require(['@/pages/system/system'], resolve),
        name: '添加数据',
        icon: 'el-icon-circle-plus',
        children:[
          {
            path: '/addshop',
            component: resolve => require(['@/pages/addshop/addshop'], resolve),
            name: '添加店铺',
          },
          {
            path: '/addgood',
            component: resolve => require(['@/pages/addgood/addgood'], resolve),
            name: '添加商品',
          }
        ]
      },
      {
        path: '/set',
        component: resolve => require(['@/pages/user/user'], resolve),
        name: '管理员设置',
        icon: 'el-icon-setting',
      },
      {
        path: '/detail',
        component: resolve => require(['@/components/404/404'], resolve),
        name: '说明',
        icon: 'el-icon-warning',
      },
    ]
  },
  {
    path: '*',
    component: resolve => require(['@/components/404/404'], resolve),
    name: '404',
    // redirect: '/404'
  }
];


export default new Router({
  base: '/vue/',
  routes: normalRouter
});

export const authRouter = [
  {
    path: '/admin',
    name: 'admin',
    component: resolve => require(['@/pages/admin/admin'], resolve),
    meta: { role: 'admin' }
  }
];
