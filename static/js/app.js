/**
 * RoR Enterprise Suite - Core UI Controller & Router
 * Manages Sidebar Navigation, Hash Routing, Dynamic Time Greetings, Global Search & System Notifications.
 */

let mainChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initDateAndGreeting();
  initSidebarAccordion();
  if (typeof initBreakEvenSliders === 'function') initBreakEvenSliders();
  initChartJS();
  
  // Render views & metrics
  refreshAllMetrics();
  if (typeof renderTasksTable === 'function') renderTasksTable();
  if (typeof renderMenuMatrix === 'function') renderMenuMatrix();
  if (typeof renderCafeShiftReports === 'function') renderCafeShiftReports();
  if (typeof renderRoasteryReports === 'function') renderRoasteryReports();
  if (typeof renderFinancialCommitments === 'function') renderFinancialCommitments();
  if (typeof renderWasteLogs === 'function') renderWasteLogs();
  if (typeof renderOrgPositions === 'function') renderOrgPositions();
  if (typeof initAllDepartmentViews === 'function') initAllDepartmentViews();
  if (typeof initAllDevelopmentKanbans === 'function') initAllDevelopmentKanbans();
  
  // Hash routing
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);
});

// ══════════════════════════════════════════════════════════════════
// GREETING & DATE
// ══════════════════════════════════════════════════════════════════

function initDateAndGreeting() {
  const now = new Date();
  const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const dateStr = `${dayNames[now.getDay()]}، ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  const dateEl = document.getElementById('topbarDateDisplay');
  if (dateEl) dateEl.textContent = dateStr;
}

// ══════════════════════════════════════════════════════════════════
// ACCORDION NAVIGATION & ROUTING
// ══════════════════════════════════════════════════════════════════

function initSidebarAccordion() {
  const navSections = document.querySelectorAll('.nav-section');
  
  navSections.forEach(section => {
    const header = section.querySelector('.section-header');
    const content = section.querySelector('.section-content');
    const chevron = header.querySelector('.chevron');
    
    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isCurrentlyOpen = !content.classList.contains('collapsed');
      
      // Close all sections (single-open accordion behavior)
      document.querySelectorAll('.section-content').forEach(c => c.classList.add('collapsed'));
      document.querySelectorAll('.chevron').forEach(ch => ch.style.transform = 'rotate(0deg)');
      
      // If it was closed, open it now
      if (!isCurrentlyOpen) {
        content.classList.remove('collapsed');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Sidebar toggle logic (Desktop & Mobile)
  const toggleBtn = document.getElementById('sidebarToggle');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const sidebar = document.getElementById('mainSidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.toggle('mobile-open');
      } else {
        sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed');
      }
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  }

  // Keyboard shortcut (Cmd+K / Ctrl+K) to focus sidebar search
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const sidebarSearch = document.getElementById('sidebarSearchInput');
      if (sidebarSearch) {
        sidebarSearch.focus();
        sidebarSearch.select();
      }
    }
  });
}

// Filter Sidebar Nav Items
function filterSidebarNav(query) {
  query = (query || '').trim().toLowerCase();
  const navSections = document.querySelectorAll('.nav-section');
  
  if (!query) {
    navSections.forEach(section => {
      section.style.display = '';
      const links = section.querySelectorAll('.nav-link');
      links.forEach(l => l.style.display = '');
    });
    return;
  }

  navSections.forEach(section => {
    const links = section.querySelectorAll('.nav-link');
    let sectionHasMatch = false;

    links.forEach(link => {
      const text = (link.textContent || '').toLowerCase();
      if (text.includes(query)) {
        link.style.display = 'flex';
        sectionHasMatch = true;
      } else {
        link.style.display = 'none';
      }
    });

    const headerText = (section.querySelector('.section-header')?.textContent || '').toLowerCase();
    if (headerText.includes(query)) {
      sectionHasMatch = true;
      links.forEach(l => l.style.display = 'flex');
    }

    if (sectionHasMatch) {
      section.style.display = '';
      const content = section.querySelector('.section-content');
      if (content) {
        content.classList.remove('collapsed');
        const chevron = section.querySelector('.chevron');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    } else {
      section.style.display = 'none';
    }
  });
}

function showNotificationToast(msg, type = 'info') {
  showNotification(msg, type);
}

function showView(viewId) {
  // Hide all views
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  
  // Target view
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add('active');
  } else {
    // Default fallback to KPI dashboard
    const defaultView = document.getElementById('view-kpi-dashboard');
    if (defaultView) defaultView.classList.add('active');
  }

  // Update nav link active state
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${viewId}`) {
      link.classList.add('active');
      
      // Ensure parent accordion is open
      const parentContent = link.closest('.section-content');
      if (parentContent) {
        parentContent.classList.remove('collapsed');
        const chevron = parentContent.parentElement.querySelector('.chevron');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    } else {
      link.classList.remove('active');
    }
  });

  // Trigger chart resize if navigating to dashboard or breakeven
  if (viewId === 'kpi-dashboard' && mainChartInstance) {
    setTimeout(() => mainChartInstance.resize(), 50);
  }
  if (viewId === 'breakeven' && typeof breakevenChartInstance !== 'undefined' && breakevenChartInstance) {
    setTimeout(() => breakevenChartInstance.resize(), 50);
  }

  // Close mobile sidebar on navigation
  const sidebar = document.getElementById('mainSidebar');
  if (sidebar) sidebar.classList.remove('mobile-open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashNavigation() {
  const hash = window.location.hash.replace('#', '') || 'kpi-dashboard';
  showView(hash);
}

