<template>
  <div class="page" id="groups">
    <div class="section">
      <div class="section-header">
        <div class="section-title">我的社群</div>
        <div class="btn-more">导入</div>
      </div>
      <div class="groups-list">
        <!-- Example Group Item -->
        <div class="group-item" @click="handleGroupItemClick('产品设计群')">
          <div class="group-icon">
            <i class="fab fa-weixin"></i>
          </div>
          <div class="group-info">
            <div class="group-name">产品设计群</div>
            <div class="group-meta">关联身份：工作身份</div>
            <div class="group-meta">成员数量：42</div>
          </div>
        </div>
        <div class="group-item" @click="handleGroupItemClick('摄影交流')">
          <div class="group-icon">
            <i class="fab fa-qq"></i>
          </div>
          <div class="group-info">
            <div class="group-name">摄影交流</div>
            <div class="group-meta">关联身份：个人社交</div>
            <div class="group-meta">成员数量：128</div>
          </div>
        </div>
        <div class="add-group-btn">
          <i class="fas fa-plus"></i> 导入新社群
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 社群页逻辑

// 模拟社群列表项点击事件
const handleGroupItemClick = (groupName: string) => {
  alert(`点击了社群: ${groupName} (模拟进入社群详情页)`);
};
</script>

<style scoped>
/* 社群页样式 */
.groups-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.groups-list .group-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--light);
  border-radius: 12px;
  padding: 12px 16px;
  transition: var(--transition);
  cursor: pointer;
}

.groups-list .group-item:hover {
  background: #eef2ff;
}

.groups-list .group-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 20px;
  flex-shrink: 0;
}

.groups-list .group-info {
  flex: 1;
}

.groups-list .group-name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}

.groups-list .group-meta {
  color: var(--gray);
  font-size: 12px;
}

.add-group-btn {
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

.add-group-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
