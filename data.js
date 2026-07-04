/* ============================================================
   StackBD — company data
   ------------------------------------------------------------
   REAL COMPANIES, COMMUNITY-REPORTED SALARY DATA.
   Facts (founding, size, stack) come from company sites, press
   and job postings. Salary bands are compiled from Glassdoor,
   levels.fyi, BdJobs postings and community salary surveys
   (accessed July 2026). They are self-reported estimates, NOT
   figures verified by the companies.

   HOW TO EDIT
   -----------
   Each company is one object in the COMPANIES array.

   - `id`         unique slug, used in URLs (#/company/<id>)
   - `type`       one of: "Product", "Fintech", "E-commerce",
                  "Outsourcing", "MNC R&D", "Startup"
   - `area`       Dhaka neighbourhood (drives the Area filter)
   - `stack`      three lists; every item becomes a filter chip
   - `levels`     career ladder, ordered bottom → top.
       - `key`        canonical id for compare-view alignment:
                      "se1", "se2", "senior", "lead", "em".
                      Omit levels with no public data.
       - `title`      the company's actual title for the level
       - `band`       [min, max] gross monthly BDT
       - `years`      typical years of experience
       - `scope`      one line of context
       - `source`     where the band comes from
       - `confidence` "high" | "medium" | "low"
   - `salaryNotes` caveats about the data quality
   - `sources`     main URLs used (strings; may end with a note
                   in parentheses)
   - `verified`    set true once figures are confirmed with the
                   company — swaps the badge to "Verified".
   ============================================================ */

const LEVEL_KEYS = ["se1", "se2", "senior", "lead", "em"];

/* Editorial tier grouping — argue with it by editing `tier` on any company.
   Based on community-reported pay bands and engineering reputation, not any
   official ranking. */
const TIERS = {
  1: {
    label: "Tier 1 · Top of market",
    blurb: "The highest community-reported pay bands in Dhaka and the hardest interview bars — MNC R&D centers, top fintech and premium Nordic/US-facing shops.",
  },
  2: {
    label: "Tier 2 · Strong mid-market",
    blurb: "Solid pay with real engineering practice — large product companies, established outsourcing firms and funded startups. Where most good BD engineering jobs live.",
  },
  3: {
    label: "Tier 3 · Entry gateways & volume hirers",
    blurb: "Lower bands, but structured training programs and a much easier way in — common first employers that feed the tiers above.",
  },
};

