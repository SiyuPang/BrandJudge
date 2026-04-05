import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

// ─── SUPABASE CLIENT ──────────────────────────────────────────────────────────
const supabase = createClient(
  "https://uxaiecxoxknrtxlzrety.supabase.co",
  "sb_publishable_RFFxc5zGI048RKVSwz4weQ_RmXY3MOC"
);

// ─── MOBILE HOOK ──────────────────────────────────────────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 640);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

// ─── I18N ─────────────────────────────────────────────────────────────────────
const T = {
  en: {
    appName: "BrandJudge",
    dashboard: "Dashboard",
    newEntry: "+ New",
    logout: "Logout",
    yourBrandLog: "Your Brand Log",
    tagline: "Predict → Observe → Validate → Learn",
    logged: "Logged",
    validated: "Validated",
    predAccuracy: "Prediction Accuracy",
    searchPlaceholder: "Search brands or products...",
    allCategories: "All Categories",
    newestFirst: "Newest First",
    highestScore: "Highest Score",
    validatedFirst: "Validated First",
    noEntries: "No entries yet",
    noEntriesHint: "Start by adding a product you spotted",
    predicted: "Predicted",
    notValidated: "Not Validated",
    seenAgain: "👁 Seen Again",
    seenAgainPlaceholder: "Where did you see it? (e.g. Target checkout aisle)",
    log: "Log",
    backToDashboard: "← Back to Dashboard",
    editEntry: "Edit Entry",
    exportReport: "↓ Export Report",
    logNewEntry: "Log New Entry",
    editEntryTitle: "Edit Entry",
    predictionHint: "Complete your prediction before unlocking AI research.",
    // Form sections
    s1: "Basic Info",
    s2: "Product Images",
    s2sub: "Upload front and back label for reference",
    s3: "Quick Observation",
    s3sub: "Keep it fast — first impressions only",
    s4: "Your Prediction",
    s4locked: "🔒 Locked — cannot be edited",
    s4hint: "⚠ Must be submitted before AI Research unlocks",
    s5: "Scoring",
    s5sub: "Rate each dimension 1–10 with required reasons",
    s6: "Risk",
    s6sub: "At least 2 reasons this might fail",
    s7: "Research Prompt",
    s7sub: "Generate a prompt to paste into your AI of choice",
    s7locked: "Unlocks after prediction is locked",
    s8: "Validation",
    s8sub: "Fill this later when you revisit the product",
    s9: "Notes",
    s9sub: "Free-form thoughts, context, anything worth remembering",
    // Fields
    brand: "Brand",
    product: "Product",
    category: "Category",
    seenAt: "Seen At",
    dateObserved: "Date Observed",
    frontImg: "Front",
    backImg: "Back Label",
    packaging: "Packaging (3 sentences)",
    packagingPlaceholder: "Describe the packaging design, colors, feel...",
    firstImpression: "First Impression (1 sentence)",
    firstImpressionPlaceholder: "My gut reaction in one sentence...",
    wouldBuy: "Would I Buy It?",
    willSell: "Will it sell well?",
    why: "Why? (up to 3 bullet points)",
    targetUser: "Target User",
    targetUserPlaceholder: "Who would buy this?",
    bestDist: "Best Distribution",
    bestDistPlaceholder: "Where should it be sold?",
    lockPrediction: "Lock Prediction →",
    willSellLabel: "Will Sell",
    targetUserLabel: "Target User",
    distributionLabel: "Distribution",
    whyLabel: "Why",
    totalScore: "Total Score",
    reason: "Reason",
    required: "(required)",
    riskFactor: "Risk factor",
    riskRequired: "(required)",
    riskOptional: "(optional)",
    generateAI: "✦ Generate AI Research",
    researching: "Researching...",
    refreshAI: "Refresh Research",
    validationDate: "Validation Date",
    stillSameLocation: "Still in same location?",
    currentLocationPlaceholder: "Where did you see it now? (or confirm it's gone)",
    expandedOrDisappeared: "Expanded or Disappeared?",
    predictionCorrect: "Prediction Correct?",
    whatMissed: "What did I miss?",
    whatMissedPlaceholder: "What would you assess differently next time?",
    newNotes: "New Notes",
    newNotesPlaceholder: "Any additional observations...",
    notesPlaceholder: "e.g. Saw this next to Liquid Death — interesting shelf placement. Founder seems very media-savvy...",
    deleteEntry: "Delete Entry",
    cancel: "Cancel",
    save: "Save Entry",
    deleteConfirm: "Delete",
    yes: "Yes", no: "No", maybe: "Maybe", unsure: "Unsure", partial: "Partial",
    expanded: "Expanded", same: "Same", shrunk: "Shrunk", disappeared: "Disappeared",
    strong: "Strong", medium: "Medium", weak: "Weak",
    firstSeen: "First seen",
    sightings: "Sightings",
    // Detail view
    observation: "Observation",
    packagingLabel: "Packaging",
    firstImpressionLabel: "First Impression",
    wouldBuyLabel: "Would Buy",
    predictionLocked: "Prediction (Locked)",
    scores: "Scores",
    riskFactors: "Risk Factors",
    aiResearch: "AI Research",
    validation: "Validation",
    dateLabel: "Date",
    stillThereLabel: "Still There?",
    trendLabel: "Trend",
    predCorrectLabel: "Prediction Correct?",
    whatMissedLabel: "What I Missed",
    notesLabel: "Notes",
    productImages: "Product Images",
    clickToEnlarge: "Click to enlarge",
    uploadFront: "Upload Front",
    uploadBack: "Upload Back Label",
    replacing: "replacing",
    seenAgainTitle: "Seen Again",
    // AI Research fields
    background: "Brand Background",
    scale: "Company Scale",
    funding: "Funding / Ownership",
    distribution: "Distribution",
    positioning: "Market Positioning",
    // Login
    loginTagline: "Train your commercial instincts through systematic observation and prediction.",
    email: "Email",
    password: "Password",
    enter: "Enter →",
    continueGoogle: "Continue with Google (Demo)",
    mockNote: "Demo mode — credentials are not verified yet.",
    // Score dimensions tooltip
    yes2: "Yes", no2: "No", notSure: "Not sure",
    promptExplain: "This generates a structured research prompt based on your entry. Copy it and paste into Claude, ChatGPT, or any AI to get a full brand report and critique of your analysis.",
    promptCovers: "The prompt covers",
    q1: "Brand Background 品牌背景",
    q2: "Founder & Team 创始人与团队",
    q3: "Company Scale & Distribution 公司规模与渠道",
    q4: "Funding & Ownership 融资与所有权",
    q5: "Market Positioning 市场定位",
    q6: "Real Competitors 真实竞品",
    q7: "Brand Analogies 类似品牌案例",
    q8: "Recent News 近期动态",
    q9: "Failure Scenarios 失败情景",
    q10: "Overall Verdict 综合评价",
    copyPrompt: "Copy Research Prompt",
    copied: "Copied!",
    promptHint: "Paste into Claude, ChatGPT, or any AI of your choice →",
  },
  zh: {
    appName: "品牌判断力",
    dashboard: "主页",
    newEntry: "+ 新记录",
    logout: "退出",
    yourBrandLog: "你的品牌记录",
    tagline: "预测 → 观察 → 验证 → 复盘",
    logged: "已记录",
    validated: "已验证",
    predAccuracy: "预测准确率",
    searchPlaceholder: "搜索品牌或产品...",
    allCategories: "所有类别",
    newestFirst: "最新优先",
    highestScore: "分数最高",
    validatedFirst: "已验证优先",
    noEntries: "暂无记录",
    noEntriesHint: "添加你发现的第一个产品吧",
    predicted: "预测",
    notValidated: "未验证",
    seenAgain: "👁 又见到了",
    seenAgainPlaceholder: "在哪里见到的？（如：超市收银台旁）",
    log: "记录",
    backToDashboard: "← 返回主页",
    editEntry: "编辑记录",
    exportReport: "↓ 导出报告",
    logNewEntry: "新增记录",
    editEntryTitle: "编辑记录",
    predictionHint: "先完成预测，才能解锁 AI 调研。",
    s1: "基本信息",
    s2: "产品图片",
    s2sub: "上传产品正面和背面标签",
    s3: "快速观察",
    s3sub: "保持简短——第一印象最重要",
    s4: "你的预测",
    s4locked: "🔒 已锁定，不可修改",
    s4hint: "⚠ 提交预测后才能解锁 AI 调研",
    s5: "评分",
    s5sub: "每个维度 1–10 分，必须填写理由",
    s6: "风险",
    s6sub: "至少填写 2 条可能失败的原因",
    s7: "调研 Prompt",
    s7sub: "生成一个 Prompt，粘贴到你常用的 AI 里获取报告",
    s7locked: "锁定预测后解锁",
    s8: "验证",
    s8sub: "之后再回来填写",
    s9: "备注",
    s9sub: "自由记录任何想法、背景信息",
    brand: "品牌",
    product: "产品",
    category: "类别",
    seenAt: "见到的地点",
    dateObserved: "观察日期",
    frontImg: "正面",
    backImg: "背面标签",
    packaging: "包装（3 句话）",
    packagingPlaceholder: "描述包装设计、颜色、质感...",
    firstImpression: "第一印象（1 句话）",
    firstImpressionPlaceholder: "用一句话描述直觉反应...",
    wouldBuy: "我会买吗？",
    willSell: "这个产品会卖得好吗？",
    why: "为什么？（最多 3 条）",
    targetUser: "目标用户",
    targetUserPlaceholder: "谁会买这个？",
    bestDist: "最佳销售渠道",
    bestDistPlaceholder: "应该在哪里卖？",
    lockPrediction: "锁定预测 →",
    willSellLabel: "是否会卖好",
    targetUserLabel: "目标用户",
    distributionLabel: "销售渠道",
    whyLabel: "原因",
    totalScore: "总分",
    reason: "理由",
    required: "（必填）",
    riskFactor: "风险因素",
    riskRequired: "（必填）",
    riskOptional: "（选填）",
    generateAI: "✦ 生成 AI 调研",
    researching: "调研中...",
    refreshAI: "刷新调研",
    validationDate: "验证日期",
    stillSameLocation: "还在同一地点吗？",
    currentLocationPlaceholder: "现在在哪里见到的？（或确认已消失）",
    expandedOrDisappeared: "扩张还是消失了？",
    predictionCorrect: "预测正确吗？",
    whatMissed: "我漏掉了什么？",
    whatMissedPlaceholder: "下次会怎么不同地评估？",
    newNotes: "新备注",
    newNotesPlaceholder: "任何新的观察...",
    notesPlaceholder: "例如：放在 Liquid Death 旁边——有趣的陈列位置。创始人很懂媒体...",
    deleteEntry: "删除记录",
    cancel: "取消",
    save: "保存",
    deleteConfirm: "删除",
    yes: "是", no: "否", maybe: "也许", unsure: "不确定", partial: "部分正确",
    expanded: "扩张了", same: "没变化", shrunk: "缩减了", disappeared: "消失了",
    strong: "强", medium: "中", weak: "弱",
    firstSeen: "首次见到",
    sightings: "目击记录",
    observation: "观察",
    packagingLabel: "包装",
    firstImpressionLabel: "第一印象",
    wouldBuyLabel: "会买吗",
    predictionLocked: "预测（已锁定）",
    scores: "评分",
    riskFactors: "风险因素",
    aiResearch: "AI 调研",
    validation: "验证",
    dateLabel: "日期",
    stillThereLabel: "还在吗？",
    trendLabel: "趋势",
    predCorrectLabel: "预测正确？",
    whatMissedLabel: "漏掉了什么",
    notesLabel: "备注",
    productImages: "产品图片",
    clickToEnlarge: "点击放大",
    uploadFront: "上传正面",
    uploadBack: "上传背面标签",
    seenAgainTitle: "目击记录",
    background: "品牌背景",
    scale: "公司规模",
    funding: "融资 / 所有权",
    distribution: "销售渠道",
    positioning: "市场定位",
    loginTagline: "通过系统性观察和预测，训练你的商业直觉。",
    email: "邮箱",
    password: "密码",
    enter: "进入 →",
    continueGoogle: "使用 Google 继续（演示）",
    mockNote: "演示模式 — 账号暂未实际验证，部署后将连接真实数据库。",
    yes2: "是", no2: "否", notSure: "不确定",
    promptExplain: "系统会根据你的记录自动生成一个结构化的调研 Prompt。复制后粘贴到 Claude、ChatGPT 或任意 AI，即可获得完整的品牌报告和对你分析的点评。",
    promptCovers: "Prompt 涵盖以下问题",
    q1: "品牌背景 Brand Background",
    q2: "创始人与团队 Founder & Team",
    q3: "公司规模与渠道 Company Scale & Distribution",
    q4: "融资与所有权 Funding & Ownership",
    q5: "市场定位 Market Positioning",
    q6: "真实竞品 Real Competitors",
    q7: "类似品牌案例 Brand Analogies",
    q8: "近期动态 Recent News",
    q9: "失败情景 Failure Scenarios",
    q10: "综合评价 Overall Verdict",
    copyPrompt: "复制调研 Prompt",
    copied: "已复制！",
    promptHint: "粘贴到 Claude、ChatGPT 或你常用的 AI →",
  },
};

