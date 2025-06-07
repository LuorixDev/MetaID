<template>
  <div class="page" id="channel-detail">
    <!-- 频道详情页头部 -->
    <div class="app-header" style="padding-bottom: 16px;">
      <div class="header-top">
        <div class="btn-more" @click="goBack"><i class="fas fa-arrow-left"></i> 返回</div>
        <div class="app-title" style="font-size: 20px;">
          <span id="channelDetailTitle">{{ channelTitle }}</span>
        </div>
        <div class="btn-more">详情</div>
      </div>
    </div>

    <!-- 消息列表区域 -->
    <div class="app-content" style="padding-top: 0;">
      <div class="message-list" ref="messageListRef">
        <!-- Example Received Message -->
        <div class="message-item received" @touchstart="handleTouchStart($event, 'received')" @touchend="handleTouchEnd" @click="handleClick">
          <div class="message-avatar">王</div>
          <div class="message-bubble">
            <div class="message-sender">王设计师</div>
            <div class="message-text">
              刚刚更新了我的设计作品集，欢迎大家来交流反馈！
            </div>
            <div class="message-meta">
              <span class="message-time">2小时前</span>
              <span class="message-views"><i class="fas fa-eye"></i> 88</span>
              <span class="message-comments"><i class="fas fa-comment"></i> 5</span>
            </div>
          </div>
        </div>

        <!-- Example Sent Message -->
        <div class="message-item sent" @touchstart="handleTouchStart($event, 'sent')" @touchend="handleTouchEnd" @click="handleClick">
          <div class="message-bubble">
            <div class="message-text">
              这是我的第一条频道广播！欢迎大家关注我的动态。
            </div>
            <div class="message-meta">
              <span class="message-time">刚刚</span>
              <span class="message-views"><i class="fas fa-eye"></i> 150</span>
              <span class="message-comments"><i class="fas fa-comment"></i> 0</span>
            </div>
          </div>
          <div class="message-avatar">张</div>
        </div>

        <!-- Example Received Message with Image -->
        <div class="message-item received" @touchstart="handleTouchStart($event, 'received')" @touchend="handleTouchEnd" @click="handleClick">
          <div class="message-avatar"><i class="fas fa-users"></i></div>
          <div class="message-bubble">
            <div class="message-sender">产品设计小会</div>
            <div class="message-image" style="width: 200px; height: 150px; background: var(--light); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray);">
              <i class="fas fa-image"></i> 方案初稿
            </div>
            <div class="message-meta">
              <span class="message-time">3小时前</span>
              <span class="message-comments"><i class="fas fa-comment"></i> 12</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 消息输入区域 (根据频道类型显示/隐藏) -->
    <div class="message-input-area" v-if="showInputArea">
      <input type="text" placeholder="输入消息..." v-model="messageInput" @keyup.enter="sendMessage">
      <button class="btn-primary" @click="sendMessage">
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// 获取路由参数中的标题和类型
const channelTitle = computed(() => route.query.title || '频道/聊天名称');
const channelType = computed(() => route.query.type || 'chat'); // 默认为 chat

// 控制消息输入区域的显示
const showInputArea = computed(() => channelType.value === 'personal' || channelType.value === 'chat' || channelType.value === 'group');

// 消息输入框内容
const messageInput = ref('');

// 消息列表的引用
const messageListRef = ref<HTMLElement | null>(null);

// 返回频道列表页
const goBack = () => {
  router.push({ name: 'Channel' });
};

// 模拟发送消息
const sendMessage = () => {
  const text = messageInput.value.trim();
  if (text) {
    // 模拟添加新发送的消息
    const newMessageHtml = `
      <div class="message-item sent">
        <div class="message-bubble">
          <div class="message-text">${text}</div>
          <div class="message-meta">
            <span class="message-time">刚刚</span>
            <span class="message-views"><i class="fas fa-eye"></i> 0</span>
            <span class="message-comments"><i class="fas fa-comment"></i> 0</span>
          </div>
        </div>
        <div class="message-avatar">张</div>
      </div>
    `;
    if (messageListRef.value) {
      messageListRef.value.innerHTML += newMessageHtml; // 添加到列表
      messageInput.value = ''; // 清空输入框
      // 滚动到底部
      nextTick(() => {
        if (messageListRef.value) {
          messageListRef.value.scrollTop = messageListRef.value.scrollHeight;
        }
      });
      // 为新消息添加长按监听
      addLongPressListenersToMessages();
    }
  }
};

// --- 长按和表情回复模拟 ---
let pressTimer: any = null; // 将类型声明为 any 以兼容不同环境的 setTimeout 返回值
const longPressDuration = 500; // milliseconds

