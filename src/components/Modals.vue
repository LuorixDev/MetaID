<template>
  <div>
    <!-- 创建新身份卡模态框 -->
    <div class="modal" :class="{ active: isCreateModalVisible }" @click.self="hideModal('create')">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">创建新身份卡</div>
          <div class="modal-close" @click="hideModal('create')">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <!-- 创建身份卡表单或内容将在这里 -->
        <p>创建身份卡表单将在这里显示...</p>
      </div>
    </div>

    <!-- 切换身份模态框 -->
    <div class="modal" :class="{ active: isSwitchIdentityModalVisible }" @click.self="hideModal('switch')">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">切换身份卡</div>
          <div class="modal-close" @click="hideModal('switch')">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="identity-list identity-switch-list">
          <!-- 身份卡切换选项将在这里渲染 -->
          <!-- 模拟身份卡列表 -->
          <div class="card" data-identity-name="工作身份" @click="switchIdentity('工作身份')">
            <div class="card-header">
              <div class="card-title">工作身份</div>
              <div class="card-badge">永久</div>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <i class="fas fa-user-tie"></i>
                <span>高级产品经理</span>
              </div>
              <div class="card-meta">
                <i class="fas fa-link"></i>
                <span>微信: work_zhang</span>
              </div>
            </div>
          </div>
          <div class="card" data-identity-name="个人社交" style="background: linear-gradient(135deg, #10b981, #06b6d4);" @click="switchIdentity('个人社交')">
            <div class="card-header">
              <div class="card-title">个人社交</div>
              <div class="card-badge">永久</div>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <i class="fas fa-gamepad"></i>
                <span>游戏达人 | 摄影爱好者</span>
              </div>
              <div class="card-meta">
                <i class="fas fa-link"></i>
                <span>B站: 摄影小张</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 控制模态框显示状态
const isCreateModalVisible = ref(false);
const isSwitchIdentityModalVisible = ref(false);

// 显示模态框
const showModal = (type: 'create' | 'switch') => {
  if (type === 'create') {
    isCreateModalVisible.value = true;
  } else if (type === 'switch') {
    isSwitchIdentityModalVisible.value = true;
  }
};

// 隐藏模态框
const hideModal = (type: 'create' | 'switch') => {
   if (type === 'create') {
    isCreateModalVisible.value = false;
  } else if (type === 'switch') {
    isSwitchIdentityModalVisible.value = false;
  }
};

// 模拟切换身份逻辑
const switchIdentity = (identityName: string) => {
  // 在实际应用中，这里会更新全局状态或执行其他逻辑
  alert(`已切换到身份: ${identityName}`);
  hideModal('switch'); // 切换后隐藏模态框
};

// 暴露方法给父组件调用
defineExpose({
  showModal,
});

// 模态框容器组件逻辑
</script>

<style scoped>
/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 400px;
  border-radius: 24px;
  padding: 24px;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.modal.active .modal-content {
  transform: translateY(0);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
}

.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray);
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: var(--primary-light);
  color: var(--primary);
}

/* Identity List in Modal */
.identity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.identity-list .card {
  min-width: auto;
  width: 100%;
  padding: 16px;
  cursor: pointer;
}

.identity-list .card .card-header {
  margin-bottom: 12px;
}

.identity-list .card .card-meta {
  margin-bottom: 4px;
}
</style>
