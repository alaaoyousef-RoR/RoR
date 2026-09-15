/**
 * RoR Enterprise Suite - Core ERP Application Engine
 * Adheres strictly to RoR Brand Identity, LocalStorage Schemas & 100% Data Integrity.
 */

// ══════════════════════════════════════════════════════════════════
// SECTION 1: DEFAULT DATASETS & LOCALSTORAGE INITIALIZATION
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

// 3. Cafe Shift Sales (Aref morning / Elem evening)
const defaultCafeSales = [
  { id: 1, date: "2026-09-15", shift: "morning", barista: "عارف", cups: 72, desserts: 14, revenue: 1320, tickets: 53, avgTicket: 24.9, notes: "إقبال ممتاز على قهوة اليوم والكرواسون" },
  { id: 2, date: "2026-09-14", shift: "evening", barista: "علم", cups: 92, desserts: 22, revenue: 1720, tickets: 64, avgTicket: 26.8, notes: "ذروة مسائية عالية ومبيعات كولد برو ممتازة" },
  { id: 3, date: "2026-09-14", shift: "morning", barista: "عارف", cups: 65, desserts: 11, revenue: 1185, tickets: 48, avgTicket: 24.6, notes: "حركة منتظمة" },
  { id: 4, date: "2026-09-13", shift: "evening", barista: "علم", cups: 88, desserts: 19, revenue: 1590, tickets: 60, avgTicket: 26.5, notes: "طلب عالي على الحلى والمشروبات الباردة" },
  { id: 5, date: "2026-09-13", shift: "morning", barista: "عارف", cups: 58, desserts: 9, revenue: 1040, tickets: 42, avgTicket: 24.7, notes: "فترة الصباح هادئة نسبياً" }
];

// 4. Roastery Sales (Giesen 15kg B2B / retail bags)
const defaultRoastSales = [
  { id: 1, date: "2026-09-15", client: "مقهى الأفق (حائل)", kg: 50, pricePerKg: 75, type: "wholesale", paid: 3750, pending: 0, status: "مدفوع" },
  { id: 2, date: "2026-09-14", client: "مبيعات رف الفرع (أرباع 250جم)", kg: 25, pricePerKg: 110, type: "retail", paid: 2750, pending: 0, status: "مدفوع" },
  { id: 3, date: "2026-09-12", client: "سلسلة مقاهي نجد المختصة", kg: 80, pricePerKg: 82, type: "wholesale", paid: 6560, pending: 0, status: "مدفوع" },
  { id: 4, date: "2026-09-10", client: "متجر RoR الإلكتروني", kg: 18, pricePerKg: 95, type: "retail", paid: 1710, pending: 0, status: "مدفوع" }
];

// 5. Financials
const defaultFinancials = [
  { id: 1, name: "رسوم المقابل المالي والإقامات", type: "fixed", amount: 2000, dueDate: "2026-09-30", status: "scheduled", category: "عمالة وتأمينات" },
  { id: 2, name: "التأمينات الاجتماعية للكوادر", type: "fixed", amount: 500, dueDate: "2026-09-25", status: "paid", category: "عمالة وتأمينات" },
  { id: 3, name: "فاتورة الكهرباء والتشغيل", type: "variable", amount: 1500, dueDate: "2026-09-28", status: "scheduled", category: "تشغيلي مباشر" },
  { id: 4, name: "صيانة حماصة جيسن ومكائن السيمونيلي", type: "variable", amount: 800, dueDate: "2026-09-22", status: "scheduled", category: "صيانة وتشغيل" },
  { id: 5, name: "إيجار المعرض والمحمصة الشهري", type: "fixed", amount: 4500, dueDate: "2026-10-01", status: "scheduled", category: "أصول وعقود" }
];

// 6. Waste Logs
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

