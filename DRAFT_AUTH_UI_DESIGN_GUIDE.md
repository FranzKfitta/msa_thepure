# Authentication Pages - UI/UX Design Guide

## Overview

This document provides comprehensive design specifications for the split-screen authentication pages (Login & Register) for the Ishmail Apparel Shopify store.

## Design Philosophy

**Principles:**
- **Modern & Elegant**: Clean, contemporary design with subtle sophistication
- **Minimalist**: Remove distractions, focus on the core task (login/register)
- **Accessible**: WCAG 2.1 AA compliant with intuitive interactions
- **Responsive**: Seamless experience across all devices
- **On-Brand**: Consistent with existing theme design system

## Visual Design System

### Color Palette

| Color | Hex Code | CSS Variable | Usage |
|-------|----------|--------------|-------|
| Primary | #000000 | `--color-primary` | Buttons, links, active states |
| Secondary | #666666 | `--color-secondary` | Helper text, secondary info |
| Text | #000000 | `--color-text` | Body text, labels |
| Background | #FFFFFF | `--color-background` | Page background, input backgrounds |
| Border | #E0E0E0 | `--color-border` | Input borders, dividers |
| Success | #10B981 | Custom | Success messages, password strength |
| Warning | #F59E0B | Custom | Warning messages, fair password |
| Error | #DC2626 | Custom | Error messages, validation errors |

### Typography

#### Font Families
- **Heading Font**: Work Sans (weight: 600-700)
- **Body Font**: Chivo (weight: 400-500)

#### Font Sizes

| Element | Size | Mobile | Weight | Line-Height |
|---------|------|--------|--------|-------------|
| Page Title (H1) | 2rem | 1.75rem | 700 | 1.2 |
| Subtitle | 0.95rem | 0.875rem | 400 | 1.6 |
| Form Label | 0.875rem | 0.8125rem | 500 | 1.4 |
| Form Input | 1rem | 1rem* | 400 | 1.5 |
| Helper Text | 0.75rem | 0.75rem | 400 | 1.4 |
| Button | 0.95rem | 0.9rem | 600 | 1 |

*16px on mobile to prevent zoom on iOS

### Spacing Scale

Consistent spacing system based on 0.5rem (8px) units:

```
0.25rem = 4px
0.5rem  = 8px
0.75rem = 12px
1rem    = 16px
1.25rem = 20px
1.5rem  = 24px
2rem    = 32px
2.5rem  = 40px
3rem    = 48px
```

**Form Spacing:**
- Gap between form groups: 1.5rem (24px)
- Padding in form container: 2rem (32px)
- Margin below form header: 2.5rem (40px)
- Padding top/bottom of buttons: 1rem (16px)

### Border Radius

- Buttons: `var(--border-radius, 0)` (typically 0px for this theme)
- Input fields: 0px (bottom border only)
- Images: 12px
- Containers: 6px (alert boxes)

### Shadows & Depth

| Element | Shadow | Usage |
|---------|--------|-------|
| Buttons (hover) | `0 4px 12px rgba(0,0,0,0.15)` | Elevated state |
| Buttons (active) | `0 2px 6px rgba(0,0,0,0.1)` | Pressed state |
| Cards | `0 1px 3px rgba(0,0,0,0.1)` | Subtle elevation |

### Transitions & Animations

**Timing Function**: `ease` or `ease-out`

| Duration | Usage |
|----------|-------|
| 0.2s | Hover effects, opacity changes |
| 0.25s | Input focus, label changes |
| 0.3s | Password strength bar |
| 0.4s | Password strength bar (width) |
| 0.6s | Page load animation (fadeInUp) |

## Layout Specifications

### Desktop Layout (1024px+)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────────┬──────────────────────┐   │
│  │                  │                      │   │
│  │  Hero Section    │   Form Container     │   │
│  │  (50% width)     │   (50% width)        │   │
│  │                  │                      │   │
│  │ • Background     │ • H1 Title           │   │
│  │ • Image or       │ • Form Fields        │   │
│  │   Gradient       │ • Submit Button      │   │
│  │ • Brand Tagline  │ • Sign Up Link       │   │
│  │                  │                      │   │
│  └──────────────────┴──────────────────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘

Proportions:
- Left section: 50% width, full viewport height
- Right section: 50% width, full viewport height
- Vertical centering: Form centered in right section
- Horizontal padding: 3rem on each side of form
```

### Tablet Layout (600-1024px)

```
┌──────────────────────────┐
│                          │
│   Form Container         │
│   (Full width)           │
│   Centered vertically    │
│                          │
│ • H1 Title               │
│ • Form Fields            │
│ • Submit Button          │
│ • Sign Up Link           │
│                          │
└──────────────────────────┘

