/**
 * RoR Enterprise Suite - Operations Management Engine
 * Handles 40 Tasks Plan, Menu Matrix, Break-Even Analysis, Financial Commitments & Waste Logs.
 */

// ══════════════════════════════════════════════════════════════════
// DEFAULT DATASETS & LOCALSTORAGE INITIALIZATION: OPERATIONS
// ══════════════════════════════════════════════════════════════════

// 1. 40-Task Plan
const defaultTasks = [
  { id: 1, week: 1, task: "حصر جميع الأصول الثابتة والمعدات وتوثيق الضمانات لمقهى RoR.", status: "completed", responsible: "علاء" },
  { id: 2, week: 1, task: "إدخال بيانات الموردين الحاليين وتثبيت شروط الدفع والائتمان.", status: "completed", responsible: "أنس" },
  { id: 3, week: 1, task: "إعداد وتدقيق قائمة المكونات الأولية (Raw Materials) لجميع المشروبات والأطباق.", status: "completed", responsible: "عبدالله" },
  { id: 4, week: 1, task: "تعيين أسعار التكلفة المعيارية (Standard Recipe Cost) للمشروبات والوجبات الرئيسية.", status: "completed", responsible: "علاء" },
  { id: 5, week: 1, task: "ضبط أرصدة المخزون الافتتاحية للمستودع الرئيسي والثلاجات الفرعية.", status: "completed", responsible: "عبدالله" },
  { id: 6, week: 2, task: "توزيع المهام التشغيلية اليومية لموظفي صالة RoR والبارتندرز والمطبخ.", status: "completed", responsible: "عبدالله" },
  { id: 7, week: 2, task: "تفعيل مصفوفة المسؤوليات (RACI) وتحديد من يملك القرار النهائي لكل قسم.", status: "completed", responsible: "علاء" },
  { id: 8, week: 2, task: "إعداد كتيب الموظف الداخلي (Employee Handbook) وتوضيح معايير خدمة RoR.", status: "completed", responsible: "أنس" },
  { id: 9, week: 2, task: "جدولة فترات العمل (Shift Schedule) وتوزيع ساعات الذروة والهدوء أسبوعياً.", status: "completed", responsible: "عبدالله" },
  { id: 10, week: 2, task: "تفعيل نظام تقييم الأداء الأسبوعي الأولي لفريق الخدمة والتحضير.", status: "completed", responsible: "علاء" },
  { id: 11, week: 3, task: "توثيق إجراءات التحضير المسبق (Prep Sheet) لخط الإنتاج الساخن والبارد.", status: "completed", responsible: "عبدالله" },
  { id: 12, week: 3, task: "إطلاق سجل تتبع الهدر اليومي (Daily Waste Log) في المطبخ والبار.", status: "completed", responsible: "علاء" },
  { id: 13, week: 3, task: "تحديد الحد الأعلى والحد الأدنى للطلب (Min/Max Par Levels) لكل صنف بالمخزن.", status: "completed", responsible: "عبدالله" },
  { id: 14, week: 3, task: "فحص وضبط معايير معايرة المكائن (Espresso Calibration, Grinder, Ovens).", status: "completed", responsible: "علاء" },
  { id: 15, week: 3, task: "تطبيق آلية التدقيق على الاستلام ودرجات حرارة الأغذية الواردة.", status: "completed", responsible: "عبدالله" },
  { id: 16, week: 4, task: "ربط وتحليل بيانات نظام البيع (POS) لاستخراج حجم المبيعات الفعلي للأسابيع الماضية.", status: "completed", responsible: "أنس" },
  { id: 17, week: 4, task: "تصنيف أصناف المنيو في جدول أولي وفق هندسة القائمة (Stars, Puzzles, Plowhorses, Dogs).", status: "completed", responsible: "علاء" },
  { id: 18, week: 4, task: "مراجعة أسعار بيع المشروبات الأكثر طلباً بـ RoR ومقارنتها بأسعار المنافسين.", status: "completed", responsible: "جود" },
  { id: 19, week: 4, task: "حساب هامش الربح الإجمالي (Gross Margin) لكل تصنيف في منيو RoR الحالي.", status: "completed", responsible: "أنس" },
  { id: 20, week: 4, task: "اتخاذ قرار مبدئي بشأن تعديل أسعار بيع الأصناف أو استبدال الأصناف الضعيفة.", status: "completed", responsible: "علاء" },
  { id: 21, week: 5, task: "مراجعة حركة النقد اليومية (Daily Cash Flow Drop) ومطابقتها مع تقارير المبيعات.", status: "completed", responsible: "أنس" },
  { id: 22, week: 5, task: "جدولة فواتير الموردين المستحقة وتوزيع دفعاتها لتجنب انقطاع التوريد.", status: "completed", responsible: "أنس" },
  { id: 23, week: 5, task: "حصر الذمم المدينة (مبيعات الشركات/الفعاليات لـ RoR) ومتابعة تحصيل المدفوعات.", status: "completed", responsible: "جود" },
  { id: 24, week: 5, task: "إنشاء صندوق النثرية (Petty Cash) وتحديد صلاحيات صرفه وتوثيق فواتيره السريعة.", status: "completed", responsible: "أنس" },
  { id: 25, week: 5, task: "تحليل المصاريف التشغيلية الثابتة والمتغيرة وربطها بنقطة التعادل المستهدفة.", status: "completed", responsible: "علاء" },
  { id: 26, week: 6, task: "تطبيق قائمة التدقيق البيئية والصحية والبلدية الداخلية بـ RoR.", status: "completed", responsible: "عبدالله" },
  { id: 27, week: 6, task: "تفعيل منبه التراخيص القانونية والصحية وفترات تجديد سجلات وتراخيص مقهى RoR.", status: "completed", responsible: "أنس" },
  { id: 28, week: 6, task: "إجراء فحص سري للمتسوق الخفي (Mystery Shopper) لتقييم كفاءة الخدمة وسرعتها.", status: "completed", responsible: "جود" },
  { id: 29, week: 6, task: "مراجعة شكاوى وملاحظات العملاء على منصات التقييم (Google Maps / Social Media).", status: "completed", responsible: "جود" },
  { id: 30, week: 6, task: "تدريب فريق العمل بـ RoR على سيناريوهات التعامل مع ضغط العمل وشكاوى العملاء المباشرة.", status: "completed", responsible: "عبدالله" },
  { id: 31, week: 7, task: "حساب تكلفة الغذاء الفعلية (Actual Food Cost) ومقارنتها بالمعيارية المخطط لها.", status: "completed", responsible: "علاء" },
  { id: 32, week: 7, task: "احتساب تكلفة العمالة الإجمالية (Labor Cost %) كنسبة مئوية من المبيعات الفعلية.", status: "completed", responsible: "أنس" },
  { id: 33, week: 7, task: "تحديد التكلفة الأساسية (Prime Cost) والتأكد من أنها ضمن النطاق المالي الآمن (<60%).", status: "in-progress", responsible: "علاء" },
  { id: 34, week: 7, task: "إعداد تقرير التباين الأسبوعي (Variance Report) بين الاستهلاك الفعلي والمعياري للمواد.", status: "in-progress", responsible: "عبدالله" },
  { id: 35, week: 7, task: "وضع خطة عمل فورية لمعالجة الفروقات في المواد المرتفعة التكلفة.", status: "pending", responsible: "علاء" },
  { id: 36, week: 8, task: "تطوير لوحة قيادة الأداء النهائية (Final Performance Dashboard) الشاملة لجميع المؤشرات.", status: "pending", responsible: "علاء" },
  { id: 37, week: 8, task: "عرض التقرير المالي النهائي ومقارنة النتائج الفعلية بالأهداف المستهدفة بـ RoR.", status: "pending", responsible: "أنس" },
  { id: 38, week: 8, task: "تثبيت مصفوفة الصلاحيات الدائمة (Final RACI) وتحديث الوصف الوظيفي لجميع العاملين.", status: "pending", responsible: "عبدالله" },
  { id: 39, week: 8, task: "تسليم أدلة التشغيل القياسية المحدثة (SOPs) لمدراء الفروع والورديات.", status: "pending", responsible: "علاء" },
  { id: 40, week: 8, task: "عقد اجتماع الإغلاق والتقييم النهائي مع الإدارة واعتماد خطة التوسع المستقبلية.", status: "pending", responsible: "علاء" }
];