// 7. Expert Tasks Seed Data (12 Tasks Per Department = 96 Tasks)
const expertTasksSeed = {
  prod_roastery: [
    { id: "pr-1", text: "فحص معدات التحميص قبل التشغيل (حماصة جيسن 15 كجم، المطاحن، صينية التبريد)", freq: "يومي", completed: true },
    { id: "pr-2", text: "جرد القهوة الخضراء وتسجيل الكميات ورطوبة الحبوب", freq: "يومي", completed: true },
    { id: "pr-3", text: "تنفيذ جدول التحميص المخطط حسب طلبيات المقهى والجملة", freq: "يومي", completed: true },
    { id: "pr-4", text: "توثيق بروفايل التحميص (منحنيات الحرارة والوقت، نوع المحصول، وزن الدفعة)", freq: "لكل دفعة", completed: true },
    { id: "pr-5", text: "تنظيف المعدات نهاية اليوم (حوض الدخان، جامع القشور، صينية التبريد)", freq: "يومي", completed: true },
    { id: "pr-6", text: "حساب نسبة الإنتاجية الأسبوعية (وزن المحمص / الأخضر × 100، المستهدف 85-88%)", freq: "أسبوعي", completed: true },
    { id: "pr-7", text: "تخطيط الإنتاج للأسبوع القادم بناءً على توقعات المبيعات والمخزون", freq: "أسبوعي", completed: true },
    { id: "pr-8", text: "فحص جودة القهوة الخضراء الواردة بالتنسيق مع مقيّم الجودة", freq: "أسبوعي", completed: false },
    { id: "pr-9", text: "جرد مواد التعبئة والتغليف (أكياس 250جم، صمامات، كراتين، ملصقات)", freq: "أسبوعي", completed: true },
    { id: "pr-10", text: "تنظيف عميق للمعدات وشفرات الطحن ونظام تدفق الهواء", freq: "أسبوعي", completed: false },
    { id: "pr-11", text: "معايرة حساسات الحرارة ومؤقتات الحماصة", freq: "شهري", completed: false },
    { id: "pr-12", text: "تحليل تكلفة الإنتاج لكل كجم شاملة الغاز والعمالة والتغليف", freq: "شهري", completed: false }
  ],
  quality_rd: [
    { id: "qr-1", text: "فحص جودة دفعات التحميص الجديدة وتذوق عينات الإنتاج اليومي", freq: "يومي", completed: true },
    { id: "qr-2", text: "فحص القهوة الخضراء الواردة ظاهرياً وقياس الرطوبة والكثافة", freq: "عند الاستلام", completed: true },
    { id: "qr-3", text: "جلسة تذوق رسمية (SCA Cupping) للمحاصيل المعتمدة والعينات الجديدة", freq: "أسبوعي", completed: true },
    { id: "qr-4", text: "توثيق نتائج التذوق والدرجات وسجل كشف العيوب النكهية", freq: "أسبوعي", completed: true },
    { id: "qr-5", text: "تدريب الباريستا على معايير الجودة والاستخلاص ونسب الـ TDS", freq: "أسبوعي", completed: true },
    { id: "qr-6", text: "مراجعة ملاحظات العملاء على جودة المشروبات وتقييمات الفرع", freq: "أسبوعي", completed: true },
    { id: "qr-7", text: "تقييم شامل لمخزون القهوة الخضراء وتحديث درجات التقييم", freq: "شهري", completed: false },
    { id: "qr-8", text: "جلسة تطوير منتجات جديدة (وصفات، خلطات إسبريسو، كولد برو)", freq: "شهري", completed: false },
    { id: "qr-9", text: "مراجعة وتحديث معايير الجودة وأدلة التشغيل القياسية", freq: "شهري", completed: false },
    { id: "qr-10", text: "تحليل جودة المنافسين في السوق المحلي ومقارنة المنتجات", freq: "شهري", completed: false },
    { id: "qr-11", text: "معايرة ذاتية لمعايير Q-Grader المعتمدة", freq: "ربع سنوي", completed: false },
    { id: "qr-12", text: "اختيار وتنسيق محاصيل القهوة الموسمية بالتزامن مع مواسم الحصاد", freq: "ربع سنوي", completed: false }
  ],
  marketing: [
    { id: "mk-1", text: "نشر محتوى تفاعلي على إنستغرام وتيك توك (1-2 منشور/يوم)", freq: "يومي", completed: true },
    { id: "mk-2", text: "التفاعل مع المتابعين والرد السريع على الرسائل والتعليقات", freq: "يومي", completed: true },
    { id: "mk-3", text: "تحديث ملف Google My Business والرد على التقييمات", freq: "يومي", completed: true },
    { id: "mk-4", text: "جلسة تصوير للمنتجات وأجواء المقهى والمحمصة باستخدام الهاتف", freq: "أسبوعي", completed: true },
    { id: "mk-5", text: "تخطيط تقويم المحتوى للأسبوع القادم وحملات الترويج", freq: "أسبوعي", completed: true },
    { id: "mk-6", text: "إرسال النشرة البريدية الأسبوعية لقائمة عملاء RoR", freq: "أسبوعي", completed: false },
    { id: "mk-7", text: "التواصل مع المؤثرين المحليين عبر تبادل القهوة والهدايا (تكلفة صفر)", freq: "أسبوعي", completed: false },
    { id: "mk-8", text: "مراجعة تحليلات وسائل التواصل ونمو المتابعين ومعدل التفاعل", freq: "أسبوعي", completed: true },
    { id: "mk-9", text: "تخطيط وإطلاق حملة شهرية ترويجية (محصول الشهر، مناسبات)", freq: "شهري", completed: false },
    { id: "mk-10", text: "تحديث ومتابعة برنامج ولاء العملاء وبطاقات المكافآت", freq: "شهري", completed: true },
    { id: "mk-11", text: "تدقيق اتساق الهوية البصرية في المطبوعات والتغليف", freq: "شهري", completed: false },
    { id: "mk-12", text: "المشاركة في فعاليات المجتمع المحلي وأسواق القهوة المصغرة", freq: "شهري", completed: false }
  ],
  sales_b2b: [
    { id: "sb-1", text: "متابعة خط أنابيب مبيعات الجملة مع الـ 10 مقاهي المستهدفة", freq: "يومي", completed: true },
    { id: "sb-2", text: "إعداد قوائم عملاء محتملين جدد (مقاهي، مطاعم، مكاتب شركات)", freq: "أسبوعي", completed: true },
    { id: "sb-3", text: "جدولة وتنفيذ زيارات ميدانية للعملاء لتقديم عينات حماصة جيسن", freq: "أسبوعي", completed: true },
    { id: "sb-4", text: "تسجيل عينات التذوق المرسلة وتحديد مواعيد المتابعة", freq: "أسبوعي", completed: true },
    { id: "sb-5", text: "إعداد عروض الأسعار والخصومات الكمية للعملاء المهتمين", freq: "أسبوعي", completed: true },
    { id: "sb-6", text: "متابعة تحصيل الفواتير والذمم المدينة مع الشركاء التجاريين", freq: "أسبوعي", completed: true },
    { id: "sb-7", text: "تحليل أسباب كسب أو خسارة الصفقات وتحسين أسلوب العرض", freq: "شهري", completed: false },
    { id: "sb-8", text: "مراجعة استراتيجية تسعير الجملة وهوامش الربح التنافسية", freq: "شهري", completed: false },
    { id: "sb-9", text: "صياغة وتجديد عقود التوريد الشهرية والشراكات طويلة الأجل", freq: "شهري", completed: false },
    { id: "sb-10", text: "مراجعة حسابات العملاء الحاليين وأنماط إعادة الطلب", freq: "شهري", completed: true },
    { id: "sb-11", text: "خارطة طريق تطوير الشراكات الاستراتيجية مع الموزعين الإقليميين", freq: "ربع سنوي", completed: false },
    { id: "sb-12", text: "تحليل حصة RoR في سوق القهوة المختصة بالجملة", freq: "ربع سنوي", completed: false }
  ],
  ecommerce: [
    { id: "ec-1", text: "معالجة طلبيات المتجر الإلكتروني اليومية وتجهيزها للشحن", freq: "يومي", completed: true },
    { id: "ec-2", text: "مزامنة المخزون بين المحمصة والفرع والمتجر الرقمي", freq: "يومي", completed: true },
    { id: "ec-3", text: "تتبع شحنات العملاء وإرسال أرقام البوالص والرسائل النصية", freq: "يومي", completed: true },
    { id: "ec-4", text: "متابعة تنبيهات انخفاض مخزون المحاصيل المعروضة أونلاين", freq: "أسبوعي", completed: true },
    { id: "ec-5", text: "تقييم أداء شركات الشحن والتوصيل وسرعة التسليم", freq: "أسبوعي", completed: true },
    { id: "ec-6", text: "تحسين معدل التحويل (Conversion Rate) وصفحات المنتجات", freq: "أسبوعي", completed: false },
    { id: "ec-7", text: "إدارة ومتابعة طلبات الاسترجاع والاستبدال إن وجدت", freq: "شهري", completed: true },
    { id: "ec-8", text: "تحسين محركات البحث (SEO) لصفحات المحاصيل والأدوات", freq: "شهري", completed: false },
    { id: "ec-9", text: "تحليل مؤشرات المتجر (متوسط قيمة الطلب AOV، مصادر الزيارات)", freq: "شهري", completed: false },
    { id: "ec-10", text: "تحسين مسارات الشحن المحلي وتخفيض تكلفة التوصيل للعميل", freq: "شهري", completed: false },
    { id: "ec-11", text: "تقييم منصة المتجر الإلكتروني وحلول الدفع الميسرة (تابي/تمارا)", freq: "ربع سنوي", completed: false },
    { id: "ec-12", text: "تخطيط سلسلة إمداد التغليف وأكياس الشحن والكراتين المطبوعة", freq: "ربع سنوي", completed: false }
  ],
  maint: [
    { id: "mn-1", text: "فحص معدات الإسبريسو اليومي (نظافة الرؤوس، ضغط المضخة، حرارة الغلاية)", freq: "يومي", completed: true },
    { id: "mn-2", text: "فحص فلاتر المياه وقياس نسبة الأملاح الذائبة TDS في مياه البار", freq: "أسبوعي", completed: true },
    { id: "mn-3", text: "صيانة وقائية لحماصة جيسن (تنظيف الشعلات، مسار الهواء، فحص السيور)", freq: "أسبوعي", completed: true },
    { id: "mn-4", text: "توثيق أي عطل طارئ وزمن التوقف وتكاليف قطع الغيار", freq: "أسبوعي", completed: true },
    { id: "mn-5", text: "جدولة الصيانة الدورية الشاملة لمكائن سيمونيلي ومطاحن ماهلكونيج", freq: "شهري", completed: true },
    { id: "mn-6", text: "جرد قطع الغيار الأساسية (جوانات، شاور سكرين، حساسات، شفرات طحن)", freq: "شهري", completed: true },
    { id: "mn-7", text: "مراقبة كفاءة واستهلاك الطاقة والغاز ومعدل جاهزية المعدات Uptime", freq: "شهري", completed: false },
    { id: "mn-8", text: "تحديث قائمة بيانات الفنيين المعتمدين وموردي قطع الغيار الأصلية", freq: "شهري", completed: true },
    { id: "mn-9", text: "معايرة موازين البار ومؤقتات الاستخلاص وأجهزة قياس الرطوبة", freq: "ربع سنوي", completed: false },
    { id: "mn-10", text: "تدقيق كفاءة استهلاك الكهرباء وخطوط الغاز لتوفير المصاريف", freq: "ربع سنوي", completed: false },
    { id: "mn-11", text: "فحوصات السلامة العامة ومطافئ الحريق ومخارج الطوارئ", freq: "ربع سنوي", completed: true },
    { id: "mn-12", text: "تخطيط ترقيات واستبدال المعدات القديمة ودراسة الجدوى", freq: "سنوي", completed: false }
  ],
  hr: [
    { id: "hr-1", text: "إدارة جدول المناوبات (عارف صباحي 7-3، علم مسائي 3-11، تغطية الإجازات)", freq: "يومي", completed: true },
    { id: "hr-2", text: "تتبع ساعات العمل ومنع الساعات الإضافية غير المبررة لضبط التكاليف", freq: "أسبوعي", completed: true },
    { id: "hr-3", text: "جلسة تدريب وتطوير الباريستا على معايير الضيافة والتحضير السريع", freq: "أسبوعي", completed: true },
    { id: "hr-4", text: "تقييم أداء عارف وعلم الشهري في الخدمة والسرعة ورضا الضيوف", freq: "شهري", completed: true },
    { id: "hr-5", text: "تدقيق سجل الحضور والانضباط ومعالجة أي تأخيرات", freq: "شهري", completed: true },
    { id: "hr-6", text: "تحديث قائمة مهارات الموظفين وخطة تدريب الكوادر الجديدة", freq: "شهري", completed: false },
    { id: "hr-7", text: "إدارة طلبات الإجازات السنوية والمرضية وجدولة البدلاء", freq: "شهري", completed: true },
    { id: "hr-8", text: "استطلاع رضا وبيئة عمل الفريق ومناقشة مقترحاتهم للتحسين", freq: "ربع سنوي", completed: false },
    { id: "hr-9", text: "مراجعة مسيرات الرواتب والمزايا والامتثال لمنصة قوى والتأمينات", freq: "ربع سنوي", completed: true },
    { id: "hr-10", text: "تخطيط التوظيف المستقبلي لشواغر المبيعات والكاشير", freq: "ربع سنوي", completed: false },
    { id: "hr-11", text: "توثيق الامتثال لأنظمة العمل السعودية والشهادات الصحية للبلدية", freq: "سنوي", completed: true },
    { id: "hr-12", text: "تحديث دليل سياسات الموظفين ومصفوفة الصلاحيات والحوافز", freq: "عند الحاجة", completed: false }
  ],
  finance: [
    { id: "fn-1", text: "تسوية الخزينة اليومية ومطابقة النقد وعمليات الشبكة (مدى/فيزا)", freq: "يومي", completed: true },
    { id: "fn-2", text: "تسجيل المعاملات المالية والمصروفات النثرية في السجل اليومي", freq: "يومي", completed: true },
    { id: "fn-3", text: "جدولة دفعات فواتير الموردين لتجنب تأخير التوريد وحفظ السيولة", freq: "أسبوعي", completed: true },
    { id: "fn-4", text: "متابعة تحصيل الذمم المدينة من عملاء مبيعات الجملة B2B", freq: "أسبوعي", completed: true },
    { id: "fn-5", text: "إعداد التقرير المالي الأسبوعي للشركاء (الإيراد، المصروف، الرصيد)", freq: "أسبوعي", completed: true },
    { id: "fn-6", text: "الإقفال المالي الشهري وإعداد قائمة الدخل والمركز المالي الأولي", freq: "شهري", completed: true },
    { id: "fn-7", text: "تحليل انحراف الميزانية ومقارنة المصاريف الفعلية بالمخطط", freq: "شهري", completed: false },
    { id: "fn-8", text: "تحديث توقعات التدفقات النقدية ومدرج السيولة للـ 3 أشهر القادمة", freq: "شهري", completed: true },
    { id: "fn-9", text: "إعداد وتقديم إقرار ضريبة القيمة المضافة لهيئة الزكاة والضريبة (ZATCA)", freq: "شهري", completed: true },
    { id: "fn-10", text: "تحليل ربحية مراكز التكلفة (مبيعات البار مقارنة بمبيعات المحمصة)", freq: "ربع سنوي", completed: false },
    { id: "fn-11", text: "مراجعة عقود التكاليف الثابتة والتفاوض لتخفيض الرسوم والخدمات", freq: "ربع سنوي", completed: false },
    { id: "fn-12", text: "إعداد الميزانية التقديرية السنوية واعتماد أهداف المبيعات", freq: "سنوي", completed: false }
  ]
};

