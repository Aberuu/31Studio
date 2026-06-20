# Lighthouse Performance Review (Production Build)

**Environment**

* Build Mode: Production (`npm run build`)
* Preview Server: `npm run preview`
* Runtime: Vite Preview
* Evaluation Date: 20 June 2026

---

# Executive Summary

Website menunjukkan peningkatan performa yang sangat signifikan setelah dilakukan production build dibanding mode development.

Secara umum website sudah berada pada kategori **fast-loading modern website** dan layak untuk deployment.

Fokus optimasi berikutnya bukan lagi render awal, melainkan **pengurangan JavaScript awal dan efisiensi loading komponen sekunder.**

---

# Performance Comparison

| Metric                         | Development | Production | Improvement |
| ------------------------------ | ----------: | ---------: | ----------: |
| First Contentful Paint (FCP)   |       1.2 s |      0.4 s |        +63% |
| Largest Contentful Paint (LCP) |       3.2 s |      0.7 s |        +78% |
| Speed Index                    |       2.3 s |      0.8 s |        +65% |
| Total Blocking Time            |       40 ms |       0 ms |   Excellent |
| Time To Interactive            |       3.4 s |      0.7 s |        +79% |
| Cumulative Layout Shift        |           0 |          0 |      Stable |

---

# Current Assessment

## Overall Score

Performance Status: **Excellent**

Estimated Quality Score: **9.2 / 10**

Website sudah:

* cepat mulai render
* cepat menjadi interaktif
* stabil secara visual
* cocok untuk production deployment

---

# Findings

## 1. Render Performance — Resolved

### Status

PASS

### Evidence

* FCP turun menjadi 0.4s
* TTI turun menjadi 0.7s

### Conclusion

Masalah sebelumnya berasal dari environment development Vite, bukan dari struktur website.

Action:

* Tidak diperlukan perubahan besar.

---

## 2. Largest Contentful Paint — Excellent

### Status

PASS

### Current

0.7 s

### Target

< 1.0 s

### Conclusion

Hero section saat ini sudah sangat cepat.

Action:

* Pertahankan struktur render sekarang.
* Hindari menambah asset besar di hero.

---

## 3. JavaScript Waste — Highest Priority

### Status

WARNING

### Estimated Savings

≈ 556 KiB

### Impact

≈ 450 ms potential improvement

### Cause

JavaScript awal masih memuat terlalu banyak modul.

Suspected Flow:

Home
→ ImageStrip
→ GSAP
→ ScrollTrigger

### Required Action

#### Convert static import → lazy import

Before:

```jsx
import Projects from './sections/Projects'
import Clients from './sections/Clients'
```

After:

```jsx
const Projects = lazy(() =>
 import('./sections/Projects')
)

const Clients = lazy(() =>
 import('./sections/Clients')
)
```

Expected:

* Smaller initial bundle
* Faster hydration
* Lower LCP

Priority: HIGH

---

## 4. GSAP Initialization

### Status

WARNING

### Problem

GSAP dan ScrollTrigger dimuat terlalu awal.

Before:

```js
import { gsap } from 'gsap'
```

Recommended:

```js
useEffect(() => {
 async function init() {
   const { gsap } =
     await import('gsap')

   // initialize animation
 }

 init()
}, [])
```

Expected:

* Reduce JS execution
* Faster interaction

Priority: HIGH

---

## 5. Deferred Rendering

### Status

RECOMMENDED

Section kandidat:

* Projects
* Clients
* Stats
* Footer

Recommendation:

```jsx
<Suspense fallback={null}>
 <Projects />
</Suspense>
```

Expected:

* Reduced startup cost
* Lower main-thread load

Priority: MEDIUM

---

## 6. Image Strategy

### Status

PASS

Current:

* WebP format
* Reasonable image size

Recommendation:

* Continue using WebP
* Consider AVIF for hero assets

Priority: LOW

---

# Optimization Roadmap

## Phase 1 — Immediate

* [ ] Lazy load non-visible sections
* [ ] Dynamic import GSAP
* [ ] Split large bundles

Expected:

* Bundle ↓
* LCP ~0.5–0.6s

---

## Phase 2 — Enhancement

* [ ] Deferred animation boot
* [ ] Route-based code splitting
* [ ] Component chunk optimization

Expected:

* Lower CPU time
* Better mobile score

---

## Phase 3 — Validation

Commands:

```bash
npm run build
npm run preview
```

Run:

```bash
lighthouse http://localhost:4173
```

Targets:

* FCP < 0.5 s
* LCP < 0.6 s
* TBT = 0 ms
* JS unused < 150 KiB

---

# Final Recommendation

Do not over-optimize.

Current performance sudah berada pada level yang sangat baik untuk:

* Landing Page
* Portfolio
* Agency Website
* Interactive Showcase

Lanjutkan optimasi hanya jika:

* Bundle bertambah besar
* Traffic mobile tinggi
* Menargetkan skor Lighthouse ekstrem (95–100)
