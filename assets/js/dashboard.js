/**
 * INDUSTRIAL MANUFACTURING - DASHBOARD JS
 * Handling dashboard-specific logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardSidebar();
    initCharts();
    initNotifications();
});

/**
 * Sidebar Toggle for Dashboard
 */
function initDashboardSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
}

/**
 * Dashboard Charts Placeholder (Simulated)
 */
function initCharts() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        // Here you would normally initialize Chart.js or D3
        container.innerHTML = '<div class="chart-placeholder">Chart Data Loading...</div>';
    });
}

/**
 * Handle Dashboard Notifications
 */
function initNotifications() {
    const notifyBtn = document.querySelector('.notifications-btn');
    const notifyPanel = document.querySelector('.notifications-panel');
    
    if (notifyBtn && notifyPanel) {
        notifyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifyPanel.classList.toggle('active');
        });
        
        document.addEventListener('click', () => {
            notifyPanel.classList.remove('active');
        });
    }
}

/**
 * User Stats Counter Animation
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-count');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 50;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
}
