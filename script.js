document.addEventListener('DOMContentLoaded', function() {
    // イベントカレンダーの日付をクリックしたときの処理
    const eventDates = document.querySelectorAll('.event-date');
    if (eventDates.length > 0) {
        eventDates.forEach(date => {
            date.addEventListener('click', function() {
                const eventName = this.getAttribute('data-event');
                if (eventName) {
                    alert(`${eventName}が予定されています！詳細は下のイベント一覧をご確認ください。`);
                }
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

    // シンプルなノートブックのホバーエフェクト
    const notebook = document.querySelector('.notebook');
    if (notebook) {
        // ノートブックにホバーしたときのエフェクト
        notebook.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        notebook.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // 黒板セクションのチョークダストエフェクト
    const blackboard = document.querySelector('.blackboard-section');
    if (blackboard) {
        blackboard.addEventListener('mouseenter', function() {
            // チョークダストの粒子を作成
            for (let i = 0; i < 5; i++) {
                const dust = document.createElement('div');
                dust.className = 'chalk-dust';
                dust.style.width = Math.random() * 5 + 2 + 'px';
                dust.style.height = dust.style.width;
                dust.style.background = 'rgba(255, 255, 255, 0.7)';
                dust.style.position = 'absolute';
                dust.style.borderRadius = '50%';
                dust.style.left = Math.random() * 100 + '%';
                dust.style.top = Math.random() * 100 + '%';
                dust.style.opacity = '0';
                dust.style.animation = 'dust ' + (Math.random() * 2 + 1) + 's ease-out';
                
                this.appendChild(dust);
                
                // アニメーション終了後に要素を削除
                setTimeout(() => {
                    dust.remove();
                }, 3000);
            }
        });
    }

    // チョークダストのアニメーションをCSSに追加
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dust {
            0% {
                transform: translate(0, 0);
                opacity: 0.7;
            }
            100% {
                transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 50 + 20}px, ${Math.random() * 50 + 20}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // イベントページのカレンダー機能
    if (document.querySelector('.calendar-dates')) {
        // 現在の日付をハイライト
        const today = new Date().getDate();
        const dateElements = document.querySelectorAll('.calendar-dates .date');
        
        dateElements.forEach(dateEl => {
            if (parseInt(dateEl.textContent) === today) {
                dateEl.classList.add('today');
                dateEl.style.backgroundColor = '#06c775';
                dateEl.style.fontWeight = 'bold';
            }
        });
    }

    // ページスクロール時のヘッダー固定
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.position = 'fixed';
                header.style.top = '0';
                header.style.left = '0';
                header.style.right = '0';
                header.style.zIndex = '1000';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                document.body.style.paddingTop = header.offsetHeight + 'px';
            } else {
                header.style.position = 'static';
                header.style.boxShadow = 'none';
                document.body.style.paddingTop = '0';
            }
        });
    }

    // ページトップへ戻るボタン
    const body = document.querySelector('body');
    const backToTopButton = document.createElement('a');
    backToTopButton.textContent = '↑';
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.width = '40px';
    backToTopButton.style.height = '40px';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = 'var(--primary-color)';
    backToTopButton.style.color = 'white';
    backToTopButton.style.display = 'flex';
    backToTopButton.style.justifyContent = 'center';
    backToTopButton.style.alignItems = 'center';
    backToTopButton.style.textDecoration = 'none';
    backToTopButton.style.fontWeight = 'bold';
    backToTopButton.style.fontSize = '20px';
    backToTopButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    backToTopButton.style.opacity = '0';
    backToTopButton.style.transition = 'opacity 0.3s ease';
    backToTopButton.style.zIndex = '999';
    
    body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 画像の遅延読み込み
    const images = document.querySelectorAll('img');
    if (images.length > 0) {
        const imageOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px 100px 0px'
        };
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, imageOptions);
        
        images.forEach(img => {
            const src = img.src;
            if (src) {
                img.setAttribute('data-src', src);
                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                imageObserver.observe(img);
            }
        });
    }
});
