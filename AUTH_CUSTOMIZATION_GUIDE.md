# Authentication Page Customization Guide
## Step-by-Step Instructions to Customize Look & Background Image

This guide will help you customize the look and appearance of your login and register pages, including changing the background image.

---

## Table of Contents
1. [Quick Overview](#quick-overview)
2. [Where to Find Authentication Settings](#where-to-find-settings)
3. [Customization Methods](#customization-methods)
4. [Step-by-Step: Change Background Image](#step-1-change-background-image)
5. [Step-by-Step: Customize Colors](#step-2-customize-colors)
6. [Step-by-Step: Customize Fonts & Typography](#step-3-customize-fonts--typography)
7. [Step-by-Step: Modify Layout & Spacing](#step-4-modify-layout--spacing)
8. [Common Customizations](#common-customizations)
9. [Testing Your Changes](#testing-your-changes)

---

## Quick Overview

Your authentication pages currently have:
- **Split-screen layout** (desktop) → stacked (mobile)
- **Left section**: Hero image area
- **Right section**: Login/Register form
- **Theme integration**: Uses existing brand colors and typography

**Key files involved:**
- `templates/customers/login.liquid` - Login page template
- `templates/customers/register.liquid` - Register page template
- `assets/component-auth.css` - All styling
- `config/settings_schema.json` - Configuration (where you upload images and set text)

---

## Where to Find Settings

### In Shopify Admin:
1. Go to **Customize Theme** (Theme Settings)
2. Look for section called **"Authentication Pages"** or **"Auth Settings"**
3. You'll find options to:
   - Upload/change the hero image
   - Edit hero tagline text
   - Customize colors and styles

### In Your Theme Files:
- **settings_schema.json**: Where authentication settings are defined
- **login.liquid & register.liquid**: The HTML/template structure
- **component-auth.css**: The styling (colors, fonts, spacing, animations)

---

## Customization Methods

You have **two ways** to customize:

### Method 1: Theme Customizer (Easiest - No Coding)
- No technical skills needed
- Changes immediately visible in Shopify Admin
- Best for: Images, text, basic color changes

### Method 2: Direct File Editing (Advanced)
- Requires editing code files
- Full control over styling and layout
- Best for: Advanced styling, animations, layout changes

**We'll cover both methods below!**

---

## STEP 1: Change Background Image

### Method 1A: Upload Image via Shopify Admin (No Coding)

1. **Log in to your Shopify Store Admin**
2. **Navigate to Customize Theme** (Online Store → Themes → Customize)
3. **Find "Authentication" section** in theme settings (left sidebar)
4. **Look for "Auth Hero Image" setting**
5. **Click "Select image"** or **"Change image"**
6. **Upload your image** from your computer
7. **Click "Save"**
8. **Image will appear** in the left side of login/register pages

**Image Requirements:**
- Recommended size: 600px wide × 800px tall (or similar aspect ratio ~3:4)
- File format: JPG, PNG, or WebP
- File size: Optimized (under 500KB for fast loading)
- Theme will automatically resize for mobile

### Method 1B: Update Settings File (Coding Required)

If you're editing the config file directly:

**File:** `config/settings_schema.json`

Look for the authentication section and find:
```
"auth_hero_image": {
  "type": "image_picker",
  "label": "Auth Hero Image"
}
```

No additional changes needed - use Shopify Admin to upload.

---

## STEP 2: Customize Colors

### Method 2A: Via Shopify Admin (No Coding)

1. Go to **Customize Theme** → **Auth Settings**
2. Look for color pickers like:
   - Primary Color (buttons, headings)
   - Text Color
   - Background Color
   - Border Color
   - Success/Error colors
3. Click each color and select your desired shade
4. Changes apply immediately
5. **Click "Save"**

**Recommended Colors:**
- **Primary (buttons)**: Dark color like #000000 or #1F2937
- **Text**: Dark gray or black (#000000, #1F2937, #374151)
- **Background**: White or off-white (#FFFFFF, #F9FAFB)
- **Border**: Light gray (#E5E7EB, #D1D5DB)
- **Error**: Red tones (#DC2626, #EF4444)
- **Success**: Green tones (#10B981, #34D399)

### Method 2B: Direct CSS Editing (Advanced)

**File:** `assets/component-auth.css`

**Look for the CSS variables section** (usually at the top):
```css
:root {
  --color-primary: #000000;
  --color-text: #000000;
  --color-background: #FFFFFF;
  --color-border: #E0E0E0;
  --color-success: #10B981;
  --color-error: #DC2626;
}
```

**To change a color:**
1. Find the variable
2. Change the hex code to your color
3. Save file
4. Refresh your browser

**Example:** Change primary button color from black to navy:
```css
/* Before */
--color-primary: #000000;

/* After */
--color-primary: #001F3F;
```

---

## STEP 3: Customize Fonts & Typography

### Method 3A: Font Sizes (Easy CSS Edit)

**File:** `assets/component-auth.css`

**Look for these classes and their font-size properties:**

```css
/* Page Title */
.auth-form__title {
  font-size: 2rem;  /* Change this number */
}

/* Form Labels */
.auth-form__label {
  font-size: 0.875rem;  /* Make it bigger or smaller */
}

/* Input Fields */
.auth-form__input {
  font-size: 1rem;  /* Change input text size */
}

/* Buttons */
.auth-button {
  font-size: 0.95rem;  /* Change button text size */
}
```

**Size Scale Reference:**
- 0.75rem = 12px (small)
- 0.875rem = 14px (small-medium)
- 1rem = 16px (standard)
- 1.25rem = 20px (larger)
- 1.5rem = 24px (large)
- 2rem = 32px (heading)
- 2.5rem = 40px (large heading)

### Method 3B: Font Families (Medium Difficulty)

**File:** `assets/component-auth.css`

**Look for font-family declarations:**

```css
/* Currently uses these fonts */
.auth-form__title {
  font-family: 'Work Sans', sans-serif;  /* Headings */
}

.auth-form__input {
  font-family: 'Chivo', sans-serif;  /* Body text */
}
```

**To change fonts:**
1. Choose web-safe fonts or Google Fonts
2. Find the font-family property
3. Replace with your chosen font
4. Make sure font is imported (check top of CSS file)

**Popular Options:**
- Headings: Playfair Display, Montserrat, Poppins, Work Sans
- Body: Open Sans, Roboto, Lato, Chivo

---

## STEP 4: Modify Layout & Spacing

### Method 4A: Padding (Internal Spacing)

**File:** `assets/component-auth.css`

**Look for padding properties:**

```css
/* Form container padding */
.auth-form {
  padding: 2rem;  /* Change this */
}

/* Increase = more space inside
   Decrease = tighter layout */
```

**Spacing Scale:**
- 0.5rem = 8px (tight)
- 1rem = 16px (comfortable)
- 1.5rem = 24px (roomy)
- 2rem = 32px (spacious)
- 3rem = 48px (very spacious)

### Method 4B: Gap Between Form Fields

**File:** `assets/component-auth.css`

```css
/* Space between form groups */
.auth-form__group {
  margin-bottom: 1.5rem;  /* Change this */
}

/* Increase = more space between fields
   Decrease = compact form */
```

### Method 4C: Split-Screen Ratio (Desktop)

**File:** `assets/component-auth.css`

```css
/* Left side (image) width */
.auth-split__left {
  flex: 0 0 50%;  /* 50% of screen - change first number */
}

/* Right side (form) width */
.auth-split__right {
  flex: 0 0 50%;  /* 50% of screen - change first number */
}
```

**Examples:**
- Equal split: `flex: 0 0 50%` and `flex: 0 0 50%`
- 60/40 split: `flex: 0 0 60%` and `flex: 0 0 40%`
- 40/60 split: `flex: 0 0 40%` and `flex: 0 0 60%`

### Method 4D: Mobile Breakpoint Changes

**File:** `assets/component-auth.css`

**Look for media queries:**

```css
/* Mobile screens (currently 600px) */
@media (max-width: 600px) {
  .auth-container {
    flex-direction: column;  /* Stack vertically */
  }
  
  /* Stack the left and right sections */
  .auth-split__left,
  .auth-split__right {
    flex: 0 0 100%;  /* Full width */
  }
}

/* Tablet screens (currently 1024px) */
@media (max-width: 1024px) {
  /* Tablet-specific styles */
}
```

**To change breakpoint:**
Replace `600px` with your desired width, e.g., `768px` or `800px`

---

## Common Customizations

### 1. Make Image Darker (Overlay Effect)

**File:** `assets/component-auth.css`

**Look for:**
```css
.auth-hero__image {
  /* Add this or modify existing */
  opacity: 0.8;  /* 0.8 = 80% visible, 20% darker */
}
```

**Adjust darkness:**
- 1 = fully visible
- 0.8 = 20% darker
- 0.6 = 40% darker
- 0.4 = 60% darker

### 2. Add Text Overlay on Image

**File:** `assets/component-auth.css`

**Look for:**
```css
.auth-hero__content {
  /* Currently positioned over the image */
  position: absolute;
}
```

**Adjust positioning or add background:**
```css
.auth-hero__content {
  background: rgba(0, 0, 0, 0.4);  /* Dark overlay behind text */
  padding: 2rem;
  border-radius: 6px;
}
```

### 3. Change Button Hover Color

**File:** `assets/component-auth.css`

**Look for:**
```css
.auth-button:hover {
  background-color: #1F2937;  /* Change this */
}
```

### 4. Add Shadow to Form

**File:** `assets/component-auth.css`

```css
.auth-form {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  /* Add this */
}
```

### 5. Change Form Background Color

**File:** `assets/component-auth.css`

```css
.auth-form {
  background-color: #F9FAFB;  /* Change from white to light gray */
}
```

### 6. Adjust Input Field Border

**File:** `assets/component-auth.css`

```css
.auth-form__input {
  border-bottom: 2px solid #E0E0E0;  /* Change thickness and color */
}

.auth-form__input:focus {
  border-bottom-color: #000000;  /* Color when focused */
}
```

### 7. Add Animation/Transition Speed

**File:** `assets/component-auth.css`

```css
.auth-button {
  transition: all 0.2s ease;  /* Change 0.2s to 0.5s for slower effect */
}
```

---

## Testing Your Changes

### After Each Change:

1. **Save your file** (or save in Shopify Admin)
2. **Hard refresh your browser** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check on multiple devices:**
   - Desktop (large screen)
   - Tablet (medium screen)
   - Mobile (small screen)

### Preview Before Publishing:

1. **In Shopify Admin:**
   - Use "Preview" to see changes
   - Share preview link to test on different devices

2. **Test on Real Devices:**
   - Use your phone/tablet
   - Test on Chrome, Safari, Firefox

### What to Check:

- [ ] Image displays correctly
- [ ] Text is readable and properly sized
- [ ] Colors look good together
- [ ] Form is properly aligned
- [ ] Buttons are clickable (44x44px minimum)
- [ ] Mobile layout stacks properly
- [ ] No overlapping text
- [ ] No broken images
- [ ] Colors meet accessibility standards (good contrast)

---

## Quick Reference: File Locations

| What You Want to Change | File | Method |
|--------------------------|------|--------|
| Background image | Shopify Admin Theme Settings | Admin (easiest) |
| Page text/tagline | Shopify Admin Theme Settings | Admin (easiest) |
| Colors (primary, text, etc.) | Shopify Admin Theme Settings | Admin OR CSS |
| Font sizes | `assets/component-auth.css` | CSS editing |
| Font families | `assets/component-auth.css` | CSS editing |
| Spacing/padding | `assets/component-auth.css` | CSS editing |
| Button styles | `assets/component-auth.css` | CSS editing |
| Layout adjustments | `assets/component-auth.css` | CSS editing |
| Mobile breakpoints | `assets/component-auth.css` | CSS editing |
| Form structure | `templates/customers/login.liquid` | Liquid template |

---

## Pro Tips

✅ **Do This:**
- Start with small changes and test
- Keep backups of original files
- Use browser DevTools to inspect elements (F12)
- Test on mobile early
- Use high-quality images (600x800px+)
- Maintain good color contrast for accessibility

❌ **Avoid This:**
- Making too many changes at once
- Using very low resolution images
- Removing form validation for security
- Breaking accessibility (poor color contrast, tiny text)
- Deleting form fields without understanding Shopify auth requirements

---

## Need Help?

If you get stuck:

1. **Check Existing Documentation:**
   - `DRAFT_AUTH_UI_DESIGN_GUIDE.md` - Design specs and colors
   - `SHOPIFY_AUTH_IMPLEMENTATION_PLAN.md` - Technical details

2. **Use Browser DevTools:**
   - Right-click on element → "Inspect"
   - Find the CSS rule you want to change
   - Modify and see live preview

3. **Reference the CSS File:**
   - `assets/component-auth.css` contains all styling
   - Classes follow BEM naming (e.g., `.auth-form__title`)

---

## Summary

To customize your authentication pages:
1. **Upload new image** via Shopify Admin Theme Settings
2. **Change colors** via Admin color pickers
3. **Adjust fonts/spacing/layout** by editing `component-auth.css`
4. **Test on all devices** before publishing
5. **Use browser DevTools** to debug styling

Start simple, test frequently, and build up to more complex customizations!
