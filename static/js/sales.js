/**
 * RoR Enterprise Suite - Sales & Roastery Management Engine
 * Handles Cafe Shift Reports (Aref/Elem shifts), Roastery B2B/Retail Sales, and CSV Exports.
 */

// ══════════════════════════════════════════════════════════════════
// DEFAULT DATASETS & LOCALSTORAGE INITIALIZATION: SALES
// ══════════════════════════════════════════════════════════════════

// 1. Cafe Shift Sales (Aref morning / Elem evening)
const defaultCafeSales = [
  { id: 1, date: "2026-09-15", shift: "morning", barista: "عارف", cups: 72, desserts: 14, revenue: 1320, tickets: 53, avgTicket: 24.9, notes: "إقبال ممتاز على قهوة اليوم والكرواسون" },
  { id: 2, date: "2026-09-14", shift: "evening", barista: "علم", cups: 92, desserts: 22, revenue: 1720, tickets: 64, avgTicket: 26.8, notes: "ذروة مسائية عالية ومبيعات كولد برو ممتازة" },
  { id: 3, date: "2026-09-14", shift: "morning", barista: "عارف", cups: 65, desserts: 11, revenue: 1185, tickets: 48, avgTicket: 24.6, notes: "حركة منتظمة" },
  { id: 4, date: "2026-09-13", shift: "evening", barista: "علم", cups: 88, desserts: 19, revenue: 1590, tickets: 60, avgTicket: 26.5, notes: "طلب عالي على الحلى والمشروبات الباردة" },
  { id: 5, date: "2026-09-13", shift: "morning", barista: "عارف", cups: 58, desserts: 9, revenue: 1040, tickets: 42, avgTicket: 24.7, notes: "فترة الصباح هادئة نسبياً" }
];

// 2. Roastery Sales (الحماصة الرائدة B2B / retail bags)
const defaultRoastSales = [
  { id: 1, date: "2026-09-15", client: "مقهى الأفق (حائل)", kg: 50, pricePerKg: 75, type: "wholesale", paid: 3750, pending: 0, status: "مدفوع" },
  { id: 2, date: "2026-09-14", client: "مبيعات رف الفرع (أرباع 250جم)", kg: 25, pricePerKg: 110, type: "retail", paid: 2750, pending: 0, status: "مدفوع" },
  { id: 3, date: "2026-09-12", client: "سلسلة مقاهي نجد المختصة", kg: 80, pricePerKg: 82, type: "wholesale", paid: 6560, pending: 0, status: "مدفوع" },
  { id: 4, date: "2026-09-10", client: "متجر RoR الإلكتروني", kg: 18, pricePerKg: 95, type: "retail", paid: 1710, pending: 0, status: "مدفوع" }
];

// State Variables
let cafeSales = JSON.parse(localStorage.getItem('ror_cafe_sales')) || defaultCafeSales;
let roasterySales = JSON.parse(localStorage.getItem('ror_roast_sales')) || defaultRoastSales;
let cafeWeeklyChartInstance = null;

// ══════════════════════════════════════════════════════════════════
// CAFÉ SALES & SHIFT REPORTS (AREF & ELEM)
// ══════════════════════════════════════════════════════════════════

function updateBaristaName(shift) {
  const baristaField = document.getElementById('baristaName');
  if (baristaField) {
    baristaField.value = shift === 'morning' ? 'عارف' : shift === 'evening' ? 'علم' : '';
  }
}

function calculateAvgTicket() {
  const cups = parseInt(document.querySelector('[name="cups"]')?.value) || 0;
  const desserts = parseInt(document.querySelector('[name="desserts"]')?.value) || 0;
  const revenue = parseFloat(document.querySelector('[name="revenue"]')?.value) || 0;
  const totalItems = cups + desserts;
  const avg = totalItems > 0 ? (revenue / totalItems).toFixed(2) : 0;
  
  const avgInput = document.querySelector('[name="avgTicket"]');
  if (avgInput) avgInput.value = avg;
}

