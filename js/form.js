// ==================== CONTACT FORM FEEDBACK ====================

function initForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            const btn = document.getElementById('submit-btn');
            if (btn) {
                btn.textContent = 'Sending...';
                btn.disabled = true;
            }
        });
    }
}

initForm();
