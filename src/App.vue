<template>
  <div class="app-container">
    <!-- 应用头部 -->
    <AppHeader @show-switch-identity-modal="handleShowModal('switch')" />

    <!-- 应用内容区域，显示路由匹配的页面 -->
    <div class="app-content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>

    <!-- 底部导航 -->
    <BottomNav />

    <!-- 模态框容器 -->
    <Modals ref="modalsRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'; // 引入 ref
import AppHeader from './components/AppHeader.vue';
import BottomNav from './components/BottomNav.vue';
import Modals from './components/Modals.vue';

// 获取 Modals 组件实例，用于调用其方法
const modalsRef = ref<InstanceType<typeof Modals> | null>(null);

// 处理显示模态框事件
const handleShowModal = (type: 'create' | 'switch') => {
  if (modalsRef.value) {
    modalsRef.value.showModal(type);
  }
};

// App 根组件逻辑
</script>

<style>
/* 引入全局样式 */
@import './assets/global.css';

/* App 容器样式 */
.app-container {
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* 主内容区域样式 */
.app-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  position: relative;
  background: var(--light);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .app-content {
    padding: 12px;
  }
}
</style>
