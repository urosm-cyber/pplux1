# Patricia Pie Web Design Guidelines

## Slovenian Market — Final Version

---

## 1. Strategic Foundation

### Website Purpose

The Slovenian site is **not a discovery platform** — most visitors already know Patricia Pie from Ljubljana Fashion Week, Zoofa, Instagram, or word of mouth.

**Primary goals:**

- Convert awareness into showroom bookings
- Deepen relationship with existing customers
- Showcase new pieces and collections
- Reinforce brand values and local pride

**Success metrics:**

- Showroom appointment bookings
- Time on site (engagement with story/content)
- Return visits
- Newsletter signups

---

## 2. Target Persona: Maja T.

**"Želim garderobo, ki me razume — manj kosov, popolna mera, nošeno leta."**

### Profile

```
AttributeDetailAge28–45 (core: 32–38)LocationLjubljana + okolica, Maribor, obalna mestaProfessionPravnica, marketingarka, IT, javni sektor, podjetnicaIncome€2,200–3,500 neto/mesecEducationUniverzitetna, pogosto magisterijLife stageV zvezi ali samska, brez otrok ali mali otroci
```

### Values & Needs

- **Kvaliteta nad količino** — kupuje redko, a premišljeno
- **Popolna mera** — naveličana kompromisov pri fit-u
- **Lokalni ponos** — podpira slovensko, ceni tradicijo
- **Osebni pristop** — želi biti videna, ne številka
- **Tiha eleganca** — femininost brez kričečih logotipov

### Shopping Behavior

- 2–3 premium kosi letno (€150–450 na kos)
- Raziskuje online, odloča v živo
- Zaupa priporočilom prijateljic
- Sledi na Instagramu, občasno preveri spletno stran
- LFW obiskovalka ali vsaj spremlja

### Pain Points

- Hlače in obleke nikoli ne sedijo pravilno
- "Premium" blagovne znamke razočarajo po 2 pranjih
- Preveč izbire online, premalo vodenja
- Trgovine kjer je nikomur ni mar

### What She Expects from Website

- Hitro najdem kaj je novega
- Enostavno rezerviram termin
- Občutek topline, ne hladne luksuznosti
- Jasne informacije o Perfect Fit procesu in cenah
- Dokaz da je vredno (social proof, zgodbe)

---

## 3. Visual Identity

### Color System

**Primary Palette (Brand Signature)**

`Powder Pink:  #F2E0D9 (backgrounds, accents)
Camel:        #C9A66B (warmth, buttons, highlights)  
Viola:        #8B7B8B (sophisticated accent)`

**Neutrals**

`Warm White:   #FDFBF9 (primary background)
Soft Cream:   #F7F4F0 (section backgrounds)
Warm Gray:    #6B6363 (body text)
Deep Warm:    #3D3535 (headlines)`

**Usage Rules**

