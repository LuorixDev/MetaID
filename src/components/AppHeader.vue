<template>
  <div class="app-header">
    <div class="header-top">
      <div class="app-title">
        <i class="fas fa-id-card"></i>
        <span>IDConnect</span>
      </div>
      <div class="user-avatar">张</div>
    </div>

    <!-- Current Identity Display -->
    <div class="current-identity" @click="showSwitchIdentityModal">
      <span id="currentIdentityName">{{ currentIdentity.name }}</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 模拟当前身份数据
const currentIdentity = ref({
  name: '工作身份',
  // 其他身份信息...
});

// 触发显示切换身份模态框的事件
const emit = defineEmits(['show-switch-identity-modal']);

const showSwitchIdentityModal = () => {
  emit('show-switch-identity-modal');
};

// 头部组件逻辑
</script>

<style scoped>
/* 头部组件样式 */
.app-header {
  background: white;
  padding: 20px 16px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 10;
  position: relative;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.app-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-title i {
  background: var(--primary-light);
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.current-identity {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: var(--dark);
  cursor: pointer;
  padding: 8px 12px;
  background: var(--light);
  border-radius: 12px;
  align-self: flex-start;
  margin-top: 8px;
  transition: var(--transition);
}

.current-identity:hover {
  background: #eef2ff;
}

.current-identity i {
  font-size: 12px;
  color: var(--gray);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .app-header {
    padding: 16px;
  }
}
</style>