// 2. Menu Items
const defaultMenu = [
  { item: "فلات وايت RoR", category: "hot-drinks", price: 15.0, cost: 3.8, popularity: 9, contribution: 74.6 },
  { item: "V60 إثيوبي شلشلي", category: "hot-drinks", price: 18.0, cost: 4.5, popularity: 8, contribution: 75.0 },
  { item: "قهوة اليوم كولومبي", category: "hot-drinks", price: 9.0, cost: 1.8, popularity: 10, contribution: 80.0 },
  { item: "كولد برو مقطر RoR", category: "cold-drinks", price: 21.0, cost: 5.2, popularity: 6, contribution: 75.2 },
  { item: "كورتادو كلاسيك", category: "hot-drinks", price: 14.0, cost: 3.2, popularity: 7, contribution: 77.1 },
  { item: "كيكة التمر بالكراميل", category: "desserts", price: 16.0, cost: 4.0, popularity: 5, contribution: 75.0 },
  { item: "شاي إنجليزي فاخر", category: "hot-drinks", price: 8.0, cost: 1.2, popularity: 3, contribution: 85.0 }
];

// 3. Financials
const defaultFinancials = [
  { id: 1, name: "رسوم المقابل المالي والإقامات", type: "fixed", amount: 2000, dueDate: "2026-09-30", status: "scheduled", category: "عمالة وتأمينات" },
  { id: 2, name: "التأمينات الاجتماعية للكوادر", type: "fixed", amount: 500, dueDate: "2026-09-25", status: "paid", category: "عمالة وتأمينات" },
  { id: 3, name: "فاتورة الكهرباء والتشغيل", type: "variable", amount: 1500, dueDate: "2026-09-28", status: "scheduled", category: "تشغيلي مباشر" },
  { id: 4, name: "صيانة الحماصة الرائدة ومكائن السيمونيلي", type: "variable", amount: 800, dueDate: "2026-09-22", status: "scheduled", category: "صيانة وتشغيل" },
  { id: 5, name: "إيجار المعرض والمحمصة الشهري", type: "fixed", amount: 4500, dueDate: "2026-10-01", status: "scheduled", category: "أصول وعقود" }
];

