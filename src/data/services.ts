// Detailed, SEO-ready content for each research service.
//
// The home-page card title/description still come from the i18n dictionary
// (by index). This file holds the richer per-service detail content and the
// per-page SEO metadata, in both supported languages (en / ar), keyed by slug.

import type { Lang } from "@/i18n/dictionary";

export type ServiceContent = {
  /** Page H1 / card title. */
  title: string;
  /** Short subtitle shown under the title. */
  tagline: string;
  /** Lead paragraph. */
  intro: string;
  /** Body paragraphs. */
  paragraphs: string[];
  /** Bullet list of concrete capabilities / deliverables. */
  capabilities: string[];
  /** <title> for the page. */
  metaTitle: string;
  /** <meta name="description">. */
  metaDescription: string;
  /** <meta name="keywords">. */
  keywords: string[];
};

export type Service = {
  slug: string;
  /** Matches the icon names used in ResearchServicesSection. */
  icon: string;
  /** Display number on the card / detail hero. */
  num: number;
  en: ServiceContent;
  ar: ServiceContent;
};

export const services: Service[] = [
  {
    slug: "data-collection",
    icon: "collect",
    num: 1,
    en: {
      title: "Data Collection",
      tagline: "Comprehensive, accurate data from trusted primary and secondary sources",
      intro:
        "Reliable research begins with reliable data. Our data-collection service gathers comprehensive and accurate information from primary sources — questionnaires, interviews, and direct observation — as well as secondary sources such as official reports and curated databases.",
      paragraphs: [
        "We design the collection workflow around your study objectives, choosing the instruments and channels that best fit your population and timeline. Whether you need a nationwide field survey, a series of expert interviews, or systematic extraction from existing datasets, every step is documented so the resulting data is transparent and auditable.",
        "Throughout the process we apply strict quality controls: trained enumerators, real-time validation, anti-duplication rules, and continuous supervision. The outcome is a clean, well-structured dataset that is ready for analysis and that you can defend with confidence in front of reviewers, stakeholders, or regulators.",
      ],
      capabilities: [
        "Primary collection via questionnaires, interviews, and observation",
        "Secondary collection from reports, registries, and databases",
        "Trained and supervised field teams",
        "Real-time validation and anti-duplication controls",
        "Fully documented, auditable data trail",
      ],
      metaTitle: "Data Collection Services | Horizons Statistical Consulting",
      metaDescription:
        "Professional data collection from primary and secondary sources — surveys, interviews, observation, and database extraction — with strict quality control and full auditability.",
      keywords: [
        "data collection",
        "primary data collection",
        "survey data collection",
        "field data collection",
        "research data gathering",
        "statistical consulting",
      ],
    },
    ar: {
      title: "جمع البيانات",
      tagline: "بيانات شاملة ودقيقة من مصادر أولية وثانوية موثوقة",
      intro:
        "يبدأ البحث الموثوق ببيانات موثوقة. تجمع خدمتنا لجمع البيانات معلومات شاملة ودقيقة من المصادر الأولية — الاستبيانات والمقابلات والملاحظة المباشرة — إضافة إلى المصادر الثانوية مثل التقارير الرسمية وقواعد البيانات المنسّقة.",
      paragraphs: [
        "نصمّم مسار الجمع حول أهداف دراستك، ونختار الأدوات والقنوات الأنسب لمجتمع الدراسة والجدول الزمني. وسواء احتجت إلى مسح ميداني على مستوى الدولة أو سلسلة من مقابلات الخبراء أو استخراج منهجي من بيانات قائمة، يتم توثيق كل خطوة لتكون البيانات الناتجة شفافة وقابلة للتدقيق.",
        "نطبّق طوال العملية ضوابط جودة صارمة: باحثون ميدانيون مدرَّبون، وتحقق لحظي، وقواعد لمنع التكرار، وإشراف مستمر. والنتيجة مجموعة بيانات نظيفة ومنظمة وجاهزة للتحليل يمكنك الدفاع عنها بثقة أمام المراجعين وأصحاب المصلحة والجهات التنظيمية.",
      ],
      capabilities: [
        "جمع أولي عبر الاستبيانات والمقابلات والملاحظة",
        "جمع ثانوي من التقارير والسجلات وقواعد البيانات",
        "فرق ميدانية مدرَّبة وتحت إشراف",
        "تحقق لحظي وضوابط لمنع التكرار",
        "مسار بيانات موثَّق وقابل للتدقيق بالكامل",
      ],
      metaTitle: "خدمات جمع البيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "جمع احترافي للبيانات من مصادر أولية وثانوية — استبيانات ومقابلات وملاحظة واستخراج من قواعد البيانات — مع ضبط جودة صارم وقابلية تدقيق كاملة.",
      keywords: [
        "جمع البيانات",
        "جمع البيانات الأولية",
        "جمع بيانات المسوحات",
        "الجمع الميداني للبيانات",
        "استشارات إحصائية",
      ],
    },
  },
  {
    slug: "tool-design",
    icon: "tool",
    num: 2,
    en: {
      title: "Tool Design",
      tagline: "Scientifically-sound, pilot-tested data collection instruments",
      intro:
        "The quality of your findings can never exceed the quality of the instrument that produced them. We develop and pilot-test scientifically-sound data collection tools — questionnaires, interview protocols, observation checklists — adapted to the exact context of your study.",
      paragraphs: [
        "Each instrument is built from your research objectives and conceptual framework. We translate abstract constructs into clear, unbiased items, choose appropriate scales, and structure the flow so respondents stay engaged and answer accurately.",
        "Before any tool goes to the field it is piloted on a small sample, reviewed for reliability and validity, and refined based on the results. This disciplined design phase removes ambiguity early and protects you from costly data-quality problems later.",
      ],
      capabilities: [
        "Construct-to-item mapping grounded in your framework",
        "Bias-free wording and appropriate response scales",
        "Logical flow and skip-logic design",
        "Pilot testing on representative samples",
        "Reliability and validity refinement before launch",
      ],
      metaTitle: "Research Tool & Questionnaire Design | Horizons Statistical Consulting",
      metaDescription:
        "Design and pilot-testing of scientifically-sound data collection instruments — questionnaires, protocols, and checklists — tailored to your study's context.",
      keywords: [
        "research tool design",
        "questionnaire design",
        "survey instrument design",
        "data collection instrument",
        "pilot testing",
        "research methodology",
      ],
    },
    ar: {
      title: "تصميم الأدوات",
      tagline: "أدوات جمع بيانات سليمة علميًا ومختبَرة تجريبيًا",
      intro:
        "لا يمكن لجودة نتائجك أن تتجاوز جودة الأداة التي أنتجتها. نطوّر ونختبر تجريبيًا أدوات جمع بيانات سليمة علميًا — استبيانات وبروتوكولات مقابلات وقوائم ملاحظة — مكيَّفة مع السياق الدقيق لدراستك.",
      paragraphs: [
        "تُبنى كل أداة انطلاقًا من أهداف بحثك وإطارك المفاهيمي. نحوّل المفاهيم المجردة إلى بنود واضحة وغير منحازة، ونختار المقاييس المناسبة، وننظّم التسلسل ليبقى المستجيبون متفاعلين ويجيبوا بدقة.",
        "قبل نزول أي أداة إلى الميدان، تُختبر تجريبيًا على عينة صغيرة، وتُراجَع من حيث الثبات والصدق، وتُحسَّن بناءً على النتائج. تزيل مرحلة التصميم المنضبطة هذه الغموض مبكرًا وتحميك من مشكلات جودة البيانات المكلفة لاحقًا.",
      ],
      capabilities: [
        "ربط المفاهيم بالبنود استنادًا إلى إطارك النظري",
        "صياغة خالية من التحيّز ومقاييس استجابة مناسبة",
        "تصميم تسلسل منطقي ومنطق تخطّي",
        "اختبار تجريبي على عينات ممثِّلة",
        "تحسين الثبات والصدق قبل الإطلاق",
      ],
      metaTitle: "تصميم أدوات البحث والاستبيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تصميم واختبار تجريبي لأدوات جمع بيانات سليمة علميًا — استبيانات وبروتوكولات وقوائم تحقق — مصمَّمة وفق سياق دراستك.",
      keywords: [
        "تصميم أدوات البحث",
        "تصميم الاستبيانات",
        "تصميم أداة المسح",
        "أداة جمع البيانات",
        "الاختبار التجريبي",
      ],
    },
  },
  {
    slug: "data-processing",
    icon: "process",
    num: 3,
    en: {
      title: "Data Processing",
      tagline: "Clean, coded, and analysis-ready data",
      intro:
        "Raw data is rarely ready for analysis. Our data-processing service cleans, codes, and converts raw inputs into well-structured, analyzable formats so your analysts can start working immediately and with confidence.",
      paragraphs: [
        "We detect and resolve missing values, outliers, and inconsistencies, then apply a transparent coding scheme that preserves the meaning of every variable. All transformations are scripted and version-controlled, so the path from raw to clean data is fully reproducible.",
        "The result is a tidy dataset with a clear codebook and documentation — a foundation that prevents errors downstream and makes every later step, from analysis to reporting, faster and more reliable.",
      ],
      capabilities: [
        "Cleaning of missing values, outliers, and inconsistencies",
        "Transparent, documented coding schemes",
        "Reproducible, scripted transformations",
        "Tidy, analysis-ready output with codebook",
        "Format conversion for any analysis platform",
      ],
      metaTitle: "Data Processing & Cleaning | Horizons Statistical Consulting",
      metaDescription:
        "Cleaning, coding, and conversion of raw data into tidy, analysis-ready datasets with reproducible transformations and full documentation.",
      keywords: [
        "data processing",
        "data cleaning",
        "data coding",
        "data preparation",
        "data wrangling",
        "analysis-ready data",
      ],
    },
    ar: {
      title: "معالجة البيانات",
      tagline: "بيانات نظيفة ومرمَّزة وجاهزة للتحليل",
      intro:
        "نادرًا ما تكون البيانات الخام جاهزة للتحليل. تنظّف خدمتنا لمعالجة البيانات المدخلات الخام وترمّزها وتحوّلها إلى صيغ منظمة وقابلة للتحليل، حتى يبدأ محلّلوك العمل فورًا وبثقة.",
      paragraphs: [
        "نكتشف القيم المفقودة والقيم الشاذة والتناقضات ونعالجها، ثم نطبّق نظام ترميز شفافًا يحافظ على معنى كل متغيّر. وتُكتب جميع التحويلات برمجيًا وتُدار بنُسخ، فيكون المسار من البيانات الخام إلى النظيفة قابلًا للتكرار بالكامل.",
        "والنتيجة مجموعة بيانات مرتبة مع دليل ترميز وتوثيق واضح — أساس يمنع الأخطاء لاحقًا ويجعل كل خطوة تالية، من التحليل إلى إعداد التقارير، أسرع وأكثر موثوقية.",
      ],
      capabilities: [
        "تنظيف القيم المفقودة والشاذة والتناقضات",
        "أنظمة ترميز شفافة وموثَّقة",
        "تحويلات برمجية قابلة للتكرار",
        "مخرجات مرتبة وجاهزة للتحليل مع دليل ترميز",
        "تحويل الصيغ لأي منصة تحليل",
      ],
      metaTitle: "معالجة وتنظيف البيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تنظيف وترميز وتحويل البيانات الخام إلى مجموعات بيانات مرتبة وجاهزة للتحليل مع تحويلات قابلة للتكرار وتوثيق كامل.",
      keywords: [
        "معالجة البيانات",
        "تنظيف البيانات",
        "ترميز البيانات",
        "إعداد البيانات",
        "بيانات جاهزة للتحليل",
      ],
    },
  },
  {
    slug: "validation",
    icon: "verify",
    num: 4,
    en: {
      title: "Validation",
      tagline: "Reliability and validity you can prove",
      intro:
        "Decision-makers need to trust your numbers. Our validation service establishes that trust by formally testing the reliability and validity of your instruments and data, with detailed, defensible reporting.",
      paragraphs: [
        "We assess internal consistency with measures such as Cronbach's alpha, evaluate content and construct validity, and check the stability of your measures across time and raters. Where weaknesses appear, we recommend concrete fixes rather than leaving you with a problem.",
        "Every test is documented with its assumptions, results, and interpretation, giving you an evidence trail that stands up to peer review, accreditation, and stakeholder scrutiny.",
      ],
      capabilities: [
        "Reliability testing (e.g., Cronbach's alpha)",
        "Content and construct validity assessment",
        "Inter-rater and test–retest stability checks",
        "Concrete remediation recommendations",
        "Detailed, peer-review-ready reporting",
      ],
      metaTitle: "Reliability & Validity Testing | Horizons Statistical Consulting",
      metaDescription:
        "Formal reliability and validity testing — Cronbach's alpha, content and construct validity — with detailed, defensible reporting for your research instruments.",
      keywords: [
        "validation",
        "reliability testing",
        "validity testing",
        "Cronbach's alpha",
        "construct validity",
        "instrument validation",
      ],
    },
    ar: {
      title: "التحقق",
      tagline: "ثبات وصدق يمكنك إثباتهما",
      intro:
        "يحتاج صنّاع القرار إلى الثقة بأرقامك. ترسّخ خدمتنا للتحقق هذه الثقة عبر اختبار ثبات وصدق أدواتك وبياناتك بصورة رسمية، مع تقارير مفصّلة وقابلة للدفاع عنها.",
      paragraphs: [
        "نقيس الاتساق الداخلي بمؤشرات مثل ألفا كرونباخ، ونقيّم صدق المحتوى وصدق البناء، ونتحقق من استقرار مقاييسك عبر الزمن وبين المقيِّمين. وحيثما تظهر نقاط ضعف، نوصي بحلول ملموسة بدل تركك أمام المشكلة.",
        "يُوثَّق كل اختبار بافتراضاته ونتائجه وتفسيره، ما يمنحك سجلّ أدلة يصمد أمام مراجعة الأقران والاعتماد وتدقيق أصحاب المصلحة.",
      ],
      capabilities: [
        "اختبار الثبات (مثل ألفا كرونباخ)",
        "تقييم صدق المحتوى وصدق البناء",
        "فحوص الاستقرار بين المقيِّمين وإعادة الاختبار",
        "توصيات معالجة ملموسة",
        "تقارير مفصّلة جاهزة لمراجعة الأقران",
      ],
      metaTitle: "اختبار الثبات والصدق | آفاق للاستشارات الإحصائية",
      metaDescription:
        "اختبار رسمي للثبات والصدق — ألفا كرونباخ وصدق المحتوى والبناء — مع تقارير مفصّلة وقابلة للدفاع عنها لأدوات بحثك.",
      keywords: [
        "التحقق",
        "اختبار الثبات",
        "اختبار الصدق",
        "ألفا كرونباخ",
        "صدق البناء",
      ],
    },
  },
  {
    slug: "field-surveys",
    icon: "field",
    num: 5,
    en: {
      title: "Field Surveys (Paper and Electronic)",
      tagline: "End-to-end field data collection with quality control",
      intro:
        "We manage field surveys from first contact to final dataset, using paper or electronic methods — or a hybrid of both — with quality control built into every stage.",
      paragraphs: [
        "Our field operation covers sampling, enumerator recruitment and training, logistics, and supervision. Electronic data capture through our secure survey platform speeds collection and reduces entry errors, while paper workflows remain available where connectivity or context demand them.",
        "Live monitoring dashboards let us track progress, coverage, and quality in real time, so issues are caught and corrected while the team is still in the field rather than after the data is in.",
      ],
      capabilities: [
        "Sampling design and coverage planning",
        "Enumerator recruitment, training, and supervision",
        "Secure electronic data capture and paper workflows",
        "Real-time progress and quality dashboards",
        "Logistics management across sites",
      ],
      metaTitle: "Field Surveys — Paper & Electronic | Horizons Statistical Consulting",
      metaDescription:
        "End-to-end field survey management using paper and electronic data capture, with sampling, trained enumerators, logistics, and real-time quality control.",
      keywords: [
        "field surveys",
        "electronic data capture",
        "paper surveys",
        "field data collection",
        "survey logistics",
        "enumerator training",
      ],
    },
    ar: {
      title: "المسوحات الميدانية (ورقية وإلكترونية)",
      tagline: "جمع بيانات ميداني من البداية إلى النهاية مع ضبط الجودة",
      intro:
        "ندير المسوحات الميدانية من أول تواصل حتى مجموعة البيانات النهائية، بأساليب ورقية أو إلكترونية — أو مزيج منهما — مع ضبط الجودة في كل مرحلة.",
      paragraphs: [
        "تغطّي عمليتنا الميدانية أخذ العينات، وتوظيف الباحثين الميدانيين وتدريبهم، واللوجستيات، والإشراف. ويسرّع الالتقاط الإلكتروني للبيانات عبر منصتنا الآمنة عملية الجمع ويقلّل أخطاء الإدخال، بينما تبقى المسارات الورقية متاحة حيث يتطلّب السياق أو الاتصال ذلك.",
        "تتيح لنا لوحات المتابعة اللحظية تتبّع التقدّم والتغطية والجودة في الوقت الحقيقي، فتُكتشف المشكلات وتُصحَّح والفريق لا يزال في الميدان بدل اكتشافها بعد دخول البيانات.",
      ],
      capabilities: [
        "تصميم العينة وتخطيط التغطية",
        "توظيف الباحثين الميدانيين وتدريبهم والإشراف عليهم",
        "التقاط إلكتروني آمن للبيانات ومسارات ورقية",
        "لوحات لحظية للتقدّم والجودة",
        "إدارة اللوجستيات عبر المواقع",
      ],
      metaTitle: "المسوحات الميدانية — ورقية وإلكترونية | آفاق للاستشارات الإحصائية",
      metaDescription:
        "إدارة شاملة للمسوحات الميدانية بالالتقاط الورقي والإلكتروني، مع أخذ العينات وباحثين مدرَّبين ولوجستيات وضبط جودة لحظي.",
      keywords: [
        "المسوحات الميدانية",
        "الالتقاط الإلكتروني للبيانات",
        "المسوحات الورقية",
        "جمع البيانات الميداني",
        "تدريب الباحثين الميدانيين",
      ],
    },
  },
  {
    slug: "questionnaires",
    icon: "form",
    num: 6,
    en: {
      title: "Questionnaires",
      tagline: "Targeted, scientifically valid surveys",
      intro:
        "A well-built questionnaire is the difference between data you can use and data you have to apologise for. We design, structure, and test targeted, scientifically valid surveys aligned to your objectives.",
      paragraphs: [
        "We craft questions that are clear, neutral, and answerable, ordered to minimise fatigue and bias. Branching and skip logic keep each respondent on the shortest relevant path, and multilingual versions are prepared and back-translated where needed.",
        "Every questionnaire is tested before launch and tuned for the channel — web, phone, or face-to-face — so it performs reliably wherever your respondents are.",
      ],
      capabilities: [
        "Clear, neutral, answerable question wording",
        "Logical ordering with branching and skip logic",
        "Multilingual versions with back-translation",
        "Channel-tuned for web, phone, or in-person",
        "Pre-launch testing and refinement",
      ],
      metaTitle: "Questionnaire Design Services | Horizons Statistical Consulting",
      metaDescription:
        "Design, structuring, and testing of targeted, scientifically valid questionnaires with branching logic, multilingual versions, and channel tuning.",
      keywords: [
        "questionnaire design",
        "survey design",
        "online survey",
        "survey questions",
        "multilingual survey",
        "research questionnaire",
      ],
    },
    ar: {
      title: "الاستبيانات",
      tagline: "استبيانات موجّهة وصحيحة علميًا",
      intro:
        "الاستبيان المُحكَم هو الفارق بين بيانات تستطيع استخدامها وبيانات تضطر للاعتذار عنها. نصمّم ونهيكل ونختبر استبيانات موجّهة وصحيحة علميًا ومتوافقة مع أهدافك.",
      paragraphs: [
        "نصوغ أسئلة واضحة ومحايدة وقابلة للإجابة، ومرتّبة لتقليل الإرهاق والتحيّز. ويُبقي منطق التفرّع والتخطّي كل مستجيب على أقصر مسار ذي صلة، وتُعدّ نسخ متعددة اللغات مع ترجمة عكسية عند الحاجة.",
        "يُختبر كل استبيان قبل الإطلاق ويُضبط وفق القناة — الويب أو الهاتف أو المقابلة المباشرة — ليعمل بموثوقية أينما كان المستجيبون.",
      ],
      capabilities: [
        "صياغة أسئلة واضحة ومحايدة وقابلة للإجابة",
        "ترتيب منطقي مع منطق تفرّع وتخطّي",
        "نسخ متعددة اللغات مع ترجمة عكسية",
        "ضبط وفق قناة الويب أو الهاتف أو المقابلة",
        "اختبار وتحسين قبل الإطلاق",
      ],
      metaTitle: "خدمات تصميم الاستبيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تصميم وهيكلة واختبار استبيانات موجّهة وصحيحة علميًا مع منطق تفرّع ونسخ متعددة اللغات وضبط وفق القناة.",
      keywords: [
        "تصميم الاستبيانات",
        "تصميم المسح",
        "الاستبيان الإلكتروني",
        "أسئلة الاستبيان",
        "استبيان متعدد اللغات",
      ],
    },
  },
  {
    slug: "data-handling",
    icon: "handle",
    num: 7,
    en: {
      title: "Data Handling",
      tagline: "Accurate, confidential collection, entry, and auditing",
      intro:
        "Sensitive data demands disciplined handling. We ensure accurate, confidential collection, entry, and auditing of your data at every step, protecting both its integrity and the privacy of respondents.",
      paragraphs: [
        "Double entry, automated validation, and reconciliation routines keep error rates low, while role-based access and encryption keep records secure. We align our workflows with recognised data-protection principles so personal information is handled lawfully and ethically.",
        "Regular audits verify that entry matches source, that access is appropriate, and that the chain of custody is intact — giving you a dataset that is both trustworthy and compliant.",
      ],
      capabilities: [
        "Double entry and automated reconciliation",
        "Role-based access control and encryption",
        "Privacy-compliant, ethical workflows",
        "Routine audits and chain-of-custody tracking",
        "Low, measurable error rates",
      ],
      metaTitle: "Data Handling & Entry Services | Horizons Statistical Consulting",
      metaDescription:
        "Accurate and confidential data collection, entry, and auditing with double entry, encryption, role-based access, and privacy-compliant workflows.",
      keywords: [
        "data handling",
        "data entry",
        "data auditing",
        "data confidentiality",
        "data security",
        "data integrity",
      ],
    },
    ar: {
      title: "إدارة البيانات",
      tagline: "جمع وإدخال وتدقيق دقيق وسرّي",
      intro:
        "تتطلّب البيانات الحساسة إدارة منضبطة. نضمن دقة وسرّية جمع بياناتك وإدخالها وتدقيقها في كل خطوة، بما يحمي سلامتها وخصوصية المستجيبين معًا.",
      paragraphs: [
        "يحافظ الإدخال المزدوج والتحقق الآلي وإجراءات المطابقة على انخفاض معدلات الخطأ، بينما يحافظ الوصول القائم على الأدوار والتشفير على أمان السجلات. ونوائم مساراتنا مع مبادئ حماية البيانات المعترف بها لتُعالَج المعلومات الشخصية بصورة قانونية وأخلاقية.",
        "تتحقق عمليات التدقيق الدورية من تطابق الإدخال مع المصدر، ومن ملاءمة الوصول، ومن سلامة سلسلة الحيازة — لتمنحك مجموعة بيانات موثوقة وممتثلة معًا.",
      ],
      capabilities: [
        "إدخال مزدوج ومطابقة آلية",
        "تحكم بالوصول قائم على الأدوار وتشفير",
        "مسارات أخلاقية ممتثلة للخصوصية",
        "تدقيق دوري وتتبّع سلسلة الحيازة",
        "معدلات خطأ منخفضة وقابلة للقياس",
      ],
      metaTitle: "خدمات إدارة وإدخال البيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "جمع وإدخال وتدقيق دقيق وسرّي للبيانات مع إدخال مزدوج وتشفير ووصول قائم على الأدوار ومسارات ممتثلة للخصوصية.",
      keywords: [
        "إدارة البيانات",
        "إدخال البيانات",
        "تدقيق البيانات",
        "سرّية البيانات",
        "أمن البيانات",
      ],
    },
  },
  {
    slug: "data-analysis",
    icon: "analysis",
    num: 8,
    en: {
      title: "Data Analysis",
      tagline: "Quantitative and qualitative analysis with clear, actionable results",
      intro:
        "Data only creates value when it answers a question. Our analysts perform rigorous quantitative and qualitative analysis, then present and interpret the results in clear, actionable terms.",
      paragraphs: [
        "On the quantitative side we apply the right technique for your design — from descriptive statistics and hypothesis testing to regression, multivariate models, and time-series analysis. For qualitative data we use structured coding and thematic analysis to surface patterns that numbers alone miss.",
        "We never stop at the output table. Every result is interpreted in the context of your objectives, with the assumptions, limitations, and practical implications spelled out so you can act with confidence.",
      ],
      capabilities: [
        "Descriptive and inferential statistics",
        "Regression, multivariate, and time-series modelling",
        "Qualitative coding and thematic analysis",
        "Clear interpretation tied to your objectives",
        "Transparent assumptions and limitations",
      ],
      metaTitle: "Statistical Data Analysis | Horizons Statistical Consulting",
      metaDescription:
        "Rigorous quantitative and qualitative data analysis — from descriptive statistics to regression and thematic analysis — with clear, actionable interpretation.",
      keywords: [
        "data analysis",
        "statistical analysis",
        "quantitative analysis",
        "qualitative analysis",
        "regression analysis",
        "statistical consulting",
      ],
    },
    ar: {
      title: "تحليل البيانات",
      tagline: "تحليل كمّي ونوعي بنتائج واضحة وقابلة للتنفيذ",
      intro:
        "لا تخلق البيانات قيمة إلا حين تجيب عن سؤال. يُجري محلّلونا تحليلًا كمّيًا ونوعيًا دقيقًا، ثم يعرضون النتائج ويفسّرونها بصورة واضحة وقابلة للتنفيذ.",
      paragraphs: [
        "على الجانب الكمّي نطبّق الأسلوب المناسب لتصميمك — من الإحصاء الوصفي واختبار الفرضيات إلى الانحدار والنماذج متعددة المتغيرات وتحليل السلاسل الزمنية. وللبيانات النوعية نستخدم الترميز المنظّم والتحليل الموضوعي لإبراز أنماط تغفلها الأرقام وحدها.",
        "لا نتوقف عند جدول المخرجات أبدًا. يُفسَّر كل نتيجة في سياق أهدافك، مع توضيح الافتراضات والقيود والآثار العملية لتتصرّف بثقة.",
      ],
      capabilities: [
        "إحصاء وصفي واستدلالي",
        "نمذجة انحدار ومتعددة المتغيرات وسلاسل زمنية",
        "ترميز نوعي وتحليل موضوعي",
        "تفسير واضح مرتبط بأهدافك",
        "افتراضات وقيود شفافة",
      ],
      metaTitle: "تحليل البيانات الإحصائي | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تحليل كمّي ونوعي دقيق للبيانات — من الإحصاء الوصفي إلى الانحدار والتحليل الموضوعي — مع تفسير واضح وقابل للتنفيذ.",
      keywords: [
        "تحليل البيانات",
        "التحليل الإحصائي",
        "التحليل الكمّي",
        "التحليل النوعي",
        "تحليل الانحدار",
      ],
    },
  },
  {
    slug: "market-research",
    icon: "market",
    num: 9,
    en: {
      title: "Market Research",
      tagline: "Understand consumers, markets, segments, and opportunities",
      intro:
        "Good strategy starts with a clear view of the market. We study consumer behaviour, market size, segments, and opportunities so your decisions rest on evidence rather than assumption.",
      paragraphs: [
        "We combine primary research — surveys, focus groups, interviews — with secondary analysis of industry data to map demand, profile your customers, and size the opportunity. Segmentation reveals who your most valuable audiences are and what drives them.",
        "Findings are delivered as a clear, decision-ready story: where the market is heading, where the gaps are, and what we recommend you do about them.",
      ],
      capabilities: [
        "Consumer behaviour and attitude studies",
        "Market sizing and demand estimation",
        "Customer segmentation and profiling",
        "Opportunity and gap analysis",
        "Decision-ready strategic recommendations",
      ],
      metaTitle: "Market Research Services | Horizons Statistical Consulting",
      metaDescription:
        "Market research covering consumer behaviour, market sizing, segmentation, and opportunity analysis — combining primary and secondary research into decision-ready insight.",
      keywords: [
        "market research",
        "consumer behaviour",
        "market sizing",
        "customer segmentation",
        "market analysis",
        "opportunity analysis",
      ],
    },
    ar: {
      title: "أبحاث السوق",
      tagline: "افهم المستهلكين والأسواق والشرائح والفرص",
      intro:
        "تبدأ الاستراتيجية الجيدة برؤية واضحة للسوق. ندرس سلوك المستهلك وحجم السوق والشرائح والفرص لتستند قراراتك إلى الأدلة لا إلى الافتراض.",
      paragraphs: [
        "نمزج البحث الأولي — الاستبيانات ومجموعات التركيز والمقابلات — مع التحليل الثانوي لبيانات القطاع لرسم خريطة الطلب وتوصيف عملائك وتقدير حجم الفرصة. وتكشف التجزئة من هم جمهورك الأكثر قيمة وما الذي يحرّكهم.",
        "تُقدَّم النتائج كقصة واضحة جاهزة للقرار: إلى أين يتجه السوق، وأين الفجوات، وما الذي نوصي بفعله حيالها.",
      ],
      capabilities: [
        "دراسات سلوك المستهلك ومواقفه",
        "تقدير حجم السوق والطلب",
        "تجزئة العملاء وتوصيفهم",
        "تحليل الفرص والفجوات",
        "توصيات استراتيجية جاهزة للقرار",
      ],
      metaTitle: "خدمات أبحاث السوق | آفاق للاستشارات الإحصائية",
      metaDescription:
        "أبحاث سوق تغطي سلوك المستهلك وحجم السوق والتجزئة وتحليل الفرص — تمزج البحث الأولي والثانوي في رؤية جاهزة للقرار.",
      keywords: [
        "أبحاث السوق",
        "سلوك المستهلك",
        "حجم السوق",
        "تجزئة العملاء",
        "تحليل السوق",
      ],
    },
  },
  {
    slug: "quality-studies",
    icon: "quality",
    num: 10,
    en: {
      title: "Quality Studies",
      tagline: "Evaluate services and processes against standards",
      intro:
        "You cannot improve what you do not measure. Our quality studies evaluate your services and processes against recognised standards and deliver concrete recommendations for improvement.",
      paragraphs: [
        "We define the right criteria for your context, gather evidence through audits, observation, and stakeholder feedback, and benchmark performance against standards and peers. Gaps are quantified, not just described.",
        "The deliverable is a prioritised improvement roadmap — what to fix first, the expected impact, and how to measure progress — so quality becomes a managed, continuous process rather than a one-off check.",
      ],
      capabilities: [
        "Criteria definition aligned to standards",
        "Evidence gathering via audits and feedback",
        "Benchmarking against standards and peers",
        "Quantified gap analysis",
        "Prioritised improvement roadmap",
      ],
      metaTitle: "Quality Studies & Evaluation | Horizons Statistical Consulting",
      metaDescription:
        "Evaluate services and processes against standards with benchmarking, quantified gap analysis, and a prioritised, measurable improvement roadmap.",
      keywords: [
        "quality studies",
        "quality evaluation",
        "process evaluation",
        "benchmarking",
        "service quality",
        "continuous improvement",
      ],
    },
    ar: {
      title: "دراسات الجودة",
      tagline: "تقييم الخدمات والعمليات وفق المعايير",
      intro:
        "لا يمكنك تحسين ما لا تقيسه. تقيّم دراسات الجودة لدينا خدماتك وعملياتك وفق المعايير المعتمدة وتقدّم توصيات ملموسة للتحسين.",
      paragraphs: [
        "نحدّد المعايير المناسبة لسياقك، ونجمع الأدلة عبر التدقيق والملاحظة وآراء أصحاب المصلحة، ونقارن الأداء بالمعايير والأقران. وتُقاس الفجوات كمّيًا لا توصف فحسب.",
        "والمُخرَج خارطة طريق تحسين مرتّبة بالأولوية — ما الذي يُصلَح أولًا، والأثر المتوقع، وكيفية قياس التقدّم — لتصبح الجودة عملية مُدارة ومستمرة لا فحصًا لمرة واحدة.",
      ],
      capabilities: [
        "تحديد المعايير بما يوائم المقاييس",
        "جمع الأدلة عبر التدقيق والآراء",
        "المقارنة المرجعية بالمعايير والأقران",
        "تحليل فجوات كمّي",
        "خارطة طريق تحسين مرتّبة بالأولوية",
      ],
      metaTitle: "دراسات وتقييم الجودة | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تقييم الخدمات والعمليات وفق المعايير مع مقارنة مرجعية وتحليل فجوات كمّي وخارطة طريق تحسين مرتّبة وقابلة للقياس.",
      keywords: [
        "دراسات الجودة",
        "تقييم الجودة",
        "تقييم العمليات",
        "المقارنة المرجعية",
        "جودة الخدمة",
      ],
    },
  },
  {
    slug: "visualization",
    icon: "viz",
    num: 11,
    en: {
      title: "Visualization",
      tagline: "Charts, graphs, and tables that make results clear",
      intro:
        "The clearest analysis is wasted if no one understands it. We create charts, graphs, and tables that present trends and results clearly, turning complex output into insight your audience grasps at a glance.",
      paragraphs: [
        "We choose the right visual for each message — comparison, distribution, trend, or relationship — and design it for honesty and clarity, free of distortion and clutter. Dashboards bring the most important indicators together in one place.",
        "Every visual is built to match your brand and audience, whether it appears in an academic paper, a board deck, or an interactive online dashboard.",
      ],
      capabilities: [
        "Message-appropriate chart and graph selection",
        "Honest, clutter-free, accessible design",
        "Interactive dashboards for key indicators",
        "Publication- and presentation-ready output",
        "On-brand styling for any audience",
      ],
      metaTitle: "Data Visualization Services | Horizons Statistical Consulting",
      metaDescription:
        "Clear, honest data visualization — charts, graphs, tables, and interactive dashboards — that turn complex analysis into insight your audience grasps instantly.",
      keywords: [
        "data visualization",
        "charts and graphs",
        "dashboards",
        "data presentation",
        "infographics",
        "reporting visuals",
      ],
    },
    ar: {
      title: "التمثيل البصري",
      tagline: "رسوم ومخططات وجداول توضّح النتائج",
      intro:
        "أوضح تحليل يضيع إن لم يفهمه أحد. ننشئ رسومًا ومخططات وجداول تعرض الاتجاهات والنتائج بوضوح، فنحوّل المخرجات المعقدة إلى رؤية يدركها جمهورك بلمحة.",
      paragraphs: [
        "نختار التمثيل البصري المناسب لكل رسالة — مقارنة أو توزيع أو اتجاه أو علاقة — ونصمّمه للصدق والوضوح، خاليًا من التشويه والازدحام. وتجمع اللوحات أهم المؤشرات في مكان واحد.",
        "يُبنى كل تمثيل بصري ليلائم علامتك وجمهورك، سواء ظهر في ورقة أكاديمية أو عرض لمجلس الإدارة أو لوحة تفاعلية عبر الإنترنت.",
      ],
      capabilities: [
        "اختيار رسوم ومخططات مناسبة للرسالة",
        "تصميم صادق وخالٍ من الازدحام ومتاح",
        "لوحات تفاعلية لأهم المؤشرات",
        "مخرجات جاهزة للنشر والعرض",
        "تنسيق متوائم مع العلامة لأي جمهور",
      ],
      metaTitle: "خدمات التمثيل البصري للبيانات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تمثيل بصري واضح وصادق للبيانات — رسوم ومخططات وجداول ولوحات تفاعلية — يحوّل التحليل المعقد إلى رؤية يدركها جمهورك فورًا.",
      keywords: [
        "التمثيل البصري للبيانات",
        "الرسوم والمخططات",
        "اللوحات التفاعلية",
        "عرض البيانات",
        "الرسوم المعلوماتية",
      ],
    },
  },
  {
    slug: "reporting",
    icon: "report",
    num: 12,
    en: {
      title: "Reporting",
      tagline: "Comprehensive reports with methodology, findings, and recommendations",
      intro:
        "A report is where research becomes decision. We write comprehensive reports that document methodology, present findings clearly, and deliver actionable recommendations your stakeholders can use.",
      paragraphs: [
        "Each report is structured for its audience: an executive summary for decision-makers, a transparent methodology section for reviewers, and clearly visualised findings throughout. We write in plain, precise language and let the evidence lead.",
        "Recommendations are specific and prioritised, linked directly to the findings that support them, so the path from data to action is obvious.",
      ],
      capabilities: [
        "Executive summaries for decision-makers",
        "Transparent, reproducible methodology sections",
        "Clearly visualised findings",
        "Specific, prioritised recommendations",
        "Plain, precise, audience-appropriate writing",
      ],
      metaTitle: "Research Reporting Services | Horizons Statistical Consulting",
      metaDescription:
        "Comprehensive research reports documenting methodology, findings, and prioritised, actionable recommendations — written clearly for each audience.",
      keywords: [
        "research reporting",
        "report writing",
        "statistical report",
        "research findings",
        "executive summary",
        "recommendations",
      ],
    },
    ar: {
      title: "إعداد التقارير",
      tagline: "تقارير شاملة بالمنهجية والنتائج والتوصيات",
      intro:
        "التقرير هو حيث يتحوّل البحث إلى قرار. نكتب تقارير شاملة توثّق المنهجية وتعرض النتائج بوضوح وتقدّم توصيات قابلة للتنفيذ يستطيع أصحاب المصلحة استخدامها.",
      paragraphs: [
        "يُهيكل كل تقرير وفق جمهوره: ملخص تنفيذي لصنّاع القرار، وقسم منهجية شفاف للمراجعين، ونتائج ممثَّلة بصريًا بوضوح في كل أجزائه. نكتب بلغة دقيقة وبسيطة وندَع الأدلة تقود.",
        "تكون التوصيات محدّدة ومرتّبة بالأولوية ومرتبطة مباشرة بالنتائج الداعمة لها، فيصبح المسار من البيانات إلى الفعل واضحًا.",
      ],
      capabilities: [
        "ملخصات تنفيذية لصنّاع القرار",
        "أقسام منهجية شفافة وقابلة للتكرار",
        "نتائج ممثَّلة بصريًا بوضوح",
        "توصيات محدّدة ومرتّبة بالأولوية",
        "كتابة دقيقة وبسيطة وملائمة للجمهور",
      ],
      metaTitle: "خدمات إعداد التقارير البحثية | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تقارير بحثية شاملة توثّق المنهجية والنتائج وتقدّم توصيات قابلة للتنفيذ ومرتّبة بالأولوية — مكتوبة بوضوح لكل جمهور.",
      keywords: [
        "إعداد التقارير البحثية",
        "كتابة التقارير",
        "التقرير الإحصائي",
        "نتائج البحث",
        "الملخص التنفيذي",
      ],
    },
  },
  {
    slug: "interpretation",
    icon: "interpret",
    num: 13,
    en: {
      title: "Interpretation",
      tagline: "Results explained in context and linked to your objectives",
      intro:
        "Numbers do not speak for themselves. We explain results in context, linking each analysis back to your objectives and drawing out the practical implications that matter.",
      paragraphs: [
        "We translate statistical output into meaning: what the effect sizes imply in real terms, how confident you can be, and what the findings do and do not allow you to conclude. We are explicit about uncertainty rather than overselling.",
        "By connecting every result to a decision you face, we make sure the research changes what you do, not just what you know.",
      ],
      capabilities: [
        "Plain-language explanation of statistical output",
        "Effect sizes framed in real-world terms",
        "Honest treatment of uncertainty and limits",
        "Findings tied to specific decisions",
        "Practical, defensible conclusions",
      ],
      metaTitle: "Results Interpretation Services | Horizons Statistical Consulting",
      metaDescription:
        "Expert interpretation of statistical results — explained in context, linked to your objectives, with honest treatment of uncertainty and practical implications.",
      keywords: [
        "results interpretation",
        "statistical interpretation",
        "data interpretation",
        "effect size",
        "research implications",
        "decision support",
      ],
    },
    ar: {
      title: "التفسير",
      tagline: "نتائج مشروحة في سياقها ومرتبطة بأهدافك",
      intro:
        "لا تتحدث الأرقام عن نفسها. نشرح النتائج في سياقها، ونربط كل تحليل بأهدافك، ونستخلص الآثار العملية المهمة.",
      paragraphs: [
        "نترجم المخرجات الإحصائية إلى معنى: ماذا تعني أحجام الأثر واقعيًا، ومدى الثقة الممكنة، وما الذي تتيح النتائج استنتاجه وما لا تتيحه. ونكون صريحين بشأن عدم اليقين بدل المبالغة.",
        "بربط كل نتيجة بقرار تواجهه، نضمن أن يغيّر البحث ما تفعله لا ما تعرفه فقط.",
      ],
      capabilities: [
        "شرح المخرجات الإحصائية بلغة بسيطة",
        "تأطير أحجام الأثر بمصطلحات واقعية",
        "معالجة صادقة لعدم اليقين والحدود",
        "ربط النتائج بقرارات محددة",
        "استنتاجات عملية وقابلة للدفاع عنها",
      ],
      metaTitle: "خدمات تفسير النتائج | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تفسير خبير للنتائج الإحصائية — مشروح في سياقه ومرتبط بأهدافك، مع معالجة صادقة لعدم اليقين والآثار العملية.",
      keywords: [
        "تفسير النتائج",
        "التفسير الإحصائي",
        "تفسير البيانات",
        "حجم الأثر",
        "آثار البحث",
      ],
    },
  },
  {
    slug: "review",
    icon: "review",
    num: 14,
    en: {
      title: "Review",
      tagline: "Validate statistical methods and ensure accuracy",
      intro:
        "A second expert eye protects your credibility. We review statistical methods and analyses, validate their accuracy and relevance, and provide constructive feedback before your work is published or presented.",
      paragraphs: [
        "We check that the methods match the research questions and data, that assumptions are met, and that the analysis is executed and reported correctly. Where we find issues, we explain them clearly and suggest sound alternatives.",
        "This independent review is ideal ahead of journal submission, thesis defence, or any high-stakes decision where statistical errors would be costly.",
      ],
      capabilities: [
        "Method-to-question and assumption checks",
        "Verification of analysis execution and reporting",
        "Clear, constructive feedback",
        "Sound alternative recommendations",
        "Pre-submission and pre-defence review",
      ],
      metaTitle: "Statistical Review Services | Horizons Statistical Consulting",
      metaDescription:
        "Independent review of statistical methods and analyses — validating accuracy, checking assumptions, and providing constructive feedback before publication or defence.",
      keywords: [
        "statistical review",
        "methods review",
        "analysis validation",
        "peer review support",
        "statistical accuracy",
        "research review",
      ],
    },
    ar: {
      title: "المراجعة",
      tagline: "التحقق من الأساليب الإحصائية وضمان الدقة",
      intro:
        "عينٌ خبيرة ثانية تحمي مصداقيتك. نراجع الأساليب والتحليلات الإحصائية ونتحقق من دقتها وملاءمتها ونقدّم ملاحظات بنّاءة قبل نشر عملك أو عرضه.",
      paragraphs: [
        "نتحقق من مطابقة الأساليب لأسئلة البحث والبيانات، ومن استيفاء الافتراضات، ومن تنفيذ التحليل والإبلاغ عنه بصورة صحيحة. وحيثما نجد مشكلات، نشرحها بوضوح ونقترح بدائل سليمة.",
        "هذه المراجعة المستقلة مثالية قبل التقديم لمجلة علمية أو مناقشة الأطروحة أو أي قرار عالي المخاطر تكون فيه الأخطاء الإحصائية مكلفة.",
      ],
      capabilities: [
        "فحص مطابقة الأسلوب للسؤال والافتراضات",
        "التحقق من تنفيذ التحليل والإبلاغ عنه",
        "ملاحظات واضحة وبنّاءة",
        "توصيات ببدائل سليمة",
        "مراجعة قبل التقديم وقبل المناقشة",
      ],
      metaTitle: "خدمات المراجعة الإحصائية | آفاق للاستشارات الإحصائية",
      metaDescription:
        "مراجعة مستقلة للأساليب والتحليلات الإحصائية — تحقق من الدقة وفحص للافتراضات وملاحظات بنّاءة قبل النشر أو المناقشة.",
      keywords: [
        "المراجعة الإحصائية",
        "مراجعة الأساليب",
        "التحقق من التحليل",
        "دعم مراجعة الأقران",
        "الدقة الإحصائية",
      ],
    },
  },
  {
    slug: "research-design",
    icon: "design",
    num: 15,
    en: {
      title: "Research Design",
      tagline: "A scientific plan, timeline, and methodology",
      intro:
        "Strong research is designed, not improvised. We develop a scientific plan — with timeline, methodology, and the right data-collection tools — that gives your study the best chance of producing valid, useful answers.",
      paragraphs: [
        "Starting from your questions and constraints, we choose an appropriate design (experimental, quasi-experimental, survey, or qualitative), define the population and sampling strategy, and specify how each variable will be measured and analysed.",
        "The plan anticipates the practical and ethical issues that derail projects — sample access, bias, timing, approvals — and addresses them up front, so execution runs smoothly and the results hold up.",
      ],
      capabilities: [
        "Design selection matched to your questions",
        "Population definition and sampling strategy",
        "Measurement and analysis plan",
        "Realistic timeline and milestones",
        "Ethical and practical risk mitigation",
      ],
      metaTitle: "Research Design Services | Horizons Statistical Consulting",
      metaDescription:
        "Scientific research design — methodology, sampling, measurement, and timeline — that gives your study the best chance of valid, useful, defensible results.",
      keywords: [
        "research design",
        "study design",
        "research methodology",
        "sampling strategy",
        "experimental design",
        "research planning",
      ],
    },
    ar: {
      title: "تصميم البحث",
      tagline: "خطة علمية وجدول زمني ومنهجية",
      intro:
        "البحث القوي يُصمَّم ولا يُرتجَل. نطوّر خطة علمية — بجدول زمني ومنهجية وأدوات جمع البيانات المناسبة — تمنح دراستك أفضل فرصة لإنتاج إجابات صحيحة ومفيدة.",
      paragraphs: [
        "انطلاقًا من أسئلتك وقيودك، نختار تصميمًا مناسبًا (تجريبيًا أو شبه تجريبي أو مسحيًا أو نوعيًا)، ونحدّد المجتمع واستراتيجية أخذ العينة، ونعيّن كيف يُقاس كل متغيّر ويُحلَّل.",
        "تستبق الخطة القضايا العملية والأخلاقية التي تعرقل المشاريع — الوصول للعينة والتحيّز والتوقيت والموافقات — وتعالجها مسبقًا، فيسير التنفيذ بسلاسة وتصمد النتائج.",
      ],
      capabilities: [
        "اختيار تصميم يطابق أسئلتك",
        "تعريف المجتمع واستراتيجية أخذ العينة",
        "خطة قياس وتحليل",
        "جدول زمني ومعالم واقعية",
        "تخفيف المخاطر الأخلاقية والعملية",
      ],
      metaTitle: "خدمات تصميم البحث | آفاق للاستشارات الإحصائية",
      metaDescription:
        "تصميم بحث علمي — منهجية وأخذ عينات وقياس وجدول زمني — يمنح دراستك أفضل فرصة لنتائج صحيحة ومفيدة وقابلة للدفاع عنها.",
      keywords: [
        "تصميم البحث",
        "تصميم الدراسة",
        "منهجية البحث",
        "استراتيجية أخذ العينات",
        "تخطيط البحث",
      ],
    },
  },
  {
    slug: "literature-review",
    icon: "literature",
    num: 16,
    en: {
      title: "Literature Review",
      tagline: "Summarise prior studies, identify gaps, frame the theory",
      intro:
        "Every strong study stands on what came before it. We summarise previous studies, identify the gaps your research can fill, and present a coherent theoretical framework to anchor your work.",
      paragraphs: [
        "We search the literature systematically, screen sources for relevance and quality, and synthesise what is known into a clear narrative rather than a list of summaries. Conflicting findings and methodological limits are highlighted, not hidden.",
        "The output positions your study precisely: it shows why your questions matter, where the field is unsettled, and how your work advances it — exactly what reviewers and committees look for.",
      ],
      capabilities: [
        "Systematic search and source screening",
        "Quality appraisal of evidence",
        "Synthesis into a coherent narrative",
        "Clear identification of research gaps",
        "Theoretical framework development",
      ],
      metaTitle: "Literature Review Services | Horizons Statistical Consulting",
      metaDescription:
        "Systematic literature reviews that summarise prior studies, appraise evidence, identify research gaps, and build a coherent theoretical framework for your study.",
      keywords: [
        "literature review",
        "systematic review",
        "research gap analysis",
        "theoretical framework",
        "academic writing",
        "evidence synthesis",
      ],
    },
    ar: {
      title: "مراجعة الأدبيات",
      tagline: "تلخيص الدراسات السابقة وتحديد الفجوات وتأطير النظرية",
      intro:
        "كل دراسة قوية تقف على ما سبقها. نلخّص الدراسات السابقة، ونحدّد الفجوات التي يمكن لبحثك ملؤها، ونقدّم إطارًا نظريًا متماسكًا يرسّخ عملك.",
      paragraphs: [
        "نبحث في الأدبيات بصورة منهجية، ونفرز المصادر من حيث الصلة والجودة، ونركّب المعروف في سرد واضح بدل قائمة ملخصات. وتُبرَز النتائج المتعارضة والحدود المنهجية لا تُخفى.",
        "يحدّد المُخرَج موقع دراستك بدقة: يُظهر لماذا تهم أسئلتك، وأين يبقى المجال غير محسوم، وكيف يدفعه عملك قدمًا — وهو تحديدًا ما يبحث عنه المراجعون واللجان.",
      ],
      capabilities: [
        "بحث منهجي وفرز للمصادر",
        "تقييم جودة الأدلة",
        "تركيب في سرد متماسك",
        "تحديد واضح للفجوات البحثية",
        "تطوير إطار نظري",
      ],
      metaTitle: "خدمات مراجعة الأدبيات | آفاق للاستشارات الإحصائية",
      metaDescription:
        "مراجعات أدبيات منهجية تلخّص الدراسات السابقة وتقيّم الأدلة وتحدّد الفجوات البحثية وتبني إطارًا نظريًا متماسكًا لدراستك.",
      keywords: [
        "مراجعة الأدبيات",
        "المراجعة المنهجية",
        "تحليل الفجوة البحثية",
        "الإطار النظري",
        "الكتابة الأكاديمية",
      ],
    },
  },
  {
    slug: "objectives-and-questions",
    icon: "objectives",
    num: 17,
    en: {
      title: "Objectives & Questions",
      tagline: "Clear, measurable goals and aligned research questions",
      intro:
        "Vague aims produce vague results. We help you formulate clear, measurable objectives and research questions that are tightly aligned with your study design and analysis plan.",
      paragraphs: [
        "We sharpen broad ideas into specific, answerable questions and translate them into objectives that can actually be measured. Each question is checked for feasibility and for a direct line to the data and methods that will address it.",
        "Well-framed objectives keep the whole project focused: they guide the design, define success, and make analysis and interpretation straightforward.",
      ],
      capabilities: [
        "Specific, answerable research questions",
        "Measurable, well-scoped objectives",
        "Alignment with design and analysis",
        "Feasibility and clarity checks",
        "A focused foundation for the whole study",
      ],
      metaTitle: "Research Objectives & Questions | Horizons Statistical Consulting",
      metaDescription:
        "Formulate clear, measurable research objectives and aligned, answerable research questions that keep your study focused and your analysis straightforward.",
      keywords: [
        "research objectives",
        "research questions",
        "research aims",
        "measurable objectives",
        "study scope",
        "research focus",
      ],
    },
    ar: {
      title: "الأهداف والأسئلة",
      tagline: "أهداف واضحة وقابلة للقياس وأسئلة بحثية متوائمة",
      intro:
        "الأهداف الغامضة تنتج نتائج غامضة. نساعدك على صياغة أهداف وأسئلة بحثية واضحة وقابلة للقياس ومتوائمة بإحكام مع تصميم دراستك وخطة تحليلك.",
      paragraphs: [
        "نصقل الأفكار العامة إلى أسئلة محددة قابلة للإجابة، ونترجمها إلى أهداف يمكن قياسها فعلًا. ويُفحَص كل سؤال من حيث الجدوى ومن حيث ارتباطه المباشر بالبيانات والأساليب التي ستعالجه.",
        "تُبقي الأهداف المُحكمة المشروع كله مركّزًا: توجّه التصميم، وتحدّد معنى النجاح، وتجعل التحليل والتفسير مباشرين.",
      ],
      capabilities: [
        "أسئلة بحثية محددة وقابلة للإجابة",
        "أهداف قابلة للقياس ومحددة النطاق",
        "مواءمة مع التصميم والتحليل",
        "فحوص الجدوى والوضوح",
        "أساس مركّز للدراسة كلها",
      ],
      metaTitle: "أهداف وأسئلة البحث | آفاق للاستشارات الإحصائية",
      metaDescription:
        "صياغة أهداف بحثية واضحة وقابلة للقياس وأسئلة بحثية متوائمة وقابلة للإجابة تُبقي دراستك مركّزة وتحليلك مباشرًا.",
      keywords: [
        "أهداف البحث",
        "أسئلة البحث",
        "غايات البحث",
        "أهداف قابلة للقياس",
        "نطاق الدراسة",
      ],
    },
  },
  {
    slug: "proposal-review",
    icon: "proposal",
    num: 18,
    en: {
      title: "Proposal Review",
      tagline: "Evaluate problem clarity, design consistency, and data plans",
      intro:
        "Before you commit time and budget, make sure the plan holds together. We evaluate research proposals for problem clarity, design consistency, and the soundness of the data-collection plan, and return concrete feedback for improvement.",
      paragraphs: [
        "We assess whether the problem is well defined, whether the objectives, design, and methods form a consistent whole, and whether the sampling and data-collection plans can actually deliver the evidence the study needs. Risks and weak points are flagged early.",
        "Our feedback is specific and prioritised, so you can strengthen the proposal before submission to a committee, funder, or client — improving both its chances of approval and its eventual quality.",
      ],
      capabilities: [
        "Problem-statement clarity assessment",
        "Consistency check across aims, design, methods",
        "Sampling and data-plan feasibility review",
        "Early risk and weak-point flagging",
        "Specific, prioritised improvement feedback",
      ],
      metaTitle: "Research Proposal Review | Horizons Statistical Consulting",
      metaDescription:
        "Expert proposal review evaluating problem clarity, design consistency, and data-collection feasibility, with specific, prioritised feedback before submission.",
      keywords: [
        "proposal review",
        "research proposal",
        "proposal evaluation",
        "grant proposal review",
        "research feasibility",
        "proposal feedback",
      ],
    },
    ar: {
      title: "مراجعة المقترحات",
      tagline: "تقييم وضوح المشكلة واتساق التصميم وخطط البيانات",
      intro:
        "قبل أن تلتزم بالوقت والميزانية، تأكّد من تماسك الخطة. نقيّم مقترحات البحث من حيث وضوح المشكلة واتساق التصميم وسلامة خطة جمع البيانات، ونعيد ملاحظات ملموسة للتحسين.",
      paragraphs: [
        "نقيّم ما إذا كانت المشكلة محددة جيدًا، وما إذا كانت الأهداف والتصميم والأساليب تشكّل كلًا متّسقًا، وما إذا كانت خطط أخذ العينات وجمع البيانات قادرة فعلًا على تقديم الأدلة التي تحتاجها الدراسة. وتُبرَز المخاطر ونقاط الضعف مبكرًا.",
        "ملاحظاتنا محددة ومرتّبة بالأولوية، لتقوّي المقترح قبل تقديمه للجنة أو جهة تمويل أو عميل — فترفع فرص قبوله وجودته النهائية معًا.",
      ],
      capabilities: [
        "تقييم وضوح بيان المشكلة",
        "فحص الاتساق بين الأهداف والتصميم والأساليب",
        "مراجعة جدوى خطة العينة والبيانات",
        "إبراز المخاطر ونقاط الضعف مبكرًا",
        "ملاحظات تحسين محددة ومرتّبة بالأولوية",
      ],
      metaTitle: "مراجعة مقترحات البحث | آفاق للاستشارات الإحصائية",
      metaDescription:
        "مراجعة خبيرة للمقترحات تقيّم وضوح المشكلة واتساق التصميم وجدوى جمع البيانات، مع ملاحظات محددة ومرتّبة بالأولوية قبل التقديم.",
      keywords: [
        "مراجعة المقترحات",
        "مقترح البحث",
        "تقييم المقترح",
        "مراجعة مقترح المنحة",
        "جدوى البحث",
      ],
    },
  },
];

const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceMap.get(slug);
}

export function getServiceContent(slug: string, lang: Lang): ServiceContent | undefined {
  return serviceMap.get(slug)?.[lang];
}

export const serviceSlugs = services.map((s) => s.slug);
