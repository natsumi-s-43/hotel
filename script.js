// ページ読み込み後のアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    title.style.transition = 'transform 1s ease';
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.05)';
    });
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // スライダー機能
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // ボタン操作
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // ドットクリック
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    // 自動スライド（任意）
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 7000);
});
