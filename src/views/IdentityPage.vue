<template>
  <div class="page" id="identity">
    <div class="section">
      <div class="section-header">
        <div class="section-title">我的身份卡管理</div>
        <div class="btn-more">新增</div>
      </div>
      <div class="identity-list">
        <!-- Example Identity Card Item -->
        <div class="card" @click="handleIdentityCardClick('工作身份')">
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
            <div class="card-meta">
              <i class="fas fa-users"></i>
              <span>12个群组</span>
            </div>
          </div>
        </div>
        <div class="card" style="background: linear-gradient(135deg, #10b981, #06b6d4);" @click="handleIdentityCardClick('个人社交')">
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
            <div class="card-meta">
              <i class="fas fa-users"></i>
              <span>8个群组</span>
            </div>
          </div>
        </div>
        <div class="add-identity-btn">
          <i class="fas fa-plus"></i> 添加新身份卡
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 身份页逻辑

// 模拟身份卡点击事件
const handleIdentityCardClick = (cardTitle: string) => {
  alert(`点击了身份卡: ${cardTitle} (模拟进入详情页)`);
};
</script>

<style scoped>
/* 身份页样式 */
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

.add-identity-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px dashed var(--gray);
  border-radius: 12px;
  color: var(--gray);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 16px;
}

.add-identity-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

/* ID Card 样式 (从 phone2.css 迁移，如果 IdentityCard 组件不通用，则保留在此) */
/* 注意：这里的 .card 样式可能会与 HomePage.vue 中的重复，
   如果 IdentityCard 组件通用，应提取到单独的组件中 */
.card {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--border-radius);
  padding: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.card::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
}

.card-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.card-content {
  margin-bottom: 16px;
}

.card-meta {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