Proportions:
- Width: 100% of viewport
- Max-width: 400px
- Height: min-height: 100vh for full viewport coverage
- Padding: 2.5rem horizontal, 2rem vertical
```

### Mobile Layout (<600px)

```
┌──────────────┐
│              │
│  H1 Title    │
│  Subtitle    │
│              │
├──────────────┤
│              │
│  Form Fields │
│              │
│  • Email     │
│  • Password  │
│  • [Button]  │
│              │
├──────────────┤
│              │
│  Sign In     │
│  Link        │
│              │
└──────────────┘

Proportions:
- Width: 100% (with side padding)
- Horizontal padding: 1.25rem
- Vertical padding: 2rem
- Stack: Single column
```

## Component Specifications

### Hero Section (Left Side)

**Desktop Only** (hidden on tablet/mobile)

**Image Requirements:**
- Aspect Ratio: 1:1 (square)
- Recommended dimensions: 800x800px minimum
- Format: JPG, PNG, or WebP
- Optimization: Compressed for web (<200KB)
- Content: Lifestyle shot, product image, or brand aesthetic

**Gradient Placeholder** (when no image):
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Icon: 100x100px SVG centered
- Icon color: `rgba(255, 255, 255, 0.3)`

**Tagline Overlay:**
- Position: Bottom-left
- Text color: White
- Font: Heading font, 1.5rem, weight 600
- Padding: 2rem
- Background: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`
- Text shadow: `0 2px 4px rgba(0,0,0,0.2)`

### Form Header

**Title (H1)**
- Font size: 2rem (desktop), 1.75rem (mobile)
- Font weight: 700
- Color: `var(--color-text, #000000)`
- Margin bottom: 0.75rem
- Letter spacing: -0.01em
- Alignment: Center

**Subtitle**
- Font size: 0.95rem
- Color: `var(--color-secondary, #666666)`
- Alignment: Center
- Line height: 1.6
- Margin: 0

### Form Inputs

**General Input Styles:**

```
Field:           Form Input Group
┌─ Label ─────────────────────────┐
│ Email Address                   │
├─────────────────────────────────┤
│ you@example.com                 │
└─── Bottom Border Only ──────────┘
```

**Specifications:**
- **Type**: Text, Email, Password
- **Height**: Auto (text baseline + padding)
- **Padding**: 0.875rem vertical, 0 horizontal (no left/right padding)
- **Border**: Bottom only, 1px solid `var(--color-border, #e0e0e0)`
- **Background**: Transparent
- **Font size**: 1rem (16px on mobile for iOS)
- **Placeholder color**: `rgba(0,0,0,0.6)` (secondary color with opacity)
- **Placeholder text**: Italics, lighter color

**Input States:**

| State | Border Color | Background | Text Color | Box Shadow |
|-------|--------------|----------|-----------|-----------|
| Default | `--color-border` | Transparent | `--color-text` | None |
| Hover | `--color-border` | Transparent | `--color-text` | None |
| Focus | `--color-primary` | `rgba(0,0,0,0.02)` | `--color-text` | `inset 0 -2px 0 rgba(0,0,0,0.1)` |
| Filled | `--color-border` | Transparent | `--color-text` | None |
| Error | #DC2626 | `rgba(220,38,38,0.02)` | #991B1B | `inset 0 -2px 0 #DC2626` |
| Disabled | `--color-border` | `#F5F5F5` | `#999999` | None |

**Focus Behavior:**
- Outline: 2px solid `var(--color-primary)`
- Outline offset: 2px
- Smooth transition: 0.25s ease

### Labels

**Specifications:**
- Font size: 0.875rem
- Font weight: 500
- Color: `var(--color-text, #000000)`
- Letter spacing: 0.01em
- Margin bottom: 0.5rem
- Display: Block

**Label Variants:**

1. **Standard Label**
   - Font weight: 500
   - Display: Above input

2. **Checkbox Label**
   - Font weight: 400
   - Display: Inline with checkbox
   - Margin left: 0.75rem
   - Cursor: Pointer
   - User-select: None

### Buttons

**Primary Button**

```
┌─────────────────┐
│  Sign In        │
└─────────────────┘
```

