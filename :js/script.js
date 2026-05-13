document.addEventListener("DOMContentLoaded", () => {
    // --- Slider Logic (If exists) ---
    const track = document.querySelector('.slider-track');
    const toggle = document.getElementById('slider-toggle');

    if (track && toggle) {
        // การตั้งค่าขนาด
        const boxWidth = 320;
        const gap = 40;
        const itemsCount = 6;
        const loopWidth = (boxWidth + gap) * itemsCount; // 2160px

        let currentX = 0;
        let isDragging = false;
        let startX = 0;
        let prevX = 0;
        let animationId;
        let isHovering = false;

        // ลูปแอนิเมชันสำหรับเลื่อนอัตโนมัติ
        function autoScroll() {
            // เลื่อนเมื่อสวิตช์เปิดอยู่, ไม่ได้ลากเมาส์, และเมาส์ไม่ได้ชี้อยู่
            if (toggle.checked && !isDragging && !isHovering) {
                currentX -= 0.5; // ลดความเร็วในการเลื่อนลงเพื่อให้ดูสบายตา (จาก 1.5 เหลือ 0.5)
                
                // วนลูปเมื่อถึงจุดสิ้นสุด
                if (currentX <= -loopWidth) {
                    currentX += loopWidth;
                } else if (currentX > 0) {
                    currentX -= loopWidth;
                }
                
                track.style.transform = `translateX(${currentX}px)`;
            }
            animationId = requestAnimationFrame(autoScroll);
        }

        // เริ่มทำงาน
        autoScroll();

        // จัดการเมาส์ชี้ (Hover) เพื่อหยุดชั่วคราวเหมือนของเดิม
        track.addEventListener('mouseenter', () => isHovering = true);
        track.addEventListener('mouseleave', () => {
            isHovering = false;
            isDragging = false;
            track.style.cursor = 'grab';
        });

        // จัดการการลากเมาส์ (Drag)
        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            prevX = currentX;
            track.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const dx = e.pageX - startX;
            currentX = prevX + dx;
            
            // วนลูปเมื่อลากทะลุขอบเขต
            if (currentX <= -loopWidth) {
                currentX += loopWidth;
                prevX += loopWidth;
            } else if (currentX > 0) {
                currentX -= loopWidth;
                prevX -= loopWidth;
            }
            
            track.style.transform = `translateX(${currentX}px)`;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            track.style.cursor = 'grab';
        });
    }

    // --- Fade Transition Logic ---
    const scrollBtn = document.getElementById('scroll-btn');
    const targetSection = document.getElementById('about');
    const mainContent = document.querySelector('.main-content');

    if (scrollBtn && targetSection && mainContent) {
        scrollBtn.addEventListener('click', () => {
            // 1. ซ่อนเนื้อหาทั้งหมดในโซนถัดไปก่อน
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'none';
            
            // 2. กระโดดไปยังโซนถัดไปทันที
            window.scrollTo(0, targetSection.offsetTop);
            
            // 3. สั่งให้เบราว์เซอร์รับรู้การเปลี่ยนแปลง opacity = 0 (Force Reflow)
            void mainContent.offsetWidth;
            
            // 4. เฟดเนื้อหาขึ้นมาอย่างนุ่มนวล
            mainContent.style.transition = 'opacity 1.2s ease-in-out';
            mainContent.style.opacity = '1';
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // --- New Arrival Touch / Swipe Support ---
    const arrivalSlider = document.getElementById('arrival-slider');
    // Note: Touch and mouse wheel swipe is natively supported via overflow-x auto and scroll-snap styles.
    // --- Favorites Badge Logic ---
    const globalFavBadge = document.getElementById('fav-badge');
    if (globalFavBadge) {
        const globalFavorites = JSON.parse(localStorage.getItem('klinklin_favorites')) || [];
        globalFavBadge.textContent = globalFavorites.length;
        if (globalFavorites.length > 0) {
            globalFavBadge.style.opacity = '1';
            globalFavBadge.style.transform = 'scale(1)';
        } else {
            globalFavBadge.style.opacity = '0';
            globalFavBadge.style.transform = 'scale(0)';
        }
    }

    // --- Cart Badge Logic ---
    const globalCartBadge = document.getElementById('cart-badge');
    if (globalCartBadge) {
        const globalCart = JSON.parse(localStorage.getItem('klinklin_cart')) || [];
        const totalQty = globalCart.reduce((sum, item) => sum + item.quantity, 0);
        globalCartBadge.textContent = totalQty;
        if (totalQty > 0) {
            globalCartBadge.style.opacity = '1';
            globalCartBadge.style.transform = 'scale(1)';
        } else {
            globalCartBadge.style.opacity = '0';
            globalCartBadge.style.transform = 'scale(0)';
        }
    }

    // --- Scroll Fade-in Animation ---
    const scrollElements = document.querySelectorAll('.fade-in-on-scroll');
    if (scrollElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% is visible
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        scrollElements.forEach(el => {
            scrollObserver.observe(el);
        });
    }

    // --- Back to Top Button ---
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
