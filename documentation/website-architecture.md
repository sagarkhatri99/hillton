# HILLTON PRAKRITIK CHIKITSA KENDRA - WEBSITE ARCHITECTURE & CONTENT SPEC

**Project:** Website Development  
**Version:** 2.0 (Updated with 18 Condition-Focused Pages)  
**Date:** December 2025  
**Target:** Simple, Elegant Design  
**Dev Focus:** Content-Ready, Easy CMS Upload

---

## OVERVIEW: WEBSITE STRUCTURE

### Primary Navigation
```
Home
├── About Us
├── Services
│   ├── Naturopathy
│   ├── Hydrotherapy
│   ├── Ayurveda & Panchakarma
│   └── Wellness & Retreat
├── Conditions We Treat (NEW - Hub Page)
│   ├── Arthritis & Joint Pain
│   ├── Obesity & Weight Gain
│   ├── Lifestyle Disorders
│   ├── Diabetes
│   ├── PCOD/PCOS
│   ├── Hypertension
│   ├── Musculoskeletal Disorders
│   ├── Neurological Disorders
│   ├── Stress & Anxiety
│   ├── Migraine & Headache
│   ├── Skin & Hair Disorders
│   ├── Psychological Disorders
│   ├── Hormonal Imbalance
│   ├── Natural Anti-Aging
│   ├── Gastrointestinal Disorders
│   ├── Respiratory Disorders
│   └── Cardiovascular Disorders
├── Blog / Resources
└── Contact & Booking
```

### File Structure (for CMS/Content Upload)
```
HOME PAGE (/)
├── home-hero.txt
├── home-who-we-are.txt
├── home-four-services.txt
├── home-conditions-we-help.txt
├── home-why-choose.txt
├── home-testimonials.txt
└── home-blog-teaser.txt

ABOUT PAGE (/about)
├── about-story.txt
├── about-philosophy.txt
├── about-how-we-work.txt
├── about-team.txt
└── about-facility.txt

SERVICES HUB (/services)
├── services-hub-intro.txt
└── services-hub-cards.txt

SERVICE DETAIL PAGES
├── naturopathy-page.txt
├── hydrotherapy-page.txt
├── ayurveda-panchakarma-page.txt
└── wellness-retreat-page.txt

CONDITIONS HUB (/conditions)
├── conditions-hub-intro.txt
├── conditions-brief-descriptions.txt
└── conditions-hub-cta.txt

INDIVIDUAL CONDITION PAGES (18 total)
├── arthritis-joint-pain.txt
├── obesity-weight-gain.txt
├── lifestyle-disorders.txt
├── diabetes.txt
├── pcos-pcod.txt
├── hypertension.txt
├── musculoskeletal-disorders.txt
├── neurological-disorders.txt
├── stress-anxiety.txt
├── migraine-headache.txt
├── skin-hair-disorders.txt
├── psychological-disorders.txt
├── hormonal-imbalance.txt
├── anti-aging.txt
├── gastrointestinal-disorders.txt
├── respiratory-disorders.txt
└── cardiovascular-disorders.txt

OTHER PAGES
├── blog-hub.txt
├── contact-page.txt
├── faq-page.txt (optional)
└── privacy-policy.txt
```

---

## KEY DESIGN PRINCIPLES FOR DEV

1. **Keep it Simple**
   - Max 2 fonts (1 serif header, 1 sans body)
   - Lots of whitespace
   - Soft color palette (creams, teals, warm browns)
   - One accent color for CTAs (teal or warm orange)

2. **Reusable Components**
   - Hero section template
   - Card component (services, conditions, testimonials)
   - CTA button styles (primary, secondary)
   - Section spacing consistent throughout
   - Condition page template = same for all 18 pages

3. **Mobile-First Responsive**
   - Test on phone, tablet, desktop
   - Touch-friendly buttons (min 48px)
   - Readable font sizes (min 16px body)
   - Stack sections vertically on mobile

4. **Performance**
   - Optimize images (compress, use WebP)
   - Lazy load images
   - Minify CSS/JS
   - Target < 3s load time

5. **Accessibility**
   - Good color contrast (WCAG AA)
   - Alt text on all images
   - Semantic HTML
   - Keyboard navigation

---

## CONTENT TEMPLATE FOR CONDITION PAGES

Every condition page follows this structure (keeps dev consistent):

```
CONDITION PAGE TEMPLATE
├── Hero Section
│   ├── H1: [Condition Name] - Natural Treatment Options
│   └── Subheading: 1–2 line intro
│
├── What Is [Condition]? Section
│   ├── H2: What Is [Condition]?
│   └── 150–200 word explanation (simple language)
│
├── Common Symptoms Section
│   ├── H2: Common Symptoms
│   └── 5–8 bullet points of typical signs
│
├── Why It Happens (Root Causes) Section
│   ├── H2: What Causes [Condition]?
│   └── Simple explanation of causes (ayurvedic + lifestyle perspective)
│
├── How Hillton Approaches [Condition] Section
│   ├── H2: How We Support [Condition] at Hillton
│   ├── 3–4 key therapies/services used
│   ├── Brief explanation of each (2–3 lines)
│   └── Note about personalization
│
├── What to Expect Section
│   ├── H2: What Happens When You Come to Hillton
│   ├── 4–5 step journey (assessment → plan → sessions → follow-up)
│   └── Timeline expectations (e.g., "Relief often noticed within 3–4 sessions")
│
├── Success Indicators Section
│   ├── H2: How You'll Know It's Working
│   └── 4–6 realistic signs of improvement
│
├── FAQ Section (2–3 common Q&As)
│   └── Simple Q&A format
│
└── CTA Section
    ├── "Ready to explore your options?"
    └── Button: Book a Consultation / Call Us
```

---

## NEXT DOCUMENT: HOME PAGE CONTENT

See: `page-01-homepage.txt`

---

## NEXT DOCUMENT: ABOUT PAGE CONTENT

See: `page-02-about.txt`

---

## NEXT DOCUMENT: SERVICES PAGES

See: `pages-03-services.txt`

---

## NEXT DOCUMENT: 18 CONDITION PAGES (DETAILED)

See: `pages-04-conditions-all-18.txt`

---

## DEV NOTES FOR CMS SETUP

- Condition pages should use the **same template component** to avoid dev time waste
- Create a reusable "Condition Page" content type
- All CTAs should link to `/contact` (booking form)
- All internal links should use relative URLs (e.g., `/services/ayurveda-panchakarma`, not `https://domain.com/...`)
- Meta descriptions (see separate SEO spec file)
- No images embedded in these text files – use `[IMAGE: condition-name-hero.jpg]` as placeholder

---

**All content below is ready for direct CMS copy-paste. No editing needed unless client feedback requires changes.**

---

## NEXT: Detailed Page Content (18 pages + 8 main pages)

This architecture file is Part 1. Part 2 (next file) contains all actual content.
