import { createRouter, createWebHistory } from 'vue-router';

// 导入页面组件 (稍后创建)
// import HomePage from '../views/HomePage.vue';
// import IdentityPage from '../views/IdentityPage.vue';
// import GroupsPage from '../views/GroupsPage.vue';
// import DiscoverPage from '../views/DiscoverPage.vue';
// import ChannelPage from '../views/ChannelPage.vue';
// import ChannelDetailPage from '../views/ChannelDetailPage.vue';
// import MyPage from '../views/MyPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home' // 默认重定向到首页
  },
  {
    path: '/home',
    name: 'Home',
    // component: HomePage // 稍后启用
    component: () => import('../views/HomePage.vue') // 使用动态导入
  },
  {
    path: '/identity',
    name: 'Identity',
    // component: IdentityPage // 稍后启用
    component: () => import('../views/IdentityPage.vue') // 使用动态导入
  },
  {
    path: '/groups',
    name: 'Groups',
    // component: GroupsPage // 稍后启用
    component: () => import('../views/GroupsPage.vue') // 使用动态导入
  },
  {
    path: '/discover',
    name: 'Discover',
    // component: DiscoverPage // 稍后启用
    component: () => import('../views/DiscoverPage.vue') // 使用动态导入
  },
  {
    path: '/channel',
    name: 'Channel',
    // component: ChannelPage // 稍后启用
    component: () => import('../views/ChannelPage.vue') // 使用动态导入
  },
  {
    path: '/channel-detail',
    name: 'ChannelDetail',
    // component: ChannelDetailPage // 稍后启用
    component: () => import('../views/ChannelDetailPage.vue') // 使用动态导入
  },
   {
    path: '/my',
    name: 'My',
    // component: MyPage // 稍后启用
    component: () => import('../views/MyPage.vue') // 使用动态导入
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