const SCORE_INFO = {
  en: {
    "Demand": {
      title: "Demand",
      desc: "How strong is the market need for this product?",
      points: ["Is there a clear problem being solved?", "How large is the target audience?", "Is there evidence of existing demand (search trends, similar products selling)?", "Is the timing right — is this trend growing or fading?"],
    },
    "Distribution Fit": {
      title: "Distribution Fit",
      desc: "How well does this product fit its likely sales channels?",
      points: ["Does the packaging work for vending / shelf / fridge?", "Is the price point right for where it's sold?", "Can it survive supply chain and logistics requirements?", "Does the brand feel appropriate for the channel?"],
    },
    "Differentiation": {
      title: "Differentiation",
      desc: "How meaningfully different is this from existing options?",
      points: ["What's unique about the product (ingredient, format, flavor, positioning)?", "Is the difference obvious to a first-time shopper?", "How hard is it for competitors to copy?", "Does it own a clear and defensible category?"],
    },
    "Repeatability": {
      title: "Repeatability",
      desc: "Will people buy this again and again?",
      points: ["Is it a daily habit product or occasional purchase?", "Does it create a strong flavor/experience memory?", "Is the price low enough to be impulsive?", "Are there multiple SKUs or flavors to drive variety-seeking?"],
    },
    "Brand Pull": {
      title: "Brand Pull",
      desc: "Does the brand itself make people want to buy?",
      points: ["Is the visual identity strong and memorable?", "Does it have a story people want to share?", "Is there founder credibility, celebrity backing, or cultural relevance?", "Would someone feel proud or cool being seen with it?"],
    },
  },
  zh: {
    "Demand": {
      title: "需求",
      desc: "市场对这个产品的需求有多强？",
      points: ["是否解决了明确的痛点？", "目标受众有多大？", "是否有现有需求的证据（搜索趋势、类似产品的销量）？", "时机是否合适——这个趋势是在增长还是消退？"],
    },
    "Distribution Fit": {
      title: "渠道契合度",
      desc: "这个产品与其销售渠道的匹配程度如何？",
      points: ["包装是否适合自动售货机、货架或冷柜展示？", "价格区间是否适合所在渠道？", "能否满足供应链和物流要求？", "品牌调性是否与渠道相符？"],
    },
    "Differentiation": {
      title: "差异化",
      desc: "这个产品与现有选项有多大的实质性区别？",
      points: ["产品的独特之处是什么（成分、形态、口味、定位）？", "第一次看到的人能否立即感知到差异？", "竞争对手复制的难度有多大？", "是否拥有清晰且可防御的品类定位？"],
    },
    "Repeatability": {
      title: "复购率",
      desc: "人们会反复购买吗？",
      points: ["这是日常消耗品还是偶尔购买？", "是否能留下强烈的口味或体验记忆？", "价格是否足够低，能触发冲动消费？", "是否有多个 SKU 或口味来吸引尝新？"],
    },
    "Brand Pull": {
      title: "品牌吸引力",
      desc: "品牌本身是否能驱动购买欲？",
      points: ["视觉识别是否强烈且令人难忘？", "是否有让人想分享的品牌故事？", "是否有创始人背书、名人效应或文化共鸣？", "拿着这个产品会让人觉得潮或有品位吗？"],
    },
  },
};