**Specifications:**
- Padding: 1rem 2rem
- Font size: 0.95rem
- Font weight: 600
- Border: 1px solid `--color-primary`
- Background: `--color-primary`
- Color: White
- Border radius: `var(--border-radius, 0)`
- Width: 100% (full-width in forms)
- Cursor: Pointer
- Transition: All 0.25s ease

**Button States:**

| State | Background | Border | Color | Transform | Shadow |
|-------|-----------|--------|-------|-----------|--------|
| Default | Primary | Primary | White | None | None |
| Hover | Primary (85% opacity) | Primary | White | translateY(-1px) | `0 4px 12px rgba(0,0,0,0.15)` |
| Active | Primary | Primary | White | translateY(0) | `0 2px 6px rgba(0,0,0,0.1)` |
| Focus | Primary | Primary | White | None | None |
| Disabled | Primary (50% opacity) | Primary | White | None | None |

**Focus Behavior:**
- Outline: 2px solid `--color-primary`
- Outline offset: 2px

### Form Links

**Specifications:**

1. **Standard Link**
   - Color: `--color-primary`
   - Font size: 0.875rem
   - Text decoration: Underline
   - Transition: All 0.2s ease
   - Hover: Opacity 0.7

2. **Emphasis Link** (Sign Up/Sign In)
   - Font weight: 600
   - Text decoration: Underline

3. **Password Recovery Link**
   - Font size: 0.8rem
   - Position: Right side of label
   - White space: Nowrap

4. **Secondary Link** (Continue Shopping)
   - Color: `--color-secondary`
   - Text decoration: None
   - Border bottom: 1px solid `--color-border`
   - Padding bottom: 0.25rem
   - Hover: Border & color change to primary

### Error Messages

**Error Alert Box**

```
┌─ ! ───────────────────────────────┐
│     Error                         │
│     • Email is invalid            │
│     • Password too short          │
└───────────────────────────────────┘
```

**Specifications:**
- Display: Flex with gap 1rem
- Padding: 1rem 1.25rem
- Background: #FEF2F2 (light red)
- Border: 1px solid #FECACA (light red border)
- Border radius: 6px
- Icon size: 20x20px
- Icon color: #DC2626 (red)
- Text color: #7F1D1D (dark red)
- Animation: slideDown 0.3s ease-out

**Inline Error Message**
- Font size: 0.75rem
- Color: #DC2626
- Margin top: -0.25rem
- Display: Flex with gap 0.4rem
- Animation: fadeIn 0.2s ease

**Error List**
- Margin: 0.5rem 0 0 0
- Padding: 0 0 0 1.5rem
- Font size: 0.8rem
- Line height: 1.5
- Margin per item: 0.25rem 0

### Success States

**Password Strength Indicator**

```
Password ─────────────┐
[••••••••••••••••••]  │
████░░░░░░░░░░░░░░░░  Strength: "Strong"
```

