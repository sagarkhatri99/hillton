# DEVELOPER BRIEF: HILLTON WEBSITE - COMPLETE SPEC & CONTENT DELIVERY

**Project:** Hillton Prakritik Chikitsa Kendra Website  
**Status:** Content Complete & Ready for Build  
**Date:** December 2025  
**Target:** Simple, Elegant, Mobile-First Design

---

## QUICK START FOR DEVELOPERS

You have **6 complete content documents** with all website copy, structure and meta information:

1. `website-architecture.md` – Site structure blueprint  
2. `page-01-homepage.md` – Homepage complete content  
3. `page-02-about.md` – About page complete  
4. `pages-03-services-complete.md` – 4 service pages + hub  
5. `pages-04-conditions-all-18.md` – 18 condition pages + hub  
6. `pages-05-contact-other.md` – Contact, FAQ, Privacy, Disclaimer  

---

## WEBSITE STRUCTURE AT A GLANCE

### URL Structure

```
/ (Home)
/about (About Us)
/services (Services Hub)
  /services/naturopathy
  /services/hydrotherapy
  /services/ayurveda-panchakarma
  /services/wellness-retreat
/conditions (Conditions Hub)
  /conditions/arthritis-joint-pain
  /conditions/obesity-weight-gain
  /conditions/lifestyle-disorders
  /conditions/diabetes
  /conditions/pcos-pcod
  /conditions/hypertension
  /conditions/musculoskeletal-disorders
  /conditions/neurological-disorders
  /conditions/stress-anxiety
  /conditions/migraine-headache
  /conditions/skin-hair-disorders
  /conditions/psychological-disorders
  /conditions/hormonal-imbalance
  /conditions/anti-aging
  /conditions/gastrointestinal-disorders
  /conditions/respiratory-disorders
  /conditions/cardiovascular-disorders
/blog (Blog Hub - coming later)
/contact (Contact & Booking)
/faq (FAQ)
/privacy (Privacy Policy)
/disclaimer (Medical Disclaimer)
```

---

## DESIGN SPECIFICATIONS

### Design Principles

✓ **Simple & Elegant**
- Minimal color palette (creams, teals, warm browns)
- Max 2 fonts (serif header, sans-serif body)
- Lots of whitespace between sections
- Clean, uncluttered layout

✓ **Mobile-First Responsive**
- Design mobile first, scale up
- Touch-friendly buttons (min 48px height)
- Readable fonts (min 16px body, 18px headers)
- Stack sections vertically on mobile
- Test on iPhone SE, iPhone 12 Pro, iPad, Desktop

✓ **Accessibility (WCAG 2.1 AA)**
- Color contrast ratio 4.5:1 for normal text
- 3:1 for large text
- Semantic HTML (proper heading hierarchy)
- Alt text on all images
- Keyboard navigation support
- Focus states visible

✓ **Performance**
- Page load < 3 seconds (target)
- Image optimization (compress, use WebP)
- Lazy load images below fold
- Minify CSS/JS
- Gzip compression

✓ **Reusable Components**
- **Service Page Template** – Use for all 4 service pages
- **Condition Page Template** – Use for all 18 condition pages (identical structure)
- **Card Component** – Services, conditions, testimonials
- **CTA Button Styles** – Primary (filled), Secondary (ghost/outline)
- **FAQ Component** – Collapsible Q&A blocks

---

## CONTENT TEMPLATE DETAILS

### Service Page Template (Reusable)

**Sections (in order):**
1. Hero (H1, Subheading, Image)
2. "What Is [Service]?" (Intro explanation)
3. Key Therapies (3–5 sub-therapies with descriptions)
4. "Best For" (Bullet list of conditions/benefits)
5. "What to Expect" (Step-by-step journey)
6. Signs of Progress (What improvement looks like)
7. FAQ (2–3 Q&As)
8. CTA Section

**Uses:** Naturopathy, Hydrotherapy, Ayurveda & Panchakarma, Wellness & Retreat

---

### Condition Page Template (Reusable)