// ══════════════════════════════════════════════════════════════════
// METRICS & CALCULATIONS ENGINE
// ══════════════════════════════════════════════════════════════════

function refreshAllMetrics() {
  const cSales = typeof cafeSales !== 'undefined' ? cafeSales : [];
  const rSales = typeof roasterySales !== 'undefined' ? roasterySales : [];
  const fin = typeof financials !== 'undefined' ? financials : [];
  const tks = typeof tasks !== 'undefined' ? tasks : [];

  const totalCafeRev = cSales.reduce((sum, s) => sum + (parseFloat(s.revenue) || 0), 0);
  const totalRoastRev = rSales.reduce((sum, s) => sum + (parseFloat(s.paid) || parseFloat(s.total) || 0), 0);
  const totalRevenue = totalCafeRev + totalRoastRev;
  
  const totalExpenses = fin.reduce((sum, f) => sum + (parseFloat(f.amount) || 0), 0);
  const netIncome = totalRevenue - totalExpenses;

  // KPI elements
  const elBar = document.getElementById('kpiBarRevenue');
  const elRoast = document.getElementById('kpiRoastRevenue');
  const elExp = document.getElementById('kpiTotalExpenses');
  const elNet = document.getElementById('kpiNetIncome');

  if (elBar) elBar.textContent = totalCafeRev.toLocaleString('en-US') + ' ر.س';
  if (elRoast) elRoast.textContent = totalRoastRev.toLocaleString('en-US') + ' ر.س';
  if (elExp) elExp.textContent = totalExpenses.toLocaleString('en-US') + ' ر.س';
  if (elNet) elNet.textContent = (netIncome >= 0 ? '+' : '') + netIncome.toLocaleString('en-US') + ' ر.س';

  // Task summary
  if (tks.length) {
    const completedTasks = tks.filter(t => t.status === 'completed').length;
    const pct = Math.round((completedTasks / tks.length) * 100);
    
    const elCompCount = document.getElementById('completedTasks');
    const elProgressFill = document.getElementById('taskProgressFill');
    if (elCompCount) elCompCount.textContent = completedTasks;
    if (elProgressFill) elProgressFill.style.width = pct + '%';
  }
}

// ══════════════════════════════════════════════════════════════════
// CHARTS (CHART.JS)
// ══════════════════════════════════════════════════════════════════

function initChartJS() {
  if (typeof Chart === 'undefined') return;

  // 1. Main Revenue & Expenses Trend Chart
  const ctxRevenue = document.getElementById('revenueExpensesChart');
  if (ctxRevenue) {
    mainChartInstance = new Chart(ctxRevenue.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3 (الذروة)', 'الأسبوع 4', 'الأسبوع 5', 'الأسبوع 6', 'الأسبوع 7', 'الأسبوع 8'],
        datasets: [{
          label: 'إجمالي الإيرادات',
          data: [4200, 5800, 9360, 6800, 7400, 7100, 8200, 8600],
          borderColor: '#0066FF',
          backgroundColor: 'rgba(0,102,255,0.08)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#0066FF',
          pointRadius: 4,
          pointHoverRadius: 7
        }, {
          label: 'المصاريف التشغيلية',
          data: [2800, 3100, 3400, 3000, 3200, 3100, 3300, 3200],
          borderColor: '#FD980E',
          backgroundColor: 'rgba(253,152,14,0.06)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#FD980E',
          pointRadius: 4,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            rtl: true,
            labels: { font: { family: 'IBM Plex Sans Arabic', size: 12 } }
          },
          tooltip: {
            rtl: true,
            titleFont: { family: 'IBM Plex Sans Arabic' },
            bodyFont: { family: 'IBM Plex Sans Arabic' }
          }
        },
        scales: {
          x: {
            ticks: { font: { family: 'IBM Plex Sans Arabic', size: 11 } },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            ticks: {
              font: { family: 'IBM Plex Sans Arabic', size: 10 },
              callback: value => value.toLocaleString('en-US') + ' ر.س'
            },
            grid: { color: '#F0EDE8' }
          }
        }
      }
    });
  }

  // 2. Cafe Sales Weekly Shifts Chart (Aref morning vs Elem evening)
  const ctxCafe = document.getElementById('weeklyBarSalesChart');
  if (ctxCafe) {
    if (typeof cafeWeeklyChartInstance !== 'undefined') {
      cafeWeeklyChartInstance = new Chart(ctxCafe.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4', 'الأسبوع 5', 'الأسبوع 6', 'الأسبوع 7', 'الأسبوع 8'],
          datasets: [{
            label: 'شفت صباحي - عارف',
            data: [1850, 2100, 2450, 2200, 2350, 2150, 2500, 2600],
            backgroundColor: '#0066FF',
            borderRadius: 6
          }, {
            label: 'شفت مسائي - علم',
            data: [2350, 2700, 3150, 2800, 2950, 2850, 3200, 3400],
            backgroundColor: '#425653',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              align: 'end',
              rtl: true,
              labels: { font: { family: 'IBM Plex Sans Arabic', size: 12 } }
            }
          },
          scales: {
            x: { stacked: true, grid: { display: false } },
            y: {
              stacked: true,
              beginAtZero: true,
              ticks: { callback: v => v.toLocaleString('en-US') + ' ر.س' },
              grid: { color: '#F0EDE8' }
            }
          }
        }
      });
    }
  }
}