**Specifications:**
- Bar height: 4px
- Background: `--color-border` (#E0E0E0)
- Border radius: 2px
- Animation: width 0.4s ease, color 0.3s ease

**Strength Levels:**

| Level | Fill Width | Color | Label |
|-------|-----------|-------|-------|
| Weak | 25% | #DC2626 (Red) | Weak |
| Fair | 50% | #F59E0B (Amber) | Fair |
| Good | 75% | #3B82F6 (Blue) | Good |
| Strong | 100% | #10B981 (Green) | Strong |

### Checkboxes

**Specifications:**
- Size: 18x18px
- Border: 1px solid `--color-border`
- Border radius: 2px
- Accent color: `--color-primary`
- Cursor: Pointer
- Transition: All 0.2s ease
- Margin top: 0.15rem (align with label baseline)

**Checkbox States:**

| State | Border | Background | Shadow |
|-------|--------|-----------|--------|
| Default | `--color-border` | Transparent | None |
| Hover | `--color-primary` | Transparent | None |
| Focus | `--color-primary` | Transparent | `0 0 0 3px rgba(0,0,0,0.1)` |
| Checked | `--color-primary` | `--color-primary` | None |
| Disabled | `--color-border` | `#F5F5F5` | None |

## Responsive Behavior

### Breakpoints

| Name | Width | Columns | Layout |
|------|-------|---------|--------|
| Desktop | 1024px+ | 2 | Split-screen |
| Tablet | 600-1023px | 1 | Stacked |
| Mobile | <600px | 1 | Stacked |
| Small Mobile | <375px | 1 | Compact |

### Grid Changes

**Desktop (1024px+)**
- `grid-template-columns: 1fr 1fr`
- Hero visible on left
- Form on right
- Gap: 0

**Tablet/Mobile (< 1024px)**
- `grid-template-columns: 1fr`
- Hero hidden
- Form full width
- Max width: 400px (centered)

### Padding Adjustments

| Breakpoint | Horizontal | Vertical |
|-----------|-----------|----------|
| Desktop | 3rem | 3rem |
| Tablet | 2.5rem | 2.5rem |
| Mobile | 1.5rem | 2rem |
| Small Mobile | 1.25rem | 1.5rem |

## Accessibility Features

### Keyboard Navigation

- **Tab**: Navigate through form elements
- **Shift+Tab**: Reverse navigation
- **Enter**: Submit form or activate button
- **Spacebar**: Toggle checkboxes
- **Escape**: Close error messages (future enhancement)

### Screen Reader Support

- Semantic HTML: `<form>`, `<input>`, `<label>`, `<button>`
- ARIA labels: All inputs have associated labels
- ARIA descriptions: Error messages linked via `aria-describedby`
- ARIA live regions: Password strength updates announced
- Alt text: Hero image has descriptive alt text
- Skip links: Skip to main content (if needed)

### Focus Management

- Focus indicators: 2px solid outline with 2px offset
- Focus visible: Always visible on keyboard navigation
- Focus trap: Error alerts get immediate focus
- Focus restoration: After error correction

### Color Contrast

- Text on background: 4.5:1 ratio (WCAG AA)
- Links: 4.5:1 ratio
- Form labels: 4.5:1 ratio
- Helper text: 4.5:1 ratio
- Error messages: 4.5:1 ratio

### Touch Targets

- Minimum size: 44x44px
- Buttons: 44x44px minimum
- Checkboxes: 18x18px (acceptable with label area)
- Links: 24px height minimum with padding

## Animation Guidelines

### Principles
- Smooth, 0.2-0.6s durations
- Ease or ease-out timing functions
- Purpose-driven (feedback, not distraction)
- Accessible (respect `prefers-reduced-motion`)

### Page Load
- Animation: fadeInUp 0.6s ease-out
- Effect: Fade in from bottom by 20px

### Form Interactions
- Input focus: 0.25s ease
- Button hover: 0.2s ease
- Error appearance: 0.3s slideDown ease-out

### Password Strength
- Fill width: 0.4s ease
- Color change: 0.3s ease

## Mobile-First Strategy

### Approach
1. Start with mobile layout (single column)
2. Add breakpoint at 600px (tablet adjustments)
3. Add breakpoint at 1024px (desktop split-screen)
4. Progressive enhancement for larger screens

### Mobile Optimizations
- Larger touch targets (44x44px minimum)
- 16px font size to prevent iOS zoom
- Full-width inputs
- Larger form spacing
- Simplified hero (hidden on mobile)
- Clear visual hierarchy

## Performance Considerations

### Image Optimization
- Hero image: Max 600px width, compressed
- Format: Use WebP with JPG fallback
- Lazy loading: `loading="lazy"` attribute
- Responsive images: `srcset` for multiple sizes

### CSS Optimization
- Minify final CSS
- Remove unused prefixes
- Critical CSS inline for LCP
- Defer non-critical styles

### JavaScript Optimization
- Password strength check: Lightweight algorithm
- No external libraries required
- Defer script loading
- Minimize DOM manipulation

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile browsers**: iOS Safari 12+, Chrome Android
- **CSS support**: Grid, Flexbox, CSS Variables
- **Graceful degradation**: Works without JavaScript (form submission)

## Future Enhancements

1. **Social Login** (OAuth buttons)
2. **Biometric Authentication** (fingerprint, face recognition)
3. **Password visibility toggle**
4. **Email autocomplete suggestions**
5. **Form auto-save to session storage**
6. **Multi-language form labels**
7. **SMS verification**
8. **Two-factor authentication**

## Design Resources

### Files to Create
- `component-auth.css` - Stylesheet
- `auth-form.js` - JavaScript enhancements (optional)
- `templates/customers.login.liquid` - Login page
- `templates/customers.register.liquid` - Register page

### Assets Needed
- Hero image (800x800px minimum)
- Icon SVG files (user, lock, email, etc.)
- Favicon/brand logo

### Localization Keys
- `auth.login.title`, `auth.login.email`, etc.
- `auth.register.title`, `auth.register.password`, etc.
- `auth.form.error`, `auth.form.success`, etc.
