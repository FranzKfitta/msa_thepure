# Task: Benmoyal-Style Collection Grid Redesign

**Branch:** `feat-collections-benmoyal-grid`  
**Priority:** High  
**Estimated Effort:** 8-12 hours  
**Type:** Feature Enhancement / UI Redesign

---

## Overview

Rebuild the collection page (`/collections/<collection_name>`) to match the visual structure, proportions, and editorial aesthetic of the Benmoyal "Coats and Jackets" collection page.

The current collection page uses a functional but visually inconsistent layout. The goal is to achieve a **clean, symmetric, gallery-like grid** where every product card is uniform in size, alignment, and visual hierarchy — creating a high-fashion, editorial catalog experience.

**Core Philosophy:**
- Gallery-first layout (like a fashion lookbook)
- Perfect alignment and symmetry
- Generous whitespace and breathing room
- Minimal UI chrome (no borders, boxes, or decorative elements)
- Image-dominant, editorial tone

---

## Current State vs. Target State

### Current State (Ishmail Apparel Theme)
- ❌ Horizontal filter bar above grid (single-column layout redesign)
- ❌ 5-column dense grid with minimal gaps
- ❌ Inconsistent product card heights and image ratios
- ❌ Compact spacing (0.5rem padding, 1rem gaps)
- ❌ Small typography (0.7-0.75rem titles)
- ❌ Mobile-first controls bar with view toggle
- ❌ Filter drawer/modal on mobile
- ❌ Dawn pink background (#f3e8e4)
- ⚠️ Product cards have variable heights based on title length
- ⚠️ Image aspect ratios not enforced consistently

### Target State (Benmoyal Style)
- ✅ Clean horizontal toolbar (sort + filters) above grid
- ✅ 4-5 column spacious grid with generous gaps
- ✅ **Uniform product cards** — all same width/height ratio
- ✅ **Fixed 3:4 image aspect ratio** (center-cropped, no distortion)
- ✅ Generous spacing (24-32px horizontal gaps, 48px vertical gaps)
- ✅ Larger, readable typography (14-16px titles)
- ✅ Clean white background
- ✅ **Center-aligned product names and prices**
- ✅ Minimal hover effects (subtle scale-up on images)
- ✅ Gallery-like visual hierarchy
- ✅ Large whitespace above/below grid sections

---

## Detailed Requirements

### 1. Page Structure & Layout Architecture

#### Container Hierarchy
```
<body>
  └── .page-width (max-width: 1440px, centered)
      ├── .collection__header (collection title section)
      ├── .collection__toolbar (sort + filters horizontal bar)
      ├── .collection__grid (main product gallery)
      └── .collection__footer-spacing (large margin before footer)
```

#### Key Layout Principles
- **No sidebar filters** — all controls consolidated into horizontal toolbar
- **Full-width grid** — products occupy entire page width within max-width container
- Page should feel like a **fashion catalog** or editorial grid
- Generous vertical rhythm: Header → 64px gap → Toolbar → 48px gap → Grid → 96px gap → Footer

---

### 2. Collection Header Section

**Visual Target:**
- Large, bold, uppercase collection title
- Horizontally centered
- Ample whitespace above and below
- No background, no border — text only

**Specifications:**

| Element | Property | Desktop | Tablet | Mobile |
|---------|----------|---------|---------|---------|
| Title | Font size | 28-32px | 24-28px | 20-24px |
| Title | Font weight | Bold (700) | Bold (700) | Bold (700) |
| Title | Text transform | Uppercase | Uppercase | Uppercase |
| Title | Text align | Center | Center | Center |
| Title | Color | #000000 | #000000 | #000000 |
| Section | Padding top | 64px | 48px | 32px |
| Section | Padding bottom | 48px | 36px | 24px |
| Section | Background | #FFFFFF | #FFFFFF | #FFFFFF |

**Implementation Notes:**
- Remove any existing borders, background colors, or box styling
- Ensure title is direct child of header container for proper centering
- Title should span full width of page-width container

---

### 3. Toolbar Section (Sort + Filters)

**Visual Target:**
- Single horizontal bar above the product grid
- Sort dropdown aligned to the right
- Filters dropdown/chips aligned to the left or center (optional)
- Clean, minimal styling
- Fixed position relative to grid top edge

**Specifications:**

| Element | Property | Value |
|---------|----------|-------|
| Toolbar | Display | Flex (space-between or flex-end) |
| Toolbar | Padding vertical | 12-16px |
| Toolbar | Border bottom | 1px solid rgba(0,0,0,0.08) |
| Toolbar | Background | #FFFFFF |
| Sort dropdown | Font size | 14px |
| Sort dropdown | Text transform | None |
| Sort dropdown | Align | Right edge of grid |
| Filter button | Font size | 14px |
| Filter button | Style | Minimal, no heavy borders |

**Behavior:**
- On mobile: Toolbar collapses to single button that opens filter modal
- Sort and filter controls should be lightweight (no heavy boxes or backgrounds)
- Dropdown menus should open with smooth animation (200ms ease-out)

**Remove:**
- Current "Controls Bar" with view toggle icons
- Filter trigger button (replace with integrated toolbar)
- Mobile drawer with "See X items" footer button

---

### 4. Product Grid Layout

**Visual Target:**
- Uniform, symmetric grid where all product cards have identical dimensions
- Generous gaps between cards
- Perfect alignment both horizontally and vertically
- Gallery-like aesthetic

**Grid Specifications:**

| Breakpoint | Columns | Horizontal Gap | Vertical Gap | Container Padding |
|------------|---------|----------------|--------------|-------------------|
| Desktop (≥1200px) | 4-5 | 24-32px | 48px | 80-120px total |
| Tablet (768-1199px) | 3 | 20-24px | 40px | 40-60px total |
| Small Tablet (600-767px) | 2 | 16-20px | 32px | 32-48px total |
| Mobile (<600px) | 2 | 12-16px | 24px | 24-32px total |

**CSS Implementation:**
```css
.collection__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 48px 32px; /* vertical horizontal */
  margin-top: 48px;
  margin-bottom: 96px;
}

@media (min-width: 1200px) {
  .collection__grid {
    grid-template-columns: repeat(4, 1fr); /* or 5 */
  }
}
```

**Key Requirements:**
- Use CSS Grid with explicit column counts (not auto-fill on desktop)
- All cards in a row must have **identical width**
- All cards must have **identical height** (enforced via aspect ratio on image + fixed text height)
- No variable height cards — grid must be perfectly aligned

---

### 5. Product Card Composition

**Visual Target:**
- Each card is a **uniform module** with three zones:
  1. Product image (80-85% of card height)
  2. Product title (center-aligned)
  3. Product price (center-aligned)
- No borders, no backgrounds, no shadows
- Clean whitespace-defined separation

**Card Structure:**
```html
<div class="product-card">
  <a href="/products/[handle]" class="product-card__link">
    <div class="product-card__image-wrapper">
      <img class="product-card__image" src="..." alt="...">
    </div>
    <div class="product-card__info">
      <h3 class="product-card__title">Product Name</h3>
      <p class="product-card__price">$XX.XX</p>
    </div>
  </a>
</div>
```

#### 5.1 Product Image Zone

**Specifications:**

| Property | Value |
|----------|-------|
| Aspect ratio | 3:4 (portrait) |
| Object fit | Cover (center crop) |
| Width | 100% of card width |
| Height | Auto (based on aspect ratio) |
| Background | #F5F5F5 (placeholder) |
| Border | None |
| Box shadow | None |

**Hover Effect:**
```css
.product-card__image {
  transition: transform 200ms ease-out;
}

.product-card__link:hover .product-card__image {
  transform: scale(1.02);
}
```

**Critical Requirement:**
- **All images must maintain 3:4 aspect ratio** regardless of source image dimensions
- Use `aspect-ratio: 3/4` CSS property with `object-fit: cover`
- Images should be center-cropped (never stretched or distorted)
- No white bars, no mismatched heights

**Implementation:**
```css
.product-card__image-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #F5F5F5;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

#### 5.2 Product Title Zone

**Specifications:**

| Property | Desktop | Tablet | Mobile |
|----------|---------|---------|---------|
| Font size | 14-16px | 14px | 13-14px |
| Font weight | 400 (regular) | 400 | 400 |
| Line height | 1.4 | 1.4 | 1.4 |
| Color | #111111 | #111111 | #111111 |
| Text align | Center | Center | Center |
| Max lines | 2 | 2 | 2 |
| Margin top | 12-16px | 12px | 10px |
| Margin bottom | 4-8px | 6px | 4px |

**Text Overflow:**
```css
.product-card__title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  min-height: 2.8em; /* Ensures consistent height */
}
```

**Critical Requirement:**
- All titles must occupy **same vertical height** (2 lines max, with min-height)
- This ensures all prices align on the same baseline across each row
- Center-aligned text (Benmoyal convention)

#### 5.3 Product Price Zone

**Specifications:**

| Property | Desktop | Tablet | Mobile |
|----------|---------|---------|---------|
| Font size | 13-14px | 13px | 12px |
| Font weight | 400 (regular) | 400 | 400 |
| Color | #666666 | #666666 | #666666 |
| Text align | Center | Center | Center |
| Margin top | 4-8px | 6px | 4px |

**Implementation:**
```css
.product-card__price {
  text-align: center;
  color: #666666;
  font-size: 14px;
  margin-top: 6px;
}
```

#### 5.4 Card Padding & Spacing

**Specifications:**

| Property | Value |
|----------|-------|
| Internal padding | 12-20px (vertical), 8-12px (horizontal) |
| Background | Transparent |
| Border | None |
| Box shadow | None |

**Note:** Padding is for visual balance only — no boxy appearance

---

### 6. Image Aspect Ratio Enforcement

**Critical Requirement:**
All product thumbnails must display in a **uniform 3:4 aspect ratio** across all devices.

**Technical Implementation:**

1. **Use CSS `aspect-ratio` property:**
   ```css
   .product-card__image-wrapper {
     aspect-ratio: 3 / 4;
   }
   ```

2. **Fallback for older browsers:**
   ```css
   .product-card__image-wrapper {
     position: relative;
     width: 100%;
     padding-top: 133.33%; /* 4/3 * 100% = 133.33% */
   }
   
   .product-card__image {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
   }
   ```

3. **Lazy loading without layout shift:**
   ```html
   <img 
     src="placeholder.jpg" 
     data-src="product-image.jpg" 
     alt="Product" 
     loading="lazy"
     width="300"
     height="400"
   >
   ```

**Acceptance Criteria:**
- ✅ All product images in a row have identical height
- ✅ All product images in a row have identical width
- ✅ No distorted or stretched images
- ✅ No white bars or empty space in image containers
- ✅ Images are center-cropped symmetrically

---

### 7. Visual Balance & Whitespace

**Guiding Principles:**
- The grid should look like a **catalog board** or **gallery wall**
- All rows aligned perfectly (horizontal and vertical)
- Equal column widths, equal row heights
- Separation defined by whitespace only (no borders)

**Background & Surfaces:**

| Element | Background Color |
|---------|------------------|
| Body | #FFFFFF |
| Page container | #FFFFFF |
| Collection header | #FFFFFF |
| Toolbar | #FFFFFF |
| Product grid | #FFFFFF |
| Product cards | Transparent |

**Replace Current Dawn Pink (#f3e8e4) with Pure White (#FFFFFF)**

**Vertical Rhythm:**

| Section | Spacing |
|---------|---------|
| Header top padding | 64px (desktop), 48px (tablet), 32px (mobile) |
| Header bottom padding | 48px (desktop), 36px (tablet), 24px (mobile) |
| Toolbar to grid gap | 48px (desktop), 36px (tablet), 24px (mobile) |
| Grid bottom margin | 96px (desktop), 72px (tablet), 48px (mobile) |
| Between rows (vertical gap) | 48px (desktop), 40px (tablet), 32px (mobile) |

**Horizontal Margins:**
- Desktop: 80-120px total (40-60px per side)
- Tablet: 40-60px total (20-30px per side)
- Mobile: 24-32px total (12-16px per side)

**Alignment:**
- Page container should be centered with `margin: 0 auto`
- Max-width: 1440px
- Left/right margins should match header width

---

### 8. Responsive Behavior

**Breakpoint Strategy:**

| Breakpoint | Grid Columns | Gap (H × V) | Container Padding |
|------------|--------------|-------------|-------------------|
| ≥1200px (Large Desktop) | 4-5 | 32px × 48px | 80-120px |
| 990-1199px (Desktop) | 4 | 28px × 48px | 60-80px |
| 768-989px (Tablet) | 3 | 24px × 40px | 40-60px |
| 600-767px (Small Tablet) | 2 | 20px × 32px | 32-48px |
| <600px (Mobile) | 2 | 16px × 24px | 24-32px |

**Responsive Adjustments:**

1. **Grid Columns:**
   - Reduce number of columns, NOT image aspect ratio
   - Always maintain 3:4 image ratio across all breakpoints

2. **Spacing:**
   - Reduce gaps proportionally as viewport narrows
   - Maintain visual rhythm and balance

3. **Typography:**
   - Scale down font sizes proportionally
   - Maintain readability (minimum 12px)

4. **Toolbar:**
   - Desktop: Sort dropdown visible, filters as dropdown or inline chips
   - Tablet: Same as desktop or collapse to single button
   - Mobile: Collapse to single "Filter & Sort" button that opens modal

5. **Image Sizing:**
   - All images maintain 3:4 ratio
   - Image width adjusts to grid column width
   - No horizontal scrolling at any breakpoint

**Mobile Specific Requirements:**
- Remove current "view toggle" icons (grid/list mode)
- Remove "Controls Bar" section
- Integrate filter button into toolbar above grid
- Filter modal should overlay entire screen (not drawer)

---

### 9. Footer & Newsletter Section

**Visual Target:**
- Clearly separated from grid by large vertical margin
- Center-aligned
- Minimal, clean design
- No box background

**Specifications:**

| Element | Property | Value |
|---------|----------|-------|
| Section | Margin top | 96px (desktop), 72px (tablet), 48px (mobile) |
| Section | Padding | 48px vertical, 32px horizontal |
| Section | Background | Transparent or #FAFAFA |
| Section | Border top | Optional: 1px solid #E0E0E0 |
| Heading | Text transform | Uppercase or small-caps |
| Heading | Font size | 14-16px |
| Heading | Font weight | 500-600 |
| Heading | Margin bottom | 16px |
| Input | Height | 44px |
| Input | Border | 1px solid #CCCCCC |
| Input | Background | #FFFFFF |
| Button | Height | 44px |
| Button | Background | #000000 |
| Button | Color | #FFFFFF |

**Layout:**
```html
<div class="newsletter">
  <h3 class="newsletter__heading">Subscribe to our newsletter</h3>
  <form class="newsletter__form">
    <input type="email" placeholder="Your email address">
    <button type="submit">Subscribe</button>
  </form>