// ══════════════════════════════════════════════════════════════════
// GLOBAL UTILITIES & NOTIFICATIONS
// ══════════════════════════════════════════════════════════════════

function showNotification(message, type = 'info') {
  const container = document.getElementById('notificationContainer');
  if (!container) return;

  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.innerHTML = `
    <span class="notification-icon">${type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : type === 'error' ? '<i class="fa-solid fa-circle-xmark"></i>' : '<i class="fa-solid fa-circle-info"></i>'}</span>
    <span class="notification-message" style="flex:1;font-size:13px;font-weight:600;">${message}</span>
    <button class="notification-close" style="background:none;border:none;cursor:pointer;font-size:14px;color:currentColor;" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(notif);
  setTimeout(() => notif.remove(), 4500);
}

function exportToCSV(data, filename) {
  if (!data || !data.length) {
    showNotification('لا توجد بيانات للتصدير', 'error');
    return;
  }
  const headers = Object.keys(data[0]);
  const rows = data.map(row => 
    headers.map(header => {
      const value = row[header] !== undefined ? row[header] : '';
      return typeof value === 'string' && (value.includes(',') || value.includes('\n')) ? `"${value}"` : value;
    }).join(',')
  );

  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename + '.csv';
  link.click();
  showNotification('تم تصدير ملف CSV بنجاح', 'success');
}

// Global Search
function performGlobalSearch(query) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  query = query.trim().toLowerCase();
  if (query.length < 2) {
    resultsContainer.classList.remove('active');
    resultsContainer.innerHTML = '';
    return;
  }

  const results = [];
  const tks = typeof tasks !== 'undefined' ? tasks : [];
  const menu = typeof menuItems !== 'undefined' ? menuItems : [];
  const cSales = typeof cafeSales !== 'undefined' ? cafeSales : [];
  const rSales = typeof roasterySales !== 'undefined' ? roasterySales : [];

  tks.filter(t => (t.task || t.title || '').toLowerCase().includes(query)).forEach(t => {
    results.push({ type: 'مهمة', title: t.task || t.title, link: '#40-tasks' });
  });

  menu.filter(m => (m.item || m.name || '').toLowerCase().includes(query)).forEach(m => {
    results.push({ type: 'منيو', title: m.item || m.name, link: '#menu-engineering' });
  });

  cSales.filter(s => (s.barista || '').toLowerCase().includes(query) || (s.notes || '').toLowerCase().includes(query)).forEach(s => {
    results.push({ type: 'مبيعات بار', title: `مبيعات ${s.barista} - ${s.date}`, link: '#cafe-sales' });
  });

  rSales.filter(r => (r.client || '').toLowerCase().includes(query)).forEach(r => {
    results.push({ type: 'مبيعات محمصة', title: `طلب: ${r.client}`, link: '#roastery-sales' });
  });

  if (results.length) {
    resultsContainer.innerHTML = results.slice(0, 8).map(r => `
      <a href="${r.link}" class="search-result-item" onclick="document.getElementById('searchResults').classList.remove('active');">
        <span class="result-title">${escapeHtml(r.title)}</span>
        <span class="result-type">${r.type}</span>
      </a>
    `).join('');
    resultsContainer.classList.add('active');
  } else {
    resultsContainer.innerHTML = '<div style="padding:1rem;font-size:12px;color:#888;text-align:center;">لا توجد نتائج مطابقة</div>';
    resultsContainer.classList.add('active');
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