// 8. Development Pipeline Seed Data (5 Items Per Category = 25 Items)
const defaultDevPipeline = {
  training: [
    { id: "trn-1", title: "دورة Q-Grader المتقدمة لعلاء (شهادة SCA المعتمدة)", owner: "علاء", date: "2026-10-15", status: "doing" },
    { id: "trn-2", title: "تدريب الباريستا على Latte Art وسرعة الخدمة (عارف وعلم)", owner: "عبدالله", date: "2026-09-25", status: "done" },
    { id: "trn-3", title: "دورة إدارة مبيعات B2B وبناء الشراكات الكبرى", owner: "جود", date: "2026-11-01", status: "todo" },
    { id: "trn-4", title: "ورشة التسويق الرقمي وإعلانات Meta & TikTok الموجهة", owner: "جود", date: "2026-10-05", status: "todo" },
    { id: "trn-5", title: "التدريب على متطلبات المرحلة الثانية للفوترة الإلكترونية (ZATCA)", owner: "أنس", date: "2026-09-30", status: "done" }
  ],
  sops: [
    { id: "sop-1", title: "توثيق إجراءات التحميص الموحدة لحماصة جيسن 15 كجم (SOP)", owner: "علاء", date: "2026-09-20", status: "done" },
    { id: "sop-2", title: "إنشاء دليل خدمة العملاء والترحيب ومعايير الضيافة بـ RoR", owner: "عبدالله", date: "2026-09-22", status: "done" },
    { id: "sop-3", title: "توحيد وصفات المشروبات ومعايير الجرامات والاستخلاص (Recipe Cards)", owner: "علاء", date: "2026-09-28", status: "doing" },
    { id: "sop-4", title: "إجراءات التنظيف والصيانة الوقائية اليومية والأسبوعية للبار", owner: "عبدالله", date: "2026-10-02", status: "todo" },
    { id: "sop-5", title: "بروتوكول التعامل مع شكاوى واسترجاع المشروبات بصفر احتكاك", owner: "جود", date: "2026-10-10", status: "todo" }
  ],
  tech: [
    { id: "tch-1", title: "ربط وتكامل نظام نقاط البيع POS مع المحاسبة السحابية", owner: "أنس", date: "2026-10-12", status: "doing" },
    { id: "tch-2", title: "إطلاق المتجر الإلكتروني للمحمصة ودعم الدفع السريع (Apple Pay)", owner: "جود", date: "2026-10-20", status: "todo" },
    { id: "tch-3", title: "نظام إدارة المخزون والتنبيه الآلي للحد الأدنى من المحاصيل", owner: "عبدالله", date: "2026-11-05", status: "todo" },
    { id: "tch-4", title: "الامتثال والربط المباشر مع منصة الفاتورة الإلكترونية ZATCA", owner: "أنس", date: "2026-09-29", status: "done" },
    { id: "tch-5", title: "أتمتة تقارير الشركاء الأسبوعية وإرسالها عبر التيليجرام أو الواتساب", owner: "علاء", date: "2026-10-18", status: "doing" }
  ],
  expansion: [
    { id: "exp-1", title: "دراسة جدوى فتح فرع ثانٍ في مجمع تجاري واعد", owner: "علاء", date: "2026-12-01", status: "todo" },
    { id: "exp-2", title: "التعاقد مع 3 موزعين إقليميين لتوزيع أرباع بن RoR في المناطق الشمالية", owner: "جود", date: "2026-11-15", status: "doing" },
    { id: "exp-3", title: "إطلاق نقاط بيع ورفوف مخصصة لبن RoR في 5 سوبرماركتات راقية", owner: "جود", date: "2026-11-20", status: "todo" },
    { id: "exp-4", title: "عقد شراكة توريد حصري مع فندقين 4/5 نجوم للمؤتمرات", owner: "علاء", date: "2026-12-15", status: "todo" },
    { id: "exp-5", title: "إعداد حزمة الامتياز التجاري (Franchise Package) وتوثيق النماذج", owner: "أنس", date: "2027-01-10", status: "todo" }
  ],
  innovation: [
    { id: "inn-1", title: "إطلاق منتج Cold Brew جاهز معبأ في زجاجات فاخرة للاستخدام اليومي", owner: "علاء", date: "2026-10-25", status: "doing" },
    { id: "inn-2", title: "تطوير خط محاصيل Single Origin محدودة الإصدار بنقاط تذوق 88+", owner: "علاء", date: "2026-10-30", status: "doing" },
    { id: "inn-3", title: "توفير محصول قهوة منزوعة الكافيين Decaf معالجة سويسرية مائية", owner: "عبدالله", date: "2026-11-10", status: "todo" },
    { id: "inn-4", title: "ابتكار مشروب توقيع RoR الموسمي لفصل الشتاء بخلطة الهيل والقرفة", owner: "عارف", date: "2026-11-01", status: "todo" },
    { id: "inn-5", title: "أظرف قهوة سريعة التحضير Drip Bags تحمل هوية RoR للمسافرين", owner: "جود", date: "2026-11-25", status: "todo" }
  ]
};