**Sections (in order):**
1. Hero (H1, Subheading, Image)
2. "What Is [Condition]?" (Definition, context)
3. Common Symptoms (Bullet list)
4. Root Causes (Why it happens)
5. How Hillton Approaches [Condition] (Key therapies, 3–6 bullet points)
6. Timeline for Improvement (What to expect when)
7. Signs of Progress (How to know it's working)
8. FAQ (2–3 Q&As)
9. CTA Section

**Uses:** All 18 condition pages. Each uses same structure, different content.

---

## CONTENT DELIVERY FORMAT

All content is **plain text with markdown formatting**:

```
# H1 Heading
## H2 Heading
### H3 Heading

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item
```

**No HTML tags needed** – Your CMS will convert markdown to HTML.

---

## IMAGE REQUIREMENTS

### Images Needed (Placeholder Names)

**Homepage:**
- `hero-image.jpg` – Serene treatment or nature scene (large, 1920x1080 or wider)
- `facility-exterior.jpg` – Building/entrance shot
- `testimonial-photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg` – Client headshots (optional)
- `blog-card-1.jpg`, `blog-card-2.jpg`, `blog-card-3.jpg` – Blog preview images

**About Page:**
- `about-team-photo.jpg` or individual `practitioner-1.jpg` through `practitioner-4.jpg`
- `facility-treatment-room.jpg`
- `facility-meditation-space.jpg`

**Service Pages:**
- `naturopathy-hero.jpg`
- `hydrotherapy-hero.jpg`
- `ayurveda-hero.jpg`
- `wellness-hero.jpg`

**Condition Pages:**
- Optional individual images per condition (or reuse service images)

**Design Assets:**
- 8–10 small icons (for services, why-choose-us, benefits)
- Testimonial placeholder images

### Image Specs

- **Hero images:** 1920px wide, 600–800px tall (maintain aspect ratio)
- **Icons:** 64–128px, SVG or PNG
- **Profile photos:** 300px x 300px minimum
- **Blog preview cards:** 400px x 250px
- **Compression:** Optimize with TinyPNG or similar before upload
- **Format:** Use WebP for modern browsers, fallback to JPG/PNG

---

## FORM INTEGRATION NEEDED

### Contact Form (Page: /contact)

**Required Fields:**
- Full Name
- Email
- Phone
- Primary Health Concern (dropdown - 20+ options)
- Brief Description (textarea)

**Optional Fields:**
- Age
- Preferred Service Category (multi-select)
- Preferred Contact Method (radio)
- Preferred Time (select)

**Form Action:**
- Success: Show thank you message + send confirmation email
- Failure: Show error message
- Auto-reply to user with next steps
- Admin notification (email to: info@hillton.com)

### Booking System Integration

- Use plugin like Calendly, Acuity Scheduling, or custom calendar
- Sync with Google Calendar
- Send automatic reminder emails (1 day before)
- Allow cancellation up to 48 hours
- Payment gateway (optional - for package purchases)

---

## SEO CONFIGURATION

### Per-Page Meta Tags (Example)

**Homepage:**
```
Title: Natural Healing Centre | Naturopathy, Ayurveda & Wellness | Hillton
Description: Holistic wellness with Naturopathy, Hydrotherapy, Ayurveda & Yoga. 100+ therapies for arthritis, diabetes, stress, skin health & more.
```

**Arthritis Condition Page:**
```
Title: Arthritis & Joint Pain Treatment | Natural Solutions | Hillton
Description: Natural relief for arthritis and joint pain through Ayurveda, mud therapy, and specialized massage therapy.
```

**Complete meta titles/descriptions** are in each content file.

### Technical SEO Checklist

- [ ] XML sitemap created (`sitemap.xml`)
- [ ] Robots.txt configured
- [ ] h1 tag exactly once per page (as specified in content)
- [ ] h2/h3 hierarchy maintained
- [ ] Schema markup:
  - LocalBusiness (homepage)
  - HealthAndBeautyBusiness (about, services)
  - Service (service pages)
  - Practitioner (team bios)
  - Review/AggregateRating (testimonials)
  - FAQPage (FAQ page)
- [ ] Internal links use relative URLs (e.g., `/services/naturopathy`, not full domain)
- [ ] Alt text on all images (descriptive, 5–10 words)
- [ ] Mobile-responsive design (tested)
- [ ] Google Analytics 4 configured
- [ ] Google Search Console verified
- [ ] Google Business Profile linked

---

## ANALYTICS & TRACKING

### Google Analytics 4 Setup

- Track page views
- Track events:
  - Form submissions (contact, booking)
  - CTA button clicks (Book Now, Call Us, WhatsApp)
  - FAQ accordion opens
  - PDF downloads (if any)
  - Scroll depth (how far users scroll)
  - Video watches (if any)

### Conversion Goals

1. **Contact form submission** – Primary conversion
2. **Phone call (click-to-call)** – Secondary conversion
3. **WhatsApp click** – Secondary conversion
4. **Booking confirmation** – Tertiary conversion

### Heatmap Tool (Optional but Recommended)

- Install Hotjar or similar
- Track user behavior
- Identify scroll/click patterns
- A/B test CTAs

---

## TECHNICAL SETUP

### Recommended Tech Stack

- **Platform:** WordPress + Elementor OR Custom HTML/CSS/JS
- **Hosting:** Quality provider (Kinsta, SiteGround, AWS) – target < 3s load
- **SSL:** Let's Encrypt (free) or premium
- **CDN:** Cloudflare (free or paid)
- **Email Service:** SendGrid or similar for transactional emails
- **Forms:** Gravity Forms or similar
- **Booking:** Calendly, Acuity Scheduling, or custom integration

### Must-Haves

- HTTPS/SSL certificate
- Mobile responsive (tested on real devices)
- Fast loading times (< 3 seconds)
- Automatic backups
- Security monitoring
- Uptime monitoring
- Regular security updates

---

## CONTENT COPY-PASTE WORKFLOW

### For WordPress/CMS Users

1. **Set up pages** in WordPress admin (Page > Add New)
2. **Use Elementor or similar page builder** for layout
3. **Copy content from `.md` files** section by section
4. **Paste into page builder** text blocks
5. **Add meta title/description** in Yoast or Rank Math
6. **Add internal links** to other pages
7. **Insert images** at appropriate places (marked with `[IMAGE: filename.jpg]`)
8. **Set URL slug** to match structure (e.g., `/services/naturopathy`)
9. **Publish**

### Content Checklist Per Page

- [ ] H1 present and matches spec
- [ ] All sections included (no skipped sections)
- [ ] Meta title added (from spec)
- [ ] Meta description added
- [ ] Internal links configured (relative URLs)
- [ ] Images placed and optimized
- [ ] Alt text on images
- [ ] CTA buttons styled and linked correctly
- [ ] Forms functional (if applicable)
- [ ] Mobile preview tested
- [ ] Spelling/grammar checked

---

## NAVIGATION MENU STRUCTURE

### Main Navigation (Top Menu)

1. **Home** → `/`
2. **About Us** → `/about`
3. **Services** → `/services` (Dropdown)
   - Naturopathy → `/services/naturopathy`
   - Hydrotherapy → `/services/hydrotherapy`
   - Ayurveda & Panchakarma → `/services/ayurveda-panchakarma`
   - Wellness & Retreat → `/services/wellness-retreat`
4. **Conditions** → `/conditions` (Dropdown with all 18)
5. **Blog** → `/blog` (coming later)
6. **Contact** → `/contact`

### Footer Menu

**Column 1 (Quick Links):**
- About Us
- Services
- Conditions
- Blog
- Contact

**Column 2 (Services):**
- Naturopathy
- Hydrotherapy
- Ayurveda & Panchakarma
- Wellness & Retreat

**Column 3 (Follow Us):**
- Instagram [@hillton_chikitsa_kendra]
- Facebook [Page]
- WhatsApp [Link]

**Column 4 (Legal):**
- Privacy Policy
- Disclaimer
- Contact

---

## TESTING CHECKLIST BEFORE LAUNCH

### Functional Testing

- [ ] All pages load without 404 errors
- [ ] All internal links work (hover and click)
- [ ] External links open in new tab
- [ ] Contact form submits and sends email
- [ ] Booking system functions (if integrated)
- [ ] Navigation menu works on mobile
- [ ] Footer displays correctly

### Responsive Testing

- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] Desktop (1024px+)
- [ ] Buttons are touch-friendly (48px min)
- [ ] Text is readable without zooming
- [ ] Images scale properly

