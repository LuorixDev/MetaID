<template>
  <div class="page" id="home">
    <div class="section" style="text-align: center; padding-top: 20px;">
      <h3 class="section-title">我的电子 ID 卡</h3>
      <div class="card" style="margin: 20px auto; max-width: 260px; background: linear-gradient(135deg, #4a6cf7, #8b5cf6);">
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
        <!-- Placeholder for QR Code -->
        <div class="home-qr-area">
          <!-- <img> src="/placeholder_qr.png" alt="QR Code"> -->
        </div>
      </div>
      <div class="home-actions">
        <button class="btn-primary" @click="handleShare">
          <i class="fas fa-qrcode"></i> 扫描二维码
        </button>
        <button class="btn-primary" @click="handleNFC">
          <i class="fas fa-exchange-alt"></i> NFC 碰一碰
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 首页逻辑

// 模拟分享功能
const handleShare = () => {
  alert('分享功能已触发！在实际应用中，这将打开系统分享对话框。');
};

// 模拟 NFC 功能
const handleNFC = () => {
  alert('NFC 碰一碰功能已触发！在实际应用中，这将调用 NFC API。');
};
</script>

<style scoped>
/* 首页样式 */
.home-qr-area {
  width: 150px;
  height: 150px;
  background: white;
  padding: 10px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}

.home-qr-area img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.home-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

/* ID Card 样式 (从 phone2.css 迁移，如果 IdentityCard 组件不通用，则保留在此) */
.card {
  min-width: 280px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--border-radius);
  padding: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
  flex-shrink: 0;
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

.card-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.card-btn {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 10px;
  border-radius: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.card-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .card {
    min-width: 240px;
  }
}
</style>