// 4. Waste Logs
const defaultWaste = {
  bar: [
    { id: 1, date: "2026-09-14", item: "حليب مراعي كامل الدسم", qty: "3 لتر", value: 18.0, reason: "انتهاء صلاحية وتلف عبوة" },
    { id: 2, date: "2026-09-13", item: "بن إثيوبي معايرة فاشلة", qty: "350 جم", value: 24.5, reason: "معايرة مطحنة الإسبريسو الصباحية" },
    { id: 3, date: "2026-09-11", item: "سيروب كراميل منسكب", qty: "1 عبوة", value: 32.0, reason: "كسر أثناء النقل الداخلي" }
  ],
  roastery: [
    { id: 101, date: "2026-09-12", type: "تشغيل أولي", kg: 1.2, value: 65.0, reason: "ضبط منحنى تسخين الحماصة" }
  ]
};

// State Variables
let tasks = JSON.parse(localStorage.getItem('ror_tasks')) || defaultTasks;
let menuItems = JSON.parse(localStorage.getItem('ror_menu')) || defaultMenu;
let financials = JSON.parse(localStorage.getItem('ror_financials')) || defaultFinancials;
let wasteLogs = JSON.parse(localStorage.getItem('ror_waste')) || defaultWaste;

let breakevenChartInstance = null;
let currentWeekFilter = 'all';
let currentStatusFilter = 'all';

// ══════════════════════════════════════════════════════════════════
// 40-TASK PLAN TABLE & FILTERING
// ══════════════════════════════════════════════════════════════════