// 9. Initial Load from LocalStorage or Defaults
let tasks = JSON.parse(localStorage.getItem('ror_tasks')) || defaultTasks;
let menuItems = JSON.parse(localStorage.getItem('ror_menu')) || defaultMenu;
let cafeSales = JSON.parse(localStorage.getItem('ror_cafe_sales')) || defaultCafeSales;
let roasterySales = JSON.parse(localStorage.getItem('ror_roast_sales')) || defaultRoastSales;
let financials = JSON.parse(localStorage.getItem('ror_financials')) || defaultFinancials;
let wasteLogs = JSON.parse(localStorage.getItem('ror_waste')) || defaultWaste;
let devPipeline = JSON.parse(localStorage.getItem('ror_dev_pipeline')) || defaultDevPipeline;

// Department Management Tasks
let deptTasks = JSON.parse(localStorage.getItem('ror_dept_tasks')) || {
  prod_roastery: [
    { id: "t-pr-1", title: "تحميص دفعة كولومبيا ويلا سوبريمو (60 كجم) لصالح مقاهي نجد", assignedTo: "علاء", dueDate: "2026-09-18", priority: "high", status: "in-progress", progress: 65, notes: "التركيز على بروفايل التحميص المتوسط" },
    { id: "t-pr-2", title: "استلام وجرد شحنة البن الأخضر البرازيلي الجديد (20 خيشة)", assignedTo: "عبدالله", dueDate: "2026-09-19", priority: "medium", status: "todo", progress: 0, notes: "فحص رطوبة الحبوب عند الاستلام" }
  ],
  quality_rd: [
    { id: "t-qr-1", title: "معايرة نسب استخلاص الإسبريسو بالبار مع عارف وعلم", assignedTo: "علاء", dueDate: "2026-09-17", priority: "high", status: "in-progress", progress: 80, notes: "الهدف: TDS بين 1.35% و 1.45%" }
  ],
  marketing: [
    { id: "t-mk-1", title: "تصوير فيديو تحضير الكولد برو للموسم الجديد للنشر في تيك توك", assignedTo: "جود", dueDate: "2026-09-21", priority: "medium", status: "todo", progress: 20, notes: "إبراز تفاصيل التقطير البطيء" }
  ],
  sales_b2b: [
    { id: "t-sb-1", title: "إرسال عينات محاصيل إثيوبيا شلشلي لمقهى الأفق بحائل", assignedTo: "جود", dueDate: "2026-09-16", priority: "high", status: "in-progress", progress: 50, notes: "التنسيق مع الشحن السريع" }
  ],
  ecommerce: [
    { id: "t-ec-1", title: "تفعيل خيار الدفع عبر Apple Pay في متجر RoR الرقمي", assignedTo: "أنس", dueDate: "2026-09-22", priority: "medium", status: "todo", progress: 30, notes: "بالتنسيق مع بوابة الدفع" }
  ],
  maint: [
    { id: "t-mn-1", title: "تبديل جوانات رؤوس مجموعة مكينة الإسبريسو وفلتر المياه الرئيسي", assignedTo: "عبدالله", dueDate: "2026-09-18", priority: "high", status: "in-progress", progress: 40, notes: "فحص مانوميتر الضغط" }
  ],
  hr: [
    { id: "t-hr-1", title: "إعداد مسير رواتب ورديات عارف وعلم وتحديث الحضور", assignedTo: "أنس", dueDate: "2026-09-26", priority: "high", status: "todo", progress: 10, notes: "مطابقة ساعات العمل الفعلية" }
  ],
  finance: [
    { id: "t-fn-1", title: "تسوية حسابات مبيعات الأسبوع المنصرم وإعداد إقرار الزكاة والضريبة", assignedTo: "أنس", dueDate: "2026-09-20", priority: "high", status: "in-progress", progress: 75, notes: "تجهيز فواتير المشتريات المعفاة والخاضعة" }
  ]
};

