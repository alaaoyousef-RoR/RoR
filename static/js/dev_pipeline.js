/**
 * RoR Enterprise Suite - Development Pipeline & Department Kanban Engine
 * Handles 8 Department Tasks (Expert & Management Kanbans), Development Initiatives, and Org Assignments.
 */

// ══════════════════════════════════════════════════════════════════
// SEED DATA & STATE INITIALIZATION
// ══════════════════════════════════════════════════════════════════

// 1. Department Expert Tasks Seed Data (12 Tasks Per Department = 96 Tasks)
const expertTasksSeed = {
  prod_roastery: [
    { id: "pr-1", text: "فحص معدات التحميص قبل التشغيل (الحماصة الرائدة، المطاحن، صينية التبريد)", freq: "يومي", completed: true },
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
    { id: "sb-3", text: "جدولة وتنفيذ زيارات ميدانية للعملاء لتقديم عينات الحماصة الرائدة", freq: "أسبوعي", completed: true },
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
    { id: "mn-3", text: "صيانة وقائية لالحماصة الرائدة (تنظيف الشعلات، مسار الهواء، فحص السيور)", freq: "أسبوعي", completed: true },
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

// 2. Development Pipeline Seed Data (5 Items Per Category = 25 Items)
const defaultDevPipeline = {
  training: [
    { id: "trn-1", title: "دورة Q-Grader المتقدمة لعلاء (شهادة SCA المعتمدة)", owner: "علاء", date: "2026-10-15", status: "doing" },
    { id: "trn-2", title: "تدريب الباريستا على Latte Art وسرعة الخدمة (عارف وعلم)", owner: "عبدالله", date: "2026-09-25", status: "done" },
    { id: "trn-3", title: "دورة إدارة مبيعات B2B وبناء الشراكات الكبرى", owner: "جود", date: "2026-11-01", status: "todo" },
    { id: "trn-4", title: "ورشة التسويق الرقمي وإعلانات Meta & TikTok الموجهة", owner: "جود", date: "2026-10-05", status: "todo" },
    { id: "trn-5", title: "التدريب على متطلبات المرحلة الثانية للفوترة الإلكترونية (ZATCA)", owner: "أنس", date: "2026-09-30", status: "done" }
  ],
  sops: [
    { id: "sop-1", title: "توثيق إجراءات التحميص الموحدة لالحماصة الرائدة (SOP)", owner: "علاء", date: "2026-09-20", status: "done" },
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

// State Variables (100% Backward Compatible with LocalStorage)
let devPipeline = JSON.parse(localStorage.getItem('ror_dev_pipeline')) || defaultDevPipeline;

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

let deptExpertTasks = JSON.parse(localStorage.getItem('ror_dept_expert_tasks')) || expertTasksSeed;

// ══════════════════════════════════════════════════════════════════
// 8 OPERATIONAL DEPARTMENTS KANBAN
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
        <div class="due-date"><i class="fa-regular fa-calendar me-1"></i> ${t.dueDate || '2026-09-30'}</div>
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
      if (typeof showNotification === 'function') showNotification('تم تحديث حالة المهمة الإدارية', 'info');
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
  if (typeof showNotification === 'function') showNotification('تمت إضافة المهمة الإدارية بنجاح', 'success');
}

// ══════════════════════════════════════════════════════════════════
// STRUCTURE & ORGANIZATION (ORG CHART & MIND MAP)
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
  if (typeof showNotification === 'function') showNotification(`تم تسكين الموظف ${employeeName} بنجاح`, 'success');
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
        assignBtn.innerHTML = '<i class="fa-solid fa-check me-1"></i> تم التسكين';
        assignBtn.disabled = true;
        assignBtn.classList.remove('btn-primary');
        assignBtn.classList.add('btn-secondary');
      }
    }
  });
}

// ══════════════════════════════════════════════════════════════════
// DEVELOPMENT & GROWTH (5 KANBANS PIPELINE)
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
        <button onclick="deleteDevItem('${key}', '${i.id}')" style="background:none;border:none;cursor:pointer;font-size:11px;color:#8E929C;" title="حذف"><i class="fa-solid fa-trash-can"></i></button>
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
      if (typeof showNotification === 'function') showNotification('تم تحديث حالة المبادرة', 'info');
    }
  }
}

function deleteDevItem(key, itemId) {
  if (confirm('هل أنت متأكد من حذف هذه المبادرة؟')) {
    devPipeline[key] = devPipeline[key].filter(i => i.id !== itemId);
    localStorage.setItem('ror_dev_pipeline', JSON.stringify(devPipeline));
    renderDevKanban(key);
    if (typeof showNotification === 'function') showNotification('تم حذف المبادرة', 'info');
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
  if (typeof showNotification === 'function') showNotification('تمت إضافة المبادرة بنجاح', 'success');
}