function renderTasksTable() {
  const tbody = document.getElementById('tasksTableBody');
  if (!tbody) return;

  const filtered = tasks.filter(t => {
    if (currentWeekFilter !== 'all' && String(t.week) !== String(currentWeekFilter)) return false;
    if (currentStatusFilter !== 'all' && t.status !== currentStatusFilter) return false;
    return true;
  });

  tbody.innerHTML = filtered.map(t => `
    <tr data-task-id="${t.id}" data-week="${t.week}">
      <td><span class="badge badge-oxford">أسبوع ${t.week}</span></td>
      <td style="font-weight:600;color:#1A1A1A;">${escapeHtml(t.task || t.title)}</td>
      <td>
        <select class="responsible-select" style="padding:4px 8px;border-radius:6px;border:1px solid #E3DFD5;font-family:inherit;font-size:12px;" onchange="updateTaskResponsible(${t.id}, this.value)">
          <option value="علاء" ${t.responsible === 'علاء' ? 'selected' : ''}>علاء - CEO</option>
          <option value="عبدالله" ${t.responsible === 'عبدالله' ? 'selected' : ''}>عبدالله - COO</option>
          <option value="جود" ${t.responsible === 'جود' ? 'selected' : ''}>جود - CMO</option>
          <option value="أنس" ${t.responsible === 'أنس' ? 'selected' : ''}>أنس - CFO</option>
        </select>
      </td>
      <td>
        <select class="status-select" style="padding:4px 8px;border-radius:6px;border:1px solid #E3DFD5;font-family:inherit;font-size:12px;" onchange="updateTaskStatus(${t.id}, this.value)">
          <option value="pending" ${t.status === 'pending' ? 'selected' : ''}>معلق</option>
          <option value="in-progress" ${t.status === 'in-progress' ? 'selected' : ''}>قيد التنفيذ</option>
          <option value="completed" ${t.status === 'completed' ? 'selected' : ''}>مكتمل</option>
        </select>
      </td>
      <td>
        <button class="btn-icon" onclick="deleteTask(${t.id})" title="حذف"><i class="fa-solid fa-trash-can"></i></button>
      </td>
    </tr>
  `).join('');

  if (typeof refreshAllMetrics === 'function') refreshAllMetrics();
}

function updateTaskStatus(taskId, newStatus) {
  const t = tasks.find(item => item.id === taskId);
  if (t) {
    t.status = newStatus;
    t.updatedAt = new Date().toISOString();
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    renderTasksTable();
    if (typeof showNotification === 'function') showNotification('تم تحديث حالة المهمة بنجاح', 'success');
  }
}

function updateTaskResponsible(taskId, newResp) {
  const t = tasks.find(item => item.id === taskId);
  if (t) {
    t.responsible = newResp;
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    if (typeof showNotification === 'function') showNotification(`تم إسناد المهمة إلى ${newResp}`, 'info');
  }
}

function deleteTask(taskId) {
  if (confirm('هل أنت متأكد من حذف هذه المهمة من الخطة؟')) {
    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    renderTasksTable();
    if (typeof showNotification === 'function') showNotification('تم حذف المهمة', 'info');
  }
}

function filterTasksByWeek(val) {
  currentWeekFilter = val;
  renderTasksTable();
}

function filterTasksByStatus(val) {
  currentStatusFilter = val;
  renderTasksTable();
}

// ══════════════════════════════════════════════════════════════════
// MENU ENGINEERING 2D MATRIX
// ══════════════════════════════════════════════════════════════════

function classifyMenuItems() {
  if (!menuItems.length) return { stars: [], puzzles: [], plowhorses: [], dogs: [] };

  const avgPop = menuItems.reduce((sum, i) => sum + (parseFloat(i.popularity) || 5), 0) / menuItems.length;
  const avgCont = menuItems.reduce((sum, i) => sum + (parseFloat(i.contribution) || ((i.price - i.cost) / i.price * 100)), 0) / menuItems.length;

  return {
    stars: menuItems.filter(i => (i.popularity >= avgPop) && ((i.contribution || ((i.price - i.cost) / i.price * 100)) >= avgCont)),
    puzzles: menuItems.filter(i => (i.popularity < avgPop) && ((i.contribution || ((i.price - i.cost) / i.price * 100)) >= avgCont)),
    plowhorses: menuItems.filter(i => (i.popularity >= avgPop) && ((i.contribution || ((i.price - i.cost) / i.price * 100)) < avgCont)),
    dogs: menuItems.filter(i => (i.popularity < avgPop) && ((i.contribution || ((i.price - i.cost) / i.price * 100)) < avgCont))
  };
}