### Performance Testing

- [ ] Google PageSpeed score > 90 (mobile)
- [ ] Load time < 3 seconds
- [ ] Images optimized
- [ ] CSS/JS minified

### SEO Testing

- [ ] Google Search Console verification
- [ ] Sitemap.xml accessible
- [ ] Robots.txt correct
- [ ] Meta tags present on all pages
- [ ] Schema markup validates (schema.org)
- [ ] Mobile-friendly test passes

### Security Testing

- [ ] SSL certificate active (HTTPS)
- [ ] No mixed content (all HTTPS)
- [ ] Security headers configured
- [ ] Form data encrypted
- [ ] No sensitive data in URLs

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## POST-LAUNCH TASKS

### Week 1

- [ ] Google Business Profile creation & verification
- [ ] Google Search Console submission
- [ ] Google Analytics 4 monitoring
- [ ] Monitor for errors/crashes
- [ ] Fix any bugs

### Month 1

- [ ] Monitor organic traffic growth
- [ ] Track conversion metrics
- [ ] Gather feedback from users
- [ ] Make UX improvements as needed
- [ ] Start blog content calendar

### Ongoing

- [ ] Monitor Core Web Vitals monthly
- [ ] Track keyword rankings
- [ ] Collect testimonials for website
- [ ] Update content as needed (client info changes)
- [ ] Security updates
- [ ] Backups (daily/weekly)