const COMPANIES = [
  {
    id: "bkash",
    name: "bKash",
    bn: "বিকাশ",
    tagline: "Bangladesh's dominant mobile wallet — 80M+ verified users, a BRAC Bank subsidiary.",
    type: "Fintech",
    city: "Dhaka",
    area: "Cantonment",
    founded: 2011,
    employees: "2,500+",
    engineers: "",
    website: "https://www.bkash.com",
    hue: 330,
    tier: 1,
    domains: ["Mobile financial services", "Payments", "Remittance"],
    notable: [
      "bKash consumer app — 82M+ verified users",
      "Merchant payments & QR acceptance network",
      "International remittance rails (Ant/Alipay partnership)",
    ],
    about:
      "Founded by Kamal and Iqbal Quadir and launched in July 2011 as a BRAC Bank subsidiary, bKash runs Bangladesh's largest mobile financial service — cash-in/out, send money, payments and remittance for more than 82 million verified users — with later investment from Ant Financial, IFC, the Gates Foundation and SoftBank. The core MFS platform runs on Huawei Mobile Money (migrated 2017), surrounded by in-house microservices and the consumer app. Engineering sits in the Product & Technology division with a ladder of Engineer → Senior Engineer → Assistant Lead Engineer → Lead Engineer.",
    stack: {
      languages: ["Java", "Kotlin", "Swift", "Dart"],
      frameworks: ["Spring Boot", "Flutter", "Jetpack Compose"],
      tools: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Huawei Mobile Money"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily onsite at Shadhinata Tower HQ; reviews mention flexible timing and occasional WFH but no formal hybrid policy. Repeatedly cited benefits: top-of-market pay, Eid and Pohela Boishakh bonuses, profit share, provident fund, family medical insurance, car/housing loans. Glassdoor 4.3/5 (327 reviews), 94% would recommend.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Engineer", band: [42000, 60000], years: "0–2", scope: "Entry rung of the Engineer → Lead ladder; works in one Product & Technology squad on the app or surrounding services.", source: "Glassdoor SE avg ~৳600K/yr ÷ 12 (~60 reports) + community salary survey (৳50–60K)", confidence: "medium" },
      { key: "se2", title: "Senior Engineer", band: [60000, 100000], years: "2–4", scope: "Mid-level despite the 'Senior' name — bKash titles run junior; owns features on money-moving services behind formal review gates.", source: "Glassdoor SE total-pay ৳5–12L/yr ÷ 12 (~60 reports); bdtechjobs cites mid-level 80–150K", confidence: "medium" },
      { key: "senior", title: "Sr. Engineer / Asst. Lead Engineer", band: [75000, 150000], years: "4–8", scope: "Assistant Lead Engineer per bKash postings; drives design and mentors within a squad.", source: "Glassdoor Senior SE ~৳62K/mo vs bdtechjobs claim of 150–250K — contradictory, band set between", confidence: "low" },
      { key: "lead", title: "Lead Engineer", band: [108000, 178000], years: "6–10", scope: "Runs a technical area within Research & Engineering; the best-sampled bKash band.", source: "Glassdoor monthly-pay page: base ~৳130K + ~17K extras, range 108–178K (~40 reports)", confidence: "high" },
    ],
    salaryNotes:
      "Glassdoor mixes yearly and monthly figures for bKash; yearly ones were divided by 12. The senior band is genuinely contested — Glassdoor implies ~৳62K/mo while local salary blogs claim ৳150–250K — so treat it as indicative. No engineering-specific manager data exists publicly (Glassdoor's generic 'Manager' ~৳125K/mo is not engineering), so the EM level is omitted.",
    sources: [
      "https://en.wikipedia.org/wiki/BKash",
      "https://www.glassdoor.com/Monthly-Pay/Bkash-Lead-Engineer-Dhaka-Monthly-Pay-EJI_IE555424.0,5_KO6,19_IL.20,25_IM1237.htm",
      "https://www.glassdoor.com/Salary/Bkash-Dhaka-Salaries-EI_IE555424.0,5_IL.6,11_IM1237.htm (via search snippets — Glassdoor blocks direct fetch)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.bdtechjobs.com/blog/highest-paying-software-companies-bangladesh",
      "https://www.tbsnews.net/features/pursuit/what-makes-bkash-one-most-coveted-fintech-destinations-work-585386",
    ],
  },

  {
    id: "pathao",
    name: "Pathao",
    bn: "পাঠাও",
    tagline: "The super-app: rides, food, courier, e-commerce logistics and Pathao Pay.",
    type: "Product",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2015,
    employees: "~2,600",
    engineers: "",
    website: "https://pathao.com",
    hue: 358,
    tier: 2,
    domains: ["Ride-sharing", "Food delivery", "Courier & logistics", "Digital payments"],
    notable: [
      "Pathao super-app — 14+ services across Bangladesh & Nepal",
      "Pathao Courier (e-commerce parcel network)",
      "Pathao Pay & BNPL",
    ],
    about:
      "Founded in March 2015 by Fahim Saleh, Hussain Elius and Shifat Adnan, Pathao grew from a delivery service into Bangladesh's first licensed ride-sharing platform and now runs a 14-service super-app — rides, food delivery, parcels, logistics and payments/BNPL — across Bangladesh and Nepal. The backend is largely PHP/Laravel with newer Go services; mobile is Kotlin (Jetpack Compose) and Swift. Engineering publishes at medium.com/pathaoengineering.",
    stack: {
      languages: ["PHP", "Go", "Kotlin", "Swift", "JavaScript"],
      frameworks: ["Laravel", "Jetpack Compose", "RxJava"],
      tools: ["MySQL", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Kubernetes", "AWS"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Engineering postings state 'work at office' in Gulshan 2. Benefits per postings and Glassdoor: two festival bonuses, health insurance, gratuity, leave encashment, lunch and phone allowances, service discounts; engineers rate comp & benefits 4.6/5.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer I", band: [40000, 60000], years: "0–2", scope: "Ships reviewed features on one vertical (rides, food, courier); Android hires start on Kotlin/Compose.", source: "levels.fyi low band (৳480K/yr ÷ 12) + Glassdoor lower range — thin data", confidence: "low" },
      { key: "se2", title: "Software Engineer", band: [53000, 83000], years: "2–4", scope: "Owns services in the Laravel/Go estate; the best-sampled Pathao band.", source: "Glassdoor monthly (~40 reports): avg ৳70K base + ৳8K additional", confidence: "high" },
      { key: "senior", title: "Senior Software Engineer", band: [89000, 168000], years: "4–8", scope: "Leads design within a vertical and mentors; well-sampled on Glassdoor.", source: "Glassdoor monthly (~40 reports): avg ৳125K", confidence: "high" },
      { key: "lead", title: "Lead Engineer", band: [170000, 285000], years: "8+", scope: "Inferred from top self-reported packages; treat as indicative only.", source: "levels.fyi top packages (up to ৳3.42M/yr ÷ 12, few reports) + secondary blogs", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor's monthly figures (SE and Senior SE, ~40 reports each) are the most reliable. levels.fyi self-reports skew higher (median SE ~৳136K/mo total comp) — likely bonus-inclusive and senior-heavy. SE I and Lead bands rest on thin data. Pathao hires Engineering Managers per LinkedIn but no public EM band exists.",
    sources: [
      "https://en.wikipedia.org/wiki/Pathao",
      "https://www.glassdoor.com/Monthly-Pay/Pathao-Senior-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE1758349.0,6_KO7,31_IL.32,42_IN27.htm (via search snippets)",
      "https://www.levels.fyi/companies/pathao/salaries/software-engineer/locations/greater-dhaka",
      "https://career.pathao.com/jobs/software-engineer-android/",
      "https://medium.com/pathaoengineering",
    ],
  },

  {
    id: "chaldal",
    name: "Chaldal",
    bn: "চালডাল",
    tagline: "Bangladesh's largest online grocery — a Y Combinator alum famous for F# and a ~30-person eng team.",
    type: "E-commerce",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2013,
    employees: "~2,500",
    engineers: "~30",
    website: "https://chaldal.com",
    hue: 45,
    tier: 2,
    domains: ["Grocery e-commerce", "Warehousing & fulfillment", "Last-mile logistics"],
    notable: [
      "chaldal.com — 1-hour grocery delivery",
      "In-house F# warehouse & logistics platform",
      "25+ dark warehouses across 8 cities",
    ],
    about:
      "Founded in September 2013 by Waseem Alim, Zia Ashraf and Tejas Viswanath, Chaldal (YC S15) pioneered 1-hour grocery delivery in Dhaka and now runs 25+ warehouses across 8 cities, backed by IFC and others. Despite thousands of operational staff, the product is built by a deliberately small (~30-person) engineering team — one of the few serious F#/functional-programming shops anywhere — running on self-hosted infrastructure in local data centers rather than public cloud.",
    stack: {
      languages: ["F#", "C#", "TypeScript", "Python", "SQL"],
      frameworks: [".NET", "React", "React Native", "Node.js"],
      tools: ["Self-hosted infra", "Redux", "Functional programming"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily onsite at the Gulshan HQ (some roles in Jashore; chaldal.tech also lists remote/international engineering roles). Glassdoor (55 reviews, 3.8/5): good pay and learning, but 2.8/5 work-life balance — government holidays reportedly come out of paid/festival leave.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [45000, 65000], years: "0–2", scope: "Joins the small full-stack team directly; expected to pick up F#/functional patterns on the job.", source: "BdJobs posting via Dohaj (৳45K/mo) + Glassdoor SE lower bound", confidence: "medium" },
      { key: "se2", title: "Software Engineer (L2)", band: [51000, 112000], years: "2–4", scope: "Chaldal uses an L-ladder (Jr → L2 → L3 → Senior → Principal); L2 owns product areas end to end.", source: "Glassdoor (~22 reports, avg ৳75K/mo, range 51–112K) + L2 posting at ৳70–80K", confidence: "high" },
      { key: "senior", title: "Software Engineer L3 / Senior SE", band: [85000, 170000], years: "4–8", scope: "L3/Senior carries whole systems; an 'L3 Specialist' posting offered ৳155–170K.", source: "Glassdoor L3 ৳1M–2M/yr ÷ 12 (5 reports) + BdJobs L3 Specialist posting", confidence: "medium" },
    ],
    salaryNotes:
      "Sample sizes are small except the general SE role (~22 Glassdoor reports). No credible public BDT data for Principal SE or EM — a US-inferred Zippia figure (~$195K) was discarded as model output, not Bangladesh data.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Chaldal-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE3173169.0,7_KO8,25_IL.26,31_IM1237.htm",
      "https://chaldal.tech/",
      "https://en.wikipedia.org/wiki/Chaldal.com",
      "https://www.ycombinator.com/companies/chaldal",
      "https://news.ycombinator.com/item?id=23507506 (CTO on F# in production)",
      "https://dohaj.com/job-details/junior-software-engineer-chaldal-limited-30484",
    ],
  },

  {
    id: "nagad",
    name: "Nagad",
    bn: "নগদ",
    tagline: "The Bangladesh Post Office's mobile financial service — 80M+ registered users, a 2023 unicorn.",
    type: "Fintech",
    city: "Dhaka",
    area: "Banani",
    founded: 2019,
    employees: "500–1,000",
    engineers: "",
    website: "https://nagad.com.bd",
    hue: 25,
    tier: 3,
    domains: ["Mobile financial services", "Payments", "Government disbursements"],
    notable: [
      "Nagad app & USSD service — 80M+ registered users",
      "First Bangla-OCR digital e-KYC in Bangladesh",
      "Government-to-person (G2P) safety-net disbursements",
    ],
    about:
      "Nagad operates under the authority of the Bangladesh Post Office, commercially launched on 26 March 2019, and serves 80+ million registered users with transfers, recharge, bills and e-commerce payments. It pioneered Bangla-OCR digital KYC in Bangladesh and became a fintech unicorn in 2023, with record monthly transaction volumes above Tk34,000 crore in 2025. Backend engineering is a Java/Spring Boot microservices estate over Oracle, MySQL and PostgreSQL.",
    stack: {
      languages: ["Java", "SQL"],
      frameworks: ["Spring Boot", "Spring Cloud", "Spring Security"],
      tools: ["Oracle", "MySQL", "PostgreSQL", "Microservices"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Office-based at Delta Dahlia Tower, Banani; no public hybrid policy. Glassdoor 3.8/5 (~61 reviews), 79% recommend — high-impact fintech work and collaborative culture on the plus side; demanding hours and off-hours calls cited on the minus, with comp & benefits rated 3.4/5.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer / Developer", band: [30000, 62500], years: "2–4", scope: "Nagad's developer postings ask for 2–4 years on Java/Spring; the only engineering band with public reports.", source: "Glassdoor (~5 reports, ৳360–750K/yr ÷ 12, via search snippets)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor lists 107 salaries across 64 Nagad titles but per-title engineering data is login-gated; only a small Software Engineer sample surfaced, reported yearly and divided by 12 (if it was actually monthly the true band is far higher — hence low confidence). A Feb 2024 community survey lists SQA at ৳30–40K and Sr. SQA at ৳40–50K/mo, consistent with the converted band. Several reviews say pay trails other fintechs. Senior/lead/EM omitted for lack of data.",
    sources: [
      "https://en.wikipedia.org/wiki/Nagad",
      "https://www.glassdoor.com/Salary/Nagad-Bangladesh-Salaries-EI_IE5426762.0,5_IL.6,16_IN27.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://bd.linkedin.com/company/mynagad",
      "https://www.tbsnews.net/economy/corporates/nagad-marks-new-milestone-digital-finance-record-transactions-1275141",
    ],
  },

  {
    id: "optimizely-bd",
    name: "Optimizely Bangladesh",
    bn: "অপটিমাইজলি বাংলাদেশ",
    tagline: "Dhaka engineering hub of the US/Swedish digital experience platform — among the city's top payers.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2023,
    employees: "230+",
    engineers: "",
    website: "https://www.optimizely.com",
    hue: 215,
    tier: 1,
    domains: ["Digital experience platforms", "CMS & commerce", "Experimentation / A-B testing"],
    notable: [
      "Optimizely CMS (formerly Episerver)",
      "Optimizely Commerce & experimentation products",
      "ML/AI features across the DXP suite",
    ],
    about:
      "Optimizely's Dhaka office at Gulshan Centre Point formally opened in September 2023, growing out of the Episerver–Optimizely combination (Episerver acquired Optimizely in 2020 and took its name). The 230+ person team works on core DXP products — CMS, commerce, experimentation — plus ML/AI features, largely in C#/.NET with React front ends on Azure. Great Place to Work certified; Glassdoor 4.4/5 with 92% of Dhaka employees recommending.",
    stack: {
      languages: ["C#", "TypeScript", "Java", "Python"],
      frameworks: [".NET", "ASP.NET Core", "React"],
      tools: ["Azure", "AWS", "Docker", "Kubernetes", "LLM APIs"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Hybrid with WFH flexibility cited by employees and leadership. The office is famous locally for its perks: free lunch and transport, sleeping pods, recreation and maternity rooms, prayer space and a Zen Garden.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer II", band: [125000, 163000], years: "2–4", scope: "Ladder runs SE I → SE II → Senior → Staff; SE II is the best-documented rung and already out-pays most local senior roles.", source: "Glassdoor Dhaka monthly pay (median ~৳149K)", confidence: "high" },
      { key: "senior", title: "Senior Software Engineer", band: [155000, 215000], years: "4–8", scope: "Senior engineers own product areas across the DXP suite.", source: "levels.fyi (median ৳2.08M/yr total comp ÷ 12 ≈ ৳173K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Among the highest-paying product employers in Dhaka: levels.fyi overall SE total comp runs ৳1.08M–2M+/yr (median ~৳155K/mo, top report ৳2.93M/yr). Staff Software Engineer and Senior Manager (Software Engineering) titles are confirmed via careers postings but have no public salary data, so those levels are omitted. SE I had a single ambiguous report (excluded).",
    sources: [
      "https://careers.optimizely.com/",
      "https://www.glassdoor.co.in/Monthly-Pay/Optimizely-Software-Engineer-Dhaka-Bangladesh-Monthly-Pay-EJI_IE498757.0,10_KO11,28_IL.29,45.htm",
      "https://www.levels.fyi/companies/optimizely/salaries/software-engineer/locations/bangladesh",
      "https://www.thedailystar.net/life-living/news/optimizely-dhaka-hi-tech-wonderland-redefines-workplace-culture-3431066",
      "https://www.tbsnews.net/economy/corporates/optimizely-opens-new-office-dhaka-693326",
    ],
  },

  {
    id: "therap-bd",
    name: "Therap (BD)",
    bn: "থেরাপ (বিডি)",
    tagline: "Dhaka development center of the US healthcare SaaS for disability and long-term care services.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Banani",
    founded: 2004,
    employees: "~400",
    engineers: "~350",
    website: "https://therapbd.com",
    hue: 175,
    tier: 2,
    domains: ["Healthcare SaaS", "Disability & long-term care", "US compliance software"],
    notable: [
      "Therap platform for I/DD service providers",
      "Used by US state agencies across dozens of states",
      "One of Dhaka's oldest pure product-engineering centers (2004)",
    ],
    about:
      "Therap (BD) Ltd. is the Bangladesh development arm of Therap Services LLC (founded 2003, HQ Connecticut), operating in Dhaka since 2004 — one of the oldest and largest pure product-engineering employers in the country. Its ~400-person Banani center builds the Therap SaaS platform used by US state agencies and providers serving people with intellectual and developmental disabilities. The stack is a mature Java estate (Java EE, Spring, legacy GWT web UI) over Oracle, plus native mobile apps.",
    stack: {
      languages: ["Java", "SQL", "JavaScript"],
      frameworks: ["Java EE", "Spring", "GWT"],
      tools: ["Oracle", "Selenium"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily onsite in Banani, 9am–5pm, with reviews mentioning Mondays as WFH days. Free breakfast, lunch and snacks, office transport, two festival bonuses, 14 days annual leave (no carry-forward); no stock or profit share.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [50000, 65000], years: "0–2", scope: "Entry point of the ASE → SE → SE II → Senior ladder; strong fresher pay for a product company.", source: "Glassdoor (৳600–780K/yr ÷ 12)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [50000, 83000], years: "2–4", scope: "Owns features on the healthcare platform; the best-sampled Therap band.", source: "Glassdoor (~52 reports, ৳600K–1M/yr base ÷ 12)", confidence: "high" },
      { key: "senior", title: "Software Engineer II / Senior SE", band: [83000, 167000], years: "4–8", scope: "SE II and Senior SE carry module ownership; Team Lead exists above but without public figures.", source: "Glassdoor SE II ৳1M–2M/yr ÷ 12", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor reports Therap salaries yearly; all figures divided by 12. A conflicting 'Senior' sample (৳710K–1M/yr, 4 reports) overlaps the SE band and was judged unreliable. No reliable lead/EM band. The QA track pays lower (Associate QA ~৳600–900K/yr).",
    sources: [
      "https://therapbd.com/",
      "https://www.glassdoor.com/Salary/Therap-BD-Bangladesh-Salaries-EI_IE2085669.0,9_IL.10,20_IN27.htm (via search snippets)",
      "https://www.bdtechjobs.com/companies/therap-bd-ltd",
      "https://therap.hire.trakstar.com/jobs/fk0hw8r",
    ],
  },

  {
    id: "srbd",
    name: "Samsung R&D Institute Bangladesh",
    bn: "স্যামসাং আর অ্যান্ড ডি",
    tagline: "Samsung Electronics' Dhaka R&D center — the first multinational R&D hub in Bangladesh.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Kawran Bazar",
    founded: 2011,
    employees: "400–600",
    engineers: "400+",
    website: "https://research.samsung.com/srbd",
    hue: 240,
    tier: 1,
    domains: ["Mobile & Android platform", "AI/ML & computer vision", "IoT & wearables"],
    notable: [
      "Galaxy ecosystem apps & platform features",
      "Android/AOSP and Tizen platform work",
      "Korea HQ training & onsite assignments",
    ],
    about:
      "SRBD opened in February 2011 as the first R&D center established by a multinational in Bangladesh, part of the global Samsung Research network. Its Dhaka engineers build applications and services for the Galaxy ecosystem — mobiles, tablets, wearables and PCs — spanning Android/AOSP platform work, AI/ML, computer vision and IoT, working mostly in C++, Java, Kotlin and Python. Known for strong fresh-graduate pay and Samsung HQ (Korea) training assignments.",
    stack: {
      languages: ["C++", "C", "Java", "Kotlin", "Python"],
      frameworks: ["Android/AOSP", "Tizen", "Computer Vision"],
      tools: ["Git", "Test automation"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite MNC R&D environment with structured Samsung global processes and Korea training/onsite opportunities (widely reported in reviews). The recurring complaint is small yearly increments (~৳5K average) despite the strong entry pay; Glassdoor compensation rating 3.4/5 across 382 salary reports.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer (fresh grad)", band: [40000, 60000], years: "0–2", scope: "Fresh-graduate entry, historically among the highest starting offers in Dhaka; reviews call fresher pay 'comparatively high'.", source: "BdJobs posted range via community salary survey + Glassdoor reviews", confidence: "medium" },
      { key: "se2", title: "Software Engineer (L2)", band: [70000, 90000], years: "2–4", scope: "Galaxy-ecosystem application and platform work; internal ladder also uses Engineer I/II designations.", source: "levels.fyi (৳1.01M/yr total ÷ 12 ≈ ৳84K; median SWE ৳800K/yr ≈ ৳67K)", confidence: "medium" },
      { key: "senior", title: "Sr. Software Engineer (L3)", band: [80000, 110000], years: "4–8", scope: "Senior platform/feature ownership; public self-reports are thin at this rung.", source: "levels.fyi (৳1.06M/yr ÷ 12 ≈ ৳88K); Glassdoor pages login-gated", confidence: "low" },
      { key: "lead", title: "Lead Engineer (Engineer II)", band: [66000, 125000], years: "8+", scope: "Lead band overlaps senior in the public data — small samples, so shown as reported.", source: "Glassdoor (total ৳798K–1.5M/yr ÷ 12) + BdJobs range ৳75–90K", confidence: "medium" },
    ],
    salaryNotes:
      "Yearly figures from levels.fyi and Glassdoor were divided by 12. bdtechjobs pegs SRBD's overall band at ৳80–250K+/mo (MNC tier), noticeably above what self-reports show — treat the top end as optimistic. The lead band overlapping the senior band reflects small, noisy samples, not an actual inversion. No public EM band.",
    sources: [
      "https://research.samsung.com/srbd",
      "https://www.levels.fyi/companies/samsung/salaries/software-engineer/locations/bangladesh",
      "https://www.glassdoor.com/Salary/Samsung-R-and-D-Institute-Bangladesh-Dhaka-Bangladesh-Salaries-EI_IE1023791.0,36_IL.37,53_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.bdtechjobs.com/blog/highest-paying-software-companies-bangladesh",
    ],
  },

  {
    id: "kona",
    name: "Kona Software Lab",
    bn: "কোনা সফটওয়্যার ল্যাব",
    tagline: "R&D center of Korean payment pioneer KONA I — smartcards, KONA Pay and $1B+/month in transactions.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2012,
    employees: "120–200",
    engineers: "100+",
    website: "https://konasl.com",
    hue: 265,
    tier: 1,
    domains: ["Payments & smartcards", "EMV/NFC security", "Fintech platforms"],
    notable: [
      "KONA Pay & KONA Money platforms",
      "~2M transactions/day, $1B+/month processed",
      "EMV smartcard applets & PKI security systems",
    ],
    about:
      "Kona Software Lab was established in 2012 in Gulshan as the R&D center and global solution wing of KONA I Co., Ltd., the South Korean smartcard, payment and security company. Its 100+ engineers build payment platforms — KONA Pay, KONA Money, Kona Card — processing around 2 million transactions daily and over $1B in monthly transaction value, on a Java/Spring estate with EMV, HCE and PKI security tooling.",
    stack: {
      languages: ["Java", "SQL", "JavaScript"],
      frameworks: ["Spring", "Java EE", "Microservices"],
      tools: ["Oracle", "EMV/smartcard systems", "PKI security"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite in Gulshan with transport, subsidized lunch, insurance, two festival bonuses, performance bonus, annual family tour and a two-day weekend. Glassdoor 3.6/5 (74 reviews); some reviews cite work pressure and internal politics.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Graduate Engineer / SE Level 1", band: [50000, 60000], years: "0–2", scope: "Posted fresher range — high for entry level, reflecting the Korean-parent payment domain.", source: "BdJobs posted range via community salary survey", confidence: "high" },
      { key: "se2", title: "Software Engineer", band: [60000, 90000], years: "2–4", scope: "Payment platform and transaction-processing work in Java/Spring.", source: "Glassdoor estimate (~৳87–88K/mo total pay; 124 salaries on file, gated)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [100000, 180000], years: "4–8", scope: "Senior engineers own payment product modules; posted ranges run notably high.", source: "BdJobs posted range via community salary survey", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor holds 124 salaries across 44 Kona titles but exact figures are login-gated; the SE snippet showed ~৳87–88K/mo total pay. Lead/EM bands are not publicly reported.",
    sources: [
      "https://konasl.com/about",
      "https://www.glassdoor.com/Salary/Kona-Software-Lab-Dhaka-Salaries-EI_IE3653457.0,17_IL.18,23_IM1237.htm (login-gated; via snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://bd.linkedin.com/company/konasl",
    ],
  },

  {
    id: "selise",
    name: "SELISE Digital Platforms",
    bn: "সেলিস",
    tagline: "Swiss enterprise software group (Secure Link Services AG) with its flagship engineering hub in Dhaka.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Dhanmondi",
    founded: 2011,
    employees: "500+",
    engineers: "~450",
    website: "https://selisegroup.com",
    hue: 200,
    tier: 2,
    domains: ["Enterprise software", "Insurance & banking platforms", "Digital consulting"],
    notable: [
      "Platforms for Swiss insurers, banks & manufacturers",
      "Zurich-led delivery at European quality standards",
      "English-first working culture in Dhaka",
    ],
    about:
      "SELISE (Secure Link Services AG) is a Swiss enterprise software and digital consulting group headquartered in Zurich whose flagship engineering hub was founded in Dhaka in 2011. The 450+ engineer Dhanmondi office builds enterprise platforms for Swiss and European clients in insurance, banking, manufacturing and retail — largely C#/.NET and TypeScript on Azure — working at European standards with English as the working language.",
    stack: {
      languages: ["C#", "TypeScript", "JavaScript"],
      frameworks: [".NET", "Angular", "React", "Flutter", "GraphQL"],
      tools: ["Azure", "AWS", "GCP", "GitHub"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite-first at the Dhanmondi office, promoted as Swiss-standard working practices; interviews and client work in English; structured career paths with European client exposure. Glassdoor 3.6/5, 88% recommend.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [30000, 50000], years: "0–2", scope: "Entry into client platform teams; English-language client exposure from early on.", source: "BdJobs posted range via community salary survey", confidence: "high" },
      { key: "se2", title: "Software Engineer", band: [50000, 95000], years: "2–4", scope: "Mid-level engineers own modules on European client platforms; AI/ML SEs were posted at ~৳110K.", source: "BdJobs posted ranges via community salary survey", confidence: "high" },
    ],
    salaryNotes:
      "Glassdoor has 36 SELISE Dhaka salaries but they're login-gated. bdtechjobs places the company-wide band at ৳60–200K+/mo with senior/architect roles at the top, but no reliable per-level senior/lead breakdown exists publicly, so those levels are omitted.",
    sources: [
      "https://selisegroup.com/about-us/",
      "https://selisegroup.com/location/bangladesh/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.bdtechjobs.com/blog/highest-paying-software-companies-bangladesh",
      "https://www.thedailystar.net/next-step/selise-creating-software-selling-innovation-1283143",
    ],
  },

  {
    id: "brainstation23",
    name: "Brain Station 23",
    bn: "ব্রেইন স্টেশন ২৩",
    tagline: "One of Bangladesh's largest software exporters — publicly listed, 850+ people, clients in 30+ countries.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2006,
    employees: "850+",
    engineers: "700+",
    website: "https://brainstation-23.com",
    hue: 150,
    tier: 2,
    domains: ["Banking & fintech", "Telco", "E-commerce & pharma"],
    notable: [
      "Mobile banking apps for major BD banks",
      "Listed on the Dhaka Stock Exchange (rare for software)",
      "Star Coder — annual competitive-programming hiring pipeline",
    ],
    about:
      "Founded in 2006, Brain Station 23 PLC builds custom software for fintech, banking, telco, e-commerce and pharma clients at home and in 30+ countries, is CMMI Level 3 / ISO 27001 certified, and is listed on the Dhaka Stock Exchange — a rarity for a local software firm. The 850+ team spans six global offices, with a famously broad stack (.NET, Java, PHP, Python, mobile) and structured hiring programs like the annual Star Coder competition.",
    stack: {
      languages: ["C#", "Java", "Python", "TypeScript", "PHP", "Kotlin"],
      frameworks: [".NET", "Spring Boot", "Angular", "React", "Flutter", "Node.js"],
      tools: ["AWS", "Azure", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "Oracle"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Results-oriented flexibility — ~9-hour days but output-focused management tolerant of WFH (per a Business Standard interview), with a flat structure and little middle management. Office-centric in Mohakhali; clients split between local banking/telco and Europe, the Middle East and the US.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate / Junior Software Engineer", band: [28000, 45000], years: "0–2", scope: "Entry via structured hiring (Star Coder, internships) into client project teams.", source: "Glassdoor (Junior SE avg ~৳30K/mo; Associate SE ~৳420K/yr ÷ 12)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [44000, 74000], years: "2–4", scope: "The best-sampled band at any BD outsourcing firm — 200+ Glassdoor reports.", source: "Glassdoor (~227 salaries, avg ৳59K/mo, range 44–74K)", confidence: "high" },
      { key: "senior", title: "Senior Software Engineer", band: [75000, 120000], years: "4–8", scope: "Anchors client deliveries and mentors; averages ~৳90K/mo on Glassdoor.", source: "Glassdoor (avg ৳90K/mo, Bangladesh)", confidence: "medium" },
      { key: "lead", title: "Lead Engineer / Solution Architect", band: [150000, 250000], years: "8+", scope: "Third-party aggregator figure only — no first-party reports.", source: "bdtechjobs salary guide (150–250K+/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor SE data is well-sampled (200+ reports). Some Glassdoor snippets show internally inconsistent yearly-looking figures which were discarded in favor of monthly averages that match market norms. No public EM/delivery-manager figures.",
    sources: [
      "https://www.glassdoor.com/Salary/Brain-Station-23-Software-Engineer-Salaries-E580909_D_KO17,34.htm",
      "https://brainstation-23.com/about/",
      "https://www.bdtechjobs.com/blog/highest-paying-software-companies-bangladesh",
      "https://www.tbsnews.net/features/panorama/secret-brain-station-23s-success-flexibility-creativity-and-spreading-ownership",
    ],
  },

  {
    id: "cefalo",
    name: "Cefalo Bangladesh",
    bn: "সেফালো",
    tagline: "Norwegian-owned Dhaka center leasing dedicated engineers to Nordic product teams — famously good hours.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Dhanmondi",
    founded: 2010,
    employees: "250+",
    engineers: "~200",
    website: "https://www.cefalo.com",
    hue: 95,
    tier: 1,
    domains: ["Media & publishing tech", "Nordic SaaS", "Dedicated product teams"],
    notable: [
      "Long-tenure embedded teams inside Norwegian products",
      "Great Place to Work certified (~94% score)",
      "Multiple-time BASIS Outsourcing Award winner",
    ],
    about:
      "Cefalo AS (HQ Oslo) started its Dhaka development center in 2010 with seven employees and has grown past 250; engineers work as embedded, full members of Norwegian client product teams rather than on project-based outsourcing. Great Place to Work certified (~94% score) and a multiple BASIS Outsourcing Award winner, known for Norwegian-style flat culture, consensus decision-making and real work-life balance.",
    stack: {
      languages: ["Java", "C#", "TypeScript", "Python", "PHP"],
      frameworks: ["Spring", ".NET", "React", "Angular", "Vue.js", "Node.js"],
      tools: ["AWS", "Azure", "Docker", "Elasticsearch"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Flexible hours and rare evening/weekend work; clients almost exclusively in Norway/Nordics, with onboarding and business trips to Norway. Benefits: 3 weeks paid vacation, 6-month maternity / 2-week paternity leave, internet and transport allowances.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [60000, 100000], years: "2–4", scope: "Cefalo rarely hires fresh graduates — entry assumes ~2+ years of shipped work on a client team.", source: "Glassdoor (avg ৳72.5K/mo Dhaka, 25 reports; ৳90K/mo BD, 70 reports) + levels.fyi", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [100000, 160000], years: "4–8", scope: "Senior counterpart to the Norwegian client's own team; consistently cited among BD's best-paid seniors.", source: "Glassdoor (avg ৳130K/mo, Dhaka)", confidence: "medium" },
      { key: "lead", title: "Lead Engineer / Tech Lead-Architect", band: [166000, 250000], years: "8+", scope: "Small-sample yearly reports divided by 12.", source: "Glassdoor (৳2M–3M/yr ÷ 12; small sample)", confidence: "low" },
    ],
    salaryNotes:
      "No reliable se1 band exists because Cefalo mostly hires experienced engineers. bdtechjobs puts median total comp around ৳141K/mo — consistently one of the highest-paying software employers in Bangladesh. levels.fyi yearly total-comp figures were divided by 12 and corroborate Glassdoor.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Cefalo-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE562443.0,6_KO7,24_IL.25,35_IN27.htm",
      "https://www.levels.fyi/companies/cefalo/salaries/software-engineer/locations/greater-dhaka",
      "https://www.cefalo.com/en/about-us",
      "https://career.cefalo.com/",
      "https://www.bdtechjobs.com/blog/highest-paying-software-companies-bangladesh",
    ],
  },

  {
    id: "enosis",
    name: "Enosis Solutions",
    bn: "ইনোসিস সল্যুশনস",
    tagline: "Dhaka outsourcing firm embedding 350+ engineers into North American product teams; famous hiring bar.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2006,
    employees: "~400",
    engineers: "350+",
    website: "https://www.enosisbd.com",
    hue: 28,
    tier: 2,
    domains: ["US SaaS products", "Healthcare & medical software", "QA automation"],
    notable: [
      "Long-term embedded teams in US products",
      "450+ delivered projects, 140+ clients",
      "Famously algorithm-heavy interview bar",
    ],
    about:
      "Enosis Solutions provides end-to-end software development and QA from Dhaka — 350+ engineers, 140+ global clients, 450+ delivered projects over nearly two decades. Its model embeds engineers long-term into client product teams, predominantly US technology companies, and it is known locally for a rigorous algorithm/problem-solving hiring bar and competitive fresher pay.",
    stack: {
      languages: ["C#", "JavaScript", "Java", "SQL", "Kotlin", "Swift"],
      frameworks: ["ASP.NET Core", "Angular", "React", "React Native", "Node.js"],
      tools: ["SQL Server", "MySQL", "PostgreSQL", "Test automation"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Job postings explicitly offer a hybrid (home + office) model. Client geography is primarily North America, so some teams overlap US hours. Strong QA/testing practice alongside development.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer (entry)", band: [40000, 60000], years: "0–2", scope: "Entry after the famously algorithm-heavy interview; competitive fresher pay for a service firm.", source: "Glassdoor (avg ৳50K/mo, 100+ reports)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [50000, 87000], years: "2–4", scope: "Embedded in one client's product team long-term rather than hopping projects.", source: "levels.fyi (total comp ৳604K–1.05M/yr ÷ 12)", confidence: "medium" },
      { key: "senior", title: "Senior SE / Senior SE Level II", band: [60000, 110000], years: "4–8", scope: "Very few public reports at this rung; band from single yearly figures divided by 12.", source: "Glassdoor single reports (Senior ~৳60K/mo; Senior Level II ~৳108K/mo total)", confidence: "low" },
      { key: "lead", title: "Software Development Lead", band: [120000, 200000], years: "8+", scope: "Extrapolated — no first-party reports.", source: "Extrapolated from senior reports + bdtechjobs aggregator", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor's 'annual USD' Enosis figures ($113–150K/yr) are US-normalized estimates, irrelevant to Dhaka pay, and were discarded. Senior data rests on very few reports. Observed titles: SE, Senior SE, Senior SE Level II, Software Development Lead. Founding year varies by source (2003–2012); 2006 best matches the company's own '19+ years' claim.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Enosis-Solutions-Bangladesh-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE1317305.0,27_KO28,45_IL.46,56_IN27.htm",
      "https://www.levels.fyi/companies/enosis-solutions/salaries/software-engineer",
      "https://www.enosisbd.com/",
      "https://clutch.co/profile/enosis-solutions",
    ],
  },

  {
    id: "bjit",
    name: "BJIT",
    bn: "বিজেআইটি",
    tagline: "Japan–Bangladesh offshore development house — 750+ engineers, Tokyo postings and JLPT culture.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Baridhara",
    founded: 2001,
    employees: "750+",
    engineers: "650+",
    website: "https://bjitgroup.com",
    hue: 310,
    tier: 3,
    domains: ["Japanese enterprise IT", "Embedded & IoT", "QA automation & AI/ML"],
    notable: [
      "Offshore development for Japanese enterprises since 2001",
      "Marubeni-featured Bangladesh–Japan group",
      "3-month paid trainee academy for fresh graduates",
    ],
    about:
      "BJIT started on 1 July 2001 in Dhaka with 10 engineers as a Bangladesh–Japan IT venture and now counts 750+ engineers across offices in Japan, the USA, Sweden, Finland, the Netherlands, Singapore, Thailand and Bangladesh. It delivers offshore development, QA automation, AI/ML, fintech and embedded/IoT work, with Japan the dominant client market (Marubeni has featured/invested in the group). Fresh graduates enter through a structured 3-month trainee program.",
    stack: {
      languages: ["Java", "Python", "C++", "C#", "JavaScript", "PHP"],
      frameworks: ["Spring Boot", "Hibernate", "Angular", "Odoo", "Microservices"],
      tools: ["AWS", "JUnit", "Jenkins", "Git", "QA automation"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily office-based in Baridhara with a Japanese-influenced engineering culture; engineers are frequently posted onsite to Japan, and Japanese language skill is valued. Benefits include two festival bonuses, performance bonus and yearly increment.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee / Software Engineer (entry)", band: [20000, 32000], years: "0–2", scope: "Starts at ৳20K/mo during the 3-month trainee program — the lowest entry band among major BD firms.", source: "BJIT job postings (৳20K training pay) + Glassdoor trainee ৳180–240K/yr", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [32000, 50000], years: "2–4", scope: "Well-sampled band; pay is widely regarded as below peers like Cefalo/Enosis at equivalent levels.", source: "Glassdoor (~307 salaries, avg ৳35–40K/mo, range 32–50K)", confidence: "high" },
      { key: "senior", title: "Senior Software Engineer", band: [65000, 110000], years: "4–8", scope: "Senior engineers anchor Japanese client accounts; Dhaka 25th–75th percentile spans ~৳77–140K.", source: "Glassdoor (~97 salaries, avg ৳80K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Technical Lead and Principal SE titles exist (listed among Glassdoor Dhaka's best-paid roles) but have no reliable public figures, so lead/EM are omitted. Some Glassdoor 'annual' figures are mislabeled monthly-scale data and were discarded.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/BJIT-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE623352.0,4_KO5,22_IL.23,33_IN27.htm",
      "https://bjitgroup.com/about-us",
      "https://www.marubeni.com/en/brand_media/scope/bjit/",
      "https://bjitgroup.com/career",
    ],
  },

  {
    id: "vivasoft",
    name: "Vivasoft",
    bn: "ভিভাসফট",
    tagline: "Fast-growing Banani dev shop — custom software and dedicated teams for 50+ global clients.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 2016,
    employees: "300+",
    engineers: "200+",
    website: "https://vivasoftltd.com",
    hue: 190,
    tier: 2,
    domains: ["Staff augmentation", "Custom software", "AI development"],
    notable: [
      "Dedicated remote teams for 50+ global clients",
      "One of Dhaka's most visible Go (Golang) shops",
      "~90% repeat-client rate",
    ],
    about:
      "Vivasoft was founded in 2016 by Shafiul Hasan Tareq and Shafqat Asif from a rooftop office in Dhaka and has grown to a 300+ member team on Kemal Ataturk Avenue, Banani. It provides custom development, dedicated remote teams/staff augmentation, mobile and AI work for global clients — 80+ delivered projects with a ~90% repeat-client rate — and is one of the more visible Go (Golang) shops in the local market.",
    stack: {
      languages: ["Go", "JavaScript", "TypeScript", "Python", "C#"],
      frameworks: ["React", "Angular", "Vue.js", "Node.js", "Flutter"],
      tools: ["AWS", "Azure", "GCP", "MongoDB", "Docker", "Kubernetes"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Banani office with notably flexible hours (employees report managing their own schedules); remote dedicated-team engagements are core to the business. Glassdoor 4.1/5 culture, 4.0 work-life balance, 82% recommend; increments reported as average.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Jr. Software Engineer / SE L-1", band: [25000, 70000], years: "0–2", scope: "Wide posted range — the ৳25–32K figure is an older low-end junior posting; SE L-1 postings ran ৳60–70K.", source: "BdJobs posted ranges via community salary survey", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [60000, 90000], years: "2–4", scope: "Mid-level engineers staff dedicated client teams.", source: "Glassdoor (avg ৳82.5K/mo, multiple reports)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [85000, 165000], years: "4–8", scope: "A senior Angular posting offered ৳90–120K; yearly self-reports stretch higher.", source: "Glassdoor (৳996K–2.0M/yr ÷ 12) + job posting ৳90–120K", confidence: "medium" },
    ],
    salaryNotes:
      "A dev.to industry overview cites Vivasoft's overall band as ৳50–220K/mo with a well-structured ladder. Lead/EM bands are not publicly reported.",
    sources: [
      "https://vivasoftltd.com/about-us/",
      "https://www.glassdoor.com/Salary/Vivasoft-Dhaka-Salaries-EI_IE5062992.0,8_IL.9,14_IM1237.htm",
      "https://futurestartup.com/2023/11/07/delivering-success-through-culture-the-vivasoft-way/",
      "https://dev.to/mir_mursalin_ankur/inside-bangladeshs-software-industry-companies-models-and-opportunities-5a2c",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "10ms",
    name: "10 Minute School",
    bn: "টেন মিনিট স্কুল",
    tagline: "Bangladesh's largest edtech — live classes and test prep for 10M+ students daily.",
    type: "Startup",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2015,
    employees: "~300",
    engineers: "~50",
    website: "https://10minuteschool.com",
    hue: 5,
    tier: 2,
    domains: ["Edtech", "Live classes & test prep", "Content platforms"],
    notable: [
      "10minuteschool.com & apps — 10M+ daily learners",
      "Peak XV (Surge)-backed, $5.5M pre-Series A",
      "WordPress → Kubernetes microservices migration",
    ],
    about:
      "Founded in 2015 by Ayman Sadiq with co-founder/CTO Abdullah Abyad Raied, 10 Minute School is Bangladesh's largest online education platform, teaching 10M+ students daily across web, apps and social media, backed by Peak XV (Surge) and Conjunction Capital ($5.5M pre-Series A). Engineering — roughly 50 people including PMs and BI — evolved the platform from a WordPress site to Kubernetes-deployed microservices on AWS/GCP with local servers.",
    stack: {
      languages: ["TypeScript", "JavaScript", "Kotlin", "Swift"],
      frameworks: ["React", "Angular", "Microservices"],
      tools: ["Kubernetes", "AWS", "GCP"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Job postings are onsite at the Mohakhali DOHS HQ; startup culture with Glassdoor 4.0/5 and 80% would-recommend. Job ads state salaries are negotiable for exceptional candidates.",
    },
    verified: false,
    levels: [
      { key: "senior", title: "Senior Software Engineer", band: [80000, 100000], years: "4–8", scope: "From the company's own job ads (Android/backend) — stated as negotiable upward for strong candidates.", source: "Company job posting via startup.jobs (৳80–100K/mo)", confidence: "high" },
    ],
    salaryNotes:
      "Level data is thin — only 25 Glassdoor reports company-wide. Glassdoor shows Senior Backend/SE at ~৳50–83K/mo, below their own current job-ad band of ৳80–100K, so the job-ad figure was preferred. SQA Specialist posted at ৳70–80K. No reliable entry/mid engineering bands found.",
    sources: [
      "https://en.wikipedia.org/wiki/10_Minute_School",
      "https://startup.jobs/senior-software-engineer-android-10-minute-school-6018259",
      "https://www.linkedin.com/pulse/what-do-engineers-10-minute-school-abdullah-abyad-raied",
      "https://www.glassdoor.com/Overview/Working-at-10-Minute-School-EI_IE3039512.11,27.htm",
    ],
  },

  {
    id: "shopup",
    name: "ShopUp",
    bn: "শপআপ",
    tagline: "B2B commerce for small retailers — Mokam sourcing, REDX logistics, embedded finance; now part of SILQ Group.",
    type: "Startup",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2016,
    employees: "500–1,000",
    engineers: "",
    website: "https://shopup.org",
    hue: 130,
    tier: 2,
    domains: ["B2B commerce", "Logistics", "Embedded finance / BNPL"],
    notable: [
      "Mokam — B2B sourcing for 600K+ retailers",
      "REDX last-mile logistics network",
      "SILQ Group merger with Sary ($110M Series C, 2025)",
    ],
    about:
      "Founded by Afeef Zaman with Ataur Rahim Chowdhury and Siffat Sarwar, ShopUp runs Bangladesh's largest full-stack B2B commerce platform: Mokam sourcing, REDX last-mile logistics and BNPL/credit for small retailers. In April 2025 it merged with Saudi Arabia's Sary to form SILQ Group, backed by a $110M Series C led by Sanabil Investments and Peter Thiel's Valar Ventures; Afeef Zaman is SILQ Group CEO and the ShopUp brand continues to operate in Bangladesh, having served 600,000+ retailers.",
    stack: {
      languages: ["JavaScript", "TypeScript", "Go"],
      frameworks: ["Node.js"],
      tools: ["SQL databases"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "A purpose-built 60,000 sq ft HQ at SKS Tower, Mohakhali suggests onsite-first; no published hybrid/remote policy. The 'ShopUp Fast Track (Tech)' program hires interns and juniors who are expected to ship code early.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No company-specific per-level bands could be verified: Glassdoor holds 205 Dhaka salary reports for ShopUp but they're login-gated, and AmbitionBox/6figr data is for ShopUp India (INR — a different market). Market-generic secondary sources put engineers 'at companies like ShopUp' at roughly ৳70–180K/mo, but that isn't company data, so bands are omitted rather than invented.",
    sources: [
      "https://futurestartup.com/2025/04/14/a-brief-history-of-shopup-from-facebook-commerce-facilitator-to-cross-regional-b2b-powerhouse/",
      "https://www.thedailystar.net/news/bangladesh/news/shopup-sary-merge-raise-110m-3866756",
      "https://www.shopup.org/job-postings/shopup-fast-track-tech",
      "https://www.glassdoor.co.in/Salary/ShopUp-Salaries-E2866375.htm (login-gated)",
    ],
  },

  {
    id: "orbitax",
    name: "Orbitax",
    bn: "অরবিট্যাক্স",
    tagline: "International tax software used by multinationals and Big 4 firms — Dhaka is the main dev center.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2001,
    employees: "100–200",
    engineers: "100+",
    website: "https://orbitax.com",
    hue: 80,
    tier: 2,
    domains: ["International tax software", "RegTech / compliance", "SaaS"],
    notable: [
      "Orbitax International Tax Platform (research, calculations, workflow)",
      "Global Minimum Tax (OECD Pillar 2) product sold via Thomson Reuters ONESOURCE",
      "Change Reports Tracker — worldwide tax-law change monitoring",
    ],
    about:
      "Orbitax builds international tax technology — research, compliance, entity management and tax-law change tracking — used by multinationals and Big 4 firms. Founded around 2001 with HQ in San Francisco and co-founded by Hasan Shahriar Masud, its primary engineering operation is the Mohakhali DOHS office in Dhaka. Thomson Reuters integrates and resells Orbitax products through its ONESOURCE suite. The stack is .NET/Angular microservices over MongoDB and RabbitMQ.",
    stack: {
      languages: ["C#", "TypeScript", "JavaScript", "Python", "Go"],
      frameworks: [".NET", "ASP.NET Core", "Angular"],
      tools: ["MongoDB", "RabbitMQ", "Microservices"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka office with daily complimentary meals, office transport, two-day weekend, 17 days annual leave, health insurance, DPS scheme, ~1-month annual bonus and 10–25% yearly increments per job postings. Glassdoor comp rating for associates is 2.6/5 — entry pay is seen as modest relative to the perks.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [45000, 60000], years: "0–2", scope: "Entry into the ASE → SE → Senior → Principal ladder; solid fresher band for a product company.", source: "Glassdoor (35 salaries, ৳45–53K/mo) + BdJobs posting ৳45–60K", confidence: "high" },
      { key: "se2", title: "Software Engineer", band: [45000, 85000], years: "2–4", scope: "Owns modules of the tax platform; band from yearly self-reports divided by 12.", source: "Glassdoor (15 salaries, ৳540K–1M/yr ÷ 12)", confidence: "medium" },
      { key: "senior", title: "Principal Software Engineer", band: [137000, 215000], years: "5–10", scope: "Orbitax's top IC title mapped to this rung — no public data for the in-between Senior SE title.", source: "Glassdoor monthly-pay page (avg base ~৳160K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor figures are search-snippet derived (direct fetch blocked). Internal ladder: Associate SE → SE → Senior → Principal; Senior SE and lead/EM tiers have no public data, so Principal is shown on the senior rung. Annual bonus ~1 month gross plus 10–25% increments come on top of the base bands shown.",
    sources: [
      "https://www.glassdoor.com/Salary/Orbitax-Bangladesh-Salaries-EI_IE1335340.0,7_IL.8,18_IN27.htm (via search snippets)",
      "https://hotjobs.bdjobs.com/jobs/orbitax/orbitax2.htm",
      "https://bd.linkedin.com/company/orbitaxbd",
      "https://tax.thomsonreuters.com/en/products/global-minimum-tax",
      "https://tahanima.github.io/what-bangladeshi-tech-companies-are-paying-employees-in-2026/",
    ],
  },

  {
    id: "relisource",
    name: "ReliSource Technologies",
    bn: "রিলিসোর্স",
    tagline: "Boston-HQ'd product engineering — medical devices, healthcare IT and casino systems from Gulshan.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2003,
    employees: "~140",
    engineers: "~100",
    website: "https://www.relisource.com",
    hue: 345,
    tier: 2,
    domains: ["Healthcare IT / medical devices", "Casino & gaming systems", "Logistics", "Embedded engineering"],
    notable: [
      "FDA-regulated medical-device software for US healthcare/biotech clients",
      "Casino/gaming and interactive entertainment systems for US operators",
      "Growing .NET + AI practice (LLM/RAG on Azure OpenAI and AWS Bedrock)",
    ],
    about:
      "ReliSource, established in 2003, is headquartered in Boston with its R&D center in Dhaka, operating as an extended engineering partner for US clients. It has unusual domain depth: healthcare and FDA-regulated medical devices, casino/gaming systems, logistics and insurance — spanning device-level embedded C/C++ up to cloud, mobility and AI services.",
    stack: {
      languages: ["C#", "Python", "C++", "SQL"],
      frameworks: [".NET", "React", "Angular"],
      tools: ["Azure", "AWS", "Azure OpenAI", "Docker", "Kubernetes", "SQL Server", "PostgreSQL"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Current postings specify onsite work at Gulshan-1. Glassdoor: 3.8/5 overall in Dhaka, 3.5/5 comp & benefits; cited in community discussions as one of the firms paying above ~৳50K for strong freshers.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer (entry)", band: [50000, 70000], years: "0–2", scope: "Community-reported strong fresher pay; thin first-party data.", source: "Quora/community reports of >৳50K fresher pay + Glassdoor embedded-SE lower bound", confidence: "low" },
      { key: "se2", title: "Software / Embedded Software Engineer", band: [67000, 130000], years: "2–4", scope: "Embedded and full-stack work on regulated US products.", source: "Glassdoor Embedded SE range ৳67–130K/mo (median 99K)", confidence: "medium" },
      { key: "senior", title: "Sr. Software Engineer", band: [120000, 150000], years: "4–8", scope: "Senior engineers anchor device or platform workstreams for a US client.", source: "Glassdoor Sr. SE ~৳135K/mo", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor holds 99 salaries across 33 Dhaka roles but blocks direct fetches; figures come from search snippets. The thinnest public salary record in this directory's Tier 2 — ReliSource is absent from the community salary survey, and no lead/EM data exists. Pay sits above Dhaka's SE average but below top-of-market multinationals.",
    sources: [
      "https://www.glassdoor.com/Salary/ReliSource-Dhaka-Salaries-EI_IE505414.0,10_IL.11,16_IS3812.htm (via search snippets)",
      "https://www.relisource.com/job-post/software-engineer/",
      "https://www.relisource.com/",
      "https://leadiq.com/c/relisource/5a1d98cb2300005400876910",
    ],
  },

  {
    id: "welldev",
    name: "WellDev Bangladesh",
    bn: "ওয়েলডেভ",
    tagline: "Swiss software company's main engineering hub — polyglot teams for European clients, from Banani.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 2015,
    employees: "150+",
    engineers: "100+",
    website: "https://www.welldev.io",
    hue: 165,
    tier: 2,
    domains: ["Custom software for Swiss/EU clients", "Real estate tech", "Financial services", "E-commerce"],
    notable: [
      "Long-term product engineering for 100+ Swiss/European enterprises and startups",
      "Genuinely polyglot delivery (Java, Rails, PHP, JS) embedded with clients",
      "Women's Career Start Program — 21% of employees are women",
    ],
    about:
      "WellDev is a Swiss software company headquartered in Kloten (Zurich) with offices in Dhaka, Graz and Mauritius; the Banani office is its main engineering hub with 100+ engineers. Founded around 2015, it builds custom web and mobile products for 100+ clients in real estate, financial services, e-commerce, entertainment and manufacturing, running agile Scrum teams that work directly with Swiss and European stakeholders.",
    stack: {
      languages: ["Java", "TypeScript", "Ruby", "PHP", "Python", "Kotlin", "Swift"],
      frameworks: ["React", "Angular", "Vue.js", "Node.js", "Ruby on Rails", "Spring", ".NET"],
      tools: ["Docker", "Kubernetes", "PostgreSQL", "Elasticsearch", "Redis", "GraphQL", "AWS", "GCP"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Recent postings list hybrid work from the Banani office; agile Scrum teams with direct Swiss/European stakeholder contact. Glassdoor reviews cite good salary for the local market.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee / Junior Software Engineer (L1)", band: [35000, 60000], years: "0–2", scope: "Junior L1 postings and survey reports cluster at ৳50–60K after the first year.", source: "Glassdoor entry ৳35–45K + community survey Junior L1 ৳50–60K", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [60000, 90000], years: "2–4", scope: "Interpolated between the junior and senior bands — treat as indicative.", source: "Interpolated from junior (50–60K) and senior (80K+) bands", confidence: "low" },
      { key: "senior", title: "Senior Software Engineer", band: [80000, 150000], years: "4–8", scope: "Band from WellDev's own job posting — the strongest signal available.", source: "WellDev LinkedIn posting ৳80,000–150,000/mo (Mid/Senior Java) + community survey SSE ৳115K", confidence: "high" },
    ],
    salaryNotes:
      "Glassdoor annualized figures for WellDev are noisy; the strongest signals are the company's own LinkedIn posting (৳80–150K/mo mid/senior) and the community salary survey. No public lead/EM data. Founding year is 2015 per most profiles (Swiss registry shows a 2017 AG incorporation).",
    sources: [
      "https://www.welldev.io/",
      "https://bd.linkedin.com/jobs/view/mid-senior-software-engineer-java-at-welldev-3761556631",
      "https://www.glassdoor.com/Salary/WellDev-Dhaka-Salaries-EI_IE2045527.0,7_IL.8,13_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/what-bangladeshi-tech-companies-are-paying-employees-in-2026/",
      "https://clutch.co/profile/welldev-bangladesh",
    ],
  },

  {
    id: "grameenphone",
    name: "Grameenphone (Technology)",
    bn: "গ্রামীণফোন",
    tagline: "Telenor's BD telco — the in-house tech division behind MyGP, Bioscope and Skitto.",
    type: "Product",
    city: "Dhaka",
    area: "Bashundhara",
    founded: 1997,
    employees: "~2,000",
    engineers: "~800 (IT division)",
    website: "https://www.grameenphone.com",
    hue: 210,
    tier: 1,
    domains: ["Telecommunications", "Consumer digital apps", "OTT / streaming", "Data & AI"],
    notable: [
      "MyGP super-app — 20M monthly actives (Asian Technology Awards 2024)",
      "Bioscope / Bioscope+ streaming platform",
      "Skitto digital-first mobile brand",
    ],
    about:
      "Grameenphone, founded in 1997 as a Telenor–Grameen Telecom joint venture, is Bangladesh's largest telecom with 84M+ subscribers. Its in-house Technology/IT division (~800 people, sometimes hired under the 'GP Tech' banner) runs software, DevOps, cloud, data and AI engineering from GP House in Bashundhara, on Telenor-style ladders: Engineer → Specialist → Staff Engineer → Lead Engineer.",
    stack: {
      languages: ["Java", "Python", "C#", "JavaScript"],
      frameworks: ["Spring", "Microservices"],
      tools: ["Kubernetes", "Docker", "Jenkins", "Ansible", "SonarQube", "JIRA"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Flexible hours and a hybrid-friendly open-office culture at GP House; free lunch, free transport and famously frequent bonuses ('bonuses almost every month' per reviews). Glassdoor: 4.5/5 compensation & benefits, 4.3/5 culture, 93% would recommend.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [55000, 75000], years: "2–4", scope: "GP mostly hires experienced engineers plus a small graduate program — no reliable fresher band exists.", source: "Glassdoor: median total pay ৳60K/mo (6 salaries, Dhaka)", confidence: "medium" },
      { key: "senior", title: "Specialist / Staff Engineer", band: [65000, 100000], years: "4–8", scope: "Telenor-ladder Specialist and Staff Engineer roles; Staff postings require 5+ years.", source: "Glassdoor Specialist ~৳804K/yr (~67K/mo); thin sample", confidence: "low" },
      { key: "lead", title: "Lead Engineer", band: [100000, 130000], years: "6–12", scope: "Leads a platform or product area within the Technology division.", source: "Glassdoor Lead Engineer ~৳1.26M/yr (~105K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "The cash bands look mid-market next to top software houses, but Grameenphone's total compensation is telco-scale: multiple festival/performance bonuses, provident fund and gratuity, free lunch and transport — which is why its Glassdoor comp rating (4.5/5) is the highest in this directory and why it sits in Tier 1 despite the base figures. Entry level omitted for lack of data.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/GrameenPhone-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE405018.0,12_KO13,30_IL.31,36_IM1237.htm (via search snippets)",
      "https://en.wikipedia.org/wiki/Grameenphone",
      "https://www.glassdoor.com/Benefits/GrameenPhone-Bangladesh-Benefits-EI_IE405018.0,12_IL.13,23_IN27.htm",
      "https://rocketreach.co/grameenphone-ltd-it-department_b5c62f09f42e0ca6",
    ],
  },

  {
    id: "augmedix",
    name: "Augmedix Bangladesh",
    bn: "অগমেডিক্স",
    tagline: "US health-AI company (now Commure) — ambient medical documentation, one of Dhaka's best-paying product shops.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2015,
    employees: "~1,300 (BD)",
    engineers: "~200",
    website: "https://augmedix.com.bd",
    hue: 185,
    tier: 1,
    domains: ["Healthcare AI", "Ambient clinical documentation", "Speech-to-text NLP"],
    notable: [
      "Augmedix Go — ambient AI medical note generation for US health systems",
      "Real-time remote documentation platform for US doctors",
      "Acquired by Commure (Oct 2024); Dhaka remains a core engineering hub",
    ],
    about:
      "Augmedix, co-founded in 2012 by Bangladeshi-origin Stanford grad Ian Shakil, converts doctor–patient conversations into medical notes using ambient AI plus human documentation specialists. The Bangladesh operation started around 2015 with ~60 people and grew to ~1,300 (mostly documentation specialists, with a substantial engineering org), making it one of Dhaka's largest health-tech employers. California-based Commure acquired Augmedix in October 2024.",
    stack: {
      languages: ["Java", "TypeScript", "Python", "Go"],
      frameworks: ["Angular", "React", "Spring", "Node.js"],
      tools: ["AWS", "GCP", "Docker", "Kubernetes"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Hybrid/WFH flexibility for engineering (standard hours); operations roles run US-hours night shifts, which drags the Glassdoor work-life score (2.4/5) — that rating is ops-driven, not engineering. Competitive benefits; some reviews criticize the leave policy.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [112000, 152000], years: "2–4", scope: "levels.fyi median total comp ~৳137K/mo — top-tier pay for a mid-level Dhaka engineer.", source: "levels.fyi (৳1.34M–1.82M/yr total comp, median 1.64M, ÷ 12)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [122500, 160000], years: "4–8", scope: "Glassdoor's figure is 2021-era and likely low today.", source: "Glassdoor snippet (avg ৳122.5K/mo, 2021) + extrapolation from levels.fyi", confidence: "low" },
      { key: "lead", title: "Staff / Senior Staff Engineer", band: [110000, 180000], years: "8+", scope: "Bands blur at the top — the single community-survey Staff datapoint overlaps the SE band.", source: "Community survey (Staff SWE ৳110K, single datapoint) + Senior Staff postings", confidence: "low" },
    ],
    salaryNotes:
      "levels.fyi is the strongest source (SE median ৳1.64M/yr ≈ ৳137K/mo). Glassdoor blocks direct fetches and its senior figure is from 2021. Perceived as one of the best-paying product companies in Dhaka for engineers; se1 omitted for lack of data.",
    sources: [
      "https://www.levels.fyi/companies/augmedix/salaries/software-engineer",
      "https://www.glassdoor.com/Salary/Augmedix-Dhaka-Salaries-EI_IE1023866.0,8_IL.9,14_IM1237.htm (via search snippets)",
      "https://www.tbsnews.net/bangladesh/merger-health-tech-giants-commure-acquires-augmedix-982581",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://augmedix.com.bd/career/",
    ],
  },

  {
    id: "tigerit",
    name: "TigerIT Bangladesh",
    bn: "টাইগার আইটি",
    tagline: "Biometrics & identity software — builders of Bangladesh's National ID and a NIST-certified AFIS.",
    type: "Product",
    city: "Dhaka",
    area: "Banani",
    founded: 2000,
    employees: "~360",
    engineers: "~200",
    website: "https://www.tigerit.com",
    hue: 15,
    tier: 2,
    domains: ["Biometrics / National ID", "GovTech identity management", "e-Passports & border control"],
    notable: [
      "Bangladesh National ID & voter registration system (2008 election)",
      "TigerAFIS — first NIST-certified fingerprint engine from South Asia",
      "National ID / license systems in Nepal, Bhutan and beyond",
    ],
    about:
      "Founded in 2000, TigerIT designs end-to-end identity and credential management systems — national ID, voter registration, e-passports, border control, driving licenses and vehicle registration — for governments and large enterprises, with deployments across Bangladesh, Nepal, Bhutan, India and Canada. Its TigerAFIS fingerprint-matching engine was the first NIST-certified AFIS from South Asia and ranks among the top performers globally. Reported revenue is around $41M with ~360 employees.",
    stack: {
      languages: ["Java", "C++", "JavaScript", "SQL"],
      frameworks: ["Spring Boot", "Java EE"],
      tools: ["Oracle", "MySQL", "PostgreSQL", "Biometric SDKs"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Traditional onsite engineering culture at the Banani office; government and security projects limit remote work.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [50000, 80000], years: "0–3", scope: "Well-sampled entry band — Glassdoor notes TigerIT SE pay runs ~27% above the BD average.", source: "Glassdoor snippets: avg ৳60.5K/mo across 43 salaries; ৳600–960K/yr ÷ 12", confidence: "medium" },
      { key: "se2", title: "Software Engineer (experienced)", band: [80000, 120000], years: "2–4", scope: "Bridged from a community-survey datapoint and the Glassdoor top-of-band.", source: "Community survey (SE ৳120K, Feb 2024) + Glassdoor SE upper range", confidence: "low" },
      { key: "senior", title: "Senior Software Engineer", band: [90000, 150000], years: "4–8", scope: "Senior engineers own biometric matching and national-scale ID systems.", source: "Community survey (৳90–150K, Feb 2024)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor blocks direct fetches — figures from search snippets, though the 43-report SE sample is reasonably robust. QA engineers reported at ৳30–60K in the community survey. No lead/EM data found.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Tiger-IT-Bangladesh-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE559245.0,19_KO20,37_IL.38,48_IN27.htm (via search snippets)",
      "https://www.tigerit.com/about.html",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://bd.linkedin.com/jobs/view/java-software-engineer-at-tigerit-bangladesh-ltd-3920499954",
    ],
  },

  {
    id: "kaz",
    name: "Kaz Software",
    bn: "কাজ সফটওয়্যার",
    tagline: "Culture-first outsourcing house building for US/UK clients since 2004 — famous for its 'Nirvana' office.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Shantinagar",
    founded: 2004,
    employees: "~150",
    engineers: "~100",
    website: "https://www.kaz.com.bd",
    hue: 285,
    tier: 3,
    domains: ["Custom product development", "Web & mobile apps", "Data conversion & AI services"],
    notable: [
      "Long-running dedicated teams for US/UK ISVs (legal-tech, publishing, fintech)",
      "'Nirvana' — its custom-built office, a Dhaka dev-community landmark",
      "AI/data-engineering line added on top of classic outsourcing",
    ],
    about:
      "Founded in 2004 by Wahid Choudhury, Kaz Software builds custom web, mobile, desktop and AI products as an integrated outsourced team for enterprises and startups in 35+ countries. One of Dhaka's older outsourcing houses, it is best known locally for its engineering culture (Glassdoor 4.5/5 culture, 4.2/5 work-life balance) — it competes on learning and environment rather than top-of-market pay.",
    stack: {
      languages: ["C#", "Python", "JavaScript", "Swift"],
      frameworks: [".NET", "Angular"],
      tools: ["AWS", "Azure", "GCP", "Test automation"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Culture-forward onsite office with mentorship for fresh grads and a fast (~10-day) hiring process; some post-COVID hybrid flexibility but the identity is office-centric. 79% would recommend on Glassdoor.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [30000, 56000], years: "0–2", scope: "Entry pay below the Dhaka mid-market band — the trade is mentorship, culture and a gentler on-ramp.", source: "Community survey (৳30–40K, Feb 2024) + Glassdoor snippet (ASE ~৳35–56K, mislabeled yearly)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor's Kaz figures are clearly mislabeled monthly BDT shown as yearly (e.g. 'ASE ৳44,000/yr'); its Senior SE snippet (৳165–262K) is a model estimate with ambiguous units and was discarded rather than guessed. Tier 3 reflects the pay data, not the reputation — culture ratings are among the best in this directory.",
    sources: [
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.glassdoor.com/Monthly-Pay/KAZ-Software-Associate-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE583815.0,12_KO13,40_IL.41,46_IM1237.htm (via search snippets)",
      "https://futurestartup.com/2025/06/21/lifes-work-a-conversation-with-wahid-choudhury-founder-kaz-software-part-01/",
      "https://clutch.co/profile/kaz-software",
    ],
  },

  {
    id: "dsi",
    name: "Dynamic Solution Innovators",
    bn: "ডিএসআই",
    tagline: "Java-heavy 300-engineer shop behind Bangladesh's school monitoring system and US edtech platforms.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2001,
    employees: "200–500",
    engineers: "300+",
    website: "https://www.dsinnovators.com",
    hue: 55,
    tier: 2,
    domains: ["Edtech", "Government education systems", "Enterprise outsourcing"],
    notable: [
      "Digital Monitoring System — monitors 23,000 schools & colleges for the education directorate",
      "Long-term edtech platform engineering for US clients",
      "Enterprise systems for clients in Finland, England and the US",
    ],
    about:
      "Founded in 2001 by programmers, DSi has 25+ years of enterprise delivery with 300+ engineers in Mohakhali DOHS. It runs long-term outsourced product teams for US, UK and Finnish clients and builds large Bangladesh-government systems, notably in education. Glassdoor reviews (3.8/5, 82% recommend) consistently rank it among Dhaka's better engineering employers.",
    stack: {
      languages: ["Java", "Python", "JavaScript", "SQL"],
      frameworks: ["Spring", "Node.js", "React", "GraphQL"],
      tools: ["AWS", "Oracle", "PostgreSQL", "MongoDB"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Office-based with flexibility; collaborative mentorship culture, work-life balance 4.1/5 on Glassdoor. Cons cited in reviews: deadline crunches, promotion politics, and mid-level pay called below industry standard by some.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [45000, 50000], years: "0–2", scope: "Solid junior band from the community salary survey.", source: "Community survey (Feb 2024)", confidence: "medium" },
      { key: "se2", title: "Software / Assistant Software Engineer", band: [50000, 70000], years: "2–4", scope: "DSi's ladder is unusual — 'Assistant SE' reports above 'SE' in pay in the survey data.", source: "Community survey (SE ৳50–60K; Assistant SE ৳60–70K, Feb 2024)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor's DSi snippets are US-modeled USD estimates ('Junior SE $129K/yr' — nonsense for Dhaka) and were discarded; the community survey is the reliable source. No senior/lead/EM BDT data found — omitted.",
    sources: [
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.dsinnovators.com/",
      "https://www.glassdoor.com/Reviews/Dynamic-Solution-Innovators-Reviews-E547437.htm (via search snippets)",
      "https://apply.workable.com/dsinnovators/",
    ],
  },

  {
    id: "sheba",
    name: "Sheba Platform",
    bn: "সেবা",
    tagline: "sheba.xyz services marketplace plus sManager — the 'pocket ERP' for Bangladesh's micro-entrepreneurs.",
    type: "Startup",
    city: "Dhaka",
    area: "Banani",
    founded: 2015,
    employees: "~250",
    engineers: "",
    website: "https://www.sheba.xyz",
    hue: 250,
    tier: 3,
    domains: ["Services marketplace", "SME digitization", "Fintech for MSMEs", "Logistics"],
    notable: [
      "sheba.xyz — on-demand services with 60,000+ verified providers",
      "sManager — 'pocket ERP': ledger, inventory and 1-minute online store for SMEs",
      "sBusiness & sDelivery — B2B services and delivery arms",
    ],
    about:
      "Sheba Platform launched sheba.xyz in 2015 as Bangladesh's first large online marketplace for urban lifestyle services (cleaning, repair, beauty, renovation) and has since pivoted toward being the country's largest SME digitization platform via sManager and sBusiness, backed by Startup Bangladesh, BSRM and others. Engineering runs a Laravel/React/Flutter stack; hiring is technically rigorous (written exam, technical rounds, CTO culture interview).",
    stack: {
      languages: ["PHP", "Java", "Kotlin", "Dart", "JavaScript"],
      frameworks: ["Laravel", "React", "Flutter"],
      tools: ["MySQL", "Redis", "Elasticsearch", "Algolia", "AWS"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at the Banani HQ. Glassdoor 2.4/5 (123 reviews): work-life balance 1.8/5 with heavy-workload and weekend-work reports, comp rated 2.4/5 with recurring 'low salary scale' complaints; only 24% would recommend. The counterpoint in reviews: high learning and ownership for those early in their careers.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [40000, 50000], years: "2–4", scope: "The only public figure, from a Glassdoor snippet not fully level-tagged — treat as indicative.", source: "Glassdoor snippet: ৳480–600K/yr ÷ 12; role attribution unconfirmed", confidence: "low" },
    ],
    salaryNotes:
      "Hard numbers are scarce: Glassdoor lists 176 salaries across 96 roles but all behind login; no Sheba rows on levels.fyi or the community survey; job circulars say 'negotiable'. The 2.4/5 comp rating and repeated 'low salary scale' review complaints suggest below-mid-market pay, hence Tier 3. Senior/lead/EM omitted for lack of data.",
    sources: [
      "https://www.sheba.xyz/",
      "https://www.glassdoor.com/Reviews/Sheba-Platform-Limited-Reviews-E3009013.htm (via search snippets)",
      "https://www.startupbangladesh.vc/portfolio/sheba/",
      "https://careers.smartrecruiters.com/ShebaPlatformLimited",
      "https://tahanima.github.io/recruitment-stories-experience-of-fahd-at-sheba/",
    ],
  },

  {
    id: "shohoz",
    name: "Shohoz",
    bn: "সহজ",
    tagline: "Ticketing super-app that built Surokkha — the national COVID vaccination platform — and runs railway e-ticketing.",
    type: "Product",
    city: "Dhaka",
    area: "Banani",
    founded: 2014,
    employees: "~240",
    engineers: "~40",
    website: "https://www.shohoz.com",
    hue: 35,
    tier: 2,
    domains: ["Online ticketing", "Ride-sharing / mobility", "GovTech national platforms"],
    notable: [
      "Surokkha — national COVID-19 vaccination platform (100M+ registrations, ~200M doses)",
      "Bangladesh Railway e-ticketing (Shohoz-Synesis-Vincen JV, since 2022)",
      "Shohoz Rides — $15M-backed bike/car ride-sharing (2018)",
    ],
    about:
      "Founded in 2014 by Maliha Quadir as an online bus-ticketing service, Shohoz grew into one of Bangladesh's best-known consumer-tech companies — launch and event tickets, ride-sharing and food delivery. Its ~40-person engineering team has shipped national-scale systems: Surokkha, the country's COVID-19 vaccine management platform, and the Bangladesh Railway integrated e-ticketing system (~10M train tickets in its first four months).",
    stack: {
      languages: ["TypeScript", "Java", "Kotlin", "SQL"],
      frameworks: ["Angular", "RxJS", "Tailwind CSS"],
      tools: ["AWS", "Firebase", "MySQL", "Socket.IO", "MQTT", "Protocol Buffers"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite full-time at Banani with two weekly holidays, yearly review and two festival bonuses. Glassdoor 3.1/5 (54 reviews), ~50% would recommend — praised for talented tech/product teams and learning; recent reviews cite disorganized management, unrealistic deadlines and thin perks (no transport/lunch/insurance).",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [30000, 101000], years: "2–4", scope: "Wide Glassdoor total-pay range; the ৳68K average sits ~19% above the Dhaka SE benchmark.", source: "Glassdoor snippets: avg ৳68K/mo base + ~8K extras; total-pay range 30–101K", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor via search snippets only. A 'Jr. Software Engineer' title exists but surfaced no numbers; no senior/lead/EM figures anywhere public, and the community survey has no Shohoz rows. Job circulars list salary as negotiable. Mid-market pay slightly above the Dhaka average, national-scale engineering work — Tier 2.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Shohoz-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE2353650.0,6_KO7,24_IL.25,30_IM1237.htm (via search snippets)",
      "https://techcrunch.com/2018/09/23/shohoz/",
      "https://www.thedailystar.net/news/bangladesh/transport/news/br-ticketing-partner-shohoz-say-they-sold-1cr-train-tickets-4-months-3098001",
      "https://oldmy.southsouth-galaxy.org/en/solutions/detail/surokkha-covid-19-vaccine-management-system",
      "https://www.shohoz.com/",
    ],
  },

  {
    id: "era-infotech",
    name: "Era InfoTech",
    bn: "এরা ইনফোটেক",
    tagline: "CMMI-3 banking software house — iStelar core banking, Hikmah Islamic banking, e-Agent agent banking.",
    type: "Product",
    city: "Dhaka",
    area: "Motijheel",
    founded: 2002,
    employees: "~230",
    engineers: "~150",
    website: "https://www.erainfotechbd.com",
    hue: 300,
    tier: 3,
    domains: ["Core banking", "Islamic banking", "Agent & internet banking", "AML / loan origination"],
    notable: [
      "iStelar — browser-based core banking (Bank Asia, IDCOL and others)",
      "Hikmah — Islamic core banking (Standard Bank's full Shariah conversion)",
      "e-Agent — powers Bank Asia's pioneering agent-banking network",
    ],
    about:
      "ERA-InfoTech, a joint venture of Bank Asia and Ranks ITT, started operations in November 2002 and builds enterprise banking software for roughly 21 banks, 4 NBFIs and several government bodies — core banking, Islamic banking, agent banking and internet banking. It holds CMMI Level 3, ISO 9001 and ISO 27001 certifications, and partners with Irish fintech CR2 for ATM/digital banking delivery in Bangladesh. The stack is Oracle-heavy (PL/SQL, Forms, APEX) with Java and .NET service layers.",
    stack: {
      languages: ["SQL", "Java", "C#", "Python"],
      frameworks: ["Oracle Forms", "Oracle APEX", "Spring", ".NET"],
      tools: ["Oracle", "SQL Server", "WebLogic", "Linux servers"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Traditional onsite banking-vendor culture at the Dhaka HQ plus client-site implementation postings at banks. Benefits per circulars: festival and performance bonuses, Leave Fare Assistance, medical insurance, subsidized lunch, provident fund and gratuity. Glassdoor 3.2/5; comp & benefits 2.7/5 — 'below industry standards' is the recurring review complaint.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee / Associate Software Engineer", band: [20000, 40000], years: "0–2", scope: "Banking-domain entry point; trainees start at ৳20–30K per the community survey.", source: "Community survey (Trainee ৳20–30K; Associate SE ৳30–40K)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [40000, 40000], years: "2–4", scope: "Glassdoor shows only a ৳40K/mo average (7 reports, some from ~2019) with no visible range.", source: "Glassdoor snippet: avg ৳40K/mo, 7 reports — ~25% below the Dhaka SE average", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor snippets showed implausible outliers ('Principal SE ৳315,000', 'SE II ৳370,000' median monthly) inconsistent with every other datapoint — likely mislabeled or corrupted, and excluded. No reliable senior/lead/EM bands. Pay sits clearly below the Dhaka mid-market band, hence Tier 3 — the trade is banking-domain depth and stability.",
    sources: [
      "https://www.erainfotechbd.com/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.glassdoor.com/Reviews/ERA-InfoTech-Reviews-E1438421.htm (via search snippets)",
      "https://www.tbsnews.net/economy/corporates/idcol-signs-era-infotech-cutting-edge-core-banking-solution-802734",
      "https://cr2.com/news/cr2-partners-with-era-infotech-to-deliver-atm-banking-software-in-bangladesh/",
    ],
  },

  {
    id: "misl",
    name: "Millennium Information Solution",
    bn: "মিলেনিয়াম",
    tagline: "Maker of Ababil — the Shariah-compliant core banking suite ranked top-ten globally by Gartner.",
    type: "Product",
    city: "Dhaka",
    area: "Mirpur",
    founded: 1997,
    employees: "~150",
    engineers: "~100",
    website: "https://mislbd.com",
    hue: 140,
    tier: 3,
    domains: ["Islamic core banking", "Banking sub-systems", "HR software"],
    notable: [
      "Ababil / Ababil NG — Islamic core banking, live at Global Islami Bank & Al-Arafah",
      "Sonali Bank Islamic-window rollout across 58 branches",
      "West Africa & Southeast Asia expansion via partners (Senegal, Indonesia, Malaysia)",
    ],
    about:
      "Millennium Information Solution (MISL), founded in 1997, is one of Bangladesh's oldest software product companies — best known for Ababil, a fully Shariah-compliant core banking suite ranked among the top ten global Islamic banking solutions by Gartner. The current Ababil NG generation is Java/Spring Boot microservices, live at major Bangladeshi banks with partner-led expansion into West Africa and Southeast Asia. MISL also builds Sylvia, a web-based HRMS.",
    stack: {
      languages: ["Java", "C#", "SQL", "JavaScript"],
      frameworks: ["Spring Boot", "Java EE", "ASP.NET", "Microservices"],
      tools: ["Oracle", "SQL Server"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at the Mirpur office (Grameen Bank Bhaban complex). Glassdoor (3.3/5, 69% recommend) cites a collaborative, low-micromanagement culture and supportive management, with below-market pay and limited facilities as the flip side (comp 2.8/5).",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Assistant Software Engineer", band: [30000, 40000], years: "0–2", scope: "Ladder starts at Intern (৳10–20K) and Trainee ASE (৳20–30K) below this rung.", source: "Community salary survey", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [50000, 60000], years: "2–4", scope: "Core-banking module ownership on the Ababil suite.", source: "Community salary survey", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [70000, 80000], years: "4–8", scope: "Senior engineers carry Shariah-compliance-critical banking modules.", source: "Community salary survey", confidence: "medium" },
    ],
    salaryNotes:
      "Primary source is the community salary survey (self-reported monthly gross). A lone Glassdoor 'SE ৳180,000' entry has an ambiguous period (implausible monthly here, too low yearly) and was excluded. No lead/EM data. Bands sit below the ৳60–150K mid-market benchmark, consistent with reviews — Tier 3, traded against rare Islamic-banking product depth.",
    sources: [
      "https://mislbd.com/corporate-profile/",
      "https://mislbd.com/ababil/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://ibsintelligence.com/casestudy/sonali-bank-limited-implemented-millennium-information-solutions-islamic-core-banking-window-across-its-ict-division/",
      "https://www.glassdoor.com/Reviews/Millennium-Information-Solution-Reviews-E553688.htm (via search snippets)",
    ],
  },

  {
    id: "datasoft",
    name: "DataSoft Systems",
    bn: "ডেটাসফট",
    tagline: "Bangladesh's first CMMI Level 5 software firm — port automation, MicroFin360 and IoT for Japan.",
    type: "Product",
    city: "Dhaka",
    area: "Mohammadpur",
    founded: 1998,
    employees: "300+",
    engineers: "~300",
    website: "https://datasoft-bd.com",
    hue: 70,
    tier: 3,
    domains: ["Fintech / microfinance", "Port & logistics automation", "IoT / smart home", "Government digitization"],
    notable: [
      "Chittagong Port terminal information management system",
      "MicroFin360 — the dominant BD microfinance platform (~13.5M beneficiaries)",
      "IoT platform-as-a-service for Japan via DataSoft Japan",
    ],
    about:
      "Founded in 1998, DataSoft became the first CMMI Level 5-appraised software firm in Bangladesh (2014). It built landmark national digitization projects — Chittagong Port automation, the country's dominant microfinance platform MicroFin360 — and runs an IoT platform business for the Japanese market. A historically important name whose pay and employee sentiment now trail the market.",
    stack: {
      languages: ["Java", "C#", "PHP", "Python", "JavaScript"],
      frameworks: ["Spring", ".NET", "Django", "Laravel"],
      tools: ["MySQL", "Oracle", "PostgreSQL", "AWS"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Traditional onsite culture. Glassdoor 2.8/5 overall (86 Dhaka reviews), 2.5/5 compensation, 39% would recommend — the weakest employee sentiment among the established firms in this directory.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Developer / Engineer", band: [20000, 40000], years: "0–2", scope: "Derived from the company-wide Glassdoor range — treat as rough.", source: "Glassdoor company range ৳240–650K/yr (134 salaries) ÷ 12", confidence: "low" },
      { key: "senior", title: "Senior Software Developer", band: [40000, 55000], years: "4–8", scope: "Upper end of the same company-wide range; senior pay clearly trails the Dhaka market.", source: "Glassdoor company range upper end ÷ 12", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor snippets returned partially garbled currency conversions; the only usable anchor is the whole-company range of ৳240–650K/year (~৳20–54K/month) across 134 submissions. Pay sits at the lower end of the market, consistent with the 2.5/5 comp rating. Both bands are low confidence.",
    sources: [
      "https://datasoft-bd.com/datasoft-the-first-cmmi-level-5-company-in-bangladesh/",
      "https://www.glassdoor.com/Salary/DataSoft-Bangladesh-Salaries-EI_IE602981.0,8_IL.9,19_IN27.htm (via search snippets)",
      "https://futurestartup.com/2018/05/23/the-datasoft-story-and-life-with-m-manjur-mahmud/",
    ],
  },

  {
    id: "genex",
    name: "Genex Infosys",
    bn: "জেনেক্স",
    tagline: "Bangladesh's largest BPO and first DSE-listed ITES firm — 4,000 people, growing digital services arm.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Nikunja",
    founded: 2012,
    employees: "~4,000",
    engineers: "",
    website: "https://genexinfosys.com",
    hue: 225,
    tier: 3,
    domains: ["BPO / customer experience", "Robotic process automation", "Cloud & SOC/NOC", "Contact centers"],
    notable: [
      "Contact-center operations for Grameenphone, Robi, Airtel & Banglalink",
      "Banglalink RPA program on UiPath",
      "First ITES company listed on the Dhaka Stock Exchange (2019)",
    ],
    about:
      "Started in 2012 as an IPE Group (UK) initiative, Genex grew to 4,000+ employees handling 150M+ customer interactions a year, and in 2019 became the first publicly listed ITES company in Bangladesh. The core business is omni-channel contact centers for all major telcos; a smaller digital-services division does RPA (UiPath), AI bots, cloud and SOC/NOC work — that division, not the BPO floor, is where the engineering roles live.",
    stack: {
      languages: ["PHP", "JavaScript"],
      frameworks: ["RPA (UiPath)"],
      tools: ["Cloud infrastructure", "SOC/NOC tooling", "AI chatbot platforms"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Shift-based onsite BPO operations culture. Glassdoor 3.2/5 overall (71 BD reviews) but a notably low 2.2/5 for compensation & benefits — driven by agent roles rather than engineering.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [96000, 103000], years: "2–4", scope: "A very small Glassdoor sample that looks like a handful of senior digital-services hires — treat cautiously.", source: "Glassdoor Dhaka: SE ৳96–103K/mo, median 99K (small sample)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor lists 139 salaries across 83 roles but almost all are BPO (customer service) rather than engineering. The lone SE figure looks high against the 2.2/5 comp rating — likely senior digital-services hires. Tier 3 reflects that Genex is primarily a BPO payer; its small engineering arm may pay better than the tier suggests.",
    sources: [
      "https://genexinfosys.com/",
      "https://www.glassdoor.com/Salary/Genex-Infosys-Dhaka-Salaries-EI_IE1151226.0,13_IL.14,19_IM1237.htm (via search snippets)",
      "https://www.tbsnews.net/tech/genex-infosys-provide-robotic-process-automation-services-banglalink-148099",
      "https://stockanalysis.com/quote/dse/GENEXIL/company/",
    ],
  },

  {
    id: "bracits",
    name: "BRAC IT Services (biTS)",
    bn: "ব্র্যাক আইটি",
    tagline: "BRAC & BRAC Bank's IT arm — sbiCloud ERP (100K+ users), core banking and managed services.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2013,
    employees: "400–700",
    engineers: "~300",
    website: "https://www.bracits.com",
    hue: 120,
    tier: 2,
    domains: ["Enterprise ERP", "Core banking / fintech", "Microfinance systems", "Managed IT services"],
    notable: [
      "sbiCloud — ERP for BRAC International, 100,000+ users, one of South Asia's largest",
      "IT services for BRAC Bank and the wider BRAC ecosystem",
      "CMMI Dev L3 + ISO 27001 certified, delivery across four continents",
    ],
    about:
      "Formed in 2013 by merging BRAC's subsidiary IT company with BRAC Bank's IT division, biTS is jointly owned by BRAC and BRAC Bank. It builds and runs enterprise systems for banks, NBFIs, microfinance institutions, NGOs and FMCG companies — flagship product sbiCloud serves 100,000+ users across BRAC International countries — with clients across Asia, Africa, Europe and North America.",
    stack: {
      languages: ["C#", "Java", "Python", "JavaScript", "Dart"],
      frameworks: ["React", "Flutter", ".NET"],
      tools: ["AWS", "Azure", "Docker", "SQL Server", "Oracle", "Power BI"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite Dhaka culture with structured, dependable benefits (salary on the 25th, provident fund, gratuity). Glassdoor 3.4/5 (154 reviews), 67% recommend; some reviews cite long hours on critical projects.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [38000, 72500], years: "1–4", scope: "One broad band spanning junior-to-mid experience — Glassdoor's percentile view, recorded as-is rather than split artificially.", source: "Glassdoor Dhaka: SE ৳37.8K (25th pct) – ৳72.5K (75th pct)/mo; SE comp rating 3.8/5", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor's annual and monthly views converge on roughly ৳38–73K/month for the SE band. Sr. Software Engineer reviews exist but no reliable numbers surfaced, so senior/lead/EM are omitted. Mid-market pay with strong benefits stability.",
    sources: [
      "https://www.bracits.com/",
      "https://www.glassdoor.com/Salary/BRAC-IT-Services-Software-Engineer-Dhaka-Salaries-EJI_IE1049947.0,16_KO17,34_IL.35,40_IM1237.htm (via search snippets)",
      "https://www.brac.net/solutions/investments/brac-it/",
      "https://sbicloud.brac.net/",
    ],
  },

  {
    id: "technonext",
    name: "TechnoNext",
    bn: "টেকনোনেক্সট",
    tagline: "US-Bangla Group's software arm — airline & travel tech (Firsttrip), scaled ~10x since 2021.",
    type: "Product",
    city: "Dhaka",
    area: "Baridhara",
    founded: 2021,
    employees: "~470",
    engineers: "~350",
    website: "https://technonext.com",
    hue: 20,
    tier: 2,
    domains: ["Airline & travel tech / OTA", "ERP & CRM", "AI/ML", "QA & DevSecOps"],
    notable: [
      "Firsttrip — B2B/B2C travel booking platform (flights, hotels, visas)",
      "Software ecosystem for US-Bangla Airlines",
      "Mass hiring drives: 40 Java + 15 React openings at once",
    ],
    about:
      "TechnoNext, a concern of US-Bangla Group founded in 2021, scaled roughly 10x in headcount within three years. Flagship work is travel technology for the group — the Firsttrip OTA (B2C launched 2025) and systems for US-Bangla Airlines — alongside ERP/CRM, e-commerce, AI/ML, QA and DevSecOps services. One of the most aggressive hirers in the Dhaka market.",
    stack: {
      languages: ["Java", "TypeScript", "Go", "Python", "Kotlin", "Swift"],
      frameworks: ["Spring", "React"],
      tools: ["QA automation", "DevSecOps pipeline"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite in a new 10-storey office with free breakfast/lunch (dinner on overtime), family health insurance and flexible in/out timing. Glassdoor 3.1/5 (86 reviews) with 2.6/5 work-life balance; 50% would recommend.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Jr. Software Engineer", band: [30000, 40000], years: "0–2", scope: "Directly covered by the community salary survey (2024 and 2026 datapoints).", source: "Community survey: Jr. SE ৳30K (2026) and ৳30–40K (earlier)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [40000, 70000], years: "2–4", scope: "Reviews flag high negotiation variance — same-experience engineers reportedly range from under 50K to above 100K.", source: "Community survey: SE ৳40–70K/mo", confidence: "medium" },
    ],
    salaryNotes:
      "The community salary survey is the best source and directly covers junior and mid bands. Glassdoor reviews repeatedly flag an inconsistent salary structure driven by negotiation, so the real mid-level spread is wider than shown. No reliable senior/lead/EM data.",
    sources: [
      "https://technonext.com/about",
      "https://tahanima.github.io/what-bangladeshi-tech-companies-are-paying-employees-in-2026/",
      "https://www.glassdoor.com/Reviews/TechnoNext-Reviews-E8997347.htm (via search snippets)",
      "https://www.thedailystar.net/business/organisation-news/press-releases/news/firsttrip-b2c-launched-ease-travel-bookings-3821961",
    ],
  },

  {
    id: "leads",
    name: "LEADS Corporation",
    bn: "লিডস",
    tagline: "One of BD's oldest fintech software houses — BankUltimus core banking runs at 15+ local banks.",
    type: "Product",
    city: "Dhaka",
    area: "Banglamotor",
    founded: 1992,
    employees: "~500",
    engineers: "~250",
    website: "https://leads-bd.com",
    hue: 335,
    tier: 3,
    domains: ["Core banking", "Fintech", "eKYC / digital onboarding"],
    notable: [
      "BankUltimus — core banking at 15+ banks (SBAC, NRB, Meghna Bank…)",
      "Internet & agent banking channel solutions",
      "eKYC and remittance processing platforms",
    ],
    about:
      "LEADS Corporation, founded in 1992, is one of Bangladesh's oldest banking-technology vendors. Its flagship BankUltimus core banking system runs at over a dozen commercial banks, alongside internet/agent banking, eKYC and remittance solutions — a long-standing domestic banking vendor rather than an export product firm. Reviews describe legacy-maintenance-heavy work.",
    stack: {
      languages: ["C#", "SQL", "JavaScript", "Java"],
      frameworks: [".NET", "ASP.NET", "Angular"],
      tools: ["Oracle", "SQL Server"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Traditional onsite banking-vendor culture with client deployments at bank sites. Glassdoor SE compensation rating is low (2.1/5 from 25 ratings).",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [21000, 35000], years: "0–2", scope: "Well below the Dhaka SE average (~55K) — the trade is banking-domain exposure and stability.", source: "Glassdoor monthly-pay page (avg base ~৳28K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor SE total pay runs ৳21–35K/month with a 2.1/5 comp rating — clearly below-market Tier 3. No public senior/lead/EM bands.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/LEADS-Corporation-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE1656067.0,17_KO18,35_IL.36,41_IM1237.htm",
      "https://www.glassdoor.com/Reviews/LEADS-Corporation-Reviews-E1656067.htm (via search snippets)",
      "https://leads-bd.com",
    ],
  },

  {
    id: "southtech",
    name: "Southtech Group",
    bn: "সাউথটেক",
    tagline: "Veteran fintech/ERP house behind Ascend Financials — core banking for a large base of MFIs since 1996.",
    type: "Product",
    city: "Dhaka",
    area: "Badda",
    founded: 1996,
    employees: "200–300",
    engineers: "~150",
    website: "https://southtechgroup.com",
    hue: 100,
    tier: 3,
    domains: ["Microfinance core banking", "ERP", "HR / payroll software"],
    notable: [
      "Ascend Financials — core banking/microfinance used by numerous BD MFIs",
      "Ascend ERP and HCM/payroll suites",
      "One of BD's oldest CMMI-appraised software companies",
    ],
    about:
      "Founded in 1996, Southtech is one of Bangladesh's oldest CMMI-appraised software companies. Its Ascend product family — core banking/microfinance, ERP and HR/payroll — serves banks and a large base of microfinance institutions in Bangladesh and abroad, positioning it as an enterprise product company with services work on the side.",
    stack: {
      languages: ["C#", "SQL", "JavaScript", "Dart"],
      frameworks: [".NET", "Angular", "Flutter"],
      tools: ["SQL Server", "Azure DevOps"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Primarily onsite Dhaka office culture typical of local fintech vendors.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No trustworthy public salary bands: Glassdoor's Southtech page mixes in foreign same-named companies (USD figures) and BdJobs postings say 'negotiable'. Levels omitted rather than invented; community anecdotes place pay in the local Tier-3 range alongside peer banking vendors. Headcount/area compiled at medium confidence — worth re-verifying.",
    sources: [
      "https://southtechgroup.com",
      "https://www.glassdoor.com/Salary/Southtech-Bangladesh-Salaries-EI_IE544739.0,9_IL.10,20_IN27.htm (mixed with foreign namesakes — unreliable)",
    ],
  },

  {
    id: "synesis",
    name: "Synesis IT",
    bn: "সাইনেসিস আইটি",
    tagline: "DSE-listed govtech firm behind the 333 National Helpline, Shastho Batayon and railway e-ticketing.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Kawran Bazar",
    founded: 2001,
    employees: "800+",
    engineers: "~200",
    website: "https://synesisit.com.bd",
    hue: 275,
    tier: 3,
    domains: ["Govtech / e-government", "Digital health", "AI / Bangla NLP", "Helpline operations"],
    notable: [
      "333 National Helpline (with a2i / ICT Division)",
      "Shastho Batayon 16263 national health helpline",
      "Bangladesh Railway e-ticketing (Shohoz–Synesis JV)",
    ],
    about:
      "Synesis IT (founded 2001, listed on the DSE) is one of Bangladesh's most visible govtech vendors: it operates the a2i-backed 333 National Helpline and the 16263 health helpline, and is part of the Shohoz–Synesis JV running Bangladesh Railway's e-ticketing. Work spans software, Bangla NLP chatbots and large 24/7 contact-center operations for government services.",
    stack: {
      languages: ["PHP", "Java", "Python", "JavaScript"],
      frameworks: ["Laravel", "Spring Boot", "Vue.js"],
      tools: ["MySQL", "PostgreSQL", "Docker"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite-first, with shift-based operations teams for 24/7 helplines. Glassdoor SE compensation rating 2.7/5 (10 ratings).",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [25000, 38000], years: "0–2", scope: "An aggregate band not split by seniority — likely also covers some 2–4yr engineers.", source: "Glassdoor: SE total pay ৳303–460K/yr (~25–38K/mo), avg base ~৳30K/mo", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor's SE range is an aggregate mapped to the entry rung only. Trainee Programmer and SQA titles appear without clear figures. Pay sits well below the ৳60–150K mid-market benchmark — the trade is national-scale govtech impact.",
    sources: [
      "https://synesisit.com.bd",
      "https://www.glassdoor.com/Salary/Synesis-IT-Dhaka-Salaries-EI_IE285288.0,10_IL.11,16_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "dohatec",
    name: "Dohatec New Media",
    bn: "দোহাটেক",
    tagline: "Pioneer firm (est. 1992, founded by Luna Shamsuddoha) that built and runs the national e-GP system.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Paltan",
    founded: 1992,
    employees: "300+",
    engineers: "~200",
    website: "https://dohatec.com",
    hue: 60,
    tier: 3,
    domains: ["e-Procurement / govtech", "Enterprise development", "Software testing services"],
    notable: [
      "Bangladesh national e-GP system (eprocure.gov.bd) for CPTU/BPPA",
      "e-GP system for the Government of Bhutan",
      "World Bank-funded and international client services",
    ],
    about:
      "Dohatec New Media, founded in 1992 by the late Luna Shamsuddoha — one of Bangladesh's pioneering women tech entrepreneurs — is best known for building and operating the national electronic Government Procurement (e-GP) system with World Bank support, exporting the same platform to Bhutan. It also provides software testing and enterprise development services internationally.",
    stack: {
      languages: ["Java", "SQL", "JavaScript"],
      frameworks: ["Spring", "JSP"],
      tools: ["PostgreSQL", "Oracle", "Tomcat"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Traditional onsite government-project culture with long-running e-GP operations and support teams.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No public salary bands found on Glassdoor, BdJobs snippets or community surveys — levels omitted rather than estimated. Community perception places pay in the local Tier-3 range, but this is unverified. Facts compiled at medium confidence.",
    sources: [
      "https://dohatec.com",
      "https://www.eprocure.gov.bd",
    ],
  },

  {
    id: "daraz",
    name: "Daraz Bangladesh",
    bn: "দারাজ",
    tagline: "Alibaba's BD marketplace — a commercial/ops unit; platform engineering sits abroad, not in Dhaka.",
    type: "E-commerce",
    city: "Dhaka",
    area: "Banani",
    founded: 2015,
    employees: "~500–700",
    engineers: "few (local)",
    website: "https://www.daraz.com.bd",
    hue: 352,
    tier: 3,
    domains: ["E-commerce marketplace", "Logistics", "Digital payments"],
    notable: [
      "DarazMall & the 11.11 mega campaign",
      "Daraz Express (DEX) in-house logistics",
      "2024: repeated layoff rounds (~100 BD staff in May) amid Alibaba's restructure",
    ],
    about:
      "Daraz launched in Bangladesh in 2015 and was acquired by Alibaba in 2018. The important thing for engineers: Bangladesh is run as a commercial/operations market — core platform engineering is centralized in Daraz Group/Alibaba hubs abroad, and Dhaka hires are mostly commercial, ops, logistics and some data/IT (only 11 BD Software Engineer salary reports exist on Glassdoor). Since Alibaba's 2023–24 pullback it has been through repeated cost-cutting rounds.",
    stack: {
      languages: ["PHP", "Java"],
      frameworks: [],
      tools: ["Alibaba Cloud (group)", "Salesforce"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Office-based commercial/ops culture; Glassdoor 3.8/5 group-wide (390 reviews) but BD morale hit by the 2024 layoff rounds.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [35000, 42500], years: "0–2", scope: "Reads as junior-level; local engineering opportunity is limited by design.", source: "Glassdoor BD (avg ৳35K/mo from 11 salaries; ৳42.5K estimate)", confidence: "low" },
    ],
    salaryNotes:
      "Very thin engineering data because Daraz BD hires few engineers. Non-engineering reference: Assistant Manager (Commercial Strategy) ৳60–70K/mo per the community survey. Tier 3 reflects local engineering pay and opportunity, not the consumer brand.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Daraz-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE1181256.0,5_KO6,23_IL.24,34_IN27.htm (via search snippets)",
      "https://www.thedailystar.net/news/tech-startup/news/daraz-reportedly-lays-around-100-employees-bangladesh-4199506",
      "https://futurestartup.com/2024/05/16/daraz-restructures-bangladesh-leadership-amid-challenging-times-darazs-priorities/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "foodpanda",
    name: "foodpanda Bangladesh",
    bn: "ফুডপান্ডা",
    tagline: "Delivery Hero's market-leading delivery platform — but the app is built abroad; Dhaka roles are ops & analytics.",
    type: "E-commerce",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2013,
    employees: "several hundred (corporate)",
    engineers: "none (local product eng)",
    website: "https://www.foodpanda.com.bd",
    hue: 320,
    tier: 3,
    domains: ["Food delivery", "Quick-commerce (pandamart)", "Logistics"],
    notable: [
      "pandamart cloud grocery stores (2020)",
      "Coverage of all 64 districts (Dec 2020)",
      "~80 BD layoffs in the six months to Feb 2023; parent tried to sell foodpanda APAC (Grab talks collapsed 2024)",
    ],
    about:
      "foodpanda launched in Bangladesh in 2013 under Berlin-headquartered Delivery Hero and leads the food-delivery market. For engineers the key fact: there is no local product engineering team — the platform (Go, Kotlin, React on AWS/Kubernetes) is built by regional Delivery Hero teams in Berlin, Singapore and Taipei, while Dhaka careers are operations, commercial, content and analytics roles.",
    stack: {
      languages: ["SQL"],
      frameworks: [],
      tools: ["BI / analytics tooling (local roles); platform stack sits with regional teams"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Corporate roles office-based in Dhaka with some flexibility. Glassdoor 3.1/5 in BD (147 reviews), comp & benefits 3.5/5; the recurring con is job insecurity from layoff cycles.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No software-engineer salary data exists for Bangladesh because foodpanda BD doesn't hire product engineers locally — engineering bands are omitted entirely rather than substituted. Closest tech-adjacent figures: Ops & BI Analyst ~৳35K/mo (Glassdoor snippet), Data Analyst ৳40–50K (community survey), overall corporate aggregate ~৳50–75K/mo. Tier 3 as an engineering employer; corporate pay is mid-market.",
    sources: [
      "https://careers.foodpanda.com/bangladesh",
      "https://www.glassdoor.com/Salary/foodpanda-Bangladesh-Salaries-EI_IE709546.0,9_IL.10,20_IN27.htm (via search snippets)",
      "https://www.thedailystar.net/business/organisation-news/news/foodpanda-lays-employees-3250176",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "bikroy",
    name: "Bikroy (Saltside)",
    bn: "বিক্রয় ডটকম",
    tagline: "Bangladesh's largest classifieds marketplace — Swedish-founded Saltside's distributed engineering.",
    type: "Product",
    city: "Dhaka",
    area: "Mohammadpur",
    founded: 2012,
    employees: "200+ (BD)",
    engineers: "small, distributed",
    website: "https://bikroy.com",
    hue: 90,
    tier: 2,
    domains: ["Online classifieds", "Marketplace", "Recruitment (Bikroy Jobs)"],
    notable: [
      "Bikroy — dominant BD classifieds (vehicles, property, electronics)",
      "Sister site ikman.lk in Sri Lanka",
      "Saltside consolidated to its core BD/LK markets",
    ],
    about:
      "Saltside Technologies (founded 2011 in Sweden) launched Bikroy.com in 2012; it dominates Bangladeshi general classifieds. Engineering is a distributed Saltside function — historically run from Gothenburg, now with senior engineers and tech leads based in Dhaka — while most BD headcount is sales, ops and support. A small but genuinely international engineering environment (Ruby, Go, React, Kubernetes).",
    stack: {
      languages: ["Ruby", "Go", "JavaScript"],
      frameworks: ["React"],
      tools: ["Kubernetes", "Cloudflare", "Microservices"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Glassdoor (Saltside) 3.5/5 from 81 reviews, 65% recommend; praised for work-life balance, flexible schedules and collaborative culture, criticized for small increments.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No reliable BDT bands: Glassdoor holds only ~16 Saltside reports, and its Senior SWE figure surfaces in INR on the Indian mirror — unsafe to convert. Absent from the community survey and levels.fyi. Levels omitted; Tier 2 is a judgment call from the 3.5/5 comp rating and market position (low confidence).",
    sources: [
      "https://www.glassdoor.com/Reviews/Saltside-Reviews-E989336.htm (via search snippets)",
      "https://www.newagebd.net/post/mis/245567/bikroy-turns-12",
      "https://in.linkedin.com/company/saltside-technologies",
    ],
  },

  {
    id: "upay",
    name: "Upay (UCB Fintech)",
    bn: "উপায়",
    tagline: "United Commercial Bank's MFS challenger to bKash/Nagad — real in-house Dhaka engineering.",
    type: "Fintech",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2021,
    employees: "200–500",
    engineers: "",
    website: "https://www.upaybd.com",
    hue: 235,
    tier: 2,
    domains: ["Mobile financial services", "Payments", "Remittance"],
    notable: [
      "upay consumer app — bill pay, recharge, merchant payments",
      "Inward remittance and salary disbursement rails",
      "Bank-subsidiary MFS with its own Bangladesh Bank license (2021)",
    ],
    about:
      "UCB Fintech Company, a subsidiary of United Commercial Bank, launched the upay MFS brand in early 2021 to compete in the bKash/Nagad-dominated market. Unlike the foreign-owned consumer platforms, it builds and operates its stack with an in-house Dhaka team — actively recruiting backend, DevOps, DBA and SQA-automation engineers via BdJobs and LinkedIn.",
    stack: {
      languages: ["Java (backend roles advertised)"],
      frameworks: [],
      tools: ["DevOps / CI-CD", "Enterprise RDBMS", "Test automation"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Bank-subsidiary fintech, office-based in Gulshan with conventional banking-sector benefits. Glassdoor 3.1/5 from 33 reviews, 45% would recommend.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "SQA Engineer", band: [40000, 50000], years: "0–2", scope: "The only verified band — a QA role, shown as the nearest engineering-track reference point.", source: "Community salary survey (upay/UCB Fintech: SQA ৳40–50K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Only one verified band. Its Software Engineer/Sr. SE (Backend), DevOps and DBA circulars all say 'negotiable' and Glassdoor has no BD engineering reports, so se2/senior/lead/EM are omitted. Tier 2 reflects bank-backed mid-market positioning — low confidence beyond the single datapoint.",
    sources: [
      "https://www.upaybd.com/who-we-are",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://dohaj.com/job-details/software-engineer-devops-it-ucb-fintech-company-limited-242711",
      "https://www.glassdoor.com/Overview/Working-at-UCB-Fintech-Company-EI_IE5084709.11,30.htm (via search snippets)",
    ],
  },

  {
    id: "reve",
    name: "REVE Systems",
    bn: "রিভ সিস্টেমস",
    tagline: "BD's first global software product success — iTel VoIP switch in 78+ countries, REVE Chat, antivirus.",
    type: "Product",
    city: "Dhaka",
    area: "Khilgaon",
    founded: 2003,
    employees: "1,000+ (group)",
    engineers: "several hundred (Dhaka)",
    website: "https://www.revesoft.com",
    hue: 260,
    tier: 2,
    domains: ["VoIP / telecom infrastructure", "SMS & messaging platforms", "Customer engagement SaaS", "Cybersecurity"],
    notable: [
      "iTel Switch Plus & Mobile Dialer — used by carriers in 78+ countries",
      "REVE Chat — omnichannel chat/chatbot SaaS",
      "REVE Antivirus / REVE Secure product lines",
    ],
    about:
      "Founded in 2003 by M Rezaul Hassan with six employees in a Khilgaon garage, REVE Systems became one of Bangladesh's first globally successful software product companies — its VoIP softswitch and dialer family serves 2,600+ telecom providers in 78+ countries, with the group (HQ now Singapore) spanning SMS platforms, session border controllers, REVE Chat and security products. Dev centres are in Bangladesh and India.",
    stack: {
      languages: ["Java", "C++", "JavaScript", "PHP", "Kotlin"],
      frameworks: ["Spring Boot", "Node.js", "WebRTC"],
      tools: ["MySQL", "Linux", "SIP/RTP stacks", "Docker"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily onsite at the Dhaka dev centre. Glassdoor 2.9/5 (257 reviews), 35% would recommend — good salary and friendly colleagues cited as pros, management/culture as cons.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [60000, 81000], years: "2–4", scope: "Telecom-infrastructure work in Java/C++; competitive vs the Dhaka average.", source: "Glassdoor Dhaka monthly pay (median total ৳70K/mo)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [60000, 110000], years: "4–8", scope: "Wide band from 11 self-reports averaging ~৳97K.", source: "Glassdoor (11 submissions, avg ~৳97K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor holds 203 salaries across 60 roles. Pay is competitive against the Dhaka average but employees rate comp only 2.3–2.5/5, hence Tier 2 rather than 1. No reliable entry, lead or EM figures — omitted.",
    sources: [
      "https://www.revesoft.com/about-us",
      "https://www.glassdoor.com/Salary/REVE-Systems-Dhaka-Salaries-EI_IE509383.0,12_IL.13,18_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "ssl-wireless",
    name: "SSL Wireless",
    bn: "এসএসএল ওয়্যারলেস",
    tagline: "Behind SSLCOMMERZ — Bangladesh's first and largest payment gateway — plus enterprise SMS for 30+ banks.",
    type: "Fintech",
    city: "Dhaka",
    area: "Eskaton",
    founded: 1999,
    employees: "~400",
    engineers: "~150",
    website: "https://sslwireless.com",
    hue: 155,
    tier: 3,
    domains: ["Payments", "SMS aggregation", "Banking & MFS integrations"],
    notable: [
      "SSLCOMMERZ — first & largest BD payment gateway (~80% of online transactions, 5,000+ merchants)",
      "Enterprise SMS/brand messaging for banks, telcos and corporates",
      "Core-banking integrations across 30+ banks and 9 insurers",
    ],
    about:
      "Software Shop Limited (SSL Wireless) started in 1999 and was revamped in 2007 around software and telecom VAS. Its flagship SSLCOMMERZ gateway (launched 2010, PSO-licensed 2016, PCI DSS certified) reportedly processes ~80% of Bangladesh's online transactions. Strategically central to BD e-commerce — but engineer pay reviews trail that market position.",
    stack: {
      languages: ["PHP", "JavaScript", "Python"],
      frameworks: ["Laravel", "Node.js", "REST APIs"],
      tools: ["MySQL", "AWS", "PCI DSS payment infrastructure"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Primarily onsite (Dhaka HQ plus Chattogram and Jashore offices). Glassdoor 3.2/5 (103 reviews), 62% recommend — on-time salary and strong fintech learning as pros; 2.7/5 comp with ~2–3% increments as the recurring con.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [20000, 25000], years: "0–2", scope: "Single Glassdoor report — very thin.", source: "Glassdoor monthly-pay page (1 report: ৳20K base)", confidence: "low" },
      { key: "se2", title: "Software Specialist", band: [50000, 80000], years: "2–4", scope: "The best-corroborated band — Glassdoor and the community survey agree.", source: "Glassdoor (৳50–69K, median 60K) + community survey (৳70–80K)", confidence: "medium" },
      { key: "senior", title: "Software Analyst / Senior SE", band: [120000, 135000], years: "4–8", scope: "From snippets of the 'Software Analyst' title; single-source.", source: "Glassdoor snippets (Software Analyst ৳124–135K/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor has 124 salaries across 71 titles but mostly login-gated; several bands rest on single reports. Entry and mid pay sit at the lower end of the market with ~2–3% increments — Tier 3 despite the dominant market position. No lead/EM data.",
    sources: [
      "https://sslwireless.com",
      "https://sslcommerz.com",
      "https://www.glassdoor.com/Salary/SSL-Wireless-Dhaka-Salaries-EI_IE582375.0,12_IL.13,18_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "bdjobs",
    name: "Bdjobs.com",
    bn: "বিডিজবস",
    tagline: "The country's dominant jobs portal since 2000, SEEK-backed — a small internal Microsoft-stack team.",
    type: "Product",
    city: "Dhaka",
    area: "Kawran Bazar",
    founded: 2000,
    employees: "51–200",
    engineers: "~40",
    website: "https://www.bdjobs.com",
    hue: 40,
    tier: 3,
    domains: ["Online recruitment", "HR tech", "Training / e-learning"],
    notable: [
      "bdjobs.com — the dominant BD job portal",
      "mybdjobs jobseeker app + Bdjobs Training arm",
      "Australia's SEEK holds ~25% (US$5M investment)",
    ],
    about:
      "Founded in 2000 by Fahim Mashroor and co-founders, Bdjobs.com is Bangladesh's largest career marketplace, connecting tens of thousands of employers with millions of jobseekers, with SEEK of Australia as a strategic investor. The irony job-hunters should know: the portal everyone uses to find better-paying jobs rates poorly on pay itself (2.1/5 comp on Glassdoor). Internal engineering runs a classic Microsoft stack.",
    stack: {
      languages: ["C#", "SQL", "TypeScript"],
      frameworks: ["ASP.NET Core", "Entity Framework", "Angular", "React"],
      tools: ["SQL Server", "IIS/Azure"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at the Kawran Bazar HQ. Glassdoor 2.5/5 overall, 36% would recommend, comp & benefits 2.1/5 with recurring low-salary complaints.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Engineer", band: [21000, 48000], years: "2–4", scope: "Only 4 Glassdoor submissions with ambiguous yearly/monthly labeling — indicative only.", source: "Glassdoor (4 reports, ৳255–578K/yr ≈ ৳21–48K/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Only 4 SE salary reports exist, ambiguously labeled. The band sits well below the Dhaka average and matches the 2.1/5 comp rating. Stack confirmed from Bdjobs' own engineering circular. No other level data.",
    sources: [
      "https://www.glassdoor.com/Reviews/Bdjobs-com-Reviews-E730055.htm (via search snippets)",
      "https://hotjobs.bdjobs.com/jobs/bdjobs/",
      "https://www.crunchbase.com/organization/bdjobs-com",
    ],
  },

  {
    id: "rokomari",
    name: "Rokomari (OnnoRokom Group)",
    bn: "রকমারি",
    tagline: "Bangladesh's largest online bookstore, inside the values-driven OnnoRokom Group (Udvash, software, electronics).",
    type: "E-commerce",
    city: "Dhaka",
    area: "Motijheel",
    founded: 2012,
    employees: "51–200 (Rokomari)",
    engineers: "~60 (group est.)",
    website: "https://www.rokomari.com",
    hue: 315,
    tier: 3,
    domains: ["E-commerce (books)", "EdTech", "Custom software", "Electronics"],
    notable: [
      "Rokomari.com — the country's largest online bookstore",
      "Udvash-Unmesh — leading admission-coaching network (sister concern)",
      "OnnoRokom Software Ltd — the group's .NET services arm",
    ],
    about:
      "Rokomari.com launched in January 2012 with about 100 books, founded by Mahmudul Hasan Sohag and co-founders, and grew into Bangladesh's largest online bookstore. It sits inside the 8-company OnnoRokom Group (Udvash coaching, OnnoRokom Software, electronics arms), known for an unusually values-driven, education-focused culture — Glassdoor culture scores (4.0–4.5/5, 90–100% recommend) are among the best in this directory even as pay stays modest.",
    stack: {
      languages: ["Java", "C#", "JavaScript", "SQL"],
      frameworks: ["Spring Boot", ".NET", "Angular"],
      tools: ["MySQL", "SQL Server"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite in Dhaka with a flexible feel but a strict automated attendance system; some reviews note missing provident fund/health insurance. Culture ratings are exceptional for the pay tier.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No credible company-specific bands: Glassdoor's 32 Rokomari salaries are login-gated with no snippet leakage, and the community survey has no entry. Reviews mention a 'well salary structure' but also missing PF/health benefits. Provisional Tier 3 on pay; culture scores would rank far higher.",
    sources: [
      "https://en.wikipedia.org/wiki/Rokomari.com",
      "https://futurestartup.com/2020/12/07/how-rokomari-was-created-2/",
      "https://www.glassdoor.com/Overview/Working-at-OnnoRokom-Software-EI_IE620373.11,29.htm (via search snippets)",
      "https://businessinspection.com.bd/journey-of-rokomari/",
    ],
  },

  {
    id: "ulka-games",
    name: "Ulka Games",
    bn: "উলকা গেমস",
    tagline: "Stillfront/Moonfrog's Dhaka studio (Teen Patti Gold, Ludo Club) — pays well, but verify current status.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2019,
    employees: "~50",
    engineers: "~35",
    website: "https://ulka.games",
    hue: 205,
    tier: 2,
    domains: ["Mobile games", "Card & board games", "Live-ops F2P"],
    notable: [
      "Co-develops Teen Patti Gold & Ludo Club with Moonfrog",
      "Acquired with Moonfrog by Sweden's Stillfront (~$91M, 2021)",
      "⚠ Status uncertain: CEO arrested Oct 2022; Stillfront evaluated closing BD operations Nov 2022",
    ],
    about:
      "Founded in 2019 by Zamilur Rashid as Bangladesh's fastest-growing game studio and acquired with parent Moonfrog Labs by Stillfront Group in 2021. It co-develops major South Asian titles (Teen Patti Gold, Ludo Club, Carrom Gold) in Unity/C#. Important caveat: in October 2022 the CEO was arrested over gambling/money-laundering allegations tied to Teen Patti Gold, and Stillfront announced it was evaluating closure of its Bangladesh operations — the website still presents an active studio, but verify current status before applying.",
    stack: {
      languages: ["C#"],
      frameworks: ["Unity"],
      tools: ["Live-ops analytics", "ML for game economy"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Mohakhali DOHS office; Glassdoor 4.3 — 'great office, nice incentives, good salary package'. All pre-2022-crisis reviews.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Game Developer", band: [60000, 80000], years: "2–4", scope: "Well above the ~৳44K Dhaka game-dev average — but a single report.", source: "Glassdoor (৳70K/mo avg, 1 report)", confidence: "low" },
    ],
    salaryNotes:
      "Very thin data (1–2 Glassdoor reports) supporting an above-market reputation backed by a deep-pocketed parent. Tiered at 2 rather than 1 because of the thin sample and the unresolved 2022 closure-evaluation risk — check the studio still operates before treating any of this as current.",
    sources: [
      "https://ulka.games/",
      "https://www.stillfront.com/en/stillfront-group-evaluates-potential-closure-of-its-subsidiarys-operations-in-bangladesh/",
      "https://www.tbsnews.net/companies/mobile-gaming-giant-stillfront-acquires-bangladeshs-ulka-games-214159",
      "https://www.glassdoor.com/Overview/Working-at-Ulka-Games-EI_IE4061228.11,21.htm (via search snippets)",
    ],
  },

  {
    id: "kite-games",
    name: "Kite Games Studio",
    bn: "কাইট গেমস",
    tagline: "Sudoku and AI photo-app studio (~$6M revenue) that hires straight from the competitive-programming scene.",
    type: "Product",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2014,
    employees: "~50–100",
    engineers: "~45",
    website: "https://www.kitegamesstudio.com",
    hue: 128,
    tier: 2,
    domains: ["Mobile puzzle / casual games", "AI image processing", "iOS & Android apps"],
    notable: [
      "Flagship Sudoku puzzle line",
      "Unblur / Old Photo Restore AI photo apps",
      "Contest-style hiring from the competitive-programming community",
    ],
    about:
      "Founded in 2014 in Mohakhali DOHS, Kite Games Studio builds iOS/Android puzzle and casual games plus AI-powered photo apps, with reported revenue around $6.2M in 2025. It recruits heavily from the competitive-programming community via contest-style hiring rounds — a distinctive on-ramp for strong problem-solvers who'd rather ship consumer apps than grind enterprise projects.",
    stack: {
      languages: ["Swift", "Kotlin", "Python"],
      frameworks: ["PyTorch", "Native iOS/Android"],
      tools: ["Contest-based hiring (Toph/HackerRank)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "5-day week, subsidized lunch, two festival bonuses, gym/table-tennis/PlayStation; Glassdoor 3.8 (24 reviews). Strong competitive-programmer culture.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [49000, 50000], years: "0–2", scope: "Notably above the Dhaka junior average; the only well-evidenced band (22 Glassdoor salaries).", source: "Glassdoor (Jr SWE median ~৳50K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Only the junior band is well-evidenced. A ~৳50K entry band implies mid/senior likely lands in typical Tier-2 territory (৳80–150K), but that's inference — senior bands weren't published. Employee count conflicts across sources (11–50 vs ~100).",
    sources: [
      "https://www.glassdoor.com/Salary/Kite-Games-Studio-Junior-Software-Engineer-Salaries-E4234341_D_KO18,42.htm (via search snippets)",
      "https://www.kitegamesstudio.com/",
      "https://tamimehsan.github.io/interview-questions-bangladesh/companies/kite",
    ],
  },

  {
    id: "riseup-labs",
    name: "Riseup Labs",
    bn: "রাইজআপ ল্যাবস",
    tagline: "Game/XR studio turned 150-person services firm — UNICEF, BBC Media Action and 700+ projects in 30+ countries.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Nikunja",
    founded: 2009,
    employees: "150+",
    engineers: "~100",
    website: "https://riseuplabs.com",
    hue: 292,
    tier: 3,
    domains: ["Game development (Unity)", "ICT4D / UN & government", "AR/VR/XR & simulators", "QA services"],
    notable: [
      "Tap Tap Ants — early hit with millions of downloads",
      "UNICEF Bangladesh and BBC Media Action digital projects",
      "700+ projects across 30+ countries; ISO 9001/27001 certified",
    ],
    about:
      "Founded in 2009 by Ershadul Haque, Riseup Labs grew from a game studio into a 150+ person IT services firm covering games, mobile/web, XR/simulators, IoT and QA, with a long track record of ICT4D work for UN agencies and the ICT Division. A distinctive mix: one of few places in BD doing paid Unity/XR work alongside development-sector projects.",
    stack: {
      languages: ["C#", "PHP", "JavaScript"],
      frameworks: ["Unity (URP/HDRP)", "Web/mobile stacks"],
      tools: ["Git", "GPU/CPU profiling"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Primarily onsite in Dhaka but posts remote/contract Unity roles. Glassdoor compensation rating 3.9 across 100 salary reports.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "SQA / Junior Engineer", band: [20000, 42000], years: "0–2", scope: "From the SQA band — the clearest junior signal.", source: "Glassdoor (SQA band, median ~৳30K/mo)", confidence: "low" },
      { key: "se2", title: "Software Engineer / Unity Dev (mid)", band: [55000, 78000], years: "2–4", scope: "Company-wide yearly range converted to monthly — indicative only.", source: "Glassdoor overall ৳660–940K/yr ÷ 12", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor has 100 reports but per-title figures weren't retrievable; the mid band is the company-wide range converted. Senior Unity postings (5+ yrs) say 'negotiable'. Pay appears at/below market for services firms — Tier 3.",
    sources: [
      "https://riseuplabs.com/history/",
      "https://www.glassdoor.com/Salary/Riseup-Labs-Dhaka-Salaries-EI_IE569564.0,11_IL.12,17_IM1237.htm (via search snippets)",
      "https://www.thedailystar.net/tech-startup/news/riseup-labs-putting-the-gaming-industry-bangladesh-the-map-3291081",
    ],
  },

  {
    id: "dream71",
    name: "Dream71 Bangladesh",
    bn: "ড্রিম৭১",
    tagline: "Games and govtech shop — 37+ government projects, UNDP partnerships and the official BD cricket app.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2014,
    employees: "~100",
    engineers: "~60",
    website: "https://dream71.com",
    hue: 68,
    tier: 3,
    domains: ["Government / e-gov projects", "Game development", "Mobile & custom software"],
    notable: [
      "Cricket Bangladesh — first official national cricket team app",
      "37+ government digital projects",
      "UNDP partnership projects across four countries",
    ],
    about:
      "Founded in 2014, Dream71 spans custom software, mobile apps, games, AI/VR and blockchain, with a distinctive weight toward government work — 37+ govt projects plus UNDP partnerships in Bangladesh, Turkey, East Timor and Colombia. Best known publicly for its cricket titles. Employee sentiment is weak: Glassdoor 2.5/5 with recurring pay-policy complaints.",
    stack: {
      languages: ["C#", "Java", "Kotlin", "Swift"],
      frameworks: ["Unity"],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Glassdoor 2.5/5 (30 reviews), 24% would recommend; recurring complaints about salary policy, negligible increments and limited growth.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "AI Engineer (junior)", band: [38000, 41000], years: "0–2", scope: "One of only two titles with retrievable figures.", source: "Glassdoor (median ৳40K/mo)", confidence: "medium" },
      { key: "se2", title: "Software QA Engineer (mid)", band: [43000, 47000], years: "2–4", scope: "QA-track figure shown as the nearest mid-level reference.", source: "Glassdoor (avg ৳45K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor holds 47 salaries across 22 titles but only SQA and AI Engineer figures surfaced; no game-developer, senior, lead or EM bands. Reported bands sit below the mid-market norm, consistent with the 2.5 rating. HQ area not confirmed beyond 'Dhaka'.",
    sources: [
      "https://dream71.com/",
      "https://www.glassdoor.com/Reviews/Dream71-Bangladesh-Reviews-E1686998.htm (via search snippets)",
      "https://clutch.co/profile/dream71-bangladesh",
    ],
  },

  {
    id: "gozayaan",
    name: "GoZayaan",
    bn: "গোযায়ান",
    tagline: "BD's leading funded travel OTA — flights, hotels, tours — now edging into migrant-worker fintech.",
    type: "Startup",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2017,
    employees: "~100–225",
    engineers: "",
    website: "https://gozayaan.com",
    hue: 172,
    tier: 2,
    domains: ["Travel / OTA", "E-commerce", "Consumer fintech (emerging)"],
    notable: [
      "GoZayaan booking platform (flights/hotels/tours/bus)",
      "Acquired Pakistan's Find My Adventure (2022)",
      "~$8.1M raised (Wavemaker, Nordstar)",
    ],
    about:
      "Founded in August 2017 by BUET grad Ridwan Hafiz to replace opaque offline travel agencies with automated booking, GoZayaan raised ~$8.1M, expanded to Pakistan via acquisition, and is positioning beyond travel toward neobank-style services for migrant workers. Stack is Django/React with React Native apps on AWS.",
    stack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Django", "React", "React Native"],
      tools: ["AWS", "PostgreSQL"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan office. Glassdoor (~31 reviews): dynamic, learning-friendly culture; comp & benefits 3.3/5 with some 'underpaid'/low-increment complaints.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No usable per-level figures: Glassdoor lists Software Engineer among its best-paid roles but the numbers are login-gated, and it's absent from the community survey. The 3.3/5 comp rating suggests mid-market pay — Tier 2 is a qualitative inference, low confidence.",
    sources: [
      "https://www.crunchbase.com/organization/go-zayaan",
      "https://wavemaker.vc/travel-pioneer-neobank-gozayaan-empowers-bangladesh-unsung-heroes/",
      "https://www.glassdoor.com/Reviews/Go-Zayaan-Reviews-E4389180.htm (login-gated)",
    ],
  },

  {
    id: "sharetrip",
    name: "ShareTrip",
    bn: "শেয়ারট্রিপ",
    tagline: "Bangladesh's first OTA (ex-TBBD, rebranded 2019) — flights, hotels, holidays and TripCoin rewards.",
    type: "Startup",
    city: "Dhaka",
    area: "Banani",
    founded: 2014,
    employees: "~180",
    engineers: "",
    website: "https://sharetrip.net",
    hue: 108,
    tier: 2,
    domains: ["Travel / OTA", "E-commerce", "Loyalty / rewards"],
    notable: [
      "ShareTrip web + mobile OTA platform",
      "TripCoin loyalty program",
      "Startup Bangladesh-backed ($500K, 2022)",
    ],
    about:
      "Started in 2014 as TBBD (Travel Booking BD) and rebranded to ShareTrip in 2019, it claims the title of Bangladesh's first online travel agency, selling flights, hotels and holiday packages via web and app, backed by Startup Bangladesh Limited.",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["Node.js", "React"],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Banani office. Glassdoor 3.3/5 (44 reviews), comp & benefits 3.0/5, 48% would recommend — benefits/culture praised, senior management criticized.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No per-level figures found — Glassdoor salary pages are login-gated and it's absent from the community survey. The 3.0/5 comp rating suggests average local pay; Tier 2 is qualitative inference. Tech stack is inferred from snippets at low confidence — verify against the live careers page.",
    sources: [
      "https://news.sharetrip.net/our-story/",
      "https://www.startupbangladesh.vc/portfolio/sharetrip/",
      "https://www.glassdoor.com/Reviews/ShareTrip-Reviews-E3388154.htm (login-gated)",
    ],
  },

  {
    id: "ifarmer",
    name: "iFarmer",
    bn: "আইফার্মার",
    tagline: "Agri-fintech connecting financiers to smallholder farmers — juniors paid above the BD average.",
    type: "Startup",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2019,
    employees: "~180",
    engineers: "",
    website: "https://www.ifarmer.asia",
    hue: 82,
    tier: 2,
    domains: ["Agritech", "Agri-fintech / farm financing", "Supply chain marketplace"],
    notable: [
      "Farm-financing platform (retail investors fund farms)",
      "Sofol farmer-facing app (inputs, advisory)",
      "~$5M raised incl. $2.1M pre-Series A led by IDLC VC",
    ],
    about:
      "Launched as a project in 2018 and operating in its current form since 2019, iFarmer (co-founded by Fahad Ifaz, ex-World Bank/CARE) connects retail and institutional financiers to smallholder farmers, handling inputs, advisory and produce sales, with a Django/React stack and a native Android app for farmers. Backed by IDLC Venture Capital, Millville and Startup Bangladesh.",
    stack: {
      languages: ["Python", "JavaScript", "Kotlin"],
      frameworks: ["Django", "React"],
      tools: ["Android (farmer app)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan-2 HQ plus large field operations. Reviews mention friendly management and on-time salary, but no training/learning budget for engineers.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [60001, 70000], years: "0–2", scope: "Above the BD junior average — while Jr. QA at the same firm reports only ৳20–30K.", source: "Community salary survey (Feb 2024)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [57000, 74000], years: "2–4", scope: "Glassdoor's engineering cluster, converted from yearly.", source: "Glassdoor (4 submissions, ৳686–882K/yr ÷ 12)", confidence: "low" },
    ],
    salaryNotes:
      "Thin but real: the community survey and Glassdoor agree on a ৳57–74K engineering cluster. A separate ৳25–35K/mo Glassdoor cluster is likely non-engineering or interns. No senior/lead/EM data.",
    sources: [
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.glassdoor.com/Salary/Ifarmer-Bangladesh-Salaries-EI_IE5121103.0,7_IL.8,18_IN27.htm (via search snippets)",
      "https://www.tbsnews.net/economy/corporates/agritech-startup-ifarmer-raises-21-million-429202",
      "https://www.ifarmer.asia/about",
    ],
  },

  {
    id: "craftsmen",
    name: "Craftsmen",
    bn: "ক্রাফটসমেন",
    tagline: "AI-native AWS boutique for media/broadcast clients (Vizrt, M2A) — 4.7/5 comp rating, 'above-market salary'.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Baridhara",
    founded: 2018,
    employees: "~100",
    engineers: "90+",
    website: "https://www.craftsmensoftware.com",
    hue: 218,
    tier: 1,
    domains: ["Cloud / serverless (AWS)", "Media & broadcast tech", "AI/ML features", "Team augmentation"],
    notable: [
      "Cloud video workflows for Vizrt, Vimond, Mimir and M2A",
      "Platforms supporting 20M+ concurrent users; 98.7% client retention",
      "London-registered HQ; engineering hub in DOHS Baridhara, Dhaka",
    ],
    about:
      "Craftsmen is a premium offshore engineering firm whose senior engineers previously worked at top global software companies, specializing in AWS serverless and cloud media/broadcast systems for US and European clients (Vizrt, Vimond, Mimir, M2A). Note: sometimes listed as Chattogram-based — every primary source (official site, job postings, LinkedIn) places it in DOHS Baridhara, Dhaka.",
    stack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["AWS Lambda / Serverless", "GraphQL"],
      tools: ["AWS Media Services", "DynamoDB", "Docker", "Kubernetes"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka engineering hub with European-timezone client overlap. Glassdoor comp & benefits 4.7/5 — the highest in this directory — with reviews and job posts consistently citing 'above-market salary'.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software Development Engineer", band: [75000, 90000], years: "2–4", scope: "From a single Glassdoor aggregate (~৳1M/yr) — the qualitative signals are stronger than the sample.", source: "Glassdoor Dhaka aggregate (~৳1M/yr ÷ 12; login-gated)", confidence: "low" },
    ],
    salaryNotes:
      "Bands are thin (one aggregate figure) but the 4.7/5 comp rating and consistent 'above-market' language justify Tier 1 as a boutique payer in the Cefalo mold. Founding year 2018 per Clutch; the site's '14+ years' refers to engineers' individual experience. No senior/lead/EM data.",
    sources: [
      "https://www.craftsmensoftware.com/",
      "https://jobs.smartrecruiters.com/CraftsmenLtd/743999763868338-software-development-engineer-ii-python-",
      "https://www.glassdoor.com/Salary/Craftsmen-Dhaka-Salaries-EI_IE3004266.0,9_IL.10,15_IM1237.htm (login-gated)",
      "https://bd.linkedin.com/company/craftsmenltd",
    ],
  },

  {
    id: "ulkasemi",
    name: "Ulkasemi",
    bn: "উলকাসেমি",
    tagline: "Bangladesh's largest VLSI/chip-design services firm — Cupertino HQ, 300+ engineers in Dhaka.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Tejgaon",
    founded: 2007,
    employees: "350+ (global)",
    engineers: "300+",
    website: "https://www.ulkasemi.com",
    hue: 248,
    tier: 3,
    domains: ["VLSI / semiconductor design", "Analog & custom IC layout", "ASIC verification", "Physical design"],
    notable: [
      "Chip design services for US fabless/OEM clients (names under NDA)",
      "Ulkasemi VLSI Training Institute (UVTI, 2025–26)",
      "The first Bangladeshi company at this scale in global semiconductor services",
    ],
    about:
      "Founded in 2007 by Mohammed Enayetur Rahman, Ulkasemi is the pioneer VLSI design-services firm in Bangladesh — analog/custom layout, ASIC verification and physical design for semiconductor clients — with offices in Cupertino, Dhaka, Toronto and Bengaluru and a target of 1,000 engineers by 2026–27. A genuinely unique career path in BD (Verilog/UVM/EDA flows, not web dev), though reviews say pay doesn't yet match the niche skills.",
    stack: {
      languages: ["Verilog", "SystemVerilog", "Tcl", "Perl", "Python"],
      frameworks: ["UVM", "STA / signoff flows"],
      tools: ["Cadence Virtuoso", "Synopsys ICC2/PrimeTime", "Calibre"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite design-center model — EDA licenses and secure client IP require office work. Glassdoor 3.5/5 (113 reviews; 4.0 among BD reviewers) but compensation 2.9/5; strong learning environment, weak retention.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee / Design Engineer", band: [30000, 59000], years: "0–2", scope: "Ladder runs Trainee → Design Engineer → Senior → Lead/Principal across DV, layout and physical-design tracks.", source: "Glassdoor 'Engineer' ৳360–711K/yr ÷ 12, avg base ~43K/mo", confidence: "medium" },
      { key: "senior", title: "Senior Design Engineer", band: [80000, 110000], years: "4–8", scope: "From the 90th-percentile engineer figure — thin sample.", source: "Glassdoor 90th-percentile (~৳108K/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor has real data but with the common yearly/monthly mislabeling, sanity-corrected to monthly. Entry pay (~৳30–59K) is consistent with reviews calling comp 'not very competitive' despite the niche — Tier 3 on pay, though the skill set is one of the rarest in the country. EDA tool list is inferred from the role ladder (careers page doesn't name tools).",
    sources: [
      "https://www.glassdoor.com/Salary/Ulkasemi-Bangladesh-Salaries-EI_IE703879.0,8_IL.9,19_IN27.htm (via search snippets)",
      "https://www.ulkasemi.com/career",
      "https://businessinbangladesh.com.bd/ulkasemi-launches-vlsi-training-institute-to-accelerate-bangladeshs-entry-into-the-global-semiconductor-arena/",
    ],
  },

  {
    id: "intelligent-machines",
    name: "Intelligent Machines",
    bn: "ইন্টেলিজেন্ট মেশিনস",
    tagline: "Small elite AI shop — 60+ production models for Unilever, bKash, BAT and Telenor.",
    type: "Startup",
    city: "Dhaka",
    area: "Tejgaon",
    founded: 2018,
    employees: "~35–50",
    engineers: "~30",
    website: "https://intelligentmachin.es",
    hue: 12,
    tier: 2,
    domains: ["Computer vision", "NLP & Bangla OCR", "Credit / fraud analytics"],
    notable: [
      "Retail AI — used by bKash across 300,000+ outlets",
      "Handwritten Bangla character recognition",
      "60+ production AI models for 18 clients in 7 countries",
    ],
    about:
      "Founded in April 2018 by Mohammad Oli Ahad (ex-British American Tobacco), Intelligent Machines builds enterprise AI products — computer vision for retail merchandising, Bangla handwriting OCR, bank-statement and fraud analyzers — for blue-chip clients including Unilever, bKash, BAT, Telenor and Ooredoo. Deliberately small and elite (~35 people); Glassdoor 4.3/5 with 100% would-recommend.",
    stack: {
      languages: ["Python"],
      frameworks: ["TensorFlow", "PyTorch"],
      tools: ["Cloud ML deployment"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan–Tejgaon Link Road office. Glassdoor 4.3/5 from 20 reviews, 100% would recommend — one of Dhaka's best-rated small AI shops.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No company-specific salary data anywhere public — genuinely thin for a ~35-person firm. Market context: Dhaka ML Engineer median ≈ ৳50–55K/mo, senior ≈ ৳80–105K. The rating, client list and small-team model suggest at-or-above-market pay — tentative Tier 2, no bands asserted. Framework list inferred from the CV/NLP product line.",
    sources: [
      "https://futurestartup.com/2023/07/04/the-making-of-intelligent-machines-mohammad-oli-ahad/",
      "https://www.startupbangladesh.vc/portfolio/intelligent-machines/",
      "https://www.glassdoor.com/Overview/Working-at-Intelligent-Machines-EI_IE4430571.11,31.htm (via search snippets)",
    ],
  },

  {
    id: "bondstein",
    name: "Bondstein Technologies",
    bn: "বন্ডস্টাইন",
    tagline: "BUET/IUT-founded IoT firm — Track My Vehicle, 300M+ data points/day, Forbes 30-under-30 founders.",
    type: "Product",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2014,
    employees: "~100",
    engineers: "",
    website: "https://bondstein.com",
    hue: 145,
    tier: 3,
    domains: ["Vehicle / fleet tracking", "Industrial IoT", "Driving-behavior analytics"],
    notable: [
      "Track My Vehicle (tmvbd.com) — consumer & enterprise GPS tracking",
      "Unilever BD driving-analysis system; Walton nationwide tracking contract",
      "APICTA Asia-Pacific IoT Champion 2019 — a first for Bangladesh",
    ],
    about:
      "Founded in 2014 by Mir Shahrukh Islam and Zafir Shafiee Chowdhury — both Forbes 30 Under 30 Asia 2022 — Bondstein designs and fabricates sensor-enabled IoT devices in-house and runs a cloud platform processing 300M+ data points daily for connected vehicles and industrial monitoring. One of few BD companies doing real hardware+firmware engineering (embedded C/C++) alongside mobile and ML.",
    stack: {
      languages: ["C", "C++", "Kotlin", "Swift", "Python"],
      frameworks: ["Android/iOS native", "ML pipelines"],
      tools: ["In-house hardware fabrication", "IoT cloud platform"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Hardware + device company — onsite by nature. Glassdoor 4.4/5 from 30 reviews with comp & benefits at 4.1/5; hiring runs online test → interviews.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No usable engineer bands: Glassdoor exposes no figures in snippets, circulars say 'negotiable', and it's absent from the community survey. The only hard number is intern pay of ৳7,000/mo, anchoring it as a local-market payer despite the good 4.1/5 comp rating — Tier 3 is a pay-based guess pending real bands.",
    sources: [
      "https://careers.smartrecruiters.com/BondsteinTechnologiesLtd",
      "https://www.thedailystar.net/tech-startup/news/tracking-the-roads-tomorrow-bondstein-co-founders-forbes-30-under-30-asia-class-2022-3035431",
      "https://www.dhakatribune.com/business/315892/bangladeshi-iot-firm-bondstein-gets-1m-in-funding",
    ],
  },

  {
    id: "hishab",
    name: "Hishab",
    bn: "হিসাব",
    tagline: "Voice AI over plain phone calls — Bangla-first, 30+ patents, serving Japanese enterprises like TEPCO.",
    type: "Startup",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2015,
    employees: "<100",
    engineers: "",
    website: "https://hishab.co",
    hue: 328,
    tier: 2,
    domains: ["Voice AI / ASR & TTS", "Telephony conversational agents", "Generative AI"],
    notable: [
      "TEPCO (Tokyo Electric Power) customer-engagement voice AI, reaching ~22M customers",
      "Bangla voice stack that works without internet or smartphones",
      "30+ patents across 23 countries",
    ],
    about:
      "Founded in 2015 by Zubair Ahmed with Dr. Michael Schmitz and others, Hishab builds generative conversational AI that works over ordinary telephone calls — no internet, smartphone or digital literacy required. It began with Bangla voice technology and expanded to Japanese enterprise deployments (TEPCO), with a Singapore-registered parent, Dhaka research teams, and a BDT 2 crore Startup Bangladesh investment (2024).",
    stack: {
      languages: ["Python"],
      frameworks: ["ASR / TTS / LLM dialog systems", "Telephony (IVR/PSTN)"],
      tools: ["Proprietary patented telephony ANN stack"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan 2 office plus Japan operations; team spans ~10 nationalities. Glassdoor comp rating 3.8/5 on very few reviews — too thin to rely on.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "Essentially no BDT salary data exists: Glassdoor's single figure (AI Engineer, $133K/yr) is almost certainly a Japan-based role. Japan-backed deep-tech firms in Dhaka typically pay above local market for research engineers — tentative Tier 2, no bands asserted.",
    sources: [
      "https://hishab.co/about-us/",
      "https://www.thedailystar.net/tech-startup/news/ai-startup-hishab-gets-bdt-2cr-investment-startup-bangladesh-3510746",
      "https://www.startupbangladesh.vc/startup-bangladesh-invests-in-hishab-telephony-driven-generative-ai/",
    ],
  },

  {
    id: "nascenia",
    name: "Nascenia",
    bn: "নাসেনিয়া",
    tagline: "Bangladesh's best-known Ruby on Rails shop — UN, Khan Academy and Telenor among past clients.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Lalmatia",
    founded: 2010,
    employees: "~72",
    engineers: "~55",
    website: "https://nascenia.com",
    hue: 158,
    tier: 3,
    domains: ["Software outsourcing", "Web & mobile", "AI/ML & chatbots", "VAT / fintech software"],
    notable: [
      "Uddogi — NBR-approved VAT software",
      "Biyeta matrimonial SaaS platform",
      "AI chatbot work for the Government of Bangladesh",
    ],
    about:
      "Founded in 2010 by Shaer Hassan, Fuad Bin Omar and Fattahul Alam in a 110-sq-ft office, Nascenia became Bangladesh's best-known Ruby on Rails outsourcing firm, since expanding into AI/ML, mobile and .NET for clients in 23 countries (past clients include the UN, UNDP, Khan Academy, Nokia, Telenor and Robi), with a second office in Australia.",
    stack: {
      languages: ["Ruby", "PHP", "Python", "JavaScript"],
      frameworks: ["Ruby on Rails", "React", "Node.js", "LangChain"],
      tools: ["AWS", "Azure", "pgvector", "Odoo (partner)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Office-centric culture in Lalmatia. Glassdoor comp rating is weak (~2.7/5 overall; SEs rate comp 2/5) — culture and learning are valued over pay.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [30000, 40000], years: "0–2", scope: "The only clean band; Glassdoor's SE figures are internally garbled and were discarded.", source: "Community salary survey", confidence: "medium" },
    ],
    salaryNotes:
      "Thin data. Glassdoor lists 21 SE salaries but the figures are implausible whether read yearly or monthly, so no band was derived from them; they at most suggest unremarkable pay, consistent with the 2/5 SE comp rating. No se2/senior/lead/EM data.",
    sources: [
      "https://nascenia.com/about/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.glassdoor.com/Monthly-Pay/Nascenia-Software-Engineer-Bangladesh-Monthly-Pay-EJI_IE520683.0,8_KO9,26_IL.27,37_IN27.htm (garbled — discarded)",
    ],
  },

  {
    id: "leadsoft",
    name: "LeadSoft Bangladesh",
    bn: "লিডসফট",
    tagline: "Old-guard financial-software house (est. 1999) — banking, insurance and capital-market systems.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 1999,
    employees: "300+ (claimed)",
    engineers: "",
    website: "https://leadsoft.com.bd",
    hue: 232,
    tier: 3,
    domains: ["Banking software", "Life insurance systems", "NBFI / capital markets", "Resource outsourcing"],
    notable: [
      "300–400+ projects at 500+ sites in BD, Japan, Denmark and Norway",
      "Life-insurance and agent-banking systems across 12+ financial verticals",
      "Staff include Microsoft MVPs and CEH-certified experts",
    ],
    about:
      "LeadSoft Bangladesh has been building business application software since 1999, focused on financial verticals — banking, life insurance, NBFIs, agent banking and capital markets — for nearly 100 clients in Bangladesh, Japan, Denmark and Norway, plus resource outsourcing and newer blockchain/AI work. One of the oldest names in the industry, commonly described as a good learning environment for early-career developers.",
    stack: {
      languages: ["C# (inferred from MVP staffing — unconfirmed)"],
      frameworks: [".NET (inferred)"],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Traditional onsite outsourcing house in Banani (mode inferred). Only 9 Glassdoor reviews — too few for a reliable rating.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No usable salary data anywhere public: absent from the community survey, no Glassdoor salary snippets (only 9 reviews), no disclosed BdJobs ranges. Tech stack is also unconfirmed — public pages describe services, not languages. Tier 3 is a low-confidence default for an old-guard local firm with no pay evidence.",
    sources: [
      "https://leadsoft.com.bd/about-us/",
      "https://basis.org.bd/company-profile/04-07-028",
      "https://clutch.co/profile/leadsoft-bangladesh",
    ],
  },

  {
    id: "streamstech",
    name: "Streams Tech",
    bn: "স্ট্রিমস টেক",
    tagline: "US-HQ'd GIS & water-management software from Banani — Esri partner with a hybrid, well-rated culture.",
    type: "MNC R&D",
    city: "Dhaka",
    area: "Banani",
    founded: 2006,
    employees: "~150",
    engineers: "~100",
    website: "https://streamstech.com",
    hue: 52,
    tier: 2,
    domains: ["GIS / geospatial", "Water & environmental engineering", "Data analytics & BI"],
    notable: [
      "Custom ArcGIS-based platforms (Esri partner; ESRI South Asia GIS Impact Award 2020)",
      "Stormwater, flood and disaster-mitigation systems for US clients",
      "60+ shipped products; ISO 9001 + 27001 certified",
    ],
    about:
      "Founded in 2006 at the intersection of water/environmental engineering, IT and geospatial technology, Streams Tech runs its HQ in Leesburg, Virginia with its development center in Banani, Dhaka. It builds .NET and ArcGIS-based GIS applications, analytics and cloud systems for stormwater, flood mitigation and climate projects — a rare geospatial-domain career path in BD.",
    stack: {
      languages: ["C#", "JavaScript", "SQL"],
      frameworks: [".NET", "ArcGIS SDK"],
      tools: ["Esri ArcGIS", "SharePoint", "Cloud integration"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Reviews describe a hybrid, remote-friendly culture with flexible management, two weekly holidays, lunch subsidy and bi-yearly bonuses. Glassdoor 4.1/5 (~50 reviews), 85% recommend, comp 3.7/5.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [40000, 50000], years: "0–2", scope: "From the community survey; QA engineers report ৳60–70K.", source: "Community salary survey", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [53000, 92000], years: "2–4", scope: "Glassdoor's total-pay range, consistent with the survey data.", source: "Glassdoor Dhaka total-pay ৳638K–1.1M/yr ÷ 12", confidence: "medium" },
    ],
    salaryNotes:
      "Glassdoor and the community survey corroborate each other — around or slightly above local mid-market, with one of the better work-life setups in this tier. No senior/lead/EM data.",
    sources: [
      "https://streamstech.com/about-us",
      "https://www.glassdoor.com/Salary/Streams-Tech-Software-Engineer-Dhaka-Salaries-EJI_IE2096230.0,12_KO13,30_IL.31,36_IC2267834.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.esri.com/partners/streams-tech-inc-a2T39000001NPjHEAW",
    ],
  },

  {
    id: "divineit",
    name: "Divine IT",
    bn: "ডিভাইন আইটি",
    tagline: "Maker of PrismERP — a Bangladeshi ERP across 65+ industries — with clearly below-market pay.",
    type: "Product",
    city: "Dhaka",
    area: "Hatirpool",
    founded: 2005,
    employees: "~150",
    engineers: "",
    website: "https://www.divineit.net",
    hue: 302,
    tier: 3,
    domains: ["ERP", "VAT & accounting software", "System integration"],
    notable: [
      "PrismERP — first BD ERP claiming 65+ industry types",
      "Implementations at Energypac and Paragon Plastics",
      "Python-core platform with Java/PHP web work",
    ],
    about:
      "Founded in 2005, Divine IT is a Dhaka IT consulting and software house whose flagship PrismERP (Python core) claims to be the first Bangladeshi ERP serving 65+ industry types, with implementations at Energypac and Paragon Plastics among others. The classic profile of a low-paying, high-learning local ERP vendor.",
    stack: {
      languages: ["Python", "Java", "PHP", "JavaScript"],
      frameworks: ["PrismERP platform"],
      tools: ["MySQL/PostgreSQL"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite product company; job ads cite a 'flexible work environment' and yearly review, but Glassdoor ratings are poor: compensation 2.0/5, work-life balance and culture 2.4/5 (46 reviews).",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee / Junior Software Engineer", band: [10000, 30000], years: "0–2", scope: "Trainees start at ৳10–20K — among the lowest entry bands in this directory.", source: "Community survey (Trainee ৳10–20K; Junior ৳20–30K)", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [30000, 42000], years: "2–4", scope: "Two independent sources agree on a clearly below-market band.", source: "Community survey (৳30–40K) + Glassdoor (60 salaries, ৳2–5L/yr ≈ ৳17–42K/mo)", confidence: "medium" },
    ],
    salaryNotes:
      "The community survey and Glassdoor's 60-report sample independently agree — clearly below the ৳60–150K mid-market norm, corroborated by the 2.0/5 comp rating. No senior/lead/EM data.",
    sources: [
      "https://www.divineit.net/",
      "https://www.prismerp.net/about/",
      "https://www.glassdoor.co.in/Salary/Divine-IT-Software-Engineer-Dhaka-Salaries-EJI_IE728322.0,9_KO10,27_IL.28,33_IC2267834.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "appscode",
    name: "AppsCode",
    bn: "অ্যাপসকোড",
    tagline: "BD-founded Kubernetes company — KubeDB and friends, used by Fortune 100 firms, built largely from Dhaka.",
    type: "Product",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2016,
    employees: "~100",
    engineers: "mostly engineers",
    website: "https://appscode.com",
    hue: 197,
    tier: 2,
    domains: ["Cloud-native infrastructure", "Kubernetes operators", "Open source", "Databases / DevOps"],
    notable: [
      "KubeDB — Kubernetes database operator used globally (Nokia, Orange, Fortune 100)",
      "Stash/KubeStash, KubeVault, Voyager open-core products",
      "Founded by Tamal Saha (BUET, ex-Google/Amazon); hires competitive programmers",
    ],
    about:
      "AppsCode was founded in 2016 by Tamal Saha (BUET grad, ex-Google/Amazon) to build a Kubernetes-native data platform. Its open-core products — KubeDB, Stash/KubeStash, KubeVault, Voyager — are used worldwide, and the engineering is largely done from Dhaka in Go. Arguably the most globally visible open-source engineering brand in Bangladesh.",
    stack: {
      languages: ["Go", "Shell"],
      frameworks: ["Kubernetes", "gRPC", "Prometheus"],
      tools: ["Docker", "Helm", "GitHub open-source workflow"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka office-based with global open-source collaboration and a US entity for 24×7 support. Glassdoor 4.3/5 (37 reviews), 79% recommend, comp 3.9/5 — great learning/growth, with high-turnover and micromanagement complaints in some reviews.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Associate Software Engineer", band: [20000, 30000], years: "0–2", scope: "Modest entry cash — the draw is Go/Kubernetes open-source résumé value.", source: "Community salary survey", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [50000, 70000], years: "2–4", scope: "Survey and Glassdoor's monthly estimate agree at this rung.", source: "Community survey + Glassdoor SE ~৳50K/mo base", confidence: "medium" },
    ],
    salaryNotes:
      "Two credible levels; Glassdoor's yearly figure was a broken currency normalization and was discarded. Reviews call pay 'competitive for the local market' and always on time. No senior/lead/EM figures. Exact Dhaka neighborhood not published.",
    sources: [
      "https://appscode.com/about/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.glassdoor.com/Reviews/AppsCode-Reviews-E2216513.htm (via search snippets)",
    ],
  },

  {
    id: "neural-semi",
    name: "Neural Semiconductor",
    bn: "নিউরাল সেমিকন্ডাক্টর",
    tagline: "DBL Group's VLSI design house in Uttara — the country's training ground for fresh chip designers.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Uttara",
    founded: 2017,
    employees: "~158",
    engineers: "100–150",
    website: "https://www.neural-semiconductor.com",
    hue: 268,
    tier: 3,
    domains: ["VLSI / chip design", "Analog & RF design", "Verification & DFT", "Embedded software"],
    notable: [
      "Full-service VLSI design center (analog, layout, verification, P&R, DFT)",
      "DBL Group (RMG conglomerate) diversification into semiconductors",
      "Widely seen as BD's fresh-graduate VLSI training pipeline",
    ],
    about:
      "Neural Semiconductor, a concern of RMG giant DBL Group, entered VLSI design in 2017 and runs one of Bangladesh's few full-service chip-design centers from Uttara — analog/RF, layout, digital verification, physical design and DFT for global clients, plus an enterprise-software wing, with ~$6.5M revenue and ~158 staff.",
    stack: {
      languages: ["Verilog", "SystemVerilog", "Python", "Tcl"],
      frameworks: ["UVM"],
      tools: ["Industry-standard EDA flows (Cadence/Synopsys class)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at the Uttara design center; flexible hours, festival bonuses and strong learning for fresh grads per reviews — but low pay vs the global VLSI industry, weak benefits and no health insurance. Glassdoor 3.7/5 (31 reviews).",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Engineer I", band: [35000, 45000], years: "0–2", scope: "Entry into analog/verification/DFT tracks.", source: "Community salary survey", confidence: "medium" },
      { key: "se2", title: "Engineer II", band: [50000, 60000], years: "2–4", scope: "Software and analog tracks report the same band.", source: "Community survey (SE II & Analog II ৳50–60K)", confidence: "medium" },
      { key: "senior", title: "Engineer III / Senior Engineer", band: [60000, 80000], years: "4–8", scope: "The best per-level data of any niche firm in this directory — six titles surveyed.", source: "Community survey (E-III / DFT-III ৳60–70K; Senior ৳70–80K)", confidence: "medium" },
    ],
    salaryNotes:
      "Internally consistent survey data across six titles. No lead/EM figures. Reviews repeatedly flag pay as low relative to the VLSI industry — Tier 3 as an entry-volume training ground, despite senior bands touching ৳80K.",
    sources: [
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.tbsnews.net/features/panorama/rmg-sector-giant-looking-turn-bangladesh-next-chip-making-hub-327595",
      "https://www.neural-semiconductor.com/career",
    ],
  },

  {
    id: "inverse-ai",
    name: "Inverse.AI",
    bn: "ইনভার্স এআই",
    tagline: "Sylhet's biggest product tech company — consumer media apps with huge global install bases.",
    type: "Product",
    city: "Sylhet",
    area: "Sylhet",
    founded: 2018,
    employees: "~100",
    engineers: "",
    website: "https://inverseai.com",
    hue: 33,
    tier: 2,
    domains: ["Consumer mobile apps", "Audio/video processing", "On-device AI/ML"],
    notable: [
      "Video Converter & Compressor (large global Play/App Store installs)",
      "AI Audio/Video Noise Reducer",
      "One of the few sizable product companies headquartered outside Dhaka",
    ],
    about:
      "Founded in 2018 by Tahlil Ahmed Chowdhury and Ershadur Rahman Talukder, Inverse.AI grew to roughly 100 people in Sylhet on the strength of consumer media apps — video conversion/compression, AI noise reduction, photo/video editing — with FFmpeg-based pipelines and on-device ML. For engineers in Sylhet, it's the standout local product employer.",
    stack: {
      languages: ["Kotlin", "Java", "Swift", "Python"],
      frameworks: ["Android SDK", "FFmpeg pipelines", "On-device ML"],
      tools: ["Firebase", "Play/App Store publishing"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite in Sylhet Sadar. Glassdoor 3.0/5 (22 reviews), 61% recommend — reviews split between 'salary exceeds market average' and complaints of inconsistent pay across peers.",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Mobile Application Developer", band: [50000, 100000], years: "0–4", scope: "From the company's own posting, which welcomed freshers — so it spans entry-to-mid and is recorded once.", source: "Company job posting (৳50–100K/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Thin data — one verifiable posted band, absent from the community survey, no senior/lead figures. Competitive for the Sylhet market (which trails Dhaka); Tier 2 on that basis.",
    sources: [
      "https://inverseai.com",
      "https://bd.linkedin.com/company/inverse-ai",
      "https://www.glassdoor.com/Reviews/Inverse-AI-Reviews-E3330882.htm (via search snippets)",
    ],
  },

  {
    id: "portonics",
    name: "Portonics",
    bn: "পোর্টোনিক্স",
    tagline: "The team behind MyGP (30M+ users) and Robi/Airtel digital properties — 160M+ end users reached.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2007,
    employees: "150+",
    engineers: "",
    website: "https://www.portonics.com",
    hue: 115,
    tier: 2,
    domains: ["Telco digital platforms", "E-commerce", "Payments"],
    notable: [
      "MyGP self-care app (30M+ users) and My Telenor",
      "Robi/Airtel digital properties",
      "PortPos payment gateway; Singer|Beko e-commerce",
    ],
    about:
      "Founded in 2007 by brothers Amir Dhedhi and Atif Sattar with its primary hub in Dhaka since 2011 (plus Bangkok and Washington D.C.), Portonics has shipped 110+ projects reaching 160M+ end users — anchored by telco self-care platforms like MyGP, large e-commerce builds and the PortPos gateway. A PHP/Laravel-centric shop with disciplined GitHub-PR engineering practice.",
    stack: {
      languages: ["PHP", "JavaScript", "SQL"],
      frameworks: ["Laravel", "Symfony", "Node.js"],
      tools: ["MySQL", "PostgreSQL", "Redis", "JIRA"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan office-based. Glassdoor 4.0/5 (50 reviews) — on-time salary and industry-leading projects praised; immense work pressure and office politics cited as cons.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Trainee Software Engineer", band: [30000, 45000], years: "0–2", scope: "From the community survey.", source: "Community salary survey", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [50000, 55000], years: "2–4", scope: "Glassdoor annual figures converted; consistent with the trainee band below.", source: "Glassdoor (৳600–660K/yr ÷ 12)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [70000, 70000], years: "4–8", scope: "Single report (min=max); DevOps avg ~৳60K corroborates the range.", source: "Glassdoor single report (৳840K/yr ÷ 12)", confidence: "low" },
    ],
    salaryNotes:
      "Glassdoor yearly figures divided by 12 land consistently in the ৳50–70K range. Team Lead roles exist in postings (7+ yrs) but with no disclosed salary — lead/EM omitted. A reliable mid-market payer with unusually large-scale projects.",
    sources: [
      "https://www.portonics.com/",
      "https://www.glassdoor.com/Salary/Portonics-Dhaka-Salaries-EI_IE654269.0,9_IL.10,15_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://jobs.smartrecruiters.com/PortonicsLimited/743999966161201-senior-software-engineer-php-",
    ],
  },

  {
    id: "tallykhata",
    name: "TallyKhata (Progoti Systems)",
    bn: "ট্যালিখাতা",
    tagline: "The #1 digital ledger for BD's shopkeepers — millions of merchants, TallyPay wallet, digital credit next.",
    type: "Fintech",
    city: "Dhaka",
    area: "Banani",
    founded: 2020,
    employees: "~172",
    engineers: "",
    website: "https://www.tallykhata.com",
    hue: 178,
    tier: 2,
    domains: ["Fintech", "SME digital ledger", "Payments", "Digital credit"],
    notable: [
      "Millions of registered shopkeepers; 1M+ monthly actives",
      "TallyPay — Bangladesh Bank PSP-licensed wallet with NID e-KYC",
      "Backed by Visa Accelerator and SC Ventures (Standard Chartered)",
    ],
    about:
      "TallyKhata, built by Progoti Systems (a SureCash PTE subsidiary led by Dr. Shahadat Khan), launched in June 2020 as a free bookkeeping app for micro-merchants and became the country's #1 small-business digital platform. It pairs the ledger with the PSP-licensed TallyPay wallet and is expanding into digital credit. Engineering is native-Android-heavy (Java/Kotlin with C/C++ components).",
    stack: {
      languages: ["Java", "Kotlin", "C++"],
      frameworks: ["Native Android SDK"],
      tools: ["Firebase", "REST APIs"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Banani office; two weekly holidays, subsidized lunch, mobile bill, two festival bonuses, yearly reviews. No publicly verifiable Glassdoor rating.",
    },
    verified: false,
    levels: [
      { key: "senior", title: "Senior Software Engineer", band: [65000, 200000], years: "4–8", scope: "An unusually wide Glassdoor range from few reports — the ৳200K top end fits a funded fintech but treat cautiously.", source: "Glassdoor (Progoti, Dhaka) monthly page via snippet", confidence: "low" },
    ],
    salaryNotes:
      "Only one verifiable band; circulars list pay as 'negotiable'. No se1/se2/lead/EM data — omitted. The band's upper end is consistent with funded fintechs paying above the mid-market norm.",
    sources: [
      "https://www.tallykhata.com",
      "https://www.glassdoor.com/Salary/Progoti-Bangladesh-Salaries-EI_IE1048496.0,7_IL.8,18_IN27.htm (via search snippets)",
      "https://futurestartup.com/2022/09/12/tallykhata-eyes-its-next-evolution-building-digital-credit-solutions-for-small-businesses/",
      "https://www.thedailystar.net/supplements/app-savvy-bangladesh/news/millions-shopkeepers-using-tallykhata-app-records-and-payments-3622596",
    ],
  },

  {
    id: "trucklagbe",
    name: "Truck Lagbe",
    bn: "ট্রাক লাগবে",
    tagline: "Bangladesh's largest trucking marketplace — 80K registered trucks, IFC-led Series A.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2017,
    employees: "~186",
    engineers: "",
    website: "https://trucklagbe.com",
    hue: 24,
    tier: 3,
    domains: ["Logistics", "Trucking marketplace", "Supply chain"],
    notable: [
      "~80,000 registered trucks, 500,000+ registered customers",
      "$4M Series A (2021) led by IFC, co-led by IDLC VC — $5.9M total",
      "Instant-bidding model for full-truckload bookings",
    ],
    about:
      "Founded in July 2017 by Anayet Rashid and Mir Hossain Ekram with 25 trucks, Truck Lagbe grew into Bangladesh's largest trucking marketplace, matching shippers with truck owners through an instant-bidding app. Backend roles run Go/Node/Java with React Native apps.",
    stack: {
      languages: ["Go", "JavaScript", "Java"],
      frameworks: ["Node.js", "React Native"],
      tools: ["MySQL", "MongoDB", "Redis"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Glassdoor 3.3/5 (~32 reviews) with comp & benefits at 2.7/5 — reviews say 'competitive per market' but rate pay as the weakest dimension.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Junior Software Engineer", band: [30001, 40000], years: "0–2", scope: "Below-average for Dhaka product startups, matching the weak comp rating.", source: "Community salary survey", confidence: "medium" },
    ],
    salaryNotes:
      "One survey band; Glassdoor publishes no figures and senior JDs (4–5 yrs, Go/Node/Java) don't disclose pay. Junior datapoint + 2.7/5 comp rating suggests below the mid band — Tier 3. HQ area beyond 'Dhaka' unconfirmed.",
    sources: [
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://futurestartup.com/2021/09/20/truck-lagbe-raises-4-million-series-a/",
      "https://www.startupbangladesh.vc/portfolio/truck-lagbe/",
    ],
  },

  {
    id: "loop-freight",
    name: "Loop Freight",
    bn: "লুপ ফ্রেইট",
    tagline: "Digital full-truckload freight network — ADB Ventures' first-ever Bangladesh investment.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2018,
    employees: "~56",
    engineers: "",
    website: "https://loopfreight.io",
    hue: 242,
    tier: 3,
    domains: ["Freight / logistics", "B2B marketplace", "Supply chain"],
    notable: [
      "First Bangladeshi startup backed by ADB Ventures",
      "First portfolio investment of Anchorless Bangladesh",
      "Offices in Dhaka, Chattogram, Khulna and Singapore",
    ],
    about:
      "Loop Freight (Loop Technologies), founded around 2018, matches full-truckload shipments from manufacturers and distributors with carriers to cut freight costs. Verified investors are ADB Ventures, Anchorless Bangladesh, Accelerating Asia and Startup Bangladesh (~$672K disclosed) — note that its often-repeated 'YC-backed' label could not be verified against the YC directory. Small seed-stage team; verify current status, as disclosed funding data ends in 2020.",
    stack: {
      languages: [],
      frameworks: [],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka HQ with regional offices; no public remote policy and too few Glassdoor reviews for a rating.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No salary data anywhere public — small seed-stage team, so all levels omitted. Engineering stack also undocumented (site describes a 'web and mobile platform' only). Tier 3 reflects absence of evidence and early stage, not verified low pay.",
    sources: [
      "https://loopfreight.io/",
      "https://ventures.adb.org/loop-technologies/",
      "https://www.anchorless.vc/portfolio/loop",
      "https://www.startupbangladesh.vc/portfolio/loop/",
    ],
  },

  {
    id: "arogga",
    name: "Arogga",
    bn: "আরোগ্য",
    tagline: "BD's leading digital pharmacy — Forbes-profiled for fighting counterfeit medicine, $5.7M raised.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2020,
    employees: "~200",
    engineers: "",
    website: "https://www.arogga.com",
    hue: 138,
    tier: 3,
    domains: ["HealthTech", "E-pharmacy", "Last-mile delivery"],
    notable: [
      "$5.5M seed (2023) led by The Venture Collective — among BD's larger healthtech rounds",
      "Forbes-profiled (2024) for fighting counterfeit medicines",
      "Verge HealthTech Fund investment (2026) signals continued growth",
    ],
    about:
      "Founded in 2020 by Rosina Mazumder, Shamim Hasan, Yawar Mehboob and Fahad Hossain, Arogga is Bangladesh's leading digital pharmacy, delivering authentic medicine and health products nationwide. It has raised ~$5.7M and is expanding from e-pharmacy into broader digital healthcare, with an in-house team hiring senior React Native engineers for the consumer app.",
    stack: {
      languages: ["JavaScript"],
      frameworks: ["React Native"],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Postings specify full-time, 5 days/week, 9–6 in Dhaka. A Glassdoor page exists (~13 salary reports) but figures weren't retrievable.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No verifiable per-level figures: Glassdoor data was inaccessible, job posts don't state pay, and it's absent from the community survey. Funding level and senior hiring suggest mid-band pay is plausible, but Tier 3 is assigned pending actual evidence — upgrade if figures surface.",
    sources: [
      "https://www.arogga.com/jobs/22",
      "https://www.forbes.com/sites/geristengel/2024/08/21/digital-rx-arogga-fights-counterfeit-meds-in-bangladesh/",
      "https://futurestartup.com/2021/06/20/arogga-started-as-a-digital-pharmacy-aims-to-go-deeper-into-digital-healthcare-in-bangladesh/",
      "https://www.glassdoor.com/Salary/Arogga-Dhaka-Salaries-EI_IE7124002.0,6_IL.7,12_IM1237.htm (inaccessible)",
    ],
  },

  {
    id: "reddot",
    name: "RedDot Digital",
    bn: "রেডডট ডিজিটাল",
    tagline: "Robi Axiata's 100%-owned IT subsidiary — built and runs the Binge OTT platform.",
    type: "Product",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2019,
    employees: "",
    engineers: "",
    website: "https://www.reddotdigitalit.com",
    hue: 2,
    tier: 2,
    domains: ["OTT streaming", "Enterprise software", "Cloud & DevOps", "Fintech platforms"],
    notable: [
      "Binge — Robi's OTT streaming platform (launched May 2020)",
      "Enterprise HRMS and sales & distribution platforms for Robi and external clients",
      "Facility planned at Bangabandhu Hi-Tech Park",
    ],
    about:
      "Founded in 2019 as Red.Digital Limited, Robi Axiata's wholly owned digital subsidiary now operates as RedDot Digital Limited. It launched Robi's Binge OTT platform in May 2020 (now maintained with Genex Infosys) and delivers enterprise software, cloud/DevOps, fintech and IoT work from the Robi corporate campus. The Red.Digital → RedDot renaming is well-supported across its site, LinkedIn and Wikipedia but not documented in a single official source.",
    stack: {
      languages: [],
      frameworks: [],
      tools: ["Cloud / DevOps tooling", "Streaming infrastructure (Wowza in early Binge)", "RPA platforms"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Telecom-subsidiary corporate environment; postings are Dhaka office-based. No explicit remote policy found.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [40000, 50000], years: "0–2", scope: "Survey band corroborated by parent Robi's Glassdoor developer average (~৳39.7K).", source: "Community survey (৳40–50K; interns ৳10K fixed) + Robi Glassdoor corroboration", confidence: "medium" },
    ],
    salaryNotes:
      "Only entry-level data exists publicly; se2/senior/lead/EM omitted. Headcount not disclosed. Binge attribution is confirmed; MyRobi attribution could not be verified and is not claimed.",
    sources: [
      "https://www.reddotdigitalit.com/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://www.thedailystar.net/business/news/robi-subsidiary-brings-the-future-video-entertainment-bangladesh-1904284",
      "https://en.wikipedia.org/wiki/Robi_(company)",
    ],
  },

  {
    id: "astha-it",
    name: "Astha IT (AIT)",
    bn: "আস্থা আইটি",
    tagline: "Three-time national top software exporter, rebranding as AIT — offshore teams for US clients since 2008.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2008,
    employees: "200+",
    engineers: "200+ (claimed)",
    website: "https://www.asthait.com",
    hue: 110,
    tier: 2,
    domains: ["Offshore staff augmentation", "Custom software", "AI/ML & data science", "Cloud (AWS partner)"],
    notable: [
      "Government of Bangladesh top software exporter award (2013, 2014, 2020)",
      "Long-running offshore extension teams for US brands",
      "CodeCamp bootcamp + AIT Ascend internship pipeline; Sweden subsidiary as EU base",
    ],
    about:
      "Founded in 2008 in Dhaka, Astha IT builds systems for startups, enterprises and governments, with a core model of pre-vetted offshore engineers working as remote extensions of overseas (largely US) teams. ISO 9001/27001 certified and a three-time national top software exporter, it is rebranding as 'AIT' with claimed offices in New York, Texas, California and Australia and an AI/data/cloud pitch.",
    stack: {
      languages: ["JavaScript", "Python", "Dart"],
      frameworks: ["Flutter"],
      tools: ["AWS", "Azure"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Dhaka office with a remote-extension client model; Glassdoor work-life balance 3.9/5, comp 4.0/5, 85% recommend. Explicit remote policy not published.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer I", band: [20000, 35000], years: "0–2", scope: "Survey and Glassdoor's range floor agree; a Flutter posting offered ৳35–45K.", source: "Community survey (SE-I ৳20–30K) + Glassdoor low end + posting", confidence: "medium" },
      { key: "se2", title: "Software Engineer II", band: [40000, 60000], years: "2–4", scope: "Best-documented rung — survey and Glassdoor's 15-report center agree.", source: "Community survey (৳40–55K) + Glassdoor typical ~৳45K/mo", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [70000, 120000], years: "4–8", scope: "Anchored on the company's own posted 3–5yr range — may straddle mid/senior.", source: "Astha IT career page ৳70–120K/mo (via snippet) + Glassdoor top end", confidence: "medium" },
    ],
    salaryNotes:
      "The best-documented company of this round: three corroborated bands. A Glassdoor review claim of '$55–65k/year' failed the BD sanity check (likely client billing) and was discarded. Lead/EM unknown. Exact Dhaka neighborhood not published.",
    sources: [
      "https://www.asthait.com/history/",
      "https://www.asthait.com/career/",
      "https://www.glassdoor.co.in/Salary/Astha-IT-Software-Engineer-Salaries-EJI_IE4383175.0,8_KO9,26_IM1237.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "w3engineers",
    name: "W3 Engineers",
    bn: "ডব্লিউথ্রি ইঞ্জিনিয়ার্স",
    tagline: "Khulna-born tech lab behind Telemesh — UNICEF-funded mesh messaging for refugee camps.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 2009,
    employees: "",
    engineers: "",
    website: "https://w3engineers.com",
    hue: 88,
    tier: 3,
    domains: ["Offshore development", "AI/ML pipelines", "Mesh networking / blockchain", "IoT & RPA"],
    notable: [
      "Telemesh — UNICEF Innovation Fund-backed open-source mesh messaging",
      "ML image-labeling and deduplication pipelines for overseas clients",
      "Started in Khulna (2009), Dhaka office since 2015",
    ],
    about:
      "Started in Khulna in 2009 and expanded to Dhaka in 2015, W3 Engineers is a technology lab and offshore provider spanning AI/ML, blockchain, mesh networking, IoT and RPA. Its best-known work is Telemesh, an open-source mobile mesh messaging platform funded by the UNICEF Innovation Fund for connectivity in refugee camps. Reviews praise the learning environment but flag pay and management.",
    stack: {
      languages: ["Go", "JavaScript", "Python"],
      frameworks: ["React", "Vue.js"],
      tools: ["AWS", "CI/CD", "NoSQL & RDBMS"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Postings state 'work at office', full-time in Dhaka; medical allowance, two festival bonuses, insurance, subsidized lunch. Glassdoor 3.0/5 (58 reviews), 46% recommend.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No verifiable numeric bands: postings say 'negotiable', Glassdoor's 154 salary reports weren't retrievable via snippets, and it's absent from the community survey. Qualitative signal is negative (comp 2.8/5, 'bad salary range' reviews) — Tier 3 on that basis, levels left empty.",
    sources: [
      "https://w3engineers.com/",
      "https://w3engineers.com/job/software-engineer/",
      "https://www.glassdoor.com/Reviews/W3-Engineers-Reviews-E3438225.htm (via search snippets)",
      "https://www.devex.com/organizations/w3-engineers-121895",
    ],
  },

  {
    id: "bitmascot",
    name: "Bit Mascot",
    bn: "বিট মাসকট",
    tagline: "White-label offshore partner to overseas digital agencies since 2006 — pay runs well below market.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2006,
    employees: "~100–200",
    engineers: "",
    website: "https://www.bitmascot.com",
    hue: 222,
    tier: 3,
    domains: ["Custom software", "Web & mobile", "BPO", "Hosting & IT management"],
    notable: [
      "White-label delivery for digital agencies worldwide",
      "Custom business-management platforms and CMS builds",
    ],
    about:
      "Founded in 2006 in Mohakhali DOHS, Bit Mascot provides custom software, web/mobile development, digital strategy, hosting and BPO — largely as a white-label offshore partner to overseas digital agencies. (A sometimes-claimed Microsoft Dynamics specialization could not be verified in any public source and is not asserted here.) Glassdoor sentiment is weak, with pay and work-life balance the main complaints.",
    stack: {
      languages: [],
      frameworks: [],
      tools: ["CMS platforms", "Hosting / IT management stack"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Reviews mention remote options but also heavy workload and rigid policies — work-life balance rated 1.9/5; only 24% would recommend.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer (entry)", band: [25000, 40000], years: "0–2", scope: "Survey and Glassdoor's typical figure agree on a below-market entry band.", source: "Community survey (৳30–40K) + Glassdoor typical ৳27.5K/mo", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [35000, 55000], years: "2–4", scope: "Upper portion of Glassdoor's range; Dhaka's SE average runs 63% above this company's typical.", source: "Glassdoor SE monthly range (floor excluded as intern pay)", confidence: "low" },
    ],
    salaryNotes:
      "Evidence points clearly below market: typical SE ৳27.5K vs the ৳45K Dhaka average, comp rating 2.4/5 and trending down. Senior pages exist on Glassdoor without retrievable figures — senior/lead/EM omitted.",
    sources: [
      "https://www.bitmascot.com/about-us/",
      "https://clutch.co/profile/bit-mascot",
      "https://www.glassdoor.sg/Monthly-Pay/Bit-Mascot-Software-Engineer-Dhaka-Monthly-Pay-EJI_IE1911356.0,10_KO11,28_IL.29,34_IS3812.htm (via search snippets)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "mpower",
    name: "mPower Social Enterprises",
    bn: "এমপাওয়ার",
    tagline: "Harvard/MIT-founded ICT4D firm — 300+ digital health & agri systems across 17 countries.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 2008,
    employees: "~150",
    engineers: "",
    website: "https://mpower-social.com",
    hue: 118,
    tier: 3,
    domains: ["Digital health (mHealth)", "Agri-tech advisory", "GovTech / NGO systems", "M&E dashboards"],
    notable: [
      "mTika & mCare — national vaccination/MNCH tracking on OpenSRP",
      "GeoPotato — potato late-blight alert system",
      "DHIS2/OpenSRP implementations for WHO, UNICEF and the BD government",
    ],
    about:
      "Founded in 2008 by Harvard/MIT graduate students, mPower designs and deploys ICT solutions for the development sector — 300+ solutions across 17 Global South countries, including national digital-health tooling in Bangladesh (with BRAC, WHO, UNICEF) and agri platforms like GeoPotato and Shufola. A rare employer where open-source health standards (DHIS2, OpenSRP, OpenMRS) are the day job, alongside a modern Node/TypeScript/K8s/GCP stack.",
    stack: {
      languages: ["TypeScript", "Java", "SQL"],
      frameworks: ["Node.js", "DHIS2", "OpenSRP", "OpenMRS"],
      tools: ["PostgreSQL", "Docker", "Kubernetes", "GCP"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Banani head office with occasional project field visits; flexible hours, subsidized lunch, festival bonuses and employer-paid income tax reported.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [29000, 40000], years: "0–2", scope: "Entry cash below the Dhaka average — offset by strong non-cash benefits and mission-driven work.", source: "Glassdoor (SE salaries, BD; comp 3.5/5 across 59 reports)", confidence: "medium" },
    ],
    salaryNotes:
      "Only entry-level data is public; a Dec 2024 backend circular (Node/TypeScript) listed pay as 'negotiable'. No senior/lead/EM data — omitted. Development-sector cash pay trails market; benefits partially compensate.",
    sources: [
      "https://mpower-social.com/about-us/",
      "https://www.glassdoor.com/Salary/mPower-Social-Enterprises-Bangladesh-Salaries-EI_IE992308.0,25_IL.26,36_IN27.htm (via search snippets)",
      "https://hotjobs.bdjobs.com/jobs/mpower/mpower206.htm",
    ],
  },

  {
    id: "doctime",
    name: "DocTime",
    bn: "ডকটাইম",
    tagline: "BD's leading telemedicine app — 24/7 video consultations, e-prescriptions, 460K+ users.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2020,
    employees: "~85",
    engineers: "~25",
    website: "https://doctime.com.bd",
    hue: 168,
    tier: 3,
    domains: ["Telemedicine", "E-prescriptions / EHR", "Corporate health benefits"],
    notable: [
      "24/7 video consultations averaging under 10 minutes to connect",
      "460K+ registered users, 3,000 registered doctors (2022)",
      "DocTime for Business — B2B corporate healthcare",
    ],
    about:
      "Built from 2018 and launched mid-2020 during the pandemic by Anowar Hossain, DocTime is Bangladesh's leading telemedicine platform — instant video consultations, e-prescriptions and health records, plus medicine delivery and diagnostics integrations and a B2B corporate product. Funding status is ambiguous across sources (~$2M reported vs 'unfunded' per Tracxn).",
    stack: {
      languages: ["TypeScript (inferred)"],
      frameworks: ["React (inferred)", "Android/iOS apps"],
      tools: ["AWS (inferred)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka-based lean startup; founder interviews emphasize small-team quality. Work mode not formally documented.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No engineer salary data anywhere public; the community survey lists only a Data Analyst at ৳20–30K. Levels left empty. Stack items are inferred from the VP of Engineering's public JS/Node/AWS technical writing, not job postings — low confidence.",
    sources: [
      "https://doctime.com.bd/about-us",
      "https://futurestartup.com/2022/06/28/anowar-hossain-doctime-building-a-digital-health-product-and-entrepreneurship-part-i/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "priyoshop",
    name: "PriyoShop",
    bn: "প্রিয়শপ",
    tagline: "B2B retail marketplace with embedded finance — 200K MSME retailers, $5M pre-Series A.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2013,
    employees: "1,600+ (mostly ops)",
    engineers: "",
    website: "https://priyoshop.com",
    hue: 98,
    tier: 2,
    domains: ["B2B commerce", "Embedded finance / MSME credit", "Distribution logistics"],
    notable: [
      "~200,000 MSME retailers via 40 hubs across 16 districts",
      "$5M pre-Series A (Feb 2024) anchored by Century Oak Ventures",
      "Pivoted from B2C e-commerce (2013) to B2B supply chain",
    ],
    about:
      "Founded in 2013 by Asikul Alam Khan as a B2C e-commerce site, PriyoShop pivoted into a B2B MSME supply-chain marketplace with embedded retailer credit, now serving roughly 200,000 shops through a hub-and-route network. The 1,600+ headcount is overwhelmingly field logistics; the tech team is a small fraction of it.",
    stack: {
      languages: [],
      frameworks: [],
      tools: [],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Dhaka HQ plus field hubs. Glassdoor (15 reviews): 82% would recommend, compensation rated 3.9/5 — strong for its stage.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No engineer-level figures surfaced from Glassdoor's 16 reports, BdJobs or the community survey — levels empty. The 3.9/5 comp rating and fresh funding suggest mid-market pay; Tier 2 is tentative. Current B2B stack is unverified (the legacy B2C site ran nopCommerce/.NET) and left blank rather than guessed.",
    sources: [
      "https://priyoshop.com/",
      "https://www.dealstreetasia.com/stories/priyoshop-secures-pre-series-a-384189",
      "https://www.glassdoor.com/Reviews/PriyoShop-Reviews-E5221209.htm (via search snippets)",
    ],
  },

  {
    id: "ssdtech",
    name: "SSD-Tech",
    bn: "এসএসডি-টেক",
    tagline: "Carrier-grade telco VAS & charging platforms reaching 400M+ subscribers in 10+ countries.",
    type: "Product",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2004,
    employees: "~250–650",
    engineers: "",
    website: "https://ssd-tech.io",
    hue: 258,
    tier: 2,
    domains: ["Telco VAS & charging", "Messaging / IVR platforms", "ISP (Carnival Internet)"],
    notable: [
      "Service Delivery Platform & Diameter charging gateway for ~15 operators",
      "SMS/USSD and consent gateways reaching 400M+ subscribers",
      "Group runs Carnival Internet (fiber ISP); subsidiaries in Malaysia & UK",
    ],
    about:
      "Incorporated in 2004, SSD-Tech builds and operates carrier-grade value-added-service and charging infrastructure — SDP, SMS/USSD gateways, Diameter charging, IVR — powering operators across Asia-Pacific and Africa, with presence claimed in 17 countries. One of the few BD companies doing telecom-protocol systems engineering (SIP, BICC, Diameter, SMPP) rather than web work.",
    stack: {
      languages: ["Java (inferred for carrier platforms)", "SQL"],
      frameworks: ["SIP / Diameter / SMPP / USSD protocol stacks"],
      tools: ["Linux infrastructure", "Operator CBS/IN integrations"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Gulshan office. Glassdoor 3.6/5 (58 reviews), 69% recommend — a good career starter with deadline pressure and 3.1/5 work-life balance.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No per-level BDT figures retrievable from Glassdoor snippets, BdJobs or the community survey — levels empty. Comp rated 3.6/5, consistent with mid-market established-firm pay (Tier 2 tentative). Stack inferred from the company's own platform descriptions. Headcounts vary wildly across sources (141–1,800) because the group includes the ISP subsidiary.",
    sources: [
      "https://ssd-tech.io/",
      "https://www.glassdoor.com/Reviews/Systems-Solutions-and-Development-Technologies-Reviews-E501481.htm (via search snippets)",
      "https://www.thedailystar.net/business/news/local-tech-company-gaining-foothold-global-markets-1709803",
    ],
  },

  {
    id: "shikho",
    name: "Shikho",
    bn: "শিখো",
    tagline: "One of BD's best-funded edtechs (~$7M) — Bangla NCTB-curriculum learning for 3M+ students.",
    type: "Startup",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2019,
    employees: "~450",
    engineers: "~40",
    website: "https://shikho.com",
    hue: 62,
    tier: 2,
    domains: ["EdTech", "Video learning content", "AI-powered learning"],
    notable: [
      "~$7M raised (Learn Capital, Wavemaker, Anchorless…) — Forbes Asia 100 to Watch 2022",
      "Animated Bangla lessons aligned to the national curriculum, 3M+ students claimed",
      "Acquired coding-education platform Mainly Coding",
    ],
    about:
      "Founded in 2019 by Shahir Chowdhury (ex-HSBC/Barclays) and Zeeshan Zakaria, Shikho delivers animated video lessons, livestream classes and test prep in Bangla for grades 9–12 and admission prep, with a Django/Flutter/React stack on AWS. Among the best-funded edtechs in the country, with a later strategic investment from Startup Bangladesh for AI-powered learning.",
    stack: {
      languages: ["Python", "Dart", "TypeScript"],
      frameworks: ["Django", "Flutter", "Next.js"],
      tools: ["AWS", "PostgreSQL", "Redis", "Firebase"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Primarily onsite across Dhaka offices (plus Jashore); Glassdoor comp & benefits rated 3.5/5.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "Glassdoor holds 70 salary entries but all behind login; the only visible snippet (~৳24–26K/mo) is likely junior/non-engineering, and the community survey lists only a Junior SQA at ৳20–30K. No engineering bands are asserted — market-extrapolated figures were deliberately excluded. Tier 2 rests on funding, scale and the 3.5/5 comp rating.",
    sources: [
      "https://techcrunch.com/2021/07/27/shikho-an-edtech-startup-focused-on-bangladeshs-students-gets-1-3m-seed/",
      "https://restofworld.org/2022/meet-the-edtech-founder-who-wants-to-democratize-quality-education-for-the-masses/",
      "https://www.glassdoor.com/Salary/Shikho-Dhaka-Salaries-EI_IE6295447.0,6_IL.7,12_IS3812.htm (login-gated)",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
    ],
  },

  {
    id: "cmed",
    name: "CMED Health",
    bn: "সিমেড হেলথ",
    tagline: "UIU-born preventive-health IoT/AI platform — 3M+ lives impacted via connected devices & health workers.",
    type: "Startup",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2016,
    employees: "~60 core",
    engineers: "",
    website: "https://cmed.com.bd",
    hue: 182,
    tier: 3,
    domains: ["HealthTech", "IoT medical devices", "AI risk prediction", "Rural health platforms"],
    notable: [
      "Spun out of UIU's AIMS Lab; TAG Heuer Prize at Seedstars 2018, APICTA 2019 Merit",
      "3M+ lives impacted, 450K+ rural families, 3K+ female health workers",
      "Corporate wellness line serving 40+ factories",
    ],
    about:
      "Founded in 2016 by Prof. Khondaker Abdullah Al Mamun (UIU) with co-founders from the AIMS Lab, CMED pairs IoT-enabled vitals devices with a cloud platform that tracks health trends and predicts risks, powering 'health accounts' for rural households and corporate wellness. Engineering is Flutter/Android with a Python ML layer.",
    stack: {
      languages: ["Dart", "Kotlin", "Python"],
      frameworks: ["Flutter", "REST APIs"],
      tools: ["Firebase", "Cloud IoT platform"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at New DOHS Mohakhali. Glassdoor 2.6/5 (26 reviews), comp 2.2/5 — reviews cite raises/bonuses paid months late, though base salary is on time and beginners learn a lot.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer (Android/Flutter)", band: [33000, 45000], years: "0–2", scope: "From the Android SE figure and the company-wide range; a lone ৳130K SE report was excluded as an unexplained outlier.", source: "Glassdoor Android SE ৳42–45K/mo + company range ~৳33–36K/mo", confidence: "medium" },
    ],
    salaryNotes:
      "Only the junior band is evidence-backed; a single ৳130K/mo SE report exists but can't be level-attributed and was excluded rather than mapped to senior. The 2.2/5 comp rating and delayed-increment reviews support Tier 3.",
    sources: [
      "https://cmed.com.bd/about-us/",
      "https://iriic.uiu.ac.bd/cmed/",
      "https://www.glassdoor.com/Salary/CMED-Health-Dhaka-Salaries-EI_IE2501978.0,11_IL.12,17_IC2267834.htm (via search snippets)",
    ],
  },

  {
    id: "ecourier",
    name: "eCourier",
    bn: "ইকুরিয়ার",
    tagline: "Digital logistics pioneer — ~30K daily orders across all 64 districts for Daraz, foodpanda and Square.",
    type: "Startup",
    city: "Dhaka",
    area: "Badda",
    founded: 2014,
    employees: "~120 corporate",
    engineers: "",
    website: "https://ecourier.com.bd",
    hue: 148,
    tier: 3,
    domains: ["Logistics tech", "Merchant APIs", "Warehousing / fulfillment"],
    notable: [
      "~30,000+ daily orders, 64-district coverage, 25,000+ merchants",
      "Merchant API and dashboards used by Daraz, foodpanda, Square, Banglalink",
      "OTP delivery confirmation and QR/SMS real-time tracking",
    ],
    about:
      "Founded in 2014 by Biplob Ghosh Rahul, eCourier evolved from an IT firm into one of Bangladesh's first digital logistics companies, with a public merchant API, real-time tracking and warehouse services. Corporate staff of ~120 sits atop a 1,000+ delivery-agent network.",
    stack: {
      languages: ["PHP (inferred)", "JavaScript (inferred)"],
      frameworks: ["REST APIs (public merchant API confirmed)"],
      tools: ["bKash integration (confirmed)", "SMS/QR tracking"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Onsite, operations-heavy culture at the Badda/Gulshan HQ. Glassdoor page exists but exposes no rating or figures.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "Zero engineering pay evidence anywhere public — BdJobs listings showed only non-tech roles. Levels empty; stack largely inferred except the public API and bKash integration. Tier 3 pending real data.",
    sources: [
      "https://ecourier.com.bd/",
      "https://www.tbsnews.net/supplement/ecourier-journey-it-firm-turning-digital-logistics-company-578618",
      "https://futurestartup.com/2016/04/30/q-a-with-biplob-g-rahul-ceo-of-ecourier/",
    ],
  },

  {
    id: "jatri",
    name: "Jatri",
    bn: "যাত্রী",
    tagline: "BD's first bus-tracking & digital ticketing platform — $5.25M raised, SaaS expanding to the Middle East.",
    type: "Startup",
    city: "Dhaka",
    area: "Gulshan",
    founded: 2019,
    employees: "~82",
    engineers: "~20",
    website: "https://jatri.co",
    hue: 228,
    tier: 2,
    domains: ["Mobility / transit tech", "Digital ticketing", "B2B SaaS for operators"],
    notable: [
      "First bus tracking + digital ticketing platform in Bangladesh",
      "~$5.25M over 5 rounds; founder Aziz Arman is Forbes 30 Under 30 Asia",
      "Operator-SaaS expansion toward the Middle East (Genting Ventures-backed)",
    ],
    about:
      "Founded in early 2019 by Aziz Arman, Khondoker Taswar Zahin and Zia Ahmed, Jatri digitizes public transport — real-time bus tracking, digital tickets, launch tickets and car rentals — plus a B2B SaaS platform for transport operators that it is taking to the Middle East. Consumer apps are Flutter with Maps/GPS integrations.",
    stack: {
      languages: ["Dart", "JavaScript"],
      frameworks: ["Flutter", "Laravel/Node.js (inferred)"],
      tools: ["Firebase", "Google Maps APIs"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Onsite at Gulshan-2 HQ. Glassdoor 3.1/5 (26 reviews).",
    },
    verified: false,
    levels: [
      { key: "se2", title: "Software / Frontend Engineer", band: [62000, 67000], years: "2–4", scope: "The one solid datapoint — squarely mid-market for a funded Series-A startup.", source: "Glassdoor Dhaka frontend-engineer page lists Jatri at ৳62–67K/mo", confidence: "medium" },
    ],
    salaryNotes:
      "One evidence-backed band; junior and senior figures were market extrapolations and are deliberately excluded. Not in the community survey. Backend stack partially inferred.",
    sources: [
      "https://jatri.co/",
      "https://www.tbsnews.net/dropped/startups/mass-transport-startup-jatri-raises-12m-expand-operation-301750",
      "https://www.glassdoor.com/Salaries/dhaka-frontend-engineer-salary-SRCH_IL.0,5_IM1237_KO6,23.htm (via search snippets)",
    ],
  },

  {
    id: "wedevs",
    name: "weDevs",
    bn: "উইডেভস",
    tagline: "Makers of Dokan — the world's #1 WooCommerce multivendor plugin — 520K+ users globally.",
    type: "Product",
    city: "Dhaka",
    area: "Dhaka",
    founded: 2012,
    employees: "50+",
    engineers: "~35",
    website: "https://wedevs.com",
    hue: 208,
    tier: 2,
    domains: ["WordPress plugins", "WooCommerce / e-commerce", "SaaS"],
    notable: [
      "Dokan Multivendor — 70K+ active installs, the leading WP marketplace plugin",
      "WP ERP, WP User Frontend, weMail, Appsero",
      "FlyWP server-management SaaS (2023)",
    ],
    about:
      "Started as a blog in 2008 and incorporated in Dhaka in May 2012, weDevs is Bangladesh's best-known WordPress product company, serving 520,000+ users worldwide with Dokan at the front. Note: the widely-repeated claim that Awesome Motive acquired weDevs in 2022 could not be verified — no announcement exists and weDevs operates and sponsors WordCamps under its own brand.",
    stack: {
      languages: ["PHP", "JavaScript"],
      frameworks: ["WordPress/WooCommerce APIs", "Vue.js", "React", "Laravel"],
      tools: ["MySQL", "GitHub", "PHPUnit", "Docker"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Dhaka HQ with office-based product teams; some remote-friendly practice but core engineering is onsite.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Software Engineer", band: [38000, 55000], years: "0–2", scope: "From a 2-submission Glassdoor sample — thin.", source: "Glassdoor Dhaka (৳455–831K/yr ÷ 12, 2 submissions)", confidence: "low" },
      { key: "se2", title: "Software Engineer II", band: [55000, 70000], years: "2–4", scope: "Upper end of the same tiny sample.", source: "Glassdoor upper end (~৳69K/mo)", confidence: "low" },
    ],
    salaryNotes:
      "Very thin: 2 Glassdoor submissions; a $148K/yr USD figure was discarded as a US-market artifact. Absent from the community survey. Senior+ bands left empty — comparable WP product firms pay seniors ৳90–150K but no weDevs-specific evidence exists.",
    sources: [
      "https://wedevs.com/about/",
      "https://www.glassdoor.com/Salary/weDevs-Dhaka-Salaries-EI_IE1972450.0,6_IL.7,12_IM1237.htm (2 reports)",
      "https://wordpress.org/plugins/dokan-lite/",
    ],
  },

  {
    id: "wpdeveloper",
    name: "WPDeveloper (Startise)",
    bn: "ডব্লিউপিডেভেলপার",
    tagline: "Essential Addons for Elementor — ~2M active installs from a Mirpur DOHS office; now under Startise.",
    type: "Product",
    city: "Dhaka",
    area: "Mirpur",
    founded: 2012,
    employees: "~100 (group)",
    engineers: "~40",
    website: "https://wpdeveloper.com",
    hue: 278,
    tier: 2,
    domains: ["WordPress plugins", "Elementor / Gutenberg ecosystem", "SaaS"],
    notable: [
      "Essential Addons for Elementor — ~2M active installs, 5–6M users in 180+ countries",
      "NotificationX, BetterDocs, Templately, easy.jobs",
      "Folded under the Startise parent brand (Feb 2024)",
    ],
    about:
      "Founded in Dhaka in 2012, WPDeveloper grew Essential Addons for Elementor into one of the world's most-installed Elementor addon libraries, alongside NotificationX, BetterDocs and SaaS products. Operating under the Startise brand family since February 2024, with HQ in Mirpur DOHS and a Delaware US registration.",
    stack: {
      languages: ["PHP", "JavaScript"],
      frameworks: ["WordPress APIs", "Elementor API", "React", "Laravel"],
      tools: ["MySQL", "GitHub", "webpack"],
    },
    workStyle: {
      mode: "Hybrid",
      notes:
        "Engineering historically onsite at Mirpur DOHS; the Startise group now hires fully-remote international roles for some functions. Glassdoor 4.4/5 (20 reviews), comp 4.3/5.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "WordPress Developer (Junior)", band: [30000, 45000], years: "0–2", scope: "Lower half of Glassdoor's WordPress-role range.", source: "Glassdoor: WP roles ৳30–70K/mo, median ৳50K", confidence: "medium" },
      { key: "se2", title: "WordPress / Software Engineer", band: [45000, 70000], years: "2–4", scope: "Upper half of the same range — the best-evidenced WP-cluster band.", source: "Glassdoor: WP roles ৳30–70K/mo, median ৳50K", confidence: "medium" },
    ],
    salaryNotes:
      "Best-evidenced of the WordPress cluster. No senior/lead/EM figures anywhere public and absent from the community survey — those bands are left empty (seniors likely ৳70–110K, unverified).",
    sources: [
      "https://wpdeveloper.com/jobs/",
      "https://www.glassdoor.com/Reviews/WPDeveloper-Reviews-E2346609.htm (via search snippets)",
      "https://www.cbinsights.com/company/wpdeveloper (Startise, Feb 2024)",
    ],
  },

  {
    id: "ollyo",
    name: "Ollyo",
    bn: "অলিও",
    tagline: "Tutor LMS, Droip and Themeum under one roof — 15M+ downloads and Dhaka's famous barista-equipped campus.",
    type: "Product",
    city: "Dhaka",
    area: "Khilkhet",
    founded: 2010,
    employees: "~70–150",
    engineers: "~50",
    website: "https://ollyo.com",
    hue: 122,
    tier: 2,
    domains: ["WordPress LMS / e-learning", "No-code builders", "Themes & design assets"],
    notable: [
      "Tutor LMS — the leading WordPress LMS plugin (70K+ users)",
      "Droip — no-code WordPress website builder",
      "15M+ collective downloads across brands; in-house barista & chef team",
    ],
    about:
      "Ollyo is the umbrella company Kawshar Ahmed formed to consolidate his brands — JoomShaper (his original 2010 venture), Themeum, IcoFont, and newer products Tutor LMS and Droip — from a dedicated Dhaka campus in Khilkhet famous locally for its office culture. Products have been downloaded 15M+ times collectively.",
    stack: {
      languages: ["PHP", "TypeScript", "JavaScript"],
      frameworks: ["WordPress APIs", "React", "Laravel"],
      tools: ["MySQL", "GitHub", "Figma"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "All roles listed 'Onsite / Full Time' at the Dhaka campus, Monday–Friday; strong office-perk culture. BD employees rate compensation 4.2/5.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "Glassdoor holds 23 salaries across 13 roles but all behind login; the only public number is a non-engineering marketing role at ৳50–60K. The 4.2/5 comp rating suggests at-or-above-market pay, but no engineering bands are asserted.",
    sources: [
      "https://ollyo.com/careers/",
      "https://www.glassdoor.com/Salary/Ollyo-Dhaka-Salaries-EI_IE7915752.0,5_IL.6,11_IM1237.htm (login-gated)",
      "https://www.cloudways.com/blog/kawshar-ahmed-interview/",
    ],
  },

  {
    id: "joomshaper",
    name: "JoomShaper",
    bn: "জুমশেপার",
    tagline: "The Joomla ecosystem's dominant vendor — SP Page Builder, Helix, 13.3M+ downloads; an Ollyo company.",
    type: "Product",
    city: "Dhaka",
    area: "Khilkhet",
    founded: 2010,
    employees: "~45",
    engineers: "~25",
    website: "https://www.joomshaper.com",
    hue: 338,
    tier: 3,
    domains: ["Joomla templates & extensions", "Page builders", "E-commerce (EasyStore)"],
    notable: [
      "SP Page Builder — Joomla's leading drag-and-drop builder",
      "Helix Ultimate framework powering a large share of Joomla templates",
      "13.3M+ downloads, ~778K registered users, 314+ products",
    ],
    about:
      "JoomShaper was Kawshar Ahmed's original 2010 venture and grew into the Joomla ecosystem's dominant vendor — SP Page Builder, the free Helix framework and 140+ premium templates. It now operates as 'an Ollyo company' from the shared Khilkhet campus.",
    stack: {
      languages: ["PHP", "JavaScript"],
      frameworks: ["Joomla framework", "React", "Bootstrap/SCSS"],
      tools: ["MySQL", "GitHub"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Onsite at the shared Ollyo campus. Glassdoor 4.3/5 (19 reviews), 74% recommend, though Dhaka reviewers flag comp dissatisfaction.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Engineer (role unspecified)", band: [24000, 26000], years: "0–2", scope: "Treat as a floor, not a market band — a tiny sample that may be a junior/support role.", source: "Glassdoor Dhaka ৳290–312K/yr ÷ 12 (tiny sample)", confidence: "low" },
    ],
    salaryNotes:
      "Weakest data of the WordPress cluster — Glassdoor's Dhaka page is nearly empty. As an Ollyo brand its actual pay likely mirrors Ollyo's, but nothing confirms that. Tier 3 reflects pay evidence only, not product stature.",
    sources: [
      "https://www.joomshaper.com/about",
      "https://www.glassdoor.com/Reviews/JoomShaper-Reviews-E4490558.htm (via search snippets)",
    ],
  },

  {
    id: "sebpo",
    name: "SEBPO (Alloyed)",
    bn: "এসইবিপিও",
    tagline: "US-HQ'd ad-ops BPO with huge Dhaka & Jashore centers — rebranding to 'Alloyed' as of 2026.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Mohakhali",
    founded: 2006,
    employees: "1,000+ (BD)",
    engineers: "",
    website: "https://alloyed.io",
    hue: 75,
    tier: 3,
    domains: ["Ad operations", "Creative services", "QA & data operations", "BPO"],
    notable: [
      "Ad-ops delivery for many of the world's largest advertising/media companies",
      "Jashore Hi-Tech Park delivery center (2023)",
      "Rebranding from SEBPO to Alloyed — 'cognitive process orchestration' (people + AI)",
    ],
    about:
      "Founded in 2006 as ServicEngine BPO with HQ in New Jersey, SEBPO grew into a leading outsourcing partner for global advertising and media companies, with delivery centers in Dhaka, Jashore and El Salvador. Work is dominated by ad-campaign management, creative production support, QA and data operations on US-hours night shifts. Currently rebranding to Alloyed (sebpo.com redirects to alloyed.io).",
    stack: {
      languages: ["SQL"],
      frameworks: [],
      tools: ["Ad-serving / campaign platforms", "Reporting dashboards", "Excel"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Shift-based (2pm–11pm and 10pm–7am documented) to match US hours; shift allowances, insurance, two festival bonuses. Glassdoor BD ~3.0/5 (171 reviews).",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No reliable engineering bands: Glassdoor's 246+ BD salaries returned garbled snippets, and the only hard anchor is a non-tech ops circular at ৳15–18K/mo. An ops-heavy BPO where core delivery roles pay well under the engineering band; its engineering roles remain unquantified.",
    sources: [
      "https://alloyed.io",
      "https://www.glassdoor.com/Salary/SEBPO-Dhaka-Salaries-EI_IE2313083.0,5_IL.6,11_IM1237.htm (garbled snippets)",
      "https://dohaj.com/job-details/executive-digital-advertising-jashore-sebpo-105633",
    ],
  },

  {
    id: "graphicpeople",
    name: "GraphicPeople / SoftwarePeople",
    bn: "গ্রাফিকপিপল",
    tagline: "WPP-lineage offshore creative-production and software studio — famous for 14-month salary years.",
    type: "Outsourcing",
    city: "Dhaka",
    area: "Banani",
    founded: 2004,
    employees: "250+",
    engineers: "",
    website: "https://www.graphicpeoplestudio.com",
    hue: 288,
    tier: 2,
    domains: ["Creative production", "Marketing technology", "Software for ad networks"],
    notable: [
      "Offshore production hub for WPP-network agencies and global brands",
      "High-volume multilingual ad adaptation",
      "Twice awarded 'Best Employer' by Bdjobs.com",
      "⚠ Main website suspended as of mid-2026 — verify current status",
    ],
    about:
      "GraphicPeople started in 2004 as a Denmark–Bangladesh joint venture set up by Adpeople Worldwide (WPP lineage — not Dentsu, as sometimes claimed) and grew from 8 people into one of Bangladesh's largest offshore production hubs, operating jointly as GraphicPeople | SoftwarePeople from Banani. Its main website is currently suspended and no restructuring news was found, so current operating structure is uncertain — re-verify before relying on this entry.",
    stack: {
      languages: [],
      frameworks: [],
      tools: ["Adobe Creative Suite (core production toolset)"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Banani studio aligned to European/US agency workflows; historically a 14-month salary structure (12 + festival + annual bonus). Post-2023 policy unverified.",
    },
    verified: false,
    levels: [],
    salaryNotes:
      "No BDT figures anywhere accessible (Glassdoor page 403s; absent from the community survey). The 14-month structure and Best Employer awards suggest mid-market pay — Tier 2 is a low-confidence inference from client profile, not pay evidence.",
    sources: [
      "https://www.linkedin.com/company/graphicpeople",
      "https://digitalexcellenceawards.com/agencies/graphicpeople-dhaka",
      "https://techbehemoths.com/company/graphicpeople",
    ],
  },

  {
    id: "banglalink",
    name: "Banglalink (IT / Digital)",
    bn: "বাংলালিংক",
    tagline: "VEON's BD telco — the in-house tech org behind MyBL SuperApp and Toffee streaming.",
    type: "Product",
    city: "Dhaka",
    area: "Gulshan",
    founded: 1996,
    employees: "1,000+ (company-wide)",
    engineers: "",
    website: "https://www.banglalink.net",
    hue: 30,
    tier: 1,
    domains: ["Telecom", "Super-app / consumer digital", "Video streaming", "Data & analytics"],
    notable: [
      "MyBL SuperApp",
      "Toffee — one of BD's largest video-streaming platforms",
      "Digitalyst internship & Strategic Assistant graduate programs",
    ],
    about:
      "Banglalink launched in 2005 (from Sheba Telecom, founded 1996) and is a VEON subsidiary pursuing a 'digital operator' strategy: its in-house technology org builds MyBL SuperApp, the Toffee streaming platform and BiP integrations from the Tigers' Den HQ in Gulshan, hiring across React/Angular/Flutter and AWS/GCP DevOps. Like Grameenphone, telco total compensation (bonuses, PF, gratuity, allowances) materially exceeds the cash bands shown.",
    stack: {
      languages: ["JavaScript", "Dart"],
      frameworks: ["React", "Angular", "Flutter"],
      tools: ["AWS", "GCP", "Docker", "CI/CD"],
    },
    workStyle: {
      mode: "Onsite",
      notes: "Modern HQ (Tigers' Den, Gulshan); structured corporate telco grades. Hybrid flexibility not verified.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Specialist / Management Trainee (Tech)", band: [55000, 70000], years: "0–2", scope: "From a published salary-structure guide; grade titles don't map cleanly to SWE levels.", source: "edujobbd.com Banglalink salary structure (MT ~৳60K/mo)", confidence: "low" },
      { key: "se2", title: "Senior Executive / Specialist", band: [64000, 90000], years: "2–5", scope: "Strategic Assistants report ~৳72.5K.", source: "edujobbd.com (Sr. Executive ~৳64K; SA ~৳72.5K)", confidence: "low" },
      { key: "lead", title: "Lead Engineer", band: [138000, 165000], years: "8–12", scope: "The one first-party Glassdoor band — explicitly monthly.", source: "Glassdoor Lead Engineer Dhaka monthly pay (৳138–165K)", confidence: "medium" },
      { key: "em", title: "Manager / Sr. Manager (Technology)", band: [120000, 180000], years: "10+", scope: "Grade-to-engineering mapping is ambiguous; the Manager-below-Lead inversion reflects different tracks.", source: "edujobbd.com (Manager ~৳100K, Director ~৳200K)", confidence: "low" },
    ],
    salaryNotes:
      "A senior-level figure existed only as interpolation between anchors and was excluded. Cash bands look mid-market but telco total comp adds 30–50%+ (festival/performance bonuses, PF, gratuity, insurance) — hence Tier 1, same logic as Grameenphone. Glassdoor 'yearly' BD figures appeared mis-scaled and were ignored except the explicitly-monthly Lead Engineer page.",
    sources: [
      "https://www.glassdoor.com/Monthly-Pay/Banglalink-Lead-Engineer-Dhaka-Monthly-Pay-EJI_IE534901.0,10_KO11,24_IL.25,30_IM1237.htm",
      "https://edujobbd.com/banglalink-salary-structure/",
      "https://www.banglalink.net/careers",
    ],
  },

  {
    id: "ibos",
    name: "iBOS (AKIJ)",
    bn: "আইবিওএস",
    tagline: "Akij Group's software arm — Managerium ERP, PeopleDesk HR and PrimeVAT for 200+ enterprises.",
    type: "Product",
    city: "Dhaka",
    area: "Lalmatia",
    founded: 2020,
    employees: "~300",
    engineers: "125+",
    website: "https://ibos.io",
    hue: 255,
    tier: 3,
    domains: ["ERP", "HR tech", "VAT / compliance automation", "Custom software"],
    notable: [
      "Managerium ERP (incl. Retail ERP) — software backbone of Akij Group",
      "PeopleDesk HRMS and PrimeVAT automation",
      "CMMI + ISO 27001/9001 certified; 400+ implementations claimed",
    ],
    about:
      "AKIJ iBOS is a concern of AKIJ Resource, one of Bangladesh's largest conglomerates, building ERP, HR and VAT products for Akij companies and external clients (2,000+ companies claimed). Stack spans .NET, Laravel, React/Angular and Flutter. Founding year is low-confidence — LinkedIn says 2020 while marketing claims '15+ years of service'.",
    stack: {
      languages: ["C#", "PHP", "JavaScript", "Dart", "SQL"],
      frameworks: [".NET", "Laravel", "React", "Angular", "Flutter"],
      tools: ["MySQL", "PostgreSQL", "IIS"],
    },
    workStyle: {
      mode: "Onsite",
      notes:
        "Onsite at the Lalmatia office. Glassdoor comp & benefits 2.3/5 (Dhaka) — conglomerate-subsidiary pay scales apply.",
    },
    verified: false,
    levels: [
      { key: "se1", title: "Jr. Software Engineer / Frontend Dev", band: [20000, 35000], years: "0–2", scope: "From the community survey and junior circulars.", source: "Community survey (Frontend ৳20–30K) + BdJobs circulars", confidence: "medium" },
      { key: "se2", title: "Software Engineer", band: [30000, 45000], years: "2–4", scope: "Below the Dhaka product-company norm, consistent with the 2.3/5 comp rating.", source: "Community survey (SE ৳30–40K)", confidence: "medium" },
      { key: "senior", title: "Senior Software Engineer", band: [50000, 70000], years: "4–7", scope: "From posted senior ranges.", source: "BdJobs/Glassdoor-listed posting range ৳50–70K", confidence: "low" },
    ],
    salaryNotes:
      "Bands sit clearly below the Dhaka mid-market norm across all levels — Tier 3. No lead/EM evidence; 82 Glassdoor salaries exist but weren't retrievable.",
    sources: [
      "https://ibos.io/about-ibos-top-software-company-in-bangladesh/",
      "https://tahanima.github.io/salary-ranges-offered-by-bangladeshi-software-companies-for-different-positions/",
      "https://dohaj.com/job-details/sr-frontend-developer-ibos-limited-81948",
    ],
  },
];

/* Convenience exports used by app.js */
const ALL_TECH = [...new Set(
  COMPANIES.flatMap((c) => [...c.stack.languages, ...c.stack.frameworks, ...c.stack.tools])
)].sort();

const ALL_TYPES = [...new Set(COMPANIES.map((c) => c.type))];
const ALL_AREAS = [...new Set(COMPANIES.map((c) => c.area))].sort();