function renderMenuMatrix() {
  const classified = classifyMenuItems();

  const renderList = (items) => {
    if (!items.length) return '<div style="font-size:11px;color:#888;padding:8px;">لا توجد أصناف</div>';
    return items.map(i => {
      const margin = (i.price - i.cost).toFixed(1);
      return `
        <div class="matrix-item-card">
          <div>
            <strong>${escapeHtml(i.item || i.name)}</strong>
            <div style="font-size:10px;color:#666;">سعر: ${i.price} ر.س | تكلفة: ${i.cost} ر.س</div>
          </div>
          <div style="text-align:left;">
            <span class="badge badge-green">+${margin} ر.س</span>
          </div>
        </div>
      `;
    }).join('');
  };

  const starsEl = document.getElementById('starsItems');
  const puzzlesEl = document.getElementById('puzzlesItems');
  const plowhorsesEl = document.getElementById('plowhorsesItems');
  const dogsEl = document.getElementById('dogsItems');

  if (starsEl) starsEl.innerHTML = renderList(classified.stars);
  if (puzzlesEl) puzzlesEl.innerHTML = renderList(classified.puzzles);
  if (plowhorsesEl) plowhorsesEl.innerHTML = renderList(classified.plowhorses);
  if (dogsEl) dogsEl.innerHTML = renderList(classified.dogs);

  // Top Sellers Table
  const topSellersBody = document.getElementById('topSellersBody');
  if (topSellersBody) {
    const sorted = [...menuItems].sort((a, b) => ((b.popularity || 1) * (b.price - b.cost)) - ((a.popularity || 1) * (a.price - a.cost)));
    topSellersBody.innerHTML = sorted.slice(0, 5).map(m => {
      const margin = (m.price - m.cost).toFixed(1);
      const marginPct = (((m.price - m.cost) / m.price) * 100).toFixed(0);
      return `
        <tr>
          <td style="font-weight:700;">${escapeHtml(m.item || m.name)}</td>
          <td>${m.price} ر.س</td>
          <td style="color:#0066FF;font-weight:700;">+${margin} ر.س (${marginPct}%)</td>
          <td><span class="badge badge-green">نشط ⭐</span></td>
        </tr>
      `;
    }).join('');
  }
}

function openMenuModal() {
  const m = document.getElementById('menuItemModal');
  if (m) m.classList.add('active');
}

function closeMenuModal() {
  const m = document.getElementById('menuItemModal');
  if (m) m.classList.remove('active');
}

function saveMenuItem(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.itemName.value.trim();
  const category = form.category.value;
  const price = parseFloat(form.price.value);
  const cost = parseFloat(form.cost.value);
  const popularity = parseInt(form.popularity.value);
  const contribution = (((price - cost) / price) * 100).toFixed(1);

  menuItems.push({ item: name, category, price, cost, popularity, contribution });
  localStorage.setItem('ror_menu', JSON.stringify(menuItems));

  closeMenuModal();
  form.reset();
  renderMenuMatrix();
  if (typeof showNotification === 'function') showNotification('تمت إضافة صنف المنيو بنجاح', 'success');
}

// ══════════════════════════════════════════════════════════════════
// BREAK-EVEN ANALYSIS CALCULATOR
// ══════════════════════════════════════════════════════════════════

function initBreakEvenSliders() {
  ['fixedCosts', 'avgTicket', 'cogsPercent', 'variablePercent'].forEach(id => {
    const slider = document.getElementById(id);
    const valueDisplay = document.getElementById(id + 'Value');
    if (!slider || !valueDisplay) return;

    slider.addEventListener('input', (e) => {
      valueDisplay.value = e.target.value;
      calculateBreakeven();
    });

    valueDisplay.addEventListener('input', (e) => {
      slider.value = e.target.value;
      calculateBreakeven();
    });
  });

  calculateBreakeven();
}

function calculateBreakeven() {
  const fixedCostsEl = document.getElementById('fixedCosts');
  const avgTicketEl = document.getElementById('avgTicket');
  const cogsPercentEl = document.getElementById('cogsPercent');
  const variablePercentEl = document.getElementById('variablePercent');

  if (!fixedCostsEl || !avgTicketEl) return;

  const fixedCosts = parseFloat(fixedCostsEl.value) || 30000;
  const avgTicket = parseFloat(avgTicketEl.value) || 35;
  const cogsPercent = (parseFloat(cogsPercentEl.value) || 30) / 100;
  const variablePercent = (parseFloat(variablePercentEl.value) || 15) / 100;

  const contributionMargin = avgTicket * (1 - cogsPercent - variablePercent);
  const breakevenInvoices = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
  const breakevenRevenue = breakevenInvoices * avgTicket;
  const breakevenDaily = Math.ceil(breakevenInvoices / 30);

  const elInvoices = document.getElementById('breakevenInvoices');
  const elRevenue = document.getElementById('breakevenRevenue');
  const elDaily = document.getElementById('breakevenDaily');
  const elMargin = document.getElementById('contributionMargin');

  if (elInvoices) elInvoices.textContent = breakevenInvoices.toLocaleString('en-US');
  if (elRevenue) elRevenue.textContent = breakevenRevenue.toLocaleString('en-US') + ' ر.س';
  if (elDaily) elDaily.textContent = breakevenDaily.toLocaleString('en-US');
  if (elMargin) elMargin.textContent = contributionMargin.toFixed(2) + ' ر.س';

  updateBreakevenChart(fixedCosts, avgTicket, cogsPercent, variablePercent, contributionMargin);
}

