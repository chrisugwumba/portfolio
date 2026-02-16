// ==================== ANIMATIONS (initialised after sections load) ====================

function initAnimations() {

    // ── Intersection Observer for scroll reveal ──
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.add('fade-in');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up, .reveal').forEach(element => {
        observer.observe(element);
    });

    // ── Timeline animation delays ──
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // ── Project card animation delays ──
    const projectCards = document.querySelectorAll('#projects .card-hover');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ── Typing effect ──
    const text = "Kaustuv Prajapati";
    const speed = 90;
    const target = document.getElementById("typedName");

    if (target) {
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                target.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                target.classList.add("typing-cursor");
            }
        }
        typeWriter();
    }
}

initAnimations();