- Background: 85% warm white/cream
- Pink/viola: accent only, never overwhelming
- Camel: CTAs, hover states, key highlights
- Avoid pure black (#000) — always warm dark tones

### Typography

**Headlines**

- Elegant serif (e.g., Cormorant Garamond, Playfair Display)
- Weights: Regular for elegance, SemiBold for emphasis
- Letter-spacing: slight tracking for sophistication

**Body Text**

- Clean sans-serif (e.g., Inter, DM Sans, Source Sans)
- 16-18px base size
- Line-height: 1.6–1.7 for readability
- Warm gray, never pure black

**Tone through Typography**

- Headlines: romantic, confident
- Body: clear, warm, approachable
- Never cold/corporate

### Photography Style

**Aesthetic Keywords**

- Svetloba (light-filled, natural)
- Intimnost (intimate, personal moments)
- Toplina (warmth, soft tones)
- Resničnost (real, not over-produced)

**Subject Matter Priority**

1. Showroom moments — fitting, conversation, details
2. Atelier behind-scenes — hands, fabric, process
3. Real women wearing pieces — movement, life context
4. Product details — texture, construction, fabric
5. Barbara — her presence humanizes brand

**Technical Standards**

- Natural/soft lighting, avoid harsh flash
- Warm color grading (never cold/blue)
- Shallow depth of field for intimacy
- Lifestyle context > sterile product shots

**What to Avoid**

- Generic fashion model poses
- Cold studio lighting
- Over-retouched skin
- Stock photo aesthetic

### Cloudinary Transformations

`Hero images:      f_auto,q_auto,w_1600,e_auto_brightness
Product:          f_auto,q_auto,w_800,e_auto_color
Thumbnails:       f_auto,q_auto,w_400,ar_4:5,c_fill,g_auto
Journal/blog:     f_auto,q_auto,w_1000
Mobile hero:      f_auto,q_auto,w_800,h_1000,c_fill,g_auto`

---

## 4. UX Principles

### Core Philosophy

**"Topla butična izkušnja, ne hladna e-trgovina."**

The website should feel like entering the S7 showroom — warm welcome, curated selection, personal attention.

### Key Principles

**1. Relationship Over Transaction**

- No aggressive popups or discount banners
- Content-first, commerce-second
- Nurture trust, don't push sales

**2. Clarity Over Cleverness**

- Obvious navigation
- Clear CTAs
- No mystery meat navigation
- Slovenian labels (not English navigation)

**3. Speed Over Spectacle**

- Fast loads > fancy animations
- Optimize images aggressively
- Minimal JavaScript blocking
- Core Web Vitals priority

**4. Mobile-First Reality**

- 70%+ traffic likely mobile (Instagram → website)
- Touch targets minimum 44px
- Thumb-friendly CTA placement
- Test everything on phone first

### Navigation Structure

`Logo [center or left]

Primary Nav:
- Kolekcija
- Perfect Fit
- Showroom
- Zgodba
- Journal

Utility:
- Kontakt
- [Language switcher - later for EU]

Mobile: Hamburger with full-screen elegant menu`

### Booking Flow (Critical Path)

**Target: 3 clicks or less to book**

`Homepage CTA → Showroom page → Booking form/calendar → Confirmation

OR

Any page → Sticky "Rezerviraj termin" button → Modal/page → Done`

**Booking Form Fields (minimal)**

- Ime
- Email
- Telefon
- Želeni datum (calendar picker)
- Kratko sporočilo (optional)

**No account creation required.**

---

## 5. Page Architecture

### Homepage (Domov)

**Purpose:** Emotional entry point + quick paths to key actions

**Structure:**

`1. HERO SECTION
   - Atmospheric image (showroom or styled woman)
   - Headline: Emotional, confidence-focused
   - Subhead: One line about Perfect Fit or showroom
   - CTA: "Rezerviraj termin" (primary)
   
2. SOCIAL PROOF BAR
   - "7 let na Ljubljana Fashion Week"
   - "100% slovensko oblikovanje in izdelava"
   - Or: rotating client testimonial snippet

3. WHAT'S NEW / NAJNOVEJŠE
   - 3-4 latest pieces or current collection highlight
   - Not full catalog — curated tease
   - Link: "Poglej kolekcijo"

4. PERFECT FIT INTRO
   - Brief value prop (2-3 sentences max)
   - Visual: before/after or process glimpse
   - CTA: "Kako deluje Perfect Fit"

5. SHOWROOM INVITE
   - Warm photo of S7 interior
   - Copy: Inviting, low-barrier ("Pridi na kavo...")
   - CTA: "Rezerviraj obisk"

6. TESTIMONIAL / SOCIAL PROOF
   - 1-2 real Slovenian women
   - Name, profession, location
   - Short quote about experience

7. JOURNAL PREVIEW (optional)
   - Latest 2 posts
   - Styling tips, atelier stories

8. FOOTER
   - Contact info
   - Social links
   - Newsletter signup (subtle)
   - Legal links`

**Hero Copy Examples:**

- "Oblačila, ki vas razumejo."
- "Popolna mera. Osebni pristop. Brezčasna eleganca."
- "Vaša garderoba za dolga leta."

---

### Perfect Fit Page

**Purpose:** Explain service, build confidence, drive bookings

**Structure:**

`1. HERO
   - Headline: "Perfect Fit — Popolna mera, narejena za vas"
   - Subhead: Value prop in one sentence
   
2. WHAT IS IT (brief)
   - 2-3 sentences max — don't over-explain
   - "Oblačilo, prilagojeno vašemu telesu in življenju"

3. PROCESS VISUAL (key section)
   - 3-step timeline, visual + text:
   
   ① Osebni posvet (30-60 min)
      Pogovor o vašem stilu, življenju, željah
      
   ② Izdelava (5-10 dni)
      Kos nastaja v našem ateljeju
      
   ③ Končna примерка
      Fina prilagoditev, popoln fit
   
4. WHY IT MATTERS
   - Benefits focused on Maja's pain points:
     - "Končno hlače, ki res sedijo"
     - "Kos, ki ga boste nosili leta"
     - "Vaše mere shranjene za prihodnost"

5. PRICE TRANSPARENCY
   - "Perfect Fit prilagoditev: od €XX"
   - Or: "Prilagoditev vključena pri kosih nad €XX"
   - Clear, no surprises

6. TESTIMONIAL
   - Specific to Perfect Fit experience
   - Real name, real result

7. CTA SECTION
   - "Želite izkusiti Perfect Fit?"
   - Button: "Rezerviraj termin"

8. FAQ (collapsible)
   - Kako dolgo traja?
   - Koliko stane?
   - Kje poteka?
   - Kaj če ne vem, kaj želim?`

---

### Showroom Page

**Purpose:** Make booking feel easy and inviting, not intimidating

**Structure:**

`1. HERO
   - Beautiful S7 interior photo
   - Headline: "Showroom S7 — Vaš osebni modni salon"
   
2. ATMOSPHERE DESCRIPTION
   - 3-4 sentences painting the experience
   - Mention: kava, pogovor, brez naglice, osebna pozornost
   
3. GALLERY
   - 4-6 images showing:
     - Interior details
     - Fitting moment
     - Garments on rack
     - Coffee/prosecco detail
     
4. PRACTICAL INFO
   - Naslov: Stegne 7, Ljubljana (with map)
   - Parkiranje / dostop z javnim prevozom
   - "Samo po predhodni rezervaciji"
   
5. WHAT TO EXPECT
   - Simple list or short paragraphs:
     - Dobrodošlica in pijača
     - Pogovor o vaših željah
     - Ogled in примерка izbranih kosov
     - Možnost Perfect Fit naročila
     - Brez obveznosti nakupa
     
6. BOOKING CTA (prominent)
   - "Rezervirajte svoj termin"
   - Calendar widget or simple form
   - Response time promise: "Odgovorimo v 24 urah"

7. ALTERNATIVE LOCATIONS (brief mention)
   - Zoofa boutique
   - Atelje v Gornji Radgoni
   - "Za podrobnosti nas kontaktirajte"`

**Copy Tone:**

- Warm, inviting
- "Pridi" not "Pridite" (ti-form)
- Remove any intimidation factor
- Emphasize: no obligation, relaxed, personal

---

### Zgodba (Brand Story)

**Purpose:** Emotional connection, local pride, trust building

**Structure:**

`1. HERO
   - Barbara portrait or atelier scene
   - Headline: "Zgodba Patricia Pie"

2. ORIGIN STORY
   - Barbara's journey (condensed)
   - Why she started
   - The name meaning (Patricia + Pie philosophy)
   - Keep it personal, not corporate

3. PIE PHILOSOPHY (visual section)
   - The wardrobe-building concept
   - Visual metaphor if possible
   - "Vsak kos je sestavina vaše popolne garderobe"
   - Connection across seasons

4. VALUES
   - Visual icons or simple list:
     - Ženstvenost & samozavest
     - Rokodelska odličnost
     - Iskrena trajnost
     - Osebna preobrazba
     - Slovensko srce, evropska vizija

5. ATELIER SECTION
   - Photos of Gornja Radgona workshop
   - The team (if comfortable sharing)
   - Emphasize: slovensko, ročno, majhna ekipa
   - "Tukaj nastajajo vaša oblačila"

6. TIMELINE / MILESTONES (optional)
   - 2014: Ustanovitev
   - Ljubljana Fashion Week leta
   - Showroom odprtje
   - Key moments

7. CTA
   - "Spoznajte nas osebno"
   - Link to Showroom booking`

---

### Kolekcija (Collection)

**Purpose:** Showcase pieces with wardrobe-building logic

**Structure:**

`1. HERO
   - Current collection name/season
   - Atmospheric collection photo
   
2. FILTER/NAVIGATION
   - By category: Obleke | Krila | Hlače | Bluze | Plašči | Dodatki
   - By occasion: Služba | Večer | Posebni trenutki | Vsakdan
   - Keep simple — not 20 filter options

3. PRODUCT GRID
   - Clean, airy grid (not cramped)
   - Hover: second image or quick view
   - Show: name, price, "Perfect Fit možnost" badge if applicable

4. PRODUCT DETAIL PAGE
   - Large image gallery (lifestyle + detail)
   - Name, price
   - Description (emotional + practical)
   - Composition, care
   - "Kako kombinirati" — suggest 2-3 complementary pieces
   - Size note: "Perfect Fit prilagoditev možna"
   - CTA: "Povpraševanje" or "Rezerviraj примерко"
   
5. NO CART/CHECKOUT
   - This is not e-commerce
   - All purchases through inquiry or showroom
   - CTA leads to contact or booking`

**"Kako kombinirati" Section (Pie Philosophy in action)**

- Show this piece with 2-3 others
- Include pieces from different seasons
- Reinforce wardrobe-building concept

---

### Journal

**Purpose:** SEO, return visits, storytelling, styling inspiration

**Content Pillars:**

1. **Styling nasveti** — wardrobe building, combinations
2. **Iz ateljeja** — process, fabric stories, making-of
3. **Zgodbe strank** — real women, their wardrobes
4. **Dogodki** — LFW, trunk shows, showroom news

**Structure:**

- Simple blog layout
- Featured image + excerpt on listing
- Categories for filtering
- Share buttons (subtle)
- Related posts at bottom

**Posting Frequency:**

- 2-4x monthly is sustainable
- Quality > quantity

---

### Kontakt

**Purpose:** Easy communication, trust building

**Include:**

- Email
- Phone
- Showroom address with map
- Hours (by appointment)
- Social links
- Simple contact form
- Response time: "Odgovorimo v 24 urah"

---

## 6. Copy & Tone Guidelines

### Voice Characteristics

```
AttributeExpressionToplaPersonal, caring, never coldSamozavestnaKnows value, doesn't over-explainFemininaSoft strength, not aggressivePristnaReal, honest, no marketing fluffSlovenskaLocal pride without nationalism
```

### Language Rules

**Use "ti" form** — creates intimacy

- ✓ "Rezerviraj svoj termin"
- ✗ "Rezervirajte svoj termin"

**Active voice, direct address**

- ✓ "Obleci se v samozavest"
- ✗ "Naša oblačila vam dajo samozavest"

**Show, don't tell**

- ✓ "Vsak šiv pregleda Barbara osebno"
- ✗ "Visoka kakovost"

**Specific over generic**

- ✓ "Izdelano v 5-10 dneh v našem ateljeju"
- ✗ "Hitro in kakovostno"

### Key Phrases to Use

`Popolna mera (not "made to measure")
Osebni pristop
Brezčasna eleganca
Tvoja garderoba za dolga leta
Slovensko oblikovanje
Ročna izdelava
Kos, ki ga boste nosili leta
Oblačila, ki vas razumejo`

### Phrases to Avoid

`Luksuz / luksuzno (too intimidating)
Ekskluzivno (creates barrier)
Popusti / akcija (devalues brand)
Modni trendi (against Pie Philosophy)
Hitra dostava (not the point)`

### Headlines Bank

**Hero options:**

- "Oblačila, ki vas razumejo"
- "Popolna mera. Osebni pristop. Vaša zgodba."
- "Garderoba, grajena za leta"
- "Ko oblačilo postane del vas"

**Perfect Fit:**

- "Končno — kosi, ki res sedijo"
- "Narejeno za vas. Dobesedno."
- "Vaše telo. Vaš stil. Popolna mera."

**Showroom:**

- "Pridi na kavo in ogled"
- "Tvoj osebni modni salon"
- "Prostor, kjer moda postane osebna"

**CTAs:**

- "Rezerviraj termin"
- "Poglej kolekcijo"
- "Spoznaj Perfect Fit"
- "Piši nam"

---

## 7. Social Proof Strategy

### Types of Proof (priority order)

1. **Real Customer Testimonials**
    - Name, profession, city
    - Specific about experience
    - Photo if possible (wearing piece or portrait)
2. **Ljubljana Fashion Week**
    - "7 zaporednih let na LFW"
    - Photos from shows
    - Press mentions
3. **Numbers**
    - "10+ let izkušenj"
    - "100% slovenska izdelava"
    - Avoid vanity metrics
4. **Process Transparency**
    - Atelier photos
    - Making-of content
    - Barbara's involvement visible

### Testimonial Format

`"Quote that's specific and emotional, not generic praise.
Mentions concrete detail — the piece, the fit, the feeling."

— Ime Priimek, poklic, mesto`

**Good example:**
"Prvič v življenju imam hlače, ki mi popolnoma sedijo. Barbara je razumela točno, kaj potrebujem, še preden sem znala povedati."
— Katja Novak, odvetnica, Ljubljana

**Bad example:**
"Super izkušnja, priporočam!" — K.N.

---

## 8. Technical Specifications

### Performance Targets

`Largest Contentful Paint: < 2.5s
First Input Delay: < 100ms
Cumulative Layout Shift: < 0.1
Mobile PageSpeed Score: > 85`

### Next.js Implementation

**Rendering Strategy**

- Homepage: ISR (revalidate: 3600)
- Collection pages: ISR (revalidate: 1800)
- Journal posts: Static
- Contact/Booking: Static with client-side form

**Image Handling**

- Cloudinary for all images
- next-cloudinary package
- Blur placeholders for LCP images
- Lazy load below-fold images

**Forms**

- Simple serverless function or Supabase
- Or external: Cal.com for booking, Formspark for contact
- Validation client-side + server-side
- Thank you state, not redirect

### SEO Essentials

**Per-page requirements:**

- Unique title (55-60 chars)
- Meta description (150-160 chars)
- OG image (1200x630)
- Structured data (Organization, LocalBusiness)

**Key pages to optimize:**

- Homepage: "Patricia Pie — Slovensko oblikovanje, popolna mera"
- Perfect Fit: "Perfect Fit | Oblačila po meri | Patricia Pie"
- Showroom: "Showroom Ljubljana | Patricia Pie"

---

## 9. Component Checklist

### Must-Have Components

- [ ]  Hero section (image + headline + CTA)
- [ ]  Navigation (desktop + mobile)
- [ ]  Product card (image, name, price, badge)
- [ ]  Product gallery (main + thumbnails)
- [ ]  Testimonial card
- [ ]  Process timeline (3 steps)
- [ ]  CTA section (full-width)
- [ ]  Booking form
- [ ]  Contact form
- [ ]  Footer
- [ ]  Journal post card
- [ ]  Journal post template
- [ ]  FAQ accordion
- [ ]  Image gallery (lightbox)

### Nice-to-Have

- [ ]  "Kako kombinirati" carousel
- [ ]  Newsletter signup modal
- [ ]  Floating "Rezerviraj" button (mobile)
- [ ]  Instagram feed embed

---

## 10. Launch Checklist

**Before launch:**

- [ ]  All pages responsive tested
- [ ]  Forms working + notifications set
- [ ]  Images optimized via Cloudinary
- [ ]  SEO meta for all pages
- [ ]  Analytics installed (Plausible or similar)
- [ ]  404 page designed
- [ ]  Favicon + OG images
- [ ]  Contact info accurate
- [ ]  Legal pages (Pogoji, Zasebnost)

**Content ready:**

- [ ]  All copy reviewed for tone
- [ ]  6+ product photos minimum
- [ ]  4+ showroom photos
- [ ]  3+ atelier photos
- [ ]  2+ testimonials ready
- [ ]  Barbara portrait

---

## Summary

This website is not e-commerce — it's a **digital showroom extension** that converts existing brand awareness into appointments and deeper relationships.

**Three things that matter most:**

1. **Booking flow** — frictionless, 3 clicks max
2. **Warm visual + copy tone** — reflects showroom experience
3. **Speed** — fast mobile experience for Instagram traffic

Everything else supports these three.

---

*Document version: 1.0Created: December 2024For: Patricia Pie Slovenian market website*