document.addEventListener('DOMContentLoaded', function() {
    // イベントカレンダーの日付をクリックしたときの処理
    const eventDates = document.querySelectorAll('.event-date');
    if (eventDates) {
        eventDates.forEach(date => {
            date.addEventListener('click', function() {
                const eventName = this.getAttribute('data-event');
                alert(`${eventName}が予定されています！詳細は下のイベント一覧をご確認ください。`);
            });
        });
    }

    // ナビゲーションのスムーススクロール
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 黒板のチョークエフェクト
    const features = document.querySelectorAll('.feature');
    if (features) {
        features.forEach(feature => {
            feature.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
            });
            
            feature.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
    }

    // イベント提案フォームのモーダル
    const suggestionButton = document.querySelector('.suggestion-button');
    if (suggestionButton) {
        suggestionButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('イベント提案フォームは準備中です。しばらくお待ちください！');
        });
    }

    // ページ読み込み時のアニメーション
    const animateElements = document.querySelectorAll('.hero-content, .feature, .testimonial, .announcement, .event-card');
    if (animateElements) {
        animateElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100 * index);
            }, 100);
        });
    }

    // ロゴのホバーエフェクト
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0)';
        });
    }

    // 参加ボタンのクリックイベント
    const joinButtons = document.querySelectorAll('.join-button');
    if (joinButtons) {
        joinButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // 実際のDiscordの招待リンクがない場合はアラートを表示
                if (this.getAttribute('href') === 'https://discord.gg/zatsudan') {
                    e.preventDefault();
                    alert('これはデモサイトです。実際のDiscordサーバーは存在しません。');
                }
            });
        });
    }
});