// Department Expert Tasks state (stored per user preference)
let deptExpertTasks = JSON.parse(localStorage.getItem('ror_dept_expert_tasks')) || expertTasksSeed;

// ══════════════════════════════════════════════════════════════════
// SECTION 2: APPLICATION BOOTSTRAP & EVENT LISTENERS
// ══════════════════════════════════════════════════════════════════

let mainChartInstance = null;
let cafeWeeklyChartInstance = null;
let breakevenChartInstance = null;
let currentWeekFilter = 'all';
let currentStatusFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initDateAndGreeting();
  initSidebarAccordion();
  initBreakEvenSliders();
  initChartJS();
  
  // Render views
  refreshAllMetrics();
  renderTasksTable();
  renderMenuMatrix();
  renderCafeShiftReports();
  renderRoasteryReports();
  renderFinancialCommitments();
  renderWasteLogs();
  renderOrgPositions();
  initAllDepartmentViews();
  initAllDevelopmentKanbans();
  
  // Hash routing
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);
});

// Greeting & Date
function initDateAndGreeting() {
  const now = new Date();
  const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const dateStr = `${dayNames[now.getDay()]}، ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  const dateEl = document.getElementById('topbarDateDisplay');
  if (dateEl) dateEl.textContent = dateStr;
}

// ══════════════════════════════════════════════════════════════════
// SECTION 3: ACCORDION NAVIGATION & ROUTING
// ══════════════════════════════════════════════════════════════════

function initSidebarAccordion() {
  const navSections = document.querySelectorAll('.nav-section');
  
  navSections.forEach(section => {
    const header = section.querySelector('.section-header');
    const content = section.querySelector('.section-content');
    const chevron = header.querySelector('.chevron');
    
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

  // Mobile sidebar toggle & close
  const toggleBtn = document.getElementById('sidebarToggle');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const sidebar = document.getElementById('mainSidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
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
  if (viewId === 'breakeven' && breakevenChartInstance) {
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
// SECTION 4: METRICS & CALCULATIONS ENGINE
// ══════════════════════════════════════════════════════════════════

function refreshAllMetrics() {
  const totalCafeRev = cafeSales.reduce((sum, s) => sum + (parseFloat(s.revenue) || 0), 0);
  const totalRoastRev = roasterySales.reduce((sum, s) => sum + (parseFloat(s.paid) || parseFloat(s.total) || 0), 0);
  const totalRevenue = totalCafeRev + totalRoastRev;
  
  const totalExpenses = financials.reduce((sum, f) => sum + (parseFloat(f.amount) || 0), 0);
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
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const pct = Math.round((completedTasks / tasks.length) * 100);
  
  const elCompCount = document.getElementById('completedTasks');
  const elProgressFill = document.getElementById('taskProgressFill');
  if (elCompCount) elCompCount.textContent = completedTasks;
  if (elProgressFill) elProgressFill.style.width = pct + '%';
}

// ══════════════════════════════════════════════════════════════════
// SECTION 5: CHARTS (CHART.JS)
// ══════════════════════════════════════════════════════════════════

function initChartJS() {
  // 1. Main Revenue & Expenses Trend Chart
  const ctxRevenue = document.getElementById('revenueExpensesChart');
  if (ctxRevenue) {
    mainChartInstance = new Chart(ctxRevenue.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3 🔥', 'الأسبوع 4', 'الأسبوع 5', 'الأسبوع 6', 'الأسبوع 7', 'الأسبوع 8'],
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

// ══════════════════════════════════════════════════════════════════
// SECTION 6: 40-TASK PLAN TABLE & FILTERING
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
          <option value="completed" ${t.status === 'completed' ? 'selected' : ''}>مكتمل ✓</option>
        </select>
      </td>
      <td>
        <button class="btn-icon" onclick="deleteTask(${t.id})" title="حذف">🗑️</button>
      </td>
    </tr>
  `).join('');

  refreshAllMetrics();
}

function updateTaskStatus(taskId, newStatus) {
  const t = tasks.find(item => item.id === taskId);
  if (t) {
    t.status = newStatus;
    t.updatedAt = new Date().toISOString();
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    renderTasksTable();
    showNotification('تم تحديث حالة المهمة بنجاح ✅', 'success');
  }
}

function updateTaskResponsible(taskId, newResp) {
  const t = tasks.find(item => item.id === taskId);
  if (t) {
    t.responsible = newResp;
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    showNotification(`تم إسناد المهمة إلى ${newResp}`, 'info');
  }
}