function saveCafeSales(event) {
  event.preventDefault();
  const form = event.target;
  const date = form.saleDate.value;
  const shift = form.shift.value;
  const barista = form.barista.value || (shift === 'morning' ? 'عارف' : 'علم');
  const cups = parseInt(form.cups.value);
  const desserts = parseInt(form.desserts.value);
  const revenue = parseFloat(form.revenue.value);
  const avgTicket = parseFloat(form.avgTicket.value) || (revenue / (cups + desserts)).toFixed(2);
  const notes = form.notes.value;

  cafeSales.unshift({ id: Date.now(), date, shift, barista, cups, desserts, revenue, tickets: cups, avgTicket, notes });
  localStorage.setItem('ror_cafe_sales', JSON.stringify(cafeSales));

  form.reset();
  renderCafeShiftReports();
  if (typeof refreshAllMetrics === 'function') refreshAllMetrics();
  showNotification('تم تسجيل وردية مبيعات المقهى بنجاح', 'success');
}

function renderCafeShiftReports() {
  const tbody = document.getElementById('shiftComparisonBody');
  if (!tbody) return;

  const last7Days = cafeSales.slice(0, 7);

  let mCups = 0, mRev = 0, eCups = 0, eRev = 0;

  tbody.innerHTML = last7Days.map(s => {
    const isMorning = (s.shift === 'morning' || s.barista === 'عارف');
    if (isMorning) {
      mCups += s.cups;
      mRev += s.revenue;
    } else {
      eCups += s.cups;
      eRev += s.revenue;
    }

    return `
      <tr>
        <td style="font-weight:700;">${s.date}</td>
        <td>${isMorning ? s.cups : '-'}</td>
        <td style="font-weight:700;color:#0066FF;">${isMorning ? s.revenue + ' ر.س' : '-'}</td>
        <td>${isMorning ? s.avgTicket + ' ر.س' : '-'}</td>
        <td>${!isMorning ? s.cups : '-'}</td>
        <td style="font-weight:700;color:#425653;">${!isMorning ? s.revenue + ' ر.س' : '-'}</td>
        <td>${!isMorning ? s.avgTicket + ' ر.س' : '-'}</td>
        <td style="font-weight:800;">${s.revenue} ر.س</td>
      </tr>
    `;
  }).join('');

  // Update Totals
  const tMCups = document.getElementById('totalMorningCups');
  const tMRev = document.getElementById('totalMorningRevenue');
  const tECups = document.getElementById('totalEveningCups');
  const tERev = document.getElementById('totalEveningRevenue');
  const tRev = document.getElementById('totalRevenue');

  if (tMCups) tMCups.textContent = mCups;
  if (tMRev) tMRev.textContent = mRev.toLocaleString('en-US') + ' ر.س';
  if (tECups) tECups.textContent = eCups;
  if (tERev) tERev.textContent = eRev.toLocaleString('en-US') + ' ر.س';
  if (tRev) tRev.textContent = (mRev + eRev).toLocaleString('en-US') + ' ر.س';
}

// ══════════════════════════════════════════════════════════════════
// ROASTERY SALES & REPORTS
// ══════════════════════════════════════════════════════════════════

function renderRoasteryReports() {
  const tbody = document.getElementById('roastSalesTableBody');
  if (!tbody) return;

  tbody.innerHTML = roasterySales.map(r => `
    <tr>
      <td style="font-weight:700;">${r.date || '2026-09-15'}</td>
      <td style="font-weight:800;color:#0B1A2D;">${escapeHtml(r.client)}</td>
      <td><span class="badge ${r.type === 'wholesale' ? 'badge-oxford' : 'badge-blue'}">${r.type === 'wholesale' ? 'جملة (الحماصة الرائدة)' : 'أرباع 250جم'}</span></td>
      <td style="font-weight:800;color:#0066FF;">${r.kg} كجم</td>
      <td>${r.pricePerKg} ر.س</td>
      <td style="font-weight:800;color:#16A34A;">${r.paid || r.total} ر.س</td>
      <td><span class="badge badge-green">مكتمل</span></td>
    </tr>
  `).join('');
}

// ══════════════════════════════════════════════════════════════════
// CSV EXPORTS FOR SALES
// ══════════════════════════════════════════════════════════════════

function exportCafeSalesCSV() {
  if (typeof exportToCSV === 'function') {
    exportToCSV(cafeSales, 'RoR_Cafe_Sales_' + new Date().toISOString().split('T')[0]);
  }
}

function exportRoasterySalesCSV() {
  if (typeof exportToCSV === 'function') {
    exportToCSV(roasterySales, 'RoR_Roastery_Sales_' + new Date().toISOString().split('T')[0]);
  }
}
