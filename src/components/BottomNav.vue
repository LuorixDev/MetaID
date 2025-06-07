<template>
  <div class="bottom-nav">
    <div
      class="nav-item"
      :class="{ active: route.path === '/home' }"
      @click="navigate('/home')"
    >
      <i class="fas fa-home nav-icon"></i>
      <span>首页</span>
    </div>
    <div
      class="nav-item"
      :class="{ active: route.path === '/identity' }"
      @click="navigate('/identity')"
    >
      <i class="fas fa-id-card nav-icon"></i>
      <span>身份</span>
    </div>
    <div
      class="nav-item"
      :class="{ active: route.path === '/discover' }"
      @click="navigate('/discover')"
    >
      <i class="fas fa-compass nav-icon"></i>
      <span>发现</span>
    </div>
    <div
      class="nav-item"
      :class="{ active: route.path === '/channel' }"
      @click="navigate('/channel')"
    >
      <i class="fas fa-bell nav-icon"></i>
      <span>频道</span>
    </div>
    <div
      class="nav-item"
      :class="{ active: route.path === '/my' }"
      @click="navigate('/my')"
    >
      <i class="fas fa-user nav-icon"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// 导航到指定路径
const navigate = (path: string) => {
  router.push(path);
};

// 底部导航组件逻辑
</script>

<style scoped>
/* 底部导航组件样式 */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 12px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.03);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--gray);
  font-size: 12px;
  cursor: pointer;
  transition: var(--transition);
  flex: 1;
  text-align: center;
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 22px;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .bottom-nav {
    padding: 10px 0;
  }
}
</style>
