<template>
  <div class="page" id="my">
    <div class="section">
      <div class="my-info">
        <div class="user-avatar">张</div>
        <h3>张三</h3>
      </div>
      <div class="my-settings-list">
        <div class="setting-item" @click="handleSettingItemClick('账号与安全')">
          <span>账号与安全</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item" @click="handleSettingItemClick('隐私设置')">
          <span>隐私设置</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item" @click="handleSettingItemClick('通知设置')">
          <span>通知设置</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item" @click="handleSettingItemClick('帮助与反馈')">
          <span>帮助与反馈</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item" @click="handleSettingItemClick('关于我们')">
          <span>关于我们</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item" @click="handleSettingItemClick('退出登录')">
          <span>退出登录</span>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 我的页面逻辑

// 模拟设置项点击事件
const handleSettingItemClick = (settingName: string) => {
  alert(`点击了设置项: ${settingName} (模拟进入设置详情页)`);
};
</script>

<style scoped>
/* 我的页面样式 */
.my-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.my-info .user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
}

.my-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
}

.my-settings-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: var(--dark);
  cursor: pointer;
  transition: var(--transition);
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-item i {
  color: var(--gray);
  font-size: 14px;
}

.setting-item:hover {
  color: var(--primary);
}

.setting-item:hover i {
  color: var(--primary);
}
</style>
