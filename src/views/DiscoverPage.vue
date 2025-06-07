<template>
  <div class="page" id="discover">
    <div class="section">
      <div class="section-header">
        <div class="section-title">共同社群发现</div>
        <div class="btn-more">更多</div>
      </div>
      <div class="discover-list">
        <!-- Example Discover Item -->
        <div class="discover-item" @click="handleDiscoverItemClick('赵同学')">
          <div class="discover-avatar">赵</div>
          <div class="discover-info">
            <div class="discover-name">赵同学</div>
            <div class="discover-meta">共同社群：摄影交流 (QQ群)</div>
          </div>
          <div class="discover-action">
            <button class="btn-primary">添加好友</button>
          </div>
        </div>
        <div class="discover-item" @click="handleDiscoverItemClick('钱工程师')">
          <div class="discover-avatar">钱</div>
          <div class="discover-info">
            <div class="discover-name">钱工程师</div>
            <div class="discover-meta">共同社群：技术前沿 (TG群)</div>
          </div>
          <div class="discover-action">
            <button class="btn-primary">添加好友</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 发现页逻辑

// 模拟发现列表项点击事件
const handleDiscoverItemClick = (discoverName: string) => {
  alert(`点击了发现用户: ${discoverName} (模拟进入用户详情或好友请求页)`);
};
</script>

<style scoped>
/* 发现页样式 */
.discover-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.discover-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--light);
  border-radius: 12px;
  padding: 12px 16px;
  transition: var(--transition);
  cursor: pointer;
}

.discover-item:hover {
  background: #eef2ff;
}

.discover-avatar {
  min-width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  flex-shrink: 0;
}

.discover-info {
  flex: 1;
}

.discover-name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}

.discover-meta {
  font-size: 14px;
  color: var(--gray);
}

.discover-action button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.discover-action button:hover {
  background: #3a5af5;
}
</style>