// ─── INFO TOOLTIP ─────────────────────────────────────────────────────────────
function InfoTooltip({ dim, lang }) {
  const info = SCORE_INFO[lang][dim];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef();
  const ref = useRef();

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleOpen = () => {
    if (!open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      const tooltipW = 260;
      const vw = window.innerWidth;
      let left = r.left + r.width / 2 - tooltipW / 2;
      // clamp so it never goes off screen
      left = Math.max(8, Math.min(left, vw - tooltipW - 8));
      setPos({ top: r.bottom + 8, left });
    }
    setOpen(o => !o);
  };

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex" }}>
      <div
        ref={btnRef}
        onClick={handleOpen}
        onMouseEnter={() => { if (window.innerWidth >= 640) handleOpen(); }}
        onMouseLeave={() => { if (window.innerWidth >= 640) setOpen(false); }}
        style={{ width: 16, height: 16, borderRadius: "50%", border: "1px solid #6b7280", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#6b7280", cursor: "pointer", fontStyle: "italic", fontWeight: 700, userSelect: "none", flexShrink: 0 }}
      >i</div>
      {open && (
        <div style={{ position: "fixed", top: pos.top, left: pos.left, width: 260, background: "#1f2937", border: "1px solid #374151", borderRadius: 10, padding: "12px 14px", zIndex: 9999, boxShadow: "0 8px 24px rgba(0,0,0,0.6)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#c8a96e", marginBottom: 4 }}>{info.title}</div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8, lineHeight: 1.5 }}>{info.desc}</div>
          {info.points.map((p, i) => (
            <div key={i} style={{ fontSize: 11, color: "#d1d5db", marginBottom: 4, display: "flex", gap: 6, lineHeight: 1.4 }}>
              <span style={{ color: "#c8a96e", flexShrink: 0 }}>·</span><span>{p}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


const SAMPLE_ENTRIES = [
  {
    id: "poppi-001",
    brand: "Poppi",
    product: "Strawberry Lemon Prebiotic Soda",
    category: "Beverage",
    location: "Office",
    dateObserved: "2025-03-15",
    frontImage: null,
    backImage: null,
    observation: {
      packaging: "Bright pastel cans with bold retro lettering. Very Instagrammable. Feels like a fashion accessory more than a drink.",
      firstImpression: "Immediately feels premium and trend-forward.",
      wouldBuy: "Yes",
    },
    prediction: {
      willSell: "Yes",
      why: ["Gen Z gut-health trend is real and growing", "Packaging is shareable — built-in social media marketing", "Positioned to replace diet soda for health-conscious millennials"],
      targetUser: "Health-conscious women 22–35, office workers, yoga crowd",
      bestDistribution: "Whole Foods, Target wellness aisle, gym vending, corporate fridges",
      locked: true,
    },
    scores: {
      Demand: { score: 9, reasons: ["Prebiotic/gut health trend at peak", "Strong pull from health-curious mainstream consumers"] },
      "Distribution Fit": { score: 8, reasons: ["Perfect for premium grocery, Whole Foods already stocked", "Office and gym vending are natural fits"] },
      Differentiation: { score: 8, reasons: ["Apple cider vinegar + prebiotics is unique in soda category", "Visual design stands out in refrigerator doors"] },
      Repeatability: { score: 7, reasons: ["Flavor variety drives trial", "Gut health is a daily habit, not occasional"] },
      "Brand Pull": { score: 9, reasons: ["Celebrity backing (Rohan Oza)", "Shark Tank story adds credibility and awareness"] },
    },
    totalScore: 41,
    risk: ["Prebiotic category could get crowded fast with copycats", "Price point ($2.50–3.50) limits impulse purchases in some channels"],
    aiReport: "",
    validation: {
      date: "2025-05-01",
      stillInVending: "yes",
      expandedOrDisappeared: "Expanded",
      predictionCorrect: "Yes",
      whatIMissed: "Didn't anticipate PepsiCo acquisition speed — underestimated corporate interest",
      notes: "Now seeing it in 3 more offices. Ubiquitous in Brooklyn coffee shops.",
    },
    notes: "Founder story is very compelling — worth tracking how they handle post-acquisition brand dilution.",
    sightings: [
      { date: "2025-03-15", location: "Office" },
      { date: "2025-04-10", location: "Whole Foods checkout aisle" },
    ],
  },
  {
    id: "olipop-002",
    brand: "Olipop",
    product: "Vintage Cola",
    category: "Beverage",
    location: "Vending Machine",
    dateObserved: "2025-04-02",
    frontImage: null,
    backImage: null,
    observation: {
      packaging: "Vintage label aesthetic, warm earth tones. Feels nostalgic but modern. Typography is exceptional — almost editorial.",
      firstImpression: "Looks like it belongs in an artisan grocery.",
      wouldBuy: "Yes",
    },
    prediction: {
      willSell: "Yes",
      why: ["Direct competitor to Poppi but slightly more mass-market feel", "Cola nostalgia is universal — broadens target demo", "Lower sugar + fiber is a clear value prop"],
      targetUser: "Health-aware adults 25–45 who grew up on Coke",
      bestDistribution: "Convenience stores, Walmart, airport vending — more mass than Poppi",
      locked: true,
    },
    scores: {
      Demand: { score: 8, reasons: ["Soda nostalgia + health trend combo", "Cola is the largest soda category"] },
      "Distribution Fit": { score: 9, reasons: ["Wide SKU fit across grocery, convenience, vending", "Already in 40,000+ locations"] },
      Differentiation: { score: 7, reasons: ["Prebiotic + botanicals angle is similar to Poppi", "Vintage branding is distinctive but trend may fade"] },
      Repeatability: { score: 8, reasons: ["Daily soda replacement behavior is high-frequency", "Subscription model available DTC"] },
      "Brand Pull": { score: 7, reasons: ["Strong Instagram presence", "Less celebrity-associated than Poppi"] },
    },
    totalScore: 39,
    risk: ["Head-to-head with Poppi risks brand confusion in consumer mind", "Functional claims could attract FDA scrutiny"],
    aiResearch: null,
    validation: null,
    notes: "",
    sightings: [
      { date: "2025-04-02", location: "Vending Machine" },
    ],
  },
];

const CATEGORIES = ["Beverage", "Snack", "Candy", "Dairy", "Frozen", "Health", "Other"];
const LOCATIONS = ["Vending Machine", "Office", "Grocery Store", "Convenience Store", "Gym", "Airport", "Restaurant", "Other"];
const SCORE_DIMENSIONS = ["Demand", "Distribution Fit", "Differentiation", "Repeatability", "Brand Pull"];

// ─── UTILS ───────────────────────────────────────────────────────────────────
const calcTotal = (scores) => Object.values(scores).reduce((s, d) => s + (d.score || 0), 0);
const scoreLabel = (score) => score >= 40 ? { label: "Strong", color: "#4ade80" } : score >= 30 ? { label: "Medium", color: "#facc15" } : { label: "Weak", color: "#f87171" };
const fmtDate = (d) => d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—";

// ─── IMAGE UPLOAD COMPONENT ──────────────────────────────────────────────────
function ImageUpload({ label, value, onChange }) {
  const inputRef = useRef();
  const [modal, setModal] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      {value ? (
        <div style={{ position: "relative" }}>
          <img
            src={value}
            alt={label}
            onClick={() => setModal(true)}
            style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, cursor: "zoom-in", border: "1px solid #1f2937" }}
          />
          <button
            onClick={() => onChange(null)}
            style={{ position: "absolute", top: 6, right: 6, background: "rgba(0,0,0,0.7)", border: "none", borderRadius: "50%", width: 24, height: 24, color: "#fff", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}
          >×</button>
          <div style={{ marginTop: 6, fontSize: 11, color: "#6b7280", textAlign: "center" }}>Click to enlarge</div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          style={{ height: 160, border: "2px dashed #374151", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", gap: 8, transition: "border-color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#c8a96e"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#374151"}
        >
          <div style={{ fontSize: 28, opacity: 0.4 }}>📷</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Upload {label}</div>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
      {modal && (
        <div onClick={() => setModal(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={value} alt={label} style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 8 }} />
        </div>
      )}
    </div>
  );
}

// ─── SCORE ROW ───────────────────────────────────────────────────────────────
function ScoreRow({ dim, value, onChange, lang, t }) {
  const isMobile = useIsMobile();
  const dimLabel = lang === "zh" ? SCORE_INFO.zh[dim]?.title : dim;
  const score = value.score || 5;
  const pct = ((score - 1) / 9) * 100;

  return (
    <div style={{ marginBottom: 16, padding: 16, background: "#111827", borderRadius: 8, border: "1px solid #1f2937", boxSizing: "border-box", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e7eb" }}>{dimLabel}</div>
          <InfoTooltip dim={dim} lang={lang} />
        </div>
        {/* Score control — +/- on mobile, slider on desktop */}
        {isMobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <button onClick={() => onChange({ ...value, score: Math.max(1, score - 1) })}
              style={{ width: 36, height: 36, border: "1px solid #374151", borderRight: "none", borderRadius: "6px 0 0 6px", background: "#0d1117", color: "#9ca3af", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
            <div style={{ width: 40, height: 36, background: "#0d1117", border: "1px solid #374151", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#c8a96e", fontSize: 16 }}>{score}</div>
            <button onClick={() => onChange({ ...value, score: Math.min(10, score + 1) })}
              style={{ width: 36, height: 36, border: "1px solid #374151", borderLeft: "none", borderRadius: "0 6px 6px 0", background: "#0d1117", color: "#9ca3af", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative", width: 120, height: 4, background: "#374151", borderRadius: 2 }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${pct}%`, background: "#c8a96e", borderRadius: 2 }} />
              <input type="range" min={1} max={10} value={score}
                onChange={e => onChange({ ...value, score: +e.target.value })}
                style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: "pointer", height: "100%", margin: 0 }} />
            </div>
            <div style={{ width: 24, textAlign: "center", fontWeight: 700, color: "#c8a96e", fontSize: 15 }}>{score}</div>
          </div>
        )}
      </div>
      {/* Visual bar */}
      <div style={{ height: 2, background: "#1f2937", borderRadius: 1, marginBottom: 10 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "#c8a96e", borderRadius: 1, transition: "width 0.15s" }} />
      </div>
      {[0, 1].map(i => (
        <input key={i}
          placeholder={`${t.reason} ${i + 1} ${t.required}`}
          value={value.reasons?.[i] || ""}
          onChange={e => { const r = [...(value.reasons || ["", ""])]; r[i] = e.target.value; onChange({ ...value, reasons: r }); }}
          style={{ width: "100%", boxSizing: "border-box", background: "#0d1117", border: "1px solid #374151", borderRadius: 6, padding: "8px 10px", color: "#e5e7eb", fontSize: 12, marginTop: 6, outline: "none" }}
        />
      ))}
    </div>
  );
}

// ─── AI PROMPT GENERATOR ─────────────────────────────────────────────────────
function AIResearch({ entry, onSave, t }) {
  const [copied, setCopied] = useState(false);

  if (!entry.prediction?.locked) return (
    <div style={{ padding: 20, background: "#0d1117", borderRadius: 8, border: "1px dashed #374151", textAlign: "center", color: "#6b7280", fontSize: 13 }}>
      🔒 {t.s7locked}
    </div>
  );

  const scores = Object.entries(entry.scores || {})
    .map(([dim, val]) => `  - ${dim}: ${val.score}/10 — ${(val.reasons || []).filter(Boolean).join("; ")}`)
    .join("\n");

  const risks = (entry.risk || []).filter(Boolean).map(r => `  - ${r}`).join("\n");
  const why = (entry.prediction?.why || []).filter(Boolean).map(w => `  - ${w}`).join("\n");

  const prompt = `You are a senior consumer brand analyst. I am training my commercial judgment and need you to research the following brand and critique my analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand: ${entry.brand}
Product: ${entry.product}
Category: ${entry.category || "—"}
Where I saw it: ${entry.location || "—"}
Date observed: ${entry.dateObserved || "—"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY PREDICTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Will it sell well: ${entry.prediction?.willSell || "—"}
My reasoning:
${why || "  —"}
Target user: ${entry.prediction?.targetUser || "—"}
Best distribution: ${entry.prediction?.bestDistribution || "—"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY SCORING (out of 10 each)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${scores || "  —"}
Total: ${entry.totalScore}/50

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY RISK ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${risks || "  —"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLEASE RESEARCH AND ANSWER THESE 9 QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BRAND BACKGROUND
   What is the origin story of this brand? When was it founded, by whom, and what problem were they trying to solve?

2. COMPANY SCALE & DISTRIBUTION
   How large is this brand today? How many retail locations, revenue estimates, employee count if known?

3. FUNDING & OWNERSHIP
   Who has invested in or acquired this brand? Any notable funding rounds, valuations, or ownership changes?

4. MARKET POSITIONING
   How does this brand position itself in its category? What is its core value proposition vs. competitors?

5. WHO ARE THE REAL COMPETITORS?
   List both direct competitors (same category) and indirect competitors (same occasion or customer). Include any I likely missed.

6. FACT-CHECK MY SCORING
   Review each of my dimension scores (Demand, Distribution Fit, Differentiation, Repeatability, Brand Pull). For each one, tell me if you agree, and if not, what score you would give and why.

7. WHAT WOULD NEED TO BE TRUE FOR THIS TO FAIL?
   Beyond my risk factors above, what are the real structural threats to this brand's success? What assumptions in my prediction could be wrong?

8. SIMILAR BRANDS THAT SUCCEEDED OR FAILED
   Give me 2 examples of brands that succeeded in a similar way, and 2 that failed. What can I learn from each?

9. FOUNDER & TEAM
   Who are the key founders or leaders? What is their background, and does the team give you confidence in execution?

10. RECENT NEWS
    What has happened with this brand in the last 6–12 months? Any new launches, controversies, expansions, or strategic moves worth noting?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINALLY: HOW DID I DO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Based on everything above, give me an honest assessment of my overall analysis. What did I get right? What did I miss? What should I think about differently next time?`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Explanation */}
      <div style={{ padding: "12px 16px", background: "#0d1117", borderRadius: 8, border: "1px solid #1f2937", fontSize: 12, color: "#9ca3af", lineHeight: 1.6 }}>
        💡 {t.promptExplain}
      </div>

      {/* Questions preview */}
      <div style={{ padding: 16, background: "#111827", borderRadius: 8, border: "1px solid #1f2937" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c8a96e", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{t.promptCovers}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            t.q1, t.q2, t.q3, t.q4, t.q5, t.q6, t.q7, t.q8, t.q9, t.q10
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 12, color: "#d1d5db" }}>
              <span style={{ color: "#c8a96e", fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        style={{ padding: "13px 20px", background: copied ? "#16a34a" : "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", letterSpacing: "0.05em", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
      >
        {copied ? `✓ ${t.copied}` : `⧉ ${t.copyPrompt}`}
      </button>

      <div style={{ fontSize: 11, color: "#4b5563", textAlign: "center" }}>
        {t.promptHint}
      </div>
    </div>
  );
}

// ─── SHARED FORM COMPONENTS ──────────────────────────────────────────────────
const FLabel = ({ text, required }) => (
  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 6 }}>
    {text}{required && <span style={{ color: "#c8a96e" }}> *</span>}
  </div>
);
const Field = ({ label, required, children }) => (
  <div style={{ marginBottom: 16 }}>
    <FLabel text={label} required={required} />
    {children}
  </div>
);
const FInput = ({ value, onChange, placeholder, type = "text" }) => (
  <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    style={{ width: "100%", boxSizing: "border-box", background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "10px 14px", color: "#e5e7eb", fontSize: 13, outline: "none" }} />
);
const FTextarea = ({ value, onChange, placeholder, rows = 2 }) => (
  <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
    style={{ width: "100%", boxSizing: "border-box", background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "10px 14px", color: "#e5e7eb", fontSize: 13, outline: "none", resize: "vertical" }} />
);
const FSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    style={{ width: "100%", boxSizing: "border-box", background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "10px 14px", color: "#e5e7eb", fontSize: 13, outline: "none" }}>
    <option value="">Select...</option>
    {options.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);
const Pill = ({ value, active, onClick }) => (
  <button onClick={onClick} style={{ padding: "6px 14px", borderRadius: 20, border: active ? "1px solid #c8a96e" : "1px solid #374151", background: active ? "#c8a96e22" : "transparent", color: active ? "#c8a96e" : "#9ca3af", fontSize: 12, cursor: "pointer", fontWeight: active ? 600 : 400 }}>
    {value}
  </button>
);
const SectionHeader = ({ n, title, subtitle }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#c8a96e22", border: "1px solid #c8a96e55", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#c8a96e", fontWeight: 700 }}>{n}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#f9fafb", letterSpacing: "-0.01em" }}>{title}</div>
    </div>
    {subtitle && <div style={{ fontSize: 12, color: "#6b7280", marginLeft: 38 }}>{subtitle}</div>}
  </div>
);
const Divider = () => <div style={{ height: 1, background: "#1f2937", margin: "28px 0" }} />;

// ─── COLLAPSIBLE PROMPT ───────────────────────────────────────────────────────
function CollapsiblePrompt({ entry, t, predSubmitted }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const scores = Object.entries(entry.scores || {})
    .map(([dim, val]) => `  - ${dim}: ${val.score}/10 — ${(val.reasons || []).filter(Boolean).join("; ")}`)
    .join("\n");
  const risks = (entry.risk || []).filter(Boolean).map(r => `  - ${r}`).join("\n");
  const why = (entry.prediction?.why || []).filter(Boolean).map(w => `  - ${w}`).join("\n");

  const prompt = `You are a senior consumer brand analyst. I am training my commercial judgment — please research this brand thoroughly using real, verifiable sources and critique my analysis.

CRITICAL REQUIREMENTS:
- Write your ENTIRE response in Chinese (中文)
- Keep key industry terms in English (e.g. SKU, DTC, EBITDA, supply chain, brand equity, go-to-market, retail channel, etc.)
- Every factual claim must be based on real, searchable information — do NOT fabricate numbers, dates, or events
- If you are uncertain about a fact, say so explicitly rather than guessing
- 严禁使用任何 Markdown 格式：不要用 **加粗**、*斜体*、- 列表符号、# 标题、> 引用等。只使用纯文字和我规定的【】格式。
- Use the EXACT section format below so the report can be displayed correctly

OUTPUT FORMAT — use exactly these section headers, in this order:

【1. 品牌背景 Brand Background】
(2–3 sentences: founding story, founders, original problem solved)

【2. 创始人与团队 Founder & Team】
(2–3 sentences: founder background, key executives, execution confidence)

【3. 公司规模与渠道 Company Scale & Distribution】
(2–3 sentences: retail footprint, revenue estimates if known, key channels)

【4. 融资与所有权 Funding & Ownership】
(2–3 sentences: investors, funding rounds, valuations, acquisitions)

【5. 市场定位 Market Positioning】
(2–3 sentences: core value proposition, positioning vs. competitors)

【6. 真实竞品 Real Competitors】
(bullet list: direct competitors and indirect competitors, include any I likely missed)

【7. 类似品牌案例 Brand Analogies】
(2 that succeeded, 2 that failed — one sentence of learning from each)

【8. 近期动态 Recent News】
(2–3 sentences: what happened in the last 6–12 months — launches, expansions, controversies, M&A)

【9. 失败情景 Failure Scenarios】
(2–3 bullet points: specific conditions that, if true, would cause this brand to struggle)

【10. 综合评价 Overall Verdict】
(2–3 bullet points: what I got right, what I missed, what I should think about differently)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY ANALYSIS (for your reference)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand: ${entry.brand}
Product: ${entry.product}
Category: ${entry.category || "—"}
Where I saw it: ${entry.location || "—"}
Date observed: ${entry.dateObserved || "—"}

My prediction (will it sell well): ${entry.prediction?.willSell || "—"}
My reasoning:
${why || "  —"}
Target user: ${entry.prediction?.targetUser || "—"}
Best distribution: ${entry.prediction?.bestDistribution || "—"}

My scoring (out of 10):
${scores || "  —"}
Total: ${entry.totalScore}/50

My risk assessment:
${risks || "  —"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // fallback for sandbox
      const ta = document.createElement("textarea");
      ta.value = prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ border: "1px solid #1f2937", borderRadius: 10, overflow: "hidden" }}>
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: "100%", padding: "14px 18px", background: "#111827", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#c8a96e22", border: "1px solid #c8a96e55", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#c8a96e", flexShrink: 0 }}>⧉</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>{t.s7}</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>{predSubmitted ? t.s7sub : t.s7locked}</div>
          </div>
        </div>
        <div style={{ color: "#6b7280", fontSize: 16, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>▾</div>
      </button>

      {/* Expandable content */}
      {open && (
        <div style={{ padding: "0 18px 18px", background: "#0d1117" }}>
          {!predSubmitted ? (
            <div style={{ paddingTop: 16, textAlign: "center", color: "#6b7280", fontSize: 13 }}>
              🔒 {t.s7locked}
            </div>
          ) : (
            <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.6, padding: "10px 14px", background: "#111827", borderRadius: 8, border: "1px solid #1f2937" }}>
                💡 {t.promptExplain}
              </div>
              <div style={{ padding: "12px 14px", background: "#111827", borderRadius: 8, border: "1px solid #1f2937" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#c8a96e", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>{t.promptCovers}</div>
                {[t.q1, t.q2, t.q3, t.q4, t.q5, t.q6, t.q7, t.q8, t.q9, t.q10].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#d1d5db", marginBottom: 5 }}>
                    <span style={{ color: "#c8a96e", fontWeight: 700, minWidth: 18, flexShrink: 0 }}>{i + 1}.</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleCopy}
                style={{ padding: "12px 20px", background: copied ? "#16a34a" : "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              >
                {copied ? `✓ ${t.copied}` : `⧉ ${t.copyPrompt}`}
              </button>
              <div style={{ fontSize: 11, color: "#4b5563", textAlign: "center" }}>{t.promptHint}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── COLLAPSIBLE REPORT ───────────────────────────────────────────────────────
function CollapsibleReport({ value, onChange, lang }) {
  const [open, setOpen] = useState(false);
  const hasContent = value && value.trim().length > 0;
  return (
    <div style={{ border: "1px solid #1f2937", borderRadius: 10, overflow: "hidden", marginTop: 12 }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "100%", padding: "14px 18px", background: "#111827", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#60a5fa22", border: "1px solid #60a5fa55", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>✦</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>{lang === "zh" ? "AI 研究报告" : "AI Research Report"}</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>
              {hasContent ? (lang === "zh" ? "已保存 — 点击查看或编辑" : "Saved — click to view or edit") : (lang === "zh" ? "粘贴 AI 报告后点保存" : "Paste your AI report, then Save Entry")}
            </div>
          </div>
          {hasContent && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", flexShrink: 0, marginLeft: 2 }} />}
        </div>
        <div style={{ color: "#6b7280", fontSize: 16, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>▾</div>
      </button>
      {open && (
        <div style={{ padding: "0 18px 18px", background: "#0d1117" }}>
          <div style={{ paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              {lang === "zh" ? "把 AI 的完整回复粘贴在下方，点保存即可。" : "Paste the full AI response below, then hit Save Entry."}
            </div>
            <textarea
              value={value || ""}
              onChange={e => onChange(e.target.value)}
              placeholder={lang === "zh" ? "在这里粘贴 AI 的报告..." : "Paste the AI report here..."}
              rows={14}
              style={{ width: "100%", boxSizing: "border-box", background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "12px 14px", color: "#e5e7eb", fontSize: 12, outline: "none", resize: "vertical", lineHeight: 1.7 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ENTRY FORM ──────────────────────────────────────────────────────────────
function EntryForm({ initial, onSave, onCancel, onDelete, t, lang }) {
  const blank = {
    id: Date.now().toString(),
    brand: "", product: "", category: "", location: "", dateObserved: new Date().toISOString().slice(0, 10),
    frontImage: null, backImage: null,
    observation: { packaging: "", firstImpression: "", wouldBuy: "Yes" },
    prediction: { willSell: "Yes", why: ["", "", ""], targetUser: "", bestDistribution: "", locked: false },
    scores: Object.fromEntries(SCORE_DIMENSIONS.map(d => [d, { score: 5, reasons: ["", ""] }])),
    totalScore: 25,
    risk: ["", ""],
    aiReport: "",
    validation: null,
    notes: "",
    sightings: [],
  };

  const [form, setForm] = useState(initial || blank);
  const [predSubmitted, setPredSubmitted] = useState(initial?.prediction?.locked || false);
  const [section, setSection] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const isMobile = useIsMobile();

  const Input = FInput;
  const Textarea = FTextarea;
  const Select = FSelect;

  const up = (path, val) => {
    setForm(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let cur = copy;
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
      cur[keys[keys.length - 1]] = val;
      if (path.startsWith("scores")) {
        copy.totalScore = calcTotal(copy.scores);
      }
      return copy;
    });
  };

  const lockPrediction = () => {
    const p = form.prediction;
    if (!p.willSell || !p.targetUser || !p.bestDistribution) return alert("Fill all prediction fields.");
    if (!p.why.some(w => w.trim())) return alert("Add at least one reason.");
    setForm(prev => ({ ...prev, prediction: { ...prev.prediction, locked: true } }));
    setPredSubmitted(true);
  };

  const handleSave = () => {
    if (!form.brand || !form.product || !form.dateObserved) return alert("Fill required fields (Brand, Product, Date).");
    onSave({ ...form, totalScore: calcTotal(form.scores) });
  };

  const sl = scoreLabel(form.totalScore);

  return (
    <div style={{ maxWidth: 680, width: "100%", margin: "0 auto", padding: "0 0 80px", boxSizing: "border-box", overflowX: "hidden" }}>
      {/* Basic Info */}
      <SectionHeader n={1} title={t.s1} />
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
        <Field label={t.brand} required><Input value={form.brand} onChange={v => up("brand", v)} placeholder="e.g. Poppi" /></Field>
        <Field label={t.product} required><Input value={form.product} onChange={v => up("product", v)} placeholder="e.g. Strawberry Lemon" /></Field>
        <Field label={t.category}><Select value={form.category} onChange={v => up("category", v)} options={CATEGORIES} /></Field>
        <Field label={t.seenAt}>
          <Select
            value={LOCATIONS.slice(0, -1).includes(form.location) ? form.location : form.location === "" ? "" : "Other"}
            onChange={v => up("location", v === "Other" ? "Other" : v)}
            options={LOCATIONS}
          />
          {(form.location === "Other" || (!LOCATIONS.slice(0, -1).includes(form.location) && form.location !== "")) && (
            <input
              value={form.location === "Other" ? "" : form.location}
              onChange={e => up("location", e.target.value)}
              placeholder={lang === "zh" ? "描述你见到的地点..." : "Describe where you saw it..."}
              style={{ width: "100%", boxSizing: "border-box", marginTop: 8, background: "#111827", border: "1px solid #c8a96e55", borderRadius: 8, padding: "10px 14px", color: "#e5e7eb", fontSize: 13, outline: "none" }}
            />
          )}
        </Field>
      </div>
      <Field label={t.dateObserved} required><Input type="date" value={form.dateObserved} onChange={v => up("dateObserved", v)} /></Field>

      <Divider />

      {/* Images */}
      <SectionHeader n={2} title={t.s2} subtitle={t.s2sub} />
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16 }}>
        <ImageUpload label={t.frontImg} value={form.frontImage} onChange={v => up("frontImage", v)} />
        <ImageUpload label={t.backImg} value={form.backImage} onChange={v => up("backImage", v)} />
      </div>

      <Divider />

      {/* Observation */}
      <SectionHeader n={3} title={t.s3} subtitle={t.s3sub} />
      <Field label={t.packaging}><Textarea value={form.observation.packaging} onChange={v => up("observation.packaging", v)} placeholder={t.packagingPlaceholder} rows={3} /></Field>
      <Field label={t.firstImpression}><Input value={form.observation.firstImpression} onChange={v => up("observation.firstImpression", v)} placeholder={t.firstImpressionPlaceholder} /></Field>
      <Field label={t.wouldBuy}>
        <div style={{ display: "flex", gap: 8 }}>
          {[t.yes, t.maybe, t.no].map(o => <Pill key={o} value={o} active={form.observation.wouldBuy === o} onClick={() => up("observation.wouldBuy", o)} />)}
        </div>
      </Field>

      <Divider />

      {/* Prediction */}
      <SectionHeader n={4} title={t.s4} subtitle={predSubmitted ? t.s4locked : t.s4hint} />
      {predSubmitted ? (
        <div style={{ padding: 16, background: "#0d1117", borderRadius: 8, border: "1px solid #374151" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <span style={{ padding: "4px 10px", background: "#c8a96e22", border: "1px solid #c8a96e55", borderRadius: 20, fontSize: 12, color: "#c8a96e" }}>{t.willSellLabel}: {form.prediction.willSell}</span>
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 8 }}>
            {form.prediction.why.filter(Boolean).map((w, i) => <div key={i} style={{ marginBottom: 4 }}>• {w}</div>)}
          </div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>{t.targetUserLabel}: {form.prediction.targetUser}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>{t.distributionLabel}: {form.prediction.bestDistribution}</div>
        </div>
      ) : (
        <>
          <Field label={t.willSell}>
            <div style={{ display: "flex", gap: 8 }}>
              {[t.yes, t.no, t.unsure].map(o => <Pill key={o} value={o} active={form.prediction.willSell === o} onClick={() => up("prediction.willSell", o)} />)}
            </div>
          </Field>
          <Field label={t.why}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ color: "#c8a96e", fontSize: 12, width: 16 }}>•</div>
                <input value={form.prediction.why[i] || ""} onChange={e => { const w = [...form.prediction.why]; w[i] = e.target.value; up("prediction.why", w); }} placeholder={`${t.reason} ${i + 1}...`}
                  style={{ flex: 1, background: "#111827", border: "1px solid #374151", borderRadius: 6, padding: "8px 12px", color: "#e5e7eb", fontSize: 13, outline: "none" }} />
              </div>
            ))}
          </Field>
          <Field label={t.targetUser}><Input value={form.prediction.targetUser} onChange={v => up("prediction.targetUser", v)} placeholder={t.targetUserPlaceholder} /></Field>
          <Field label={t.bestDist}><Input value={form.prediction.bestDistribution} onChange={v => up("prediction.bestDistribution", v)} placeholder={t.bestDistPlaceholder} /></Field>
          <button onClick={lockPrediction} style={{ padding: "10px 20px", background: "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", letterSpacing: "0.05em" }}>
            {t.lockPrediction}
          </button>
        </>
      )}

      <Divider />

      {/* Scoring */}
      <SectionHeader n={5} title={t.s5} subtitle={t.s5sub} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, padding: "12px 16px", background: "#111827", borderRadius: 8, border: `1px solid ${sl.color}33` }}>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>{t.totalScore}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: sl.color, fontFamily: "Georgia, serif" }}>{form.totalScore}</div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>/50</div>
          <div style={{ padding: "2px 10px", background: sl.color + "22", borderRadius: 20, fontSize: 11, fontWeight: 600, color: sl.color }}>{sl.label === "Strong" ? t.strong : sl.label === "Medium" ? t.medium : t.weak}</div>
        </div>
      </div>
      {SCORE_DIMENSIONS.map(d => (
        <ScoreRow key={d} dim={d} value={form.scores[d]} onChange={v => {
          const scores = { ...form.scores, [d]: v };
          setForm(prev => ({ ...prev, scores, totalScore: calcTotal(scores) }));
        }} lang={lang} t={t} />
      ))}

      <Divider />

      {/* Risk */}
      <SectionHeader n={6} title={t.s6} subtitle={t.s6sub} />
      {[0, 1, 2].map(i => (
        <div key={i} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ color: "#f87171", fontSize: 12, width: 16 }}>⚠</div>
          <input value={form.risk[i] || ""} onChange={e => { const r = [...(form.risk || ["", "", ""])]; r[i] = e.target.value; up("risk", r); }} placeholder={`${t.riskFactor} ${i + 1}${i < 2 ? ` ${t.riskRequired}` : ` ${t.riskOptional}`}...`}
            style={{ flex: 1, background: "#111827", border: "1px solid #374151", borderRadius: 6, padding: "8px 12px", color: "#e5e7eb", fontSize: 13, outline: "none" }} />
        </div>
      ))}

      <Divider />

      {/* Validation */}
      <SectionHeader n={7} title={t.s8} subtitle={t.s8sub} />
      <div style={{ padding: 16, background: "#0d1117", borderRadius: 8, border: "1px solid #1f2937" }}>
        <Field label={t.validationDate}>
          <Input type="date" value={form.validation?.date || ""} onChange={v => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), date: v } }))} />
        </Field>
        <Field label={t.stillSameLocation}>
          <div style={{ display: "flex", gap: 8 }}>
            {[["yes", t.yes], ["no", t.no]].map(([val, label]) => (
              <Pill key={val} value={label} active={form.validation?.stillInVending === val} onClick={() => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), stillInVending: val, currentLocation: val === "yes" ? "" : prev.validation?.currentLocation || "" } }))} />
            ))}
          </div>
          {form.validation?.stillInVending === "no" && (
            <input
              value={form.validation?.currentLocation || ""}
              onChange={e => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), currentLocation: e.target.value } }))}
              placeholder={t.currentLocationPlaceholder}
              style={{ width: "100%", boxSizing: "border-box", marginTop: 8, background: "#111827", border: "1px solid #c8a96e55", borderRadius: 8, padding: "10px 14px", color: "#e5e7eb", fontSize: 13, outline: "none" }}
            />
          )}
        </Field>
        <Field label={t.expandedOrDisappeared}>
          <Select value={form.validation?.expandedOrDisappeared || ""} onChange={v => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), expandedOrDisappeared: v } }))} options={[t.expanded, t.same, t.shrunk, t.disappeared]} />
        </Field>
        <Field label={t.predictionCorrect}>
          <div style={{ display: "flex", gap: 8 }}>
            {[t.yes, t.no, t.partial].map(o => (
              <Pill key={o} value={o} active={form.validation?.predictionCorrect === o} onClick={() => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), predictionCorrect: o } }))} />
            ))}
          </div>
        </Field>
        <Field label={t.whatMissed}><Textarea value={form.validation?.whatIMissed || ""} onChange={v => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), whatIMissed: v } }))} placeholder={t.whatMissedPlaceholder} /></Field>
        <Field label={t.newNotes}><Textarea value={form.validation?.notes || ""} onChange={v => setForm(prev => ({ ...prev, validation: { ...(prev.validation || {}), notes: v } }))} placeholder={t.newNotesPlaceholder} /></Field>
      </div>

      <Divider />

      <SectionHeader n={8} title={t.s9} subtitle={t.s9sub} />
      <Textarea value={form.notes || ""} onChange={v => up("notes", v)} placeholder={t.notesPlaceholder} rows={3} />

      <Divider />

      {/* Research Prompt — collapsible */}
      <CollapsiblePrompt entry={form} t={t} predSubmitted={predSubmitted} />

      {/* AI Report — collapsible paste box */}
      <CollapsibleReport
        value={form.aiReport || ""}
        onChange={v => up("aiReport", v)}
        lang={lang}
      />

      <Divider />

      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
        {initial && onDelete && (
          confirmDelete ? (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "#1f0f0f", border: "1px solid #f8717155", borderRadius: 8 }}>
              <span style={{ fontSize: 12, color: "#f87171" }}>{t.deleteEntry} "{form.brand}"?</span>
              <button onClick={() => onDelete(form.id)} style={{ padding: "4px 12px", background: "#f87171", border: "none", borderRadius: 6, color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t.yes}, {t.deleteConfirm}</button>
              <button onClick={() => setConfirmDelete(false)} style={{ padding: "4px 12px", background: "transparent", border: "1px solid #374151", borderRadius: 6, color: "#9ca3af", fontSize: 12, cursor: "pointer" }}>{t.cancel}</button>
            </div>
          ) : (
            <button onClick={() => setConfirmDelete(true)} style={{ padding: "10px 20px", background: "transparent", border: "1px solid #f8717155", borderRadius: 8, color: "#f87171", fontSize: 13, cursor: "pointer" }}>
              {t.deleteEntry}
            </button>
          )
        )}
        <button onClick={onCancel} style={{ padding: "10px 20px", background: "transparent", border: "1px solid #374151", borderRadius: 8, color: "#9ca3af", fontSize: 13, cursor: "pointer" }}>{t.cancel}</button>
        <button onClick={handleSave} style={{ padding: "10px 24px", background: "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{t.save}</button>
      </div>
    </div>
  );
}

// ─── ENTRY DETAIL ─────────────────────────────────────────────────────────────
function EntryDetail({ entry, onEdit, onBack, t, lang }) {
  const sl = scoreLabel(entry.totalScore);
  const [imgModal, setImgModal] = useState(null);
  const isMobile = useIsMobile();

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#c8a96e", textTransform: "uppercase", marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );

  const Row = ({ label, value }) => (
    <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: "#6b7280", minWidth: 120 }}>{label}</div>
      <div style={{ fontSize: 13, color: "#d1d5db", flex: 1 }}>{value || "—"}</div>
    </div>
  );

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <button onClick={onBack} style={{ background: "transparent", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 13, marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
        {t.backToDashboard}
      </button>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#f9fafb", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>{entry.brand}</div>
          <div style={{ fontSize: 15, color: "#9ca3af", marginTop: 2 }}>{entry.product}</div>
          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            {entry.category && <span style={{ padding: "3px 10px", background: "#1f2937", borderRadius: 20, fontSize: 11, color: "#9ca3af" }}>{entry.category}</span>}
            {entry.location && <span style={{ padding: "3px 10px", background: "#1f2937", borderRadius: 20, fontSize: 11, color: "#9ca3af" }}>{entry.location}</span>}
            {entry.validation ? <span style={{ padding: "3px 10px", background: "#16a34a22", border: "1px solid #16a34a55", borderRadius: 20, fontSize: 11, color: "#4ade80" }}>{t.validated}</span> : <span style={{ padding: "3px 10px", background: "#374151", borderRadius: 20, fontSize: 11, color: "#6b7280" }}>{t.notValidated}</span>}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: sl.color, fontFamily: "Georgia, serif", lineHeight: 1 }}>{entry.totalScore}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>/50 · <span style={{ color: sl.color }}>{sl.label === "Strong" ? t.strong : sl.label === "Medium" ? t.medium : t.weak}</span></div>
        </div>
      </div>

      {(entry.frontImage || entry.backImage) && (
        <Section title={t.productImages}>
          <div style={{ display: "flex", gap: 12 }}>
            {[[t.frontImg, entry.frontImage], [t.backImg, entry.backImage]].map(([lbl, src]) => src && (
              <div key={lbl} style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6 }}>{lbl}</div>
                <img src={src} alt={lbl} onClick={() => setImgModal(src)} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, cursor: "zoom-in", border: "1px solid #1f2937" }} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
        <div>
          <Section title={t.observation}>
            <Row label={t.packagingLabel} value={entry.observation?.packaging} />
            <Row label={t.firstImpressionLabel} value={entry.observation?.firstImpression} />
            <Row label={t.wouldBuyLabel} value={entry.observation?.wouldBuy} />
          </Section>

          <Section title={t.predictionLocked}>
            <Row label={t.willSellLabel} value={entry.prediction?.willSell} />
            <Row label={t.targetUserLabel} value={entry.prediction?.targetUser} />
            <Row label={t.distributionLabel} value={entry.prediction?.bestDistribution} />
            {entry.prediction?.why?.filter(Boolean).map((w, i) => <Row key={i} label={i === 0 ? t.whyLabel : ""} value={`• ${w}`} />)}
          </Section>
        </div>

        <div>
          <Section title={t.scores}>
            {SCORE_DIMENSIONS.map(d => (
              <div key={d} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>{lang === "zh" ? SCORE_INFO.zh[d]?.title : d}</div>
                    <InfoTooltip dim={d} lang={lang} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#c8a96e" }}>{entry.scores?.[d]?.score || "—"}</div>
                </div>
                <div style={{ height: 3, background: "#1f2937", borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${((entry.scores?.[d]?.score || 0) / 10) * 100}%`, background: "#c8a96e", borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </Section>

          {entry.risk?.filter(Boolean).length > 0 && (
            <Section title={t.riskFactors}>
              {entry.risk.filter(Boolean).map((r, i) => <div key={i} style={{ fontSize: 12, color: "#f87171", marginBottom: 6 }}>⚠ {r}</div>)}
            </Section>
          )}
        </div>
      </div>

      {entry.validation && (
        <Section title={t.validation}>
          <Row label={t.dateLabel} value={fmtDate(entry.validation.date)} />
          <Row label={t.stillThereLabel} value={entry.validation.stillInVending === "yes" ? t.yes : entry.validation.stillInVending === "no" ? t.no : entry.validation.stillInVending} />
          <Row label={t.trendLabel} value={entry.validation.expandedOrDisappeared} />
          <Row label={t.predCorrectLabel} value={entry.validation.predictionCorrect} />
          <Row label={t.whatMissedLabel} value={entry.validation.whatIMissed} />
          <Row label={t.notesLabel} value={entry.validation.notes} />
        </Section>
      )}

      {entry.notes && (
        <Section title={t.s9}>
          <div style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.7, padding: "12px 16px", background: "#111827", borderRadius: 8, border: "1px solid #1f2937" }}>{entry.notes}</div>
        </Section>
      )}

      {entry.sightings?.length > 0 && (
        <Section title={`${t.sightings} (${entry.sightings.length})`}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {entry.sightings.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", background: "#111827", borderRadius: 6, border: "1px solid #1f2937" }}>
                <div style={{ fontSize: 11, color: "#6b7280", minWidth: 90 }}>{fmtDate(s.date)}</div>
                <div style={{ fontSize: 12, color: "#d1d5db" }}>{s.location}</div>
                {i === 0 && <span style={{ fontSize: 10, color: "#c8a96e", marginLeft: "auto" }}>{t.firstSeen}</span>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* AI Report */}
      {entry.aiReport && entry.aiReport.trim() && (
        <Section title={lang === "zh" ? "AI 研究报告" : "AI Research Report"}>
          {(() => {
            const blocks = entry.aiReport.split(/(?=【\d+\.)/).filter(b => b.trim());
            if (blocks.length <= 1) {
              // Fallback: no structured format, show as plain text
              return (
                <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 10, padding: "18px 20px", fontSize: 13, color: "#d1d5db", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                  {entry.aiReport}
                </div>
              );
            }
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {blocks.map((block, i) => {
                  const headerMatch = block.match(/^【(\d+)\.\s*(.+?)】/);
                  if (!headerMatch) return null;
                  const num = headerMatch[1];
                  const title = headerMatch[2].trim();
                  const body = block.replace(/^【\d+\.\s*.+?】\n?/, "").trim();
                  const cleanBody = body
                    .replace(/\*\*(.+?)\*\*/g, "$1")   // **bold** → plain
                    .replace(/\*(.+?)\*/g, "$1")         // *italic* → plain
                    .replace(/^#{1,6}\s+/gm, "")         // ## heading → plain
                    .replace(/^-\s+/gm, "• ")            // - list → • list
                    .replace(/^>\s+/gm, "")              // > blockquote → plain
                    .trim();
                  // Last section (综合评价) gets green highlight, failure scenarios get red tint
                  const isVerdict = num === "10";
                  const isFailure = num === "9";
                  const bg = isVerdict ? "#0f1a0f" : isFailure ? "#1a0f0f" : "#111827";
                  const borderColor = isVerdict ? "#4ade8033" : isFailure ? "#f8717133" : "#1f2937";
                  const titleColor = isVerdict ? "#4ade80" : isFailure ? "#f87171" : "#c8a96e";
                  return (
                    <div key={i} style={{ padding: "14px 18px", background: bg, border: `1px solid ${borderColor}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: titleColor + "22", border: `1px solid ${titleColor}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: titleColor, flexShrink: 0 }}>{num}</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: titleColor, letterSpacing: "0.05em", textTransform: "uppercase" }}>{title}</div>
                      </div>
                      <div style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{cleanBody}</div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </Section>
      )}

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 24 }}>
        <button onClick={onEdit} style={{ padding: "10px 20px", background: "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{t.editEntry}</button>
      </div>

      {imgModal && (
        <div onClick={() => setImgModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={imgModal} alt="Preview" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 8 }} />
        </div>
      )}
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ entries, onAdd, onSelect, onSeenAgain, t }) {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [sort, setSort] = useState("newest");
  const [seenAgainId, setSeenAgainId] = useState(null);
  const [seenAgainText, setSeenAgainText] = useState("");
  const [seenAgainDate, setSeenAgainDate] = useState("");
  const isMobile = useIsMobile();

  const filtered = entries
    .filter(e => {
      const q = search.toLowerCase();
      return (!q || e.brand.toLowerCase().includes(q) || e.product.toLowerCase().includes(q)) &&
        (!filterCat || e.category === filterCat);
    })
    .sort((a, b) => {
      if (sort === "newest") return new Date(b.dateObserved) - new Date(a.dateObserved);
      if (sort === "score") return b.totalScore - a.totalScore;
      if (sort === "validated") return (b.validation ? 1 : 0) - (a.validation ? 1 : 0);
      return 0;
    });

  const stats = {
    total: entries.length,
    validated: entries.filter(e => e.validation).length,
    predAccuracy: (() => {
      const validatedWithAnswer = entries.filter(e => e.validation?.predictionCorrect);
      if (!validatedWithAnswer.length) return "—";
      const correct = validatedWithAnswer.filter(e => e.validation.predictionCorrect === "Yes").length;
      return `${Math.round((correct / validatedWithAnswer.length) * 100)}%`;
    })(),
  };

  return (
    <div>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
        {[[t.logged, stats.total], [t.validated, stats.validated], [t.predAccuracy, stats.predAccuracy]].map(([l, v]) => (
          <div key={l} style={{ padding: "16px 20px", background: "#111827", borderRadius: 10, border: "1px solid #1f2937" }}>
            <div style={{ fontSize: 11, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#c8a96e", fontFamily: "Georgia, serif" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.searchPlaceholder}
          style={{ flex: 1, minWidth: 180, background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "9px 14px", color: "#e5e7eb", fontSize: 13, outline: "none" }} />
        <select value={filterCat} onChange={e => setFilterCat(e.target.value)}
          style={{ background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "9px 14px", color: "#9ca3af", fontSize: 12, outline: "none" }}>
          <option value="">{t.allCategories}</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}
          style={{ background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: "9px 14px", color: "#9ca3af", fontSize: 12, outline: "none" }}>
          <option value="newest">{t.newestFirst}</option>
          <option value="score">{t.highestScore}</option>
          <option value="validated">{t.validatedFirst}</option>
        </select>
        <button onClick={onAdd} style={{ padding: "9px 18px", background: "#c8a96e", color: "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
          + New Entry
        </button>
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#6b7280" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📦</div>
          <div style={{ fontSize: 15, marginBottom: 6 }}>{t.noEntries}</div>
          <div style={{ fontSize: 12 }}>{t.noEntriesHint}</div>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {filtered.map(entry => {
            const sl = scoreLabel(entry.totalScore);
            const slLabel = sl.label === "Strong" ? t.strong : sl.label === "Medium" ? t.medium : t.weak;
            return (
              <div key={entry.id} onClick={() => onSelect(entry)} style={{ padding: "18px 20px", background: "#111827", borderRadius: 10, border: "1px solid #1f2937", cursor: "pointer", transition: "border-color 0.2s, transform 0.1s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e55"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1f2937"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#f9fafb", fontFamily: "Georgia, serif" }}>{entry.brand}</div>
                      <div style={{ fontSize: 12, color: "#9ca3af" }}>·</div>
                      <div style={{ fontSize: 13, color: "#9ca3af" }}>{entry.product}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {entry.category && <span style={{ padding: "2px 8px", background: "#1f2937", borderRadius: 20, fontSize: 10, color: "#9ca3af" }}>{entry.category}</span>}
                      {entry.location && <span style={{ padding: "2px 8px", background: "#1f2937", borderRadius: 20, fontSize: 10, color: "#9ca3af" }}>{entry.location}</span>}
                      <span style={{ padding: "2px 8px", background: "#1f2937", borderRadius: 20, fontSize: 10, color: "#6b7280" }}>{fmtDate(entry.dateObserved)}</span>
                      {entry.prediction?.locked && <span style={{ padding: "2px 8px", background: "#1f2937", borderRadius: 20, fontSize: 10, color: "#60a5fa" }}>{t.predicted}: {entry.prediction.willSell}</span>}
                      {entry.validation ? <span style={{ padding: "2px 8px", background: "#16a34a22", border: "1px solid #16a34a55", borderRadius: 20, fontSize: 10, color: "#4ade80" }}>✓ {t.validated}</span> : <span style={{ padding: "2px 8px", background: "#374151", borderRadius: 20, fontSize: 10, color: "#6b7280" }}>{t.notValidated}</span>}
                      {entry.sightings?.length > 1 && <span style={{ padding: "2px 8px", background: "#1e3a5f", borderRadius: 20, fontSize: 10, color: "#60a5fa" }}>👁 {entry.sightings.length}×</span>}
                    </div>
                    {seenAgainId === entry.id ? (
                      <div onClick={e => e.stopPropagation()} style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ display: "flex", gap: 6 }}>
                          <input
                            type="date"
                            value={seenAgainDate}
                            onChange={e => setSeenAgainDate(e.target.value)}
                            style={{ flex: "0 0 auto", background: "#0d1117", border: "1px solid #c8a96e55", borderRadius: 6, padding: "6px 8px", color: "#e5e7eb", fontSize: 12, outline: "none", colorScheme: "dark" }}
                          />
                          <input
                            autoFocus
                            value={seenAgainText}
                            onChange={e => setSeenAgainText(e.target.value)}
                            placeholder={t.seenAgainPlaceholder}
                            onKeyDown={e => {
                              if (e.key === "Enter" && seenAgainText.trim()) {
                                onSeenAgain(entry.id, seenAgainText.trim(), seenAgainDate || new Date().toISOString().slice(0, 10));
                                setSeenAgainId(null); setSeenAgainText(""); setSeenAgainDate("");
                              }
                              if (e.key === "Escape") { setSeenAgainId(null); setSeenAgainText(""); setSeenAgainDate(""); }
                            }}
                            style={{ flex: 1, background: "#0d1117", border: "1px solid #c8a96e55", borderRadius: 6, padding: "6px 10px", color: "#e5e7eb", fontSize: 12, outline: "none" }}
                          />
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button onClick={() => { if (seenAgainText.trim()) { onSeenAgain(entry.id, seenAgainText.trim(), seenAgainDate || new Date().toISOString().slice(0, 10)); } setSeenAgainId(null); setSeenAgainText(""); setSeenAgainDate(""); }}
                            style={{ flex: 1, padding: "6px 12px", background: "#c8a96e", border: "none", borderRadius: 6, color: "#0d1117", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{t.log}</button>
                          <button onClick={() => { setSeenAgainId(null); setSeenAgainText(""); setSeenAgainDate(""); }}
                            style={{ padding: "6px 10px", background: "transparent", border: "1px solid #374151", borderRadius: 6, color: "#6b7280", fontSize: 11, cursor: "pointer" }}>✕</button>
                        </div>
                      </div>
                    ) : (
                      <button onClick={e => { e.stopPropagation(); setSeenAgainId(entry.id); setSeenAgainText(""); }}
                        style={{ marginTop: 8, padding: "4px 10px", background: "transparent", border: "1px solid #374151", borderRadius: 6, color: "#6b7280", fontSize: 11, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 }}>
                        {t.seenAgain}
                      </button>
                    )}
                  </div>
                  <div style={{ textAlign: "right", marginLeft: 16 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: sl.color, fontFamily: "Georgia, serif", lineHeight: 1 }}>{entry.totalScore}</div>
                    <div style={{ fontSize: 10, color: sl.color }}>{slLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function Login({ lang, setLang }) {
  const [tab, setTab] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const lt = T[lang];
  const isZh = lang === "zh";

  const handleSignIn = async () => {
    if (!email || !password) return setErr(isZh ? "请填写邮箱和密码。" : "Please enter your email and password.");
    setErr(""); setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setErr(isZh ? `登录失败：${error.message}` : `Sign in failed: ${error.message}`);
  };

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirm) return setErr(isZh ? "请填写所有字段。" : "Please fill in all fields.");
    if (password !== confirm) return setErr(isZh ? "两次密码不一致。" : "Passwords do not match.");
    if (password.length < 6) return setErr(isZh ? "密码至少 6 位。" : "Password must be at least 6 characters.");
    setErr(""); setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
    setLoading(false);
    if (error) return setErr(isZh ? `注册失败：${error.message}` : `Sign up failed: ${error.message}`);
    setSuccessMsg(isZh ? "注册成功！请检查邮箱点击确认链接，然后回来登录。" : "Account created! Check your email for a confirmation link, then sign in.");
    setTab("signin");
  };

  const inputStyle = { width: "100%", boxSizing: "border-box", background: "#0d1117", border: "1px solid #374151", borderRadius: 8, padding: "11px 14px", color: "#e5e7eb", fontSize: 13, outline: "none", fontFamily: "system-ui", marginBottom: 12 };
  const labelStyle = { fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 6, fontFamily: "system-ui", display: "block" };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "system-ui" }}>
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
          <button onClick={() => setLang(l => l === "en" ? "zh" : "en")}
            style={{ padding: "4px 12px", background: "transparent", border: "1px solid #374151", borderRadius: 6, color: "#c8a96e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#c8a96e", textTransform: "uppercase", marginBottom: 10 }}>Commercial Intelligence</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#f9fafb", letterSpacing: "-0.02em", marginBottom: 8, fontFamily: "Georgia, serif" }}>{lt.appName}</div>
          <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{lt.loginTagline}</div>
        </div>
        <div style={{ background: "#111827", borderRadius: 12, border: "1px solid #1f2937", overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid #1f2937" }}>
            {[["signin", isZh ? "登录" : "Sign In"], ["signup", isZh ? "注册" : "Sign Up"]].map(([key, label]) => (
              <button key={key} onClick={() => { setTab(key); setErr(""); setSuccessMsg(""); }}
                style={{ flex: 1, padding: "14px", background: "transparent", border: "none", borderBottom: tab === key ? "2px solid #c8a96e" : "2px solid transparent", color: tab === key ? "#c8a96e" : "#6b7280", fontWeight: tab === key ? 700 : 400, fontSize: 13, cursor: "pointer", fontFamily: "system-ui", marginBottom: -1 }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ padding: 24 }}>
            {err && <div style={{ marginBottom: 14, padding: "8px 12px", background: "#f8717122", border: "1px solid #f8717144", borderRadius: 6, fontSize: 12, color: "#f87171" }}>{err}</div>}
            {successMsg && <div style={{ marginBottom: 14, padding: "8px 12px", background: "#16a34a22", border: "1px solid #16a34a55", borderRadius: 6, fontSize: 12, color: "#4ade80" }}>{successMsg}</div>}
            {tab === "signup" && (
              <>
                <label style={labelStyle}>{isZh ? "姓名" : "Name"}</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder={isZh ? "你的名字" : "Your name"}
                  style={inputStyle} onKeyDown={e => e.key === "Enter" && handleSignUp()} />
              </>
            )}
            <label style={labelStyle}>{lt.email}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
              style={inputStyle} onKeyDown={e => e.key === "Enter" && (tab === "signin" ? handleSignIn() : handleSignUp())} />
            <label style={labelStyle}>{lt.password}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
              style={{ ...inputStyle, marginBottom: tab === "signup" ? 12 : 20 }} onKeyDown={e => e.key === "Enter" && (tab === "signin" ? handleSignIn() : handleSignUp())} />
            {tab === "signup" && (
              <>
                <label style={labelStyle}>{isZh ? "确认密码" : "Confirm Password"}</label>
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••"
                  style={{ ...inputStyle, marginBottom: 20 }} onKeyDown={e => e.key === "Enter" && handleSignUp()} />
              </>
            )}
            <button onClick={tab === "signin" ? handleSignIn : handleSignUp} disabled={loading}
              style={{ width: "100%", padding: "12px", background: loading ? "#374151" : "#c8a96e", color: loading ? "#9ca3af" : "#0d1117", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: loading ? "not-allowed" : "pointer", letterSpacing: "0.03em" }}>
              {loading ? (isZh ? "处理中..." : "Processing...") : tab === "signin" ? (isZh ? "登录 →" : "Sign In →") : (isZh ? "创建账号 →" : "Create Account →")}
            </button>
            <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "#6b7280" }}>
              {tab === "signin"
                ? <span>{isZh ? "还没有账号？" : "Don't have an account? "}<button onClick={() => { setTab("signup"); setErr(""); setSuccessMsg(""); }} style={{ background: "none", border: "none", color: "#c8a96e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>{isZh ? "立即注册" : "Sign up"}</button></span>
                : <span>{isZh ? "已有账号？" : "Already have an account? "}<button onClick={() => { setTab("signin"); setErr(""); setSuccessMsg(""); }} style={{ background: "none", border: "none", color: "#c8a96e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>{isZh ? "立即登录" : "Sign in"}</button></span>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [dbLoading, setDbLoading] = useState(false);
  const [view, setView] = useState("dashboard");
  const [selected, setSelected] = useState(null);
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const isMobile = useIsMobile();

  // ── Auth listener ──
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // ── Load entries from DB when user logs in ──
  useEffect(() => {
    if (!user) { setEntries([]); return; }
    setDbLoading(true);
    supabase
      .from("entries")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setEntries(data.map(row => ({ ...row.data, _dbId: row.id })));
        setDbLoading(false);
      });
  }, [user]);

  // ── Show loading while checking auth ──
  if (authLoading) return (
    <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#6b7280", fontSize: 13 }}>Loading...</div>
    </div>
  );

  if (!user) return <Login lang={lang} setLang={setLang} />;

  // ── CRUD operations ──
  const deleteEntry = async (id) => {
    const entry = entries.find(e => e.id === id);
    if (entry?._dbId) await supabase.from("entries").delete().eq("id", entry._dbId);
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const seenAgain = async (id, location, date) => {
    const updated = entries.map(e => e.id !== id ? e : {
      ...e,
      sightings: [...(e.sightings || []), { date: date || new Date().toISOString().slice(0, 10), location }]
    });
    setEntries(updated);
    const entry = updated.find(e => e.id === id);
    if (entry?._dbId) {
      const { _dbId, ...data } = entry;
      await supabase.from("entries").update({ data }).eq("id", _dbId);
    }
  };

  const saveEntry = async (entry) => {
    const existing = entries.find(e => e.id === entry.id);
    if (existing?._dbId) {
      // Update existing
      const { _dbId, ...data } = { ...entry, _dbId: existing._dbId };
      await supabase.from("entries").update({ data }).eq("id", _dbId);
      setEntries(prev => prev.map(e => e.id === entry.id ? { ...entry, _dbId } : e));
    } else {
      // Insert new
      const { data: rows, error } = await supabase
        .from("entries")
        .insert({ user_id: user.id, data: entry })
        .select();
      if (!error && rows?.[0]) {
        setEntries(prev => [{ ...entry, _dbId: rows[0].id }, ...prev.filter(e => e.id !== entry.id)]);
      }
    }
    setView("dashboard");
    setSelected(null);
  };

  const S = {
    app: { minHeight: "100vh", background: "#0d1117", color: "#e5e7eb", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" },
    nav: { borderBottom: "1px solid #1f2937", padding: isMobile ? "0 14px" : "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52, position: "sticky", top: 0, background: "#0d1117", zIndex: 100 },
    main: { maxWidth: 760, margin: "0 auto", padding: isMobile ? "20px 14px 120px" : "32px 24px 60px" },
  };

  return (
    <div style={S.app}>
      <nav style={S.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: isMobile ? 16 : 18, fontWeight: 700, color: "#f9fafb", letterSpacing: "-0.01em" }}>{t.appName}</div>
          {!isMobile && <div style={{ fontSize: 10, color: "#c8a96e", letterSpacing: "0.12em", textTransform: "uppercase", padding: "2px 7px", border: "1px solid #c8a96e44", borderRadius: 4 }}>Beta</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {view !== "dashboard" && (
            <button onClick={() => { setView("dashboard"); setSelected(null); }}
              style={{ background: "transparent", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 13, padding: "4px 6px" }}>
              {isMobile ? "←" : t.dashboard}
            </button>
          )}
          {view === "dashboard" && (
            <button onClick={() => setView("add")}
              style={{ padding: isMobile ? "6px 12px" : "6px 14px", background: "#c8a96e", color: "#0d1117", border: "none", borderRadius: 6, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {isMobile ? "+" : t.newEntry}
            </button>
          )}
          <button onClick={() => setLang(l => l === "en" ? "zh" : "en")}
            style={{ padding: "5px 10px", background: "transparent", border: "1px solid #374151", borderRadius: 6, color: "#c8a96e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
            {lang === "en" ? "中" : "EN"}
          </button>
          <button onClick={() => supabase.auth.signOut()}
            style={{ background: "transparent", border: "1px solid #374151", color: "#6b7280", cursor: "pointer", fontSize: 12, borderRadius: 6, padding: "5px 10px" }}>
            {isMobile ? "↩" : t.logout}
          </button>
        </div>
      </nav>

      <main style={S.main}>
        {dbLoading && (
          <div style={{ textAlign: "center", padding: 40, color: "#6b7280", fontSize: 13 }}>
            {lang === "zh" ? "加载中..." : "Loading your entries..."}
          </div>
        )}

        {!dbLoading && view === "dashboard" && (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#f9fafb", fontFamily: "Georgia, serif", letterSpacing: "-0.01em", marginBottom: 4 }}>{t.yourBrandLog}</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>{t.tagline}</div>
            </div>
            <Dashboard entries={entries} onAdd={() => setView("add")} onSelect={e => { setSelected(e); setView("detail"); }} onSeenAgain={seenAgain} t={t} />
          </>
        )}

        {!dbLoading && (view === "add" || view === "edit") && (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#f9fafb", fontFamily: "Georgia, serif", letterSpacing: "-0.01em", marginBottom: 4 }}>
                {view === "add" ? t.logNewEntry : t.editEntryTitle}
              </div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>{t.predictionHint}</div>
            </div>
            <EntryForm
              initial={view === "edit" ? selected : null}
              onSave={saveEntry}
              onCancel={() => { setView(selected ? "detail" : "dashboard"); }}
              onDelete={(id) => { deleteEntry(id); setView("dashboard"); setSelected(null); }}
              t={t} lang={lang}
            />
          </>
        )}

        {!dbLoading && view === "detail" && selected && (
          <EntryDetail
            entry={entries.find(e => e.id === selected.id) || selected}
            onEdit={() => setView("edit")}
            onBack={() => { setSelected(null); setView("dashboard"); }}
            t={t} lang={lang}
          />
        )}
      </main>
    </div>
  );
}