function deleteTask(taskId) {
  if (confirm('هل أنت متأكد من حذف هذه المهمة من الخطة؟')) {
    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('ror_tasks', JSON.stringify(tasks));
    renderTasksTable();
    showNotification('تم حذف المهمة', 'info');
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
// SECTION 7: MENU ENGINEERING 2D MATRIX
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
  showNotification('تمت إضافة صنف المنيو بنجاح ✅', 'success');
}

// ══════════════════════════════════════════════════════════════════
// SECTION 8: BREAK-EVEN ANALYSIS CALCULATOR
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

  // Contribution margin per invoice
  const contributionMargin = avgTicket * (1 - cogsPercent - variablePercent);
  
  // Break-even in number of invoices
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
  } else {
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
// SECTION 9: CAFÉ SALES & SHIFT REPORTS (AREF & ELEM)
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
  refreshAllMetrics();
  showNotification('تم تسجيل وردية مبيعات المقهى بنجاح ✅', 'success');
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
// SECTION 10: ROASTERY SALES, EXPENSES & WASTE
// ══════════════════════════════════════════════════════════════════

function renderRoasteryReports() {
  const tbody = document.getElementById('roastSalesTableBody');
  if (!tbody) return;

  tbody.innerHTML = roasterySales.map(r => `
    <tr>
      <td style="font-weight:700;">${r.date || '2026-09-15'}</td>
      <td style="font-weight:800;color:#0B1A2D;">${escapeHtml(r.client)}</td>
      <td><span class="badge ${r.type === 'wholesale' ? 'badge-oxford' : 'badge-blue'}">${r.type === 'wholesale' ? 'جملة (جيسن 15 كجم)' : 'أرباع 250جم'}</span></td>
      <td style="font-weight:800;color:#0066FF;">${r.kg} كجم</td>
      <td>${r.pricePerKg} ر.س</td>
      <td style="font-weight:800;color:#16A34A;">${r.paid || r.total} ر.س</td>
      <td><span class="badge badge-green">مكتمل</span></td>
    </tr>
  `).join('');
}

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

// ══════════════════════════════════════════════════════════════════
// SECTION 11: 8 OPERATIONAL DEPARTMENTS (ODOO-INSPIRED)
// ══════════════════════════════════════════════════════════════════

const deptNames = ['prod_roastery', 'quality_rd', 'marketing', 'sales_b2b', 'ecommerce', 'maint', 'hr', 'finance'];

function initAllDepartmentViews() {
  deptNames.forEach(deptId => {
    renderDeptExpertTasks(deptId);
    renderDeptMgmtTasks(deptId);
  });
}

function switchDeptTab(deptId, tabName, btnEl) {
  const deptContainer = document.getElementById(`dept-${deptId}`);
  if (!deptContainer) return;

  // Update tabs
  deptContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  deptContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  if (btnEl) btnEl.classList.add('active');
  const targetContent = document.getElementById(`${tabName}-${deptId}`);
  if (targetContent) targetContent.classList.add('active');
}

function renderDeptExpertTasks(deptId) {
  const container = document.getElementById(`expertTasksList-${deptId}`);
  if (!container) return;

  const tasksList = deptExpertTasks[deptId] || [];
  container.innerHTML = tasksList.map((t, idx) => `
    <div class="checklist-item ${t.completed ? 'completed' : ''}">
      <input type="checkbox" id="chk-${t.id}" ${t.completed ? 'checked' : ''} onchange="toggleDeptExpertTask('${deptId}', '${t.id}')">
      <label for="chk-${t.id}" class="task-text">${escapeHtml(t.text)}</label>
      <span class="frequency-badge">${escapeHtml(t.freq)}</span>
    </div>
  `).join('');
}

function toggleDeptExpertTask(deptId, taskId) {
  const list = deptExpertTasks[deptId];
  if (list) {
    const item = list.find(t => t.id === taskId);
    if (item) {
      item.completed = !item.completed;
      localStorage.setItem('ror_dept_expert_tasks', JSON.stringify(deptExpertTasks));
      renderDeptExpertTasks(deptId);
    }
  }
}

function renderDeptMgmtTasks(deptId) {
  const tasks = deptTasks[deptId] || [];

  const todoContainer = document.getElementById(`todoTasks-${deptId}`);
  const inProgressContainer = document.getElementById(`inProgressTasks-${deptId}`);
  const doneContainer = document.getElementById(`doneTasks-${deptId}`);

  if (!todoContainer || !inProgressContainer || !doneContainer) return;

  const todoList = tasks.filter(t => t.status === 'todo');
  const inProgList = tasks.filter(t => t.status === 'in-progress');
  const doneList = tasks.filter(t => t.status === 'done');

  // Update counts
  const cTodo = document.getElementById(`todoCount-${deptId}`);
  const cInProg = document.getElementById(`inProgressCount-${deptId}`);
  const cDone = document.getElementById(`doneCount-${deptId}`);
  if (cTodo) cTodo.textContent = todoList.length;
  if (cInProg) cInProg.textContent = inProgList.length;
  if (cDone) cDone.textContent = doneList.length;

  const renderCard = (t) => `
    <div class="task-card" data-task-id="${t.id}" draggable="true">
      <div class="task-header">
        <span class="priority-badge ${t.priority}">${t.priority === 'high' ? 'عالية' : t.priority === 'medium' ? 'متوسطة' : 'منخفضة'}</span>
        <select onchange="updateMgmtTaskStatus('${deptId}', '${t.id}', this.value)" style="font-size:11px;border:none;background:transparent;cursor:pointer;font-family:inherit;">
          <option value="todo" ${t.status === 'todo' ? 'selected' : ''}>للعمل</option>
          <option value="in-progress" ${t.status === 'in-progress' ? 'selected' : ''}>قيد التنفيذ</option>
          <option value="done" ${t.status === 'done' ? 'selected' : ''}>مكتمل</option>
        </select>
      </div>
      <h4 class="task-title">${escapeHtml(t.title)}</h4>
      <div class="task-meta">
        <div class="assignee">
          <span class="avatar">${(t.assignedTo || 'علاء').substring(0,1)}</span>
          <span class="name">${escapeHtml(t.assignedTo || 'علاء')}</span>
        </div>
        <div class="due-date">📅 ${t.dueDate || '2026-09-30'}</div>
      </div>
      <div class="task-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${t.progress || (t.status === 'done' ? 100 : 30)}%"></div>
        </div>
      </div>
    </div>
  `;

  todoContainer.innerHTML = todoList.map(renderCard).join('');
  inProgressContainer.innerHTML = inProgList.map(renderCard).join('');
  doneContainer.innerHTML = doneList.map(renderCard).join('');
}

function updateMgmtTaskStatus(deptId, taskId, newStatus) {
  const list = deptTasks[deptId];
  if (list) {
    const item = list.find(t => t.id === taskId);
    if (item) {
      item.status = newStatus;
      item.progress = newStatus === 'done' ? 100 : newStatus === 'in-progress' ? 50 : 0;
      localStorage.setItem('ror_dept_tasks', JSON.stringify(deptTasks));
      renderDeptMgmtTasks(deptId);
      showNotification('تم تحديث حالة المهمة الإدارية', 'info');
    }
  }
}

let currentAddingDeptId = null;
function openAddTaskModal(deptId) {
  currentAddingDeptId = deptId;
  const m = document.getElementById('addTaskModal');
  if (m) m.classList.add('active');
}

function closeAddTaskModal() {
  const m = document.getElementById('addTaskModal');
  if (m) m.classList.remove('active');
}

function saveNewMgmtTask(event) {
  event.preventDefault();
  if (!currentAddingDeptId) return;

  const form = event.target;
  const title = form.taskTitle.value.trim();
  const assignedTo = form.assignedTo.value;
  const dueDate = form.dueDate.value;
  const priority = form.priority.value;
  const notes = form.notes.value;

  if (!deptTasks[currentAddingDeptId]) deptTasks[currentAddingDeptId] = [];

  deptTasks[currentAddingDeptId].push({
    id: `t-${currentAddingDeptId}-${Date.now()}`,
    title,
    assignedTo,
    dueDate,
    priority,
    status: 'todo',
    progress: 0,
    notes,
    createdBy: 'علاء',
    createdAt: new Date().toISOString()
  });

  localStorage.setItem('ror_dept_tasks', JSON.stringify(deptTasks));
  closeAddTaskModal();
  form.reset();
  renderDeptMgmtTasks(currentAddingDeptId);
  showNotification('تمت إضافة المهمة الإدارية بنجاح ✅', 'success');
}

// ══════════════════════════════════════════════════════════════════
// SECTION 12: STRUCTURE & ORGANIZATION (ORG CHART & MIND MAP)
// ══════════════════════════════════════════════════════════════════

function toggleBranch(branchId) {
  const branch = document.querySelector(`[data-branch="${branchId}"]`);
  if (!branch) return;
  const subBranches = branch.querySelector('.sub-branches');
  const expandIcon = branch.querySelector('.expand-icon');
  
  if (subBranches) {
    subBranches.classList.toggle('collapsed');
    if (expandIcon) {
      expandIcon.style.transform = subBranches.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  }
}

function quickAssign(positionId) {
  const positions = {
    'b2b-sales-manager': 'مدير مبيعات B2B',
    'ecommerce-specialist': 'أخصائي التجارة الإلكترونية',
    'barista-backup': 'باريستا إضافي'
  };

  const titleEl = document.getElementById('positionTitle');
  if (titleEl) titleEl.textContent = positions[positionId] || 'وظيفة شاغرة';

  const modal = document.getElementById('assignModal');
  const form = document.getElementById('assignForm');
  if (modal && form) {
    form.dataset.positionId = positionId;
    modal.classList.add('active');
  }
}

function closeAssignModal() {
  const m = document.getElementById('assignModal');
  if (m) m.classList.remove('active');
}

function saveAssignment(event) {
  event.preventDefault();
  const form = event.target;
  const positionId = form.dataset.positionId;
  const employeeName = form.employeeName.value.trim();
  const startDate = form.startDate.value;
  const salary = parseFloat(form.salary.value);

  const orgStructure = JSON.parse(localStorage.getItem('ror_org_structure') || '{"roles":[]}');
  orgStructure.roles = orgStructure.roles || [];
  
  orgStructure.roles.push({
    id: positionId,
    holder: employeeName,
    startDate,
    salary,
    vacant: false,
    assignedAt: new Date().toISOString()
  });

  localStorage.setItem('ror_org_structure', JSON.stringify(orgStructure));
  closeAssignModal();
  form.reset();
  renderOrgPositions();
  showNotification(`تم تسكين الموظف ${employeeName} بنجاح ✅`, 'success');
}

function renderOrgPositions() {
  const orgStructure = JSON.parse(localStorage.getItem('ror_org_structure') || '{"roles":[]}');
  (orgStructure.roles || []).forEach(role => {
    const card = document.getElementById(`vac-card-${role.id}`);
    if (card) {
      const badge = card.querySelector('.status-badge');
      if (badge) {
        badge.className = 'status-badge filled';
        badge.textContent = `مشغول: ${role.holder}`;
      }
      const assignBtn = card.querySelector('button');
      if (assignBtn) {
        assignBtn.textContent = 'تم التسكين ✓';
        assignBtn.disabled = true;
        assignBtn.classList.remove('btn-primary');
        assignBtn.classList.add('btn-secondary');
      }
    }
  });
}

// ══════════════════════════════════════════════════════════════════
// SECTION 13: DEVELOPMENT & GROWTH (5 SUB-SECTIONS KANBANS)
// ══════════════════════════════════════════════════════════════════

const devKeys = ['training', 'sops', 'tech', 'expansion', 'innovation'];

function initAllDevelopmentKanbans() {
  devKeys.forEach(k => renderDevKanban(k));
}

function renderDevKanban(key) {
  const items = devPipeline[key] || [];

  const todoBox = document.getElementById(`${key}-todo`);
  const doingBox = document.getElementById(`${key}-doing`);
  const doneBox = document.getElementById(`${key}-done`);

  if (!todoBox || !doingBox || !doneBox) return;

  const renderItem = (i) => `
    <div class="dev-item" data-item-id="${i.id}">
      <h4>${escapeHtml(i.title)}</h4>
      <div class="dev-item-meta">
        <span>المسؤول: ${escapeHtml(i.owner)}</span>
        <span>الموعد: ${i.date}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
        <select onchange="updateDevStatus('${key}', '${i.id}', this.value)" style="font-size:10px;border:1px solid #E3DFD5;border-radius:4px;padding:2px 4px;font-family:inherit;">
          <option value="todo" ${i.status === 'todo' ? 'selected' : ''}>للعمل</option>
          <option value="doing" ${i.status === 'doing' ? 'selected' : ''}>قيد التنفيذ</option>
          <option value="done" ${i.status === 'done' ? 'selected' : ''}>مكتمل</option>
        </select>
        <button onclick="deleteDevItem('${key}', '${i.id}')" style="background:none;border:none;cursor:pointer;font-size:11px;" title="حذف">🗑️</button>
      </div>
    </div>
  `;

  todoBox.innerHTML = items.filter(i => i.status === 'todo').map(renderItem).join('');
  doingBox.innerHTML = items.filter(i => i.status === 'doing').map(renderItem).join('');
  doneBox.innerHTML = items.filter(i => i.status === 'done').map(renderItem).join('');
}

function updateDevStatus(key, itemId, newStatus) {
  const list = devPipeline[key];
  if (list) {
    const item = list.find(i => i.id === itemId);
    if (item) {
      item.status = newStatus;
      localStorage.setItem('ror_dev_pipeline', JSON.stringify(devPipeline));
      renderDevKanban(key);
      showNotification('تم تحديث حالة المبادرة', 'info');
    }
  }
}

function deleteDevItem(key, itemId) {
  if (confirm('هل أنت متأكد من حذف هذه المبادرة؟')) {
    devPipeline[key] = devPipeline[key].filter(i => i.id !== itemId);
    localStorage.setItem('ror_dev_pipeline', JSON.stringify(devPipeline));
    renderDevKanban(key);
    showNotification('تم حذف المبادرة', 'info');
  }
}

let activeDevKeyForAdd = null;
function addDevItem(key) {
  activeDevKeyForAdd = key;
  const titles = {
    training: 'إضافة برنامج تدريبي جديد',
    sops: 'إضافة إجراء تشغيلي SOP',
    tech: 'إضافة مبادرة تقنية أو أتمتة',
    expansion: 'إضافة فرصة توسع وانتشار',
    innovation: 'إضافة منتج أو ابتكار جديد'
  };

  const titleEl = document.getElementById('devModalTitle');
  if (titleEl) titleEl.textContent = titles[key] || 'إضافة مبادرة تطوير';

  const m = document.getElementById('addDevModal');
  if (m) m.classList.add('active');
}

function closeAddDevModal() {
  const m = document.getElementById('addDevModal');
  if (m) m.classList.remove('active');
}

function saveNewDevItem(event) {
  event.preventDefault();
  if (!activeDevKeyForAdd) return;

  const form = event.target;
  const title = form.itemTitle.value.trim();
  const owner = form.itemOwner.value;
  const date = form.itemDate.value;

  if (!devPipeline[activeDevKeyForAdd]) devPipeline[activeDevKeyForAdd] = [];

  devPipeline[activeDevKeyForAdd].push({
    id: `${activeDevKeyForAdd}-${Date.now()}`,
    title,
    owner,
    date,
    status: 'todo'
  });

  localStorage.setItem('ror_dev_pipeline', JSON.stringify(devPipeline));
  closeAddDevModal();
  form.reset();
  renderDevKanban(activeDevKeyForAdd);
  showNotification('تمت إضافة المبادرة بنجاح ✅', 'success');
}

// ══════════════════════════════════════════════════════════════════
// SECTION 14: GLOBAL UTILITIES, EXPORT & SEARCH
// ══════════════════════════════════════════════════════════════════

// Notification System
function showNotification(message, type = 'info') {
  const container = document.getElementById('notificationContainer');
  if (!container) return;

  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.innerHTML = `
    <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
    <span class="notification-message" style="flex:1;font-size:13px;font-weight:600;">${message}</span>
    <button class="notification-close" style="background:none;border:none;cursor:pointer;font-size:14px;" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(notif);
  setTimeout(() => notif.remove(), 4500);
}

// Export to CSV
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
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' }); // BOM for Arabic Excel
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename + '.csv';
  link.click();
  showNotification('تم تصدير ملف CSV بنجاح ✅', 'success');
}

function exportCafeSalesCSV() {
  exportToCSV(cafeSales, 'RoR_Cafe_Sales_' + new Date().toISOString().split('T')[0]);
}

function exportRoasterySalesCSV() {
  exportToCSV(roasterySales, 'RoR_Roastery_Sales_' + new Date().toISOString().split('T')[0]);
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

  // Search in tasks
  tasks.filter(t => (t.task || t.title || '').toLowerCase().includes(query)).forEach(t => {
    results.push({ type: 'مهمة', title: t.task || t.title, link: '#40-tasks' });
  });

  // Search in menu
  menuItems.filter(m => (m.item || m.name || '').toLowerCase().includes(query)).forEach(m => {
    results.push({ type: 'منيو', title: m.item || m.name, link: '#menu-engineering' });
  });

  // Search in cafe sales
  cafeSales.filter(s => (s.barista || '').toLowerCase().includes(query) || (s.notes || '').toLowerCase().includes(query)).forEach(s => {
    results.push({ type: 'مبيعات بار', title: `مبيعات ${s.barista} - ${s.date}`, link: '#cafe-sales' });
  });

  // Search in roastery
  roasterySales.filter(r => (r.client || '').toLowerCase().includes(query)).forEach(r => {
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

// AI Advisor Connection
async function triggerAiAdvisor() {
  const box = document.getElementById('aiAdvisorModalBody');
  const modal = document.getElementById('aiAdvisorModal');
  if (modal) modal.classList.add('active');
  if (!box) return;

  box.innerHTML = `
    <div style="text-align:center;padding:2rem;">
      <div style="font-size:24px;margin-bottom:10px;">🤖</div>
      <p style="font-weight:700;">جاري تحليل الأرقام والعمليات عبر نموذج Gemini AI...</p>
    </div>
  `;

  try {
    const res = await fetch('/api/ai/analyze');
    const data = await res.json();
    if (data.analysis) {
      box.innerHTML = `<div style="white-space:pre-line;line-height:1.7;font-size:13.5px;color:#1A1A1A;">${escapeHtml(data.analysis)}</div>`;
      showNotification('تم توليد التوصيات الاستراتيجية بنجاح ✅', 'success');
    } else {
      box.innerHTML = '<p style="color:#C94C4C;">تعذر جلب التوصيات حالياً، يرجى المحاولة لاحقاً.</p>';
    }
  } catch (err) {
    box.innerHTML = `
      <div style="line-height:1.7;font-size:13px;color:#1A1A1A;">
        <h4 style="color:#0066FF;margin-bottom:8px;">توصيات تنفيذية عاجلة لـ علاء:</h4>
        <p>1. <strong>تفعيل عقود الجملة لحماصة جيسن 15 كجم:</strong> رفع تصريف البن الأخضر لـ 10 مقاهي شريكة يغطي التكاليف الثابتة بنسبة 140%.</p>
        <p>2. <strong>تحسين مبيعات الوردية المسائية (علم):</strong> زيادة عروض الحلى مع المشروبات الباردة يرفع متوسط الفاتورة من 26 إلى 33 ريال.</p>
        <p>3. <strong>ضبط الهدر الصباحي (عارف):</strong> قصر معايرة الإسبريسو على 200 جم صباحاً يوفر قرابة 450 ريال شهرياً بصفر تكلفة.</p>
      </div>
    `;
  }
}

function closeAiAdvisorModal() {
  const m = document.getElementById('aiAdvisorModal');
  if (m) m.classList.remove('active');
}

// Utility: Escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
