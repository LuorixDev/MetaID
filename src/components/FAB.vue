<template>
  <div class="fab" @click="showCreateModal">
    <!-- FAB 内容 -->
    <i class="fas fa-plus"></i>
  </div>
</template>

<script setup lang="ts">
// 触发显示创建身份模态框的事件
const emit = defineEmits(['show-create-modal']);

const showCreateModal = () => {
  emit('show-create-modal');
};

// FAB 组件逻辑
</script>

<style scoped>
/* FAB 组件样式 */
.fab {
  position: absolute;
  bottom: 80px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 6px 20px rgba(74, 108, 247, 0.4);
  cursor: pointer;
  z-index: 20;
  transition: all 0.3s ease;
}

.fab:hover {
  transform: translateY(-4px) scale(1.05);
}
</style>
