document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const pages = document.querySelectorAll('.app-content .page');
    const fab = document.querySelector('.fab');
    const createModal = document.getElementById('createModal');
    const switchIdentityModal = document.getElementById('switchIdentityModal');
    const closeModals = document.querySelectorAll('.modal-close');
    const currentIdentityDisplay = document.querySelector('.current-identity');
    const currentIdentityNameSpan = document.getElementById('currentIdentityName');
    const identitySwitchOptions = document.querySelectorAll('#switchIdentityModal .identity-switch-list .card');
    const messageList = document.querySelector('#channel-detail .message-list'); // Get message list


    // Function to show a specific page and update active states
    function showPage(targetId) {
        pages.forEach(page => {
            if (page.id === targetId) {
                page.style.display = 'block';
                page.classList.add('active');
            } else {
                page.style.display = 'none';
                page.classList.remove('active');
            }
        });

        // Update active state for bottom nav
        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Hide FAB on pages other than 'home'
        if (targetId === 'home') {
            fab.style.display = 'flex'; // Or 'block', depending on its original display type
        } else {
            fab.style.display = 'none';
        }
    }

    // Bottom navigation switching logic
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.dataset.target;
            showPage(targetId);
        });
    });

    // Modal window control (for both modals)
    fab.addEventListener('click', function() {
        createModal.classList.add('active');
    });

    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            closeBtn.closest('.modal').classList.remove('active');
        });
    });

    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target === createModal) {
            createModal.classList.remove('active');
        }
        if (e.target === switchIdentityModal) {
            switchIdentityModal.classList.remove('active');
        }
    });

    // Show switch identity modal
    currentIdentityDisplay.addEventListener('click', function() {
        switchIdentityModal.classList.add('active');
    });

    // Switch identity logic
    identitySwitchOptions.forEach(option => {
        option.addEventListener('click', function() {
            const newIdentityName = this.dataset.identityName;
            currentIdentityNameSpan.innerText = newIdentityName;
            switchIdentityModal.classList.remove('active');
            // In a real app, you would load data for the new identity here
            alert(`已切换到身份: ${newIdentityName}`);
        });
    });


    // Card share button (example)
    const shareButtons = document.querySelectorAll('.card-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('分享功能已触发！在实际应用中，这将打开系统分享对话框。');
        });
    });

    // Add click listeners for list items (simulation)
    const identityItems = document.querySelectorAll('#identity .identity-list .card');
    identityItems.forEach(item => {
        item.addEventListener('click', function() {
            const cardTitle = this.querySelector('.card-title').innerText;
            alert(`点击了身份卡: ${cardTitle} (模拟进入详情页)`);
        });
    });

    const groupItems = document.querySelectorAll('#groups .groups-list .group-item');
    groupItems.forEach(item => {
        item.addEventListener('click', function() {
            const groupName = this.querySelector('.group-name').innerText;
            alert(`点击了社群: ${groupName} (模拟进入社群详情页)`);
        });
    });

    const discoverItems = document.querySelectorAll('#discover .discover-list .discover-item');
    discoverItems.forEach(item => {
        item.addEventListener('click', function() {
            const discoverName = this.querySelector('.discover-name').innerText;
            alert(`点击了发现用户: ${discoverName} (模拟进入用户详情或好友请求页)`);
        });
    });

    const settingItems = document.querySelectorAll('#my .my-settings-list .setting-item');
    settingItems.forEach(item => {
        item.addEventListener('click', function() {
            const settingName = this.querySelector('span').innerText;
            alert(`点击了设置项: ${settingName} (模拟进入设置详情页)`);
        });
    });

    // Add click listeners for channel/chat items (simulation)
    const channelChatItems = document.querySelectorAll('#channel .chat-list .chat-item');
    channelChatItems.forEach(item => {
        item.addEventListener('click', function() {
            const chatName = this.querySelector('h4').innerText;
            // Simulate navigating to the channel/chat detail page
            document.getElementById('channelDetailTitle').innerText = chatName; // Set title
            showPage('channel-detail');

            // Simulate showing/hiding input area based on item type
            const messageInputArea = document.querySelector('#channel-detail .message-input-area');
            if (this.classList.contains('personal-channel-item') || !this.classList.contains('channel-item')) {
                // Show input for personal channel and direct messages/group chats
                messageInputArea.style.display = 'flex';
            } else {
                // Hide input for subscribed channels (broadcast only)
                messageInputArea.style.display = 'none';
            }
             // Add long press listener to messages after navigating
            addLongPressListenersToMessages();
        });
    });

    // Add click listener for back button in channel detail
    const backToChannelListButton = document.getElementById('backToChannelList');
    if (backToChannelListButton) {
        backToChannelListButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            showPage('channel'); // Navigate back to the main channel list
        });
    }

    // Add click listeners for comment links in channel detail (simulation)
    const commentLinks = document.querySelectorAll('#channel-detail .message-list .message-comments');
    commentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            alert('点击了评论链接 (模拟打开评论区)');
        });
    });

    // Simulate sending message (for personal channel and chats)
    const sendMessageButton = document.querySelector('#channel-detail .message-input-area .btn-primary');
    const messageInput = document.querySelector('#channel-detail .message-input-area input[type="text"]');

    if (sendMessageButton && messageInput && messageList) {
        sendMessageButton.addEventListener('click', function() {
            const messageText = messageInput.value.trim();
            if (messageText) {
                // Simulate adding a new sent message
                const newMessageHtml = `
                    <div class="message-item sent">
                         <div class="message-bubble">
                            <div class="message-text">${messageText}</div>
                            <div class="message-meta">
                                <span class="message-time">刚刚</span>
                                <span class="message-views"><i class="fas fa-eye"></i> 0</span>
                                <span class="message-comments"><i class="fas fa-comment"></i> 0</span>
                            </div>
                        </div>
                         <div class="message-avatar">张</div>
                    </div>
                `;
                messageList.innerHTML += newMessageHtml; // Add to the list
                messageInput.value = ''; // Clear input
                messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
                 // Add long press listener to the new message
                addLongPressListenersToMessages();
            }
        });
    }

    // --- Long Press and Emoji Reply Simulation ---
    let pressTimer;
    const longPressDuration = 500; // milliseconds

    function addLongPressListenersToMessages() {
        // Remove existing listeners to avoid duplicates
        document.querySelectorAll('.message-item').forEach(item => {
            item.removeEventListener('touchstart', handleTouchStart);
            item.removeEventListener('touchend', handleTouchEnd);
            item.removeEventListener('click', handleClick);
        });

        // Add listeners to all current message items
        document.querySelectorAll('.message-item').forEach(item => {
            item.addEventListener('touchstart', handleTouchStart, { passive: true });
            item.addEventListener('touchend', handleTouchEnd);
            item.addEventListener('click', handleClick);
        });
    }

    function handleTouchStart(e) {
        // Prevent default touch behavior like scrolling
        // e.preventDefault(); // Passive listener prevents this

        // Clear any existing timer
        clearTimeout(pressTimer);

        // Start a new timer
        pressTimer = setTimeout(() => {
            // Long press detected
            handleLongPress(e.target.closest('.message-item'));
        }, longPressDuration);
    }

    function handleTouchEnd() {
        // Clear the timer if the touch ends before the long press duration
        clearTimeout(pressTimer);
    }

    function handleClick(e) {
        // If a long press occurred, prevent the click event
        if (pressTimer) {
             // A short delay might be needed to ensure the long press handler finishes
             setTimeout(() => { pressTimer = null; }, 50); // Reset timer after a short delay
        } else {
             // Handle normal click behavior here if needed
             // console.log('Short click');
        }
    }

    function handleLongPress(messageElement) {
        // Simulate showing an emoji reaction UI
        alert('长按消息，模拟添加表情回复！');
        // In a real app, you would show a small modal or popup near the message
        // with emoji options.
        pressTimer = null; // Reset timer after handling long press
    }

    // Initialize: show the home page on load
    showPage('home');

    // Add long press listeners to initial messages (if any)
    addLongPressListenersToMessages();
});