---

## SUPPORT & QUESTIONS

**For Dev Questions During Build:**
- Refer back to `website-architecture.md` for structure
- Refer to specific page files for content specs
- Check if question is answered in this brief

**If Content Needs Clarification:**
- Client needs to provide missing info (practitioner names, exact pricing, exact address, phone, hours)
- Placeholder format: `[FILL IN: Practitioner name]`

---

## FILE CHECKLIST - WHAT YOU HAVE

✅ `website-architecture.md` – Site blueprint, design specs, components  
✅ `page-01-homepage.md` – Full homepage with 9 sections  
✅ `page-02-about.md` – About page, story, philosophy, team, facility  
✅ `pages-03-services-complete.md` – Services hub + 4 detailed service pages  
✅ `pages-04-conditions-all-18.md` – Conditions hub + all 18 condition pages  
✅ `pages-05-contact-other.md` – Contact, FAQ, Privacy, Disclaimer  
✅ `developer-brief.md` – THIS FILE

---

## TIMELINE ESTIMATE

- **Setup & Configuration:** 2–3 days
- **Content Upload:** 2–3 days (manual copy-paste)
- **Design & Customization:** 5–7 days
- **Testing & QA:** 2–3 days
- **Fixes & Optimization:** 2–3 days
- **Launch Prep:** 1 day

**Total: 2–3 weeks** (depending on platform and developer speed)

---

## WHAT'S NOT IN THIS BUILD (For Later)

- Blog posts (to come separately)
- Video content (client to provide)
- Payment gateway (if pricing to be added)
- Advanced booking system customizations
- Advanced analytics setup
- Email campaign automation
- Social media integration (beyond links)
- Testimonial video embedding

---

## FINAL NOTES

### Keep It Simple Philosophy
- Don't add unnecessary features
- Follow the design specs (simple, elegant)
- Keep page load times fast
- Content is king – don't compete with fancy design

### Quality Over Speed
- Better to take 3 weeks and launch well than 2 weeks with bugs
- Test thoroughly before going live
- Mobile experience is non-negotiable

### Handoff to Client
- Provide CMS access (WordPress admin login, if WordPress)
- Create simple documentation for client on how to:
  - Update content
  - Add blog posts
  - Change images
  - Manage bookings
- Train client on basic edits

---

**You now have everything needed to build a professional, content-complete wellness center website. Good luck! 🚀**