function updateBreakevenChart(fixedCosts, avgTicket, cogsPercent, variablePercent, contributionMargin) {
  const ctx = document.getElementById('breakevenChart');
  if (!ctx) return;

  const maxInvoices = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) * 2 : 2000;
  const step = Math.max(1, Math.ceil(maxInvoices / 12));

  const labels = [];
  const revenueData = [];
  const totalCostsData = [];

  for (let i = 0; i <= maxInvoices; i += step) {
    labels.push(i.toString());
    revenueData.push(i * avgTicket);
    totalCostsData.push(fixedCosts + (i * avgTicket * (cogsPercent + variablePercent)));
  }

  if (breakevenChartInstance) {
    breakevenChartInstance.data.labels = labels;
    breakevenChartInstance.data.datasets[0].data = revenueData;
    breakevenChartInstance.data.datasets[1].data = totalCostsData;
    breakevenChartInstance.update();
  } else if (typeof Chart !== 'undefined') {
    breakevenChartInstance = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'الإيرادات الإجمالية',
          data: revenueData,
          borderColor: '#0066FF',
          backgroundColor: 'transparent',
          borderWidth: 2.5
        }, {
          label: 'إجمالي التكاليف (ثابتة + متغيرة)',
          data: totalCostsData,
          borderColor: '#FD980E',
          backgroundColor: 'transparent',
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'end', rtl: true, labels: { font: { family: 'IBM Plex Sans Arabic' } } }
        },
        scales: {
          x: { title: { display: true, text: 'عدد الفواتير الشهرية', font: { family: 'IBM Plex Sans Arabic' } } },
          y: { ticks: { callback: v => v.toLocaleString('en-US') + ' ر.س' } }
        }
      }
    });
  }
}

// ══════════════════════════════════════════════════════════════════
// FINANCIAL COMMITMENTS & WASTE LOGS
// ══════════════════════════════════════════════════════════════════

function renderFinancialCommitments() {
  const tbody = document.getElementById('financialCommitmentsTableBody');
  if (!tbody) return;

  tbody.innerHTML = financials.map(f => `
    <tr>
      <td style="font-weight:700;">${escapeHtml(f.name || f.title)}</td>
      <td><span class="badge badge-gray">${escapeHtml(f.category)}</span></td>
      <td><span class="badge ${f.type === 'fixed' || f.type === 'ثابتة' ? 'badge-oxford' : 'badge-orange'}">${f.type === 'fixed' || f.type === 'ثابتة' ? 'ثابت' : 'متغير'}</span></td>
      <td style="font-weight:800;">${f.amount.toLocaleString('en-US')} ر.س</td>
      <td>${f.dueDate || 'نهاية الشهر'}</td>
      <td><span class="badge ${f.status === 'paid' ? 'badge-green' : 'badge-orange'}">${f.status === 'paid' ? 'تم السداد' : 'مستحق مجدول'}</span></td>
    </tr>
  `).join('');
}

function renderWasteLogs() {
  const tbody = document.getElementById('wasteTableBody');
  if (!tbody) return;

  const barLogs = wasteLogs.bar || [];
  tbody.innerHTML = barLogs.map(w => `
    <tr>
      <td>${w.date}</td>
      <td style="font-weight:700;">${escapeHtml(w.item)}</td>
      <td>${w.qty}</td>
      <td style="color:#C94C4C;font-weight:700;">-${w.value || w.cost} ر.س</td>
      <td><span class="badge badge-red">${escapeHtml(w.reason)}</span></td>
    </tr>
  `).join('');
}