// 添加长按监听器到所有消息
const addLongPressListenersToMessages = () => {
  // 移除现有监听器以避免重复
  document.querySelectorAll('.message-item').forEach(item => {
    item.removeEventListener('touchstart', handleTouchStart as EventListener);
    item.removeEventListener('touchend', handleTouchEnd as EventListener);
    item.removeEventListener('click', handleClick as EventListener);
  });

  // 添加监听器到所有当前消息项
  document.querySelectorAll('.message-item').forEach(item => {
    item.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
    item.addEventListener('touchend', handleTouchEnd as EventListener);
    item.addEventListener('click', handleClick as EventListener);
  });
};

const handleTouchStart = (e: TouchEvent, type: 'received' | 'sent') => {
  // 清除任何现有计时器
  if (pressTimer !== null) {
    clearTimeout(pressTimer);
  }

  // 启动新计时器
  pressTimer = setTimeout(() => {
    // 检测到长按
    handleLongPress(e.target as HTMLElement, type);
  }, longPressDuration);
};

const handleTouchEnd = () => {
  // 如果在长按持续时间结束前触摸结束，清除计时器
  if (pressTimer !== null) {
    clearTimeout(pressTimer);
  }
};

const handleClick = (e: MouseEvent) => {
  // 如果发生了长按，阻止点击事件
  if (pressTimer !== null) {
    // 可能需要短暂延迟以确保长按处理程序完成
    setTimeout(() => { pressTimer = null; }, 50); // 短暂延迟后重置计时器
  } else {
    // 在这里处理正常的点击行为（如果需要）
    // console.log('短点击');
  }
};

const handleLongPress = (element: HTMLElement, type: 'received' | 'sent') => {
  // 模拟显示表情回复 UI
  alert(`长按消息 (${type})，模拟添加表情回复！`);
  // 在实际应用中，这里会在消息附近显示一个小的模态框或弹出窗口，包含表情选项。
  pressTimer = null; // 处理长按后重置计时器
};

// 组件挂载后添加长按监听器
onMounted(() => {
  addLongPressListenersToMessages();
});

// 组件卸载前移除长按监听器
onUnmounted(() => {
  document.querySelectorAll('.message-item').forEach(item => {
    item.removeEventListener('touchstart', handleTouchStart as EventListener);
    item.removeEventListener('touchend', handleTouchEnd as EventListener);
    item.removeEventListener('click', handleClick as EventListener);
  });
  if (pressTimer !== null) {
    clearTimeout(pressTimer);
  }
});

// 频道详情页逻辑
</script>

<style scoped>
/* 频道详情页样式 */
#channel-detail .app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
  overflow-y: hidden;
}

#channel-detail .message-list {
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.message-item.sent {
  justify-content: flex-end;
}

.message-item .message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
}

.message-item.sent .message-avatar {
  order: 2;
}

.message-bubble {
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 18px;
  position: relative;
  word-break: break-word;
}

.message-item.received .message-bubble {
  background: white;
  color: var(--dark);
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.message-item.sent .message-bubble {
  background: var(--primary);
  color: white;
  border-bottom-right-radius: 4px;
  box-shadow: 0 1px 2px rgba(74, 108, 247, 0.3);
}

.message-sender {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--primary);
}

.message-item.sent .message-sender {
  display: none;
}

.message-text {
  font-size: 15px;
  margin-bottom: 6px;
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
}

.message-item.received .message-meta {
  color: var(--gray);
}

.message-meta i {
  margin-right: 2px;
}

.message-comments {
  cursor: pointer;
  transition: var(--transition);
}

.message-item.received .message-comments:hover {
  color: var(--primary);
}

.message-item.sent .message-comments:hover {
  color: rgba(255, 255, 255, 1);
}

.message-image {
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  margin-bottom: 8px;
  object-fit: cover;
}

.message-input-area {
  padding: 12px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  flex-shrink: 0;
}

.message-input-area input[type="text"] {
  flex: 1;
  padding: 10px 16px;
  border: none;
  background: var(--light);
  border-radius: 20px;
  font-size: 16px;
  outline: none;
}

.message-input-area .btn-primary {
  padding: 10px 16px;
  border-radius: 20px;
  font-size: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Adjust header for channel detail page */
#channel-detail .app-header {
  padding: 12px 16px;
  margin-bottom: 0;
}

#channel-detail .app-header .header-top {
  margin-bottom: 0;
}

#channel-detail .app-header .app-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
}

#channel-detail .app-header .btn-more {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}

#channel-detail .app-header .btn-more i {
  font-size: 14px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  #channel-detail .app-content {
    padding: 0 12px 12px;
  }

  .message-input-area {
    padding: 8px 12px;
  }

  .message-input-area input[type="text"] {
    padding: 8px 12px;
  }

  .message-input-area .btn-primary {
    padding: 8px 12px;
    height: 36px;
  }

  .message-item .message-avatar {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .message-bubble {
    padding: 8px 12px;
    border-radius: 16px;
  }

  .message-text {
    font-size: 14px;
  }

  .message-meta {
    font-size: 10px;
    gap: 8px;
  }

  .message-image {
    max-width: 200px;
  }
}
</style>
