<template>
  <div class="page" id="channel">
    <div class="section">
      <div class="section-header">
        <div class="section-title">频道与私信</div>
        <div class="btn-more">更多</div>
      </div>
      <!-- Combined Channel and Chat List -->
      <div class="chat-list">
        <!-- Personal Channel (Pinned) -->
        <div class="chat-item channel-item personal-channel-item" @click="goToChannelDetail('我的个人频道', 'personal')">
          <div class="chat-avatar personal-channel-avatar">张</div>
          <div class="chat-info">
            <h4>我的个人频道</h4>
            <p>点击发布广播或查看历史动态</p>
          </div>
          <div class="chat-time"><i class="fas fa-thumbtack"></i></div>
        </div>
        <!-- Example Subscribed Channel -->
        <div class="chat-item channel-item" @click="goToChannelDetail('王设计师的频道', 'channel')">
          <div class="chat-avatar" style="background: linear-gradient(135deg, #10b981, #06b6d4);">王</div>
          <div class="chat-info">
            <h4>王设计师的频道</h4>
            <p>刚刚更新了我的设计作品集...</p>
          </div>
          <div class="chat-time">2小时前</div>
        </div>
        <!-- Example Direct Message -->
        <div class="chat-item" @click="goToChannelDetail('李技术', 'chat')">
          <div class="chat-avatar">李</div>
          <div class="chat-info">
            <h4>李技术</h4>
            <p>好的，链接已发给你，请查收！</p>
          </div>
          <div class="chat-time">1小时前</div>
        </div>
        <!-- Example Simple Group Chat -->
        <div class="chat-item" @click="goToChannelDetail('产品设计小会', 'group')">
          <div class="chat-avatar"><i class="fas fa-users"></i></div>
          <div class="chat-info">
            <h4>产品设计小会</h4>
            <p>[图片] 方案初稿，大家看看</p>
          </div>
          <div class="chat-time">3小时前</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 导航到频道详情页
const goToChannelDetail = (title: string, type: 'personal' | 'channel' | 'chat' | 'group') => {
  // 在实际应用中，这里会传递频道/聊天 ID
  router.push({
    name: 'ChannelDetail',
    query: { title, type } // 传递标题和类型作为查询参数
  });
};

// 频道页逻辑
</script>

<style scoped>
/* 频道页样式 */
.chat-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--light);
  border-radius: 12px;
  padding: 12px 16px;
  transition: var(--transition);
  cursor: pointer;
}

.chat-item:hover {
  background: #eef2ff;
}

.chat-avatar {
  min-width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 20px;
  flex-shrink: 0;
}

.personal-channel-avatar {
  min-width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 24px;
  flex-shrink: 0;
}


.chat-info {
  flex: 1;
}

.chat-info h4 {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}

.chat-info p {
  font-size: 14px;
  color: var(--gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-time {
  font-size: 12px;
  color: var(--gray);
  flex-shrink: 0;
}
</style>