</div>
```

**Note:** This section likely already exists in theme — adjust spacing above it to create large gap from grid

---

### 10. Hover & Interactive Effects

**Product Card Hover:**

| Element | Effect | Transition |
|---------|--------|------------|
| Product image | Scale to 1.02x | 200ms ease-out |
| Product image | Optional: brightness 0.95 | 200ms ease-out |
| Product title | No change | - |
| Product price | No change | - |
| Cursor | Pointer | - |

**Implementation:**
```css
.product-card__link {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.product-card__image-wrapper {
  overflow: hidden;
}

.product-card__image {
  transition: transform 200ms ease-out;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card__link:hover .product-card__image {
  transform: scale(1.02);
}
```

**Requirements:**
- Hover effect should be subtle (not dramatic)
- No hover effect on text elements
- Entire card should be clickable (wrap all in `<a>` tag)
- No color changes on hover
- No underlines on hover

---

### 11. Typography & Font Consistency

**Font Stack:**
- Use existing theme font family (likely system fonts or custom brand fonts)
- Ensure consistency across all text elements

**Type Scale:**

| Element | Desktop | Tablet | Mobile |
|---------|---------|---------|---------|
| Collection title | 28-32px | 24-28px | 20-24px |
| Product card title | 14-16px | 14px | 13-14px |
| Product card price | 13-14px | 13px | 12px |
| Toolbar controls | 14px | 14px | 13px |
| Newsletter heading | 14-16px | 14-16px | 14px |

**Font Weights:**
- Collection title: 700 (bold)
- Product title: 400 (regular)
- Product price: 400 (regular)
- Toolbar: 400 (regular)

**Text Colors:**

| Element | Color |
|---------|-------|
| Collection title | #000000 |
| Product title | #111111 |
| Product price | #666666 |
| Toolbar text | #111111 |
| Toolbar label | #666666 |

**Maintain Existing:**
- Current font family from theme
- Current font loading strategy
- Current font weights available

---

### 12. Accessibility Requirements

**Semantic HTML:**
- Collection title: `<h1>` tag
- Product titles: `<h3>` tags within `<a>` tag
- Product prices: `<p>` tags (or `<span>` with price schema)
- Toolbar controls: `<select>` or `<button>` with proper labels

**ARIA Labels:**
```html
<select aria-label="Sort products by">
  <option>Featured</option>
  <option>Price: Low to High</option>
  <option>Price: High to Low</option>
  <option>Date: New to Old</option>
</select>
```

**Keyboard Navigation:**
- All interactive elements must be keyboard accessible
- Tab order should be logical (header → toolbar → product cards → footer)
- Focus states must be visible (outline or custom focus ring)

**Screen Reader:**
- Product card links should announce: "Product name, Price"
- Filter/sort controls should announce current state
- Loading states should announce "Loading products"

**Color Contrast:**
- All text must meet WCAG AA standards (4.5:1 minimum)
- Price text (#666666 on #FFFFFF) = 5.7:1 ✓
- Title text (#111111 on #FFFFFF) = 15.3:1 ✓

---

## Technical Implementation

### Files to Modify

#### Templates
- **`/templates/collection.json`**
  - Change `columns_desktop` from 5 to 4
  - Adjust section settings for new layout
  - May need to add toolbar section reference

#### Sections
- **`/sections/collection-template.liquid`** (or main collection section)
  - Rebuild header section (collection title)
  - Add/modify toolbar section (sort + filters)
  - Update grid container classes and structure
  - Remove mobile controls bar section
  - Remove view toggle functionality

#### Snippets
- **`/snippets/product-card.liquid`**
  - Restructure card HTML for uniform height
  - Enforce 3:4 aspect ratio on image wrapper
  - Add min-height to title container
  - Update classes for new styling

- **`/snippets/collection-filters.liquid`** (if exists)
  - Convert from sidebar to horizontal toolbar
  - Simplify UI (no heavy borders or backgrounds)

#### Stylesheets (Assets)
- **`/assets/component-collection.css`**
  - Rewrite grid layout (new column counts, gaps, spacing)
  - Update toolbar styling (replace controls bar)
  - Remove 5-column dense grid styles
  - Remove mobile drawer/modal styles
  - Add new vertical rhythm spacing
  - Replace Dawn pink backgrounds with white

- **`/assets/component-product-card.css`**
  - Enforce 3:4 aspect ratio on image wrapper
  - Add min-height to title for consistent card height
  - Update typography sizes (larger)
  - Update padding/spacing (more generous)
  - Center-align text
  - Add subtle hover effects
  - Remove current compact styling

- **`/assets/theme.css`**
  - Update background color from Dawn pink to white
  - May need to adjust page-width container padding
  - Ensure max-width: 1440px on main container

- **`/assets/component-filters.css`** (if separate file)
  - Convert filter UI from vertical sidebar to horizontal toolbar
  - Simplify visual styling

#### JavaScript (if needed)
- **`/assets/collection-filters.js`** (if exists)
  - Update filter toggle behavior for new toolbar layout
  - Remove view toggle functionality (grid/list mode)
  - Update mobile filter modal behavior

### Implementation Strategy

#### Phase 1: Structure (2-3 hours)
1. Update template JSON configuration (columns_desktop: 4)
2. Rebuild collection section Liquid markup:
   - New header structure
   - New toolbar structure
   - Updated grid container
   - Remove controls bar
3. Update product card snippet markup:
   - Add aspect ratio wrapper
   - Add min-height container for title
   - Update class names if needed

#### Phase 2: Styling - Grid & Layout (2-3 hours)
1. Rewrite collection grid CSS:
   - New column counts per breakpoint
   - New gap values (48px vertical, 32px horizontal)
   - New container padding
   - Remove 5-column dense grid
2. Update vertical rhythm spacing:
   - Header padding
   - Toolbar spacing
   - Grid margins
   - Footer spacing
3. Change all backgrounds from Dawn pink (#f3e8e4) to white (#FFFFFF)

#### Phase 3: Styling - Product Cards (2-3 hours)
1. Enforce 3:4 aspect ratio on images
2. Update typography (sizes, weights, alignment)
3. Add min-height to title container for consistent card height
4. Center-align all text
5. Update padding and spacing
6. Add hover effects
7. Remove borders, shadows, backgrounds

#### Phase 4: Toolbar & Filters (1-2 hours)
1. Style horizontal toolbar
2. Update sort dropdown styling
3. Convert filters to horizontal layout (if applicable)
4. Remove mobile controls bar
5. Update mobile filter modal

#### Phase 5: Responsive Testing (1-2 hours)
1. Test all breakpoints (360px → 1920px)
2. Verify grid alignment at each breakpoint
3. Verify image aspect ratios maintained
4. Verify typography scales properly
5. Test filter/sort functionality on mobile
6. Fix any overflow or alignment issues

#### Phase 6: Polish & QA (1 hour)
1. Verify accessibility (keyboard nav, ARIA labels, contrast)
2. Test hover effects
3. Verify loading states and lazy loading
4. Cross-browser testing (Chrome, Firefox, Safari, Edge)
5. Mobile device testing (iOS Safari, Android Chrome)

---

## Acceptance Criteria

### Visual Consistency
- [ ] All product cards have identical width within each row
- [ ] All product cards have identical height within each row
- [ ] All product images maintain 3:4 aspect ratio
- [ ] All product images are center-cropped (no distortion or white bars)
- [ ] All product titles align on same baseline across each row
- [ ] All product prices align on same baseline across each row

### Layout & Spacing
- [ ] Grid uses 4 columns on desktop (≥1200px)
- [ ] Grid uses 3 columns on tablet (768-989px)
- [ ] Grid uses 2 columns on mobile (<600px)
- [ ] Horizontal gaps are 32px on desktop, 24px on tablet, 16px on mobile
- [ ] Vertical gaps are 48px on desktop, 40px on tablet, 24px on mobile
- [ ] Collection title has 64px top padding, 48px bottom padding on desktop
- [ ] Grid has 96px bottom margin on desktop (large gap before footer)
- [ ] Page max-width is 1440px and centered

### Typography & Text
- [ ] Collection title is 28-32px, bold, uppercase, center-aligned
- [ ] Product titles are 14-16px, regular weight, center-aligned
- [ ] Product prices are 13-14px, gray color, center-aligned
- [ ] All text truncates properly (no overflow or horizontal scroll)
- [ ] Title container has min-height to prevent variable card heights

### Visual Design
- [ ] All backgrounds are pure white (#FFFFFF), not Dawn pink
- [ ] No borders on product cards
- [ ] No box shadows on product cards
- [ ] No backgrounds on product cards
- [ ] Separation defined by whitespace only
- [ ] Clean, minimal, gallery-like aesthetic

### Toolbar & Filters
- [ ] Toolbar appears as horizontal bar above grid
- [ ] Sort dropdown is right-aligned
- [ ] Toolbar has minimal styling (no heavy borders or backgrounds)
- [ ] Mobile controls bar is removed
- [ ] View toggle icons (grid/list) are removed
- [ ] Filter drawer "See X items" button is removed
- [ ] Filters are accessible via toolbar dropdown or inline chips

### Hover & Interactions
- [ ] Product images scale to 1.02x on hover with 200ms transition
- [ ] Entire product card is clickable
- [ ] Cursor changes to pointer on hover
- [ ] No hover effects on product title or price
- [ ] Transitions are smooth (no jank or layout shift)

### Responsive Behavior
- [ ] Layout scales fluidly across all breakpoints (360px → 1920px)
- [ ] Image aspect ratios maintained at all screen sizes
- [ ] Typography scales proportionally
- [ ] Grid columns reduce appropriately (5 → 4 → 3 → 2)
- [ ] No horizontal scrolling at any breakpoint
- [ ] Touch targets are minimum 44x44px on mobile

### Accessibility
- [ ] Collection title uses `<h1>` tag
- [ ] Product titles use semantic heading tags
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] ARIA labels present on controls
- [ ] Color contrast meets WCAG AA standards (4.5:1 minimum)
- [ ] Screen reader announces product information correctly

### Cross-Browser & Devices
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop)
- [ ] Safari (desktop & mobile)
- [ ] Edge (desktop)
- [ ] iOS Safari (iPhone)
- [ ] Android Chrome (Android phone)

### Performance
- [ ] Images lazy load without layout shift
- [ ] No CLS (Cumulative Layout Shift) issues
- [ ] Page loads in under 3 seconds on 3G
- [ ] No JavaScript errors in console
- [ ] No CSS errors or warnings

---

## Testing Checklist

### Visual Regression Testing
1. Take screenshot at 1920px width (desktop) — verify perfect grid alignment
2. Take screenshot at 1200px width (large tablet) — verify 4 columns
3. Take screenshot at 768px width (tablet) — verify 3 columns
4. Take screenshot at 375px width (mobile) — verify 2 columns
5. Compare product card heights within each row — must be identical
6. Verify all images have same height within each row

### Functional Testing
1. Sort products by: Featured, Price (Low→High), Price (High→Low), Date
2. Filter by: Availability, Price range, Color, Size
3. Verify filter count updates correctly
4. Verify grid updates without page reload (AJAX)
5. Test pagination or infinite scroll (if present)
6. Click product card → navigate to product page correctly

### Responsive Testing
1. Resize browser from 360px → 1920px width smoothly
2. Verify no horizontal scroll at any width
3. Verify grid columns change at correct breakpoints
4. Verify typography scales smoothly
5. Verify spacing adjusts proportionally
6. Test on actual mobile devices (iOS & Android)

### Accessibility Testing
1. Navigate page using keyboard only (Tab, Enter, Escape)
2. Verify focus indicators are visible
3. Test with screen reader (VoiceOver or NVDA)
4. Verify color contrast using browser DevTools
5. Check semantic HTML structure
6. Verify ARIA labels are present and correct

### Performance Testing
1. Run Lighthouse audit (target: 90+ performance score)
2. Check for layout shift (CLS should be < 0.1)
3. Verify images lazy load correctly
4. Test on throttled 3G connection
5. Check for JavaScript errors in console

---

## Design References

**Target Visual:**
- Benmoyal "Coats and Jackets" collection page
- Key characteristics:
  - Clean white background
  - 4-column grid on desktop
  - Large, generous gaps
  - Perfect alignment (horizontal & vertical)
  - Center-aligned product names and prices
  - Uniform card heights
  - 3:4 image aspect ratio
  - Minimal UI chrome
  - Gallery-like aesthetic

**Current State:**
- Ishmail Apparel collection page at `/collections/*`
- 5-column dense grid
- Dawn pink background
- Compact spacing
- Small typography
- Mobile controls bar with view toggle

---

## Notes & Considerations

### Breaking Changes
- **Background color change:** Dawn pink (#f3e8e4) → White (#FFFFFF)
  - This is a significant brand change — confirm with stakeholders
  - May affect other sections if using same background variable
  - Update CSS variable `--color-background` or create new variable

- **Column count change:** 5 columns → 4 columns on desktop
  - Reduces number of products visible without scrolling
  - Trade-off for larger, more impactful product presentation

- **Mobile view toggle removed:**
  - Current design allows switching between 1-column list and 2-column grid
  - New design is fixed 2-column grid on mobile
  - May affect user preference (some users prefer list view)

### Compatibility
- **CSS `aspect-ratio` property:**
  - Supported in all modern browsers (Chrome 88+, Firefox 89+, Safari 15+)
  - Fallback required for older browsers (padding-top trick)
  - Include fallback in implementation

- **CSS Grid:**
  - Well-supported across all modern browsers
  - No fallback needed (flexbox fallback only if supporting IE11)

### Performance Considerations
- **Larger images:**
  - 3:4 aspect ratio may require larger image files
  - Ensure images are optimized and served at correct size
  - Use Shopify image filters for responsive sizing

- **Lazy loading:**
  - Critical for performance with larger images
  - Ensure native lazy loading or JavaScript solution is implemented
  - Set width/height attributes to prevent layout shift

### Future Enhancements
- [ ] Add "Quick View" modal on product card hover
- [ ] Add product variant swatches on cards
- [ ] Add "Add to Cart" button on hover
- [ ] Add product badges (New, Sale, Sold Out)
- [ ] Add filter chips above grid showing active filters
- [ ] Add animation on filter/sort (fade in/out)

---

## Success Metrics

**Visual Quality:**
- Grid alignment score: 10/10 (perfect horizontal and vertical alignment)
- Typography consistency: All text at correct sizes and weights
- Spacing consistency: All gaps match specification

**User Experience:**
- Time to find product: Reduced by 20% (larger, clearer product cards)
- Click-through rate: Increase by 10-15% (more prominent product presentation)
- Bounce rate: Decrease by 5-10% (more engaging layout)

**Performance:**
- Lighthouse performance score: 90+
- Cumulative Layout Shift (CLS): < 0.1
- Largest Contentful Paint (LCP): < 2.5s

**Accessibility:**
- Lighthouse accessibility score: 100
- Keyboard navigation: Fully functional
- Screen reader compatibility: All elements properly announced

---

## Questions for Stakeholders

1. **Background color change:**
   - Confirm switch from Dawn pink (#f3e8e4) to pure white (#FFFFFF)
   - Does this affect brand guidelines or other pages?

2. **Column count:**
   - Confirm 4 columns on desktop (reducing from current 5)
   - Should we allow merchant configuration (3, 4, or 5 columns)?

3. **Mobile view toggle:**
   - Confirm removal of grid/list view toggle on mobile
   - Keep fixed 2-column grid only?

4. **Filter UI:**
   - Should filters remain as dropdown, or convert to inline chips?
   - Keep mobile filter modal, or inline horizontal filters?

5. **Product information:**
   - Show vendor name on cards? (Currently hidden in new design)
   - Show product tags or badges?
   - Show color swatches or variant options?

---

## Timeline Estimate

| Phase | Duration | Tasks |
|-------|----------|-------|
| Planning & Design Review | 1 hour | Review Benmoyal reference, confirm requirements |
| Phase 1: Structure | 2-3 hours | Template, section, snippet markup |
| Phase 2: Grid Layout | 2-3 hours | Grid CSS, spacing, backgrounds |
| Phase 3: Product Cards | 2-3 hours | Card CSS, aspect ratio, typography |
| Phase 4: Toolbar | 1-2 hours | Toolbar styling, filter UI |
| Phase 5: Responsive | 1-2 hours | Breakpoint testing, adjustments |
| Phase 6: Polish & QA | 1 hour | Accessibility, cross-browser, final review |
| **Total** | **10-15 hours** | Including testing and iteration |

**Recommended Approach:**
- Complete in 2-3 days with dedicated focus
- Day 1: Phases 1-2 (structure and grid)
- Day 2: Phases 3-4 (cards and toolbar)
- Day 3: Phases 5-6 (responsive and QA)

---

## Related Documentation

- **Codebase Memory:** `/MEMORY.md` - Current theme architecture and conventions
- **Header Navigation Guide:** `/HEADER_NAVIGATION_GUIDE.md` - Navigation patterns
- **Brand Palette:** See memory - Current Dawn pink palette and Piper accent
- **Product Card Conventions:** See memory - Current BEM naming and structure

---

## Sign-Off

**Developer:** [Name]  
**Date Started:** [Date]  
**Date Completed:** [Date]  
**Reviewer:** [Name]  
**Approved:** [ ] Yes [ ] No  
**Deployed:** [ ] Staging [ ] Production  

---

**End of Task Specification**
