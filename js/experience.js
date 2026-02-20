// ==================== EXPERIENCE TAB NAVIGATION ====================

function initExperience() {
    const expTabs = document.querySelectorAll('.exp-tab');
    const expPanels = document.querySelectorAll('.exp-panel');

    if (!expTabs.length) return;

    expTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const index = tab.dataset.index;

            // Update tabs
            expTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            // Update panels
            expPanels.forEach(p => p.classList.remove('active'));
            const target = document.getElementById('exp-panel-' + index);
            if (target) {
                target.classList.add('active');
            }
        });
    });

    // Keyboard navigation (arrow keys)
    expTabs.forEach((tab, i) => {
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const next = expTabs[i + 1] || expTabs[0];
                next.click();
                next.focus();
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prev = expTabs[i - 1] || expTabs[expTabs.length - 1];
                prev.click();
                prev.focus();
            }
        });
    });

    // ── Project sub-tab navigation (scoped per nav group) ──
    document.querySelectorAll('.exp-sub-nav').forEach(nav => {
        var tabs = nav.querySelectorAll('.exp-sub-tab');
        var panel = nav.closest('.exp-panel');
        var panels = panel ? panel.querySelectorAll('.exp-sub-panel') : [];

        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                panels.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                var target = document.getElementById(tab.getAttribute('aria-controls'));
                if (target) target.classList.add('active');
            });

            tab.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    (tabs[i + 1] || tabs[0]).click();
                    (tabs[i + 1] || tabs[0]).focus();
                }
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    (tabs[i - 1] || tabs[tabs.length - 1]).click();
                    (tabs[i - 1] || tabs[tabs.length - 1]).focus();
                }
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExperience);
} else {
    initExperience();
}
