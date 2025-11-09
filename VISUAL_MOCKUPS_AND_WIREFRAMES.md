# Visual Mockups & Wireframes

## Login Page - Desktop (1024px+)

```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│                                     │                                     │
│                                     │                                     │
│                                     │                                     │
│                                     │                 Sign In              │
│                                     │  Access your account and order history
│     Hero Image                      │                                     │
│     (Hero Tagline at bottom)        │  Email Address                      │
│                                     │  __________________________________ 
│                                     │                                     │
│                                     │  Password                           │
│     "Join our community...          │  __________________________________
│     Get exclusive access"           │             [Forgot?]              │
│                                     │                                     │
│                                     │  ☐ Remember me                      │
│                                     │                                     │
│                                     │  ┌──────────────────────────────┐  │
│                                     │  │      Sign In Button          │  │
│                                     │  └──────────────────────────────┘  │
│                                     │                                     │
│                                     │  Don't have an account?             │
│                                     │  Create one                         │
│                                     │                                     │
│                                     │  ─────────────────────────────────  │
│                                     │                                     │
│                                     │  Continue Shopping                  │
│                                     │                                     │
└─────────────────────────────────────┴─────────────────────────────────────┘

Left Section (50% width):
- Background image or gradient
- Optional brand tagline overlay
- Subtle gradient overlay at bottom

Right Section (50% width):
- Form centered vertically/horizontally
- Max width: 420px
- Clear visual hierarchy
- Adequate spacing
```

## Register Page - Desktop (1024px+)

```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│                                     │                                     │
│                                     │   Create Account                    │
│                                     │  Join our community for exclusive   │
│     Hero Image                      │  benefits                           │
│     (Hero Tagline at bottom)        │                                     │
│                                     │  First Name                         │
│                                     │  __________________________________
│                                     │                                     │
│                                     │  Last Name                          │
│                                     │  __________________________________
│                                     │                                     │
│                                     │  Email Address                      │
│                                     │  __________________________________
│                                     │                                     │
│                                     │  Password                           │
│                                     │  __________________________________
│                                     │  ████░░░░░░░░░░░░░░░░ Strong       │
│                                     │  Minimum 8 characters              │
│                                     │                                     │
│                                     │  Confirm Password                   │
│                                     │  __________________________________
│                                     │                                     │
│                                     │  ☐ I agree to the Terms &           │
│                                     │    Conditions                       │
│                                     │                                     │
│                                     │  ☑ Subscribe to our newsletter      │
│                                     │    for exclusive offers             │
│                                     │                                     │
│                                     │  ┌──────────────────────────────┐  │
│                                     │  │   Create Account Button      │  │
│                                     │  └──────────────────────────────┘  │
│                                     │                                     │
│                                     │  Already have an account?           │
│                                     │  Sign In                            │
│                                     │                                     │
│                                     │  ─────────────────────────────────  │
│                                     │                                     │
│                                     │  Continue Shopping                  │
│                                     │                                     │
└─────────────────────────────────────┴─────────────────────────────────────┘
```

## Login Page - Tablet/Mobile (<1024px)

```
┌───────────────────────────────────┐
│                                   │
│                                   │
│           Sign In                 │
│   Access your account and         │
│   order history                   │
│                                   │
├───────────────────────────────────┤
│                                   │
│  Email Address                    │
│  _________________________________  │
│                                   │
│  Password                         │
│  _________________________________  │
│          [Forgot?]                │
│                                   │
│  ☐ Remember me                    │
│                                   │
│  ┌─────────────────────────────┐  │
│  │    Sign In Button           │  │
│  └─────────────────────────────┘  │
│                                   │
│  Don't have an account?           │
│  Create one                       │
│                                   │
│  ─────────────────────────────────  │
│                                   │
│  Continue Shopping                │
│                                   │
└───────────────────────────────────┘

Single Column Layout:
- Hero image hidden
- Form centered
- Full width with side padding
- Max width: 400px (centered)
- Min-height: 100vh
```

## Register Page - Tablet/Mobile (<1024px)

```
┌───────────────────────────────────┐
│                                   │
│        Create Account             │
│   Join our community for          │
│   exclusive benefits              │
│                                   │
├───────────────────────────────────┤
│                                   │
│  First Name                       │
│  _________________________________  │
│                                   │
│  Last Name                        │
│  _________________________________  │
│                                   │
│  Email Address                    │
│  _________________________________  │
│                                   │
│  Password                         │
│  _________________________________  │
│                                   │
│  ████░░░░░░░░░░░░░░░░ Strong       │
│  Minimum 8 characters             │
│                                   │
│  Confirm Password                 │
│  _________________________________  │
│                                   │
│  ☐ I agree to Terms & Conditions  │
│  ☑ Subscribe to newsletter        │
│                                   │
│  ┌─────────────────────────────┐  │
│  │  Create Account Button      │  │
│  └─────────────────────────────┘  │
│                                   │
│  Already have an account?         │
│  Sign In                          │
│                                   │
│  ─────────────────────────────────  │
│                                   │
│  Continue Shopping                │
│                                   │
└───────────────────────────────────┘
```

## Form Input States - Detailed View

### Default State
```
Email Address
________________________________ 
                                │
```

### Focused State
```
Email Address
════════════════════════════════════════
                                │
Background: rgba(0,0,0,0.02)
Border: --color-primary (strong)
Shadow: inset 0 -2px 0 rgba(0,0,0,0.1)
```

### Filled State
```
Email Address
you@example.com
________________________________
                                │
```

### Error State
```
Email Address
________________________________
  ⚠ Invalid email format

Background: rgba(220,38,38,0.02)
Border: #DC2626 (red)
Text: #991B1B (dark red)
```

### Placeholder Text
```
Email Address
you@example.com
________________________________
                                │
Color: rgba(0,0,0,0.6)
Italic
Lighter appearance
```

## Password Strength Indicator - States

### Weak (1-25%)
```
Password Strength:
████░░░░░░░░░░░░░░░░░░░░░░░░░░░ Weak
Color: #DC2626 (Red)
```

### Fair (26-50%)
```
Password Strength:
████████░░░░░░░░░░░░░░░░░░░░░░░ Fair
Color: #F59E0B (Amber)
```

### Good (51-75%)
```
Password Strength:
████████████░░░░░░░░░░░░░░░░░░░ Good
Color: #3B82F6 (Blue)
```

### Strong (76-100%)
```
Password Strength:
████████████████░░░░░░░░░░░░░░░ Strong
Color: #10B981 (Green)
```

## Error Message Display

### Alert Box
```
┌──────────────────────────────────────┐
│ ⚠ Error                              │
│                                      │
│ • Email is invalid                   │
│ • Password must be 8+ characters     │
│ • Passwords don't match              │
└──────────────────────────────────────┘

Background: #FEF2F2 (light red)
Border: 1px solid #FECACA (light red border)
Icon: 20x20px, #DC2626
Text: #7F1D1D (dark red)
Padding: 1rem 1.25rem
Border radius: 6px
Animation: slideDown 0.3s
```

## Checkbox States

### Unchecked Default
```
☐ Remember me
░░░  Unchecked
Border: #E0E0E0
Background: Transparent
```

### Unchecked Hover
```
☐ Remember me
░░░  Hover
Border: #000000 (darker)
Background: Transparent
```

### Checked
```
☑ Remember me
█  Checked
Border: #000000
Background: #000000
Color: White checkmark
```

### Focused
```
(☐) Remember me
   Focused - outline visible
Border: #000000
Box-shadow: 0 0 0 3px rgba(0,0,0,0.1)
```

## Button States - Detailed View

### Default State
```
┌─────────────────────────┐
│    Sign In Button       │
└─────────────────────────┘
Background: #000000 (black)
Border: 1px solid #000000
Text: White
Shadow: None
Transform: None
```

### Hover State
```
┌─────────────────────────┐
│    Sign In Button ▲     │
└─────────────────────────┘
Background: #000000 (85% opacity)
Border: 1px solid #000000
Text: White
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Transform: translateY(-1px) ▲
Cursor: pointer
```

### Active/Pressed State
```
┌─────────────────────────┐
│    Sign In Button ▼     │
└─────────────────────────┘
Background: #000000
Border: 1px solid #000000
Text: White
Shadow: 0 2px 6px rgba(0,0,0,0.1)
Transform: translateY(0)
Cursor: pointer
```

### Focused State
```
┌─────────────────────────┐
│    Sign In Button       │
└─────────────────────────┘
   ╔═════════════════════╗
Background: #000000
Border: 1px solid #000000
Outline: 2px solid #000000
Outline-offset: 2px
```

### Disabled State
```
┌─────────────────────────┐
│    Sign In Button       │
└─────────────────────────┘
Background: #000000 (50% opacity)
Border: 1px solid #000000
Text: White
Cursor: not-allowed
No shadow
No transform
```

## Responsive Breakpoints - Visual

### Large Desktop (1400px+)
```
┌──────────────────────────┬──────────────────────────┐
│                          │                          │
│  Hero Section            │  Form (max 500px center) │
│  (50% width)             │  (50% width)             │
│                          │                          │
└──────────────────────────┴──────────────────────────┘
Layout: grid-template-columns: 1fr 1fr
Spacing: 3rem
```

### Desktop (1024px)
```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  Hero Section        │  Form (420px)        │
│  (50% width)         │  (50% width)         │
│                      │                      │
└──────────────────────┴──────────────────────┘
Layout: grid-template-columns: 1fr 1fr
Spacing: 2rem
```

### Tablet (768px)
```
┌─────────────────────────────────┐
│                                 │
│  Form (400px, centered)         │
│  (Full width)                   │
│                                 │
│  Min-height: 100vh              │
│  Padding: 2.5rem horizontal     │
└─────────────────────────────────┘
Layout: grid-template-columns: 1fr
Hero: Hidden
```

### Mobile (480px)
```
┌──────────────────┐
│                  │
│ Form (full)      │
│                  │
│ Padding: 1.5rem  │
│ Min-height: 100vh│
│                  │
└──────────────────┘
Layout: grid-template-columns: 1fr
Spacing: 1.5rem
Font: Adjusted for mobile
```

### Small Mobile (375px)
```
┌─────────────┐
│             │
│  Form       │
│  (compact)  │
│             │
│ P: 1.25rem  │
└─────────────┘
Layout: Single column
Font: Slightly reduced
Spacing: 1.25rem
```

## Accessibility Features - Visual Indicators

### Keyboard Focus Outline
```
┌─────────────────────┐
│ Email Address       │
├─────────────────────┤
│ ___________________ │
│                     │
╔═════════════════════╗  ← 2px outline, 2px offset
║ Visible focus ring  ║     Solid color (high contrast)
╚═════════════════════╝
```

### Screen Reader Announcement

#### On Page Load
```
"Sign In, Access your account and order history"
Role: main
```

#### On Error
```
Alert box announced:
"Error. Email is invalid. Password must be 8+ characters. 
Passwords don't match."
Role: alert
aria-live: assertive
```

#### On Password Strength Update
```
"Password strength: Strong"
Role: status
aria-live: polite
aria-atomic: true
```

## Mobile Touch Target Sizes

### Recommended (44x44px minimum)

#### Button
```
┌──────────────────────┐
│                      │ 44px
│    Sign In Button    │
│                      │
└──────────────────────┘
  44px (width)
```

#### Checkbox with Label
```
☐  Remember me
│  18px
│  └─ Checkbox size
└─ 44px total height with label
  └─ 36px + label padding
```

#### Input Field
```
Email Address
_________________________
│  16px (min font)
│  44px total height
│  (0.75rem padding + text + 0.75rem padding)
```

### Touch-Friendly Spacing
```
Button 1    2px gap    Button 2

Not enough gap (< 4px):
Finger accidentally hits multiple buttons

Better spacing (8px+):
Each button independently tappable
```

## Color Palette Visualization

### Primary Colors
```
Primary: #000000
████████████████ Buttons, active states, links

Secondary: #666666
████████████ Helper text, secondary info

Background: #FFFFFF
████████████ Page background, inputs

Border: #E0E0E0
█████ Form borders, dividers
```

### Status Colors
```
Success: #10B981 ✓
████████████ Password strong, confirmed actions

Warning: #F59E0B ⚠
████████████ Fair password, warnings

Error: #DC2626 ✗
████████████ Invalid input, errors
```

## Typography Hierarchy

### Page Heading (H1)
```
╔═══════════════════════════════════╗
║  Sign In                          ║ 2rem / 700 weight
║  Work Sans Bold                   ║
╚═══════════════════════════════════╝
```

### Subtitle
```
┌──────────────────────────────────┐
│ Access your account and order    │ 0.95rem / 400 weight
│ history                          │ Secondary color
└──────────────────────────────────┘
```

### Form Label
```
Email Address
═════════════════════════════════════════════════════════════ 0.875rem / 500 weight
```

### Form Input
```
you@example.com
═════════════════════════════════════════════════════════════ 1rem / 400 weight
                                                              (16px on mobile)
```

### Helper Text
```
Minimum 8 characters                                          0.75rem / 400 weight
```

## Spacing & Layout Grid

### Form Spacing
```
Form Header
┌─────────────────────────────────┐
│ Sign In (H1)                    │ Margin-bottom: 0.75rem
├─────────────────────────────────┤
│ Subtitle text                   │ Margin-bottom: 2.5rem (to form)
└─────────────────────────────────┘

Form Group 1
┌─────────────────────────────────┐
│ Label                           │ Gap: 0.5rem (label to input)
├─────────────────────────────────┤
│ _________________________ │ Gap: 1.5rem (to next group)
└─────────────────────────────────┘

Form Group 2
┌─────────────────────────────────┐
│ Label                           │
├─────────────────────────────────┤
│ _________________________ │
└─────────────────────────────────┘

Form Footer
┌─────────────────────────────────┐
│ Gap: 1.5rem (button to footer)  │
│ Border-top: 1px solid           │ Padding-top: 1.5rem
│ Don't have account? Sign Up     │
└─────────────────────────────────┘
```

## Animation Timeline

### Page Load
```
Time:      0ms         300ms        600ms
Opacity:   0% ────→    25% ────→    100% ✓
Y-axis:    20px ───→   10px ───→    0px ✓
           (fadeInUp 0.6s ease-out)
```

### Button Hover
```
Time:      0ms         150ms        200ms
Opacity:   100% ─────→ 85% ✓
Shadow:    None ─────→ 0 4px 12px ✓
Transform: 0 ─────→    -1px ✓
           (all 0.25s ease)
```

### Input Focus
```
Time:      0ms         125ms        250ms
Border:    #E0E0E0 ─→  #000000 ✓
BG-Color:  transparent ─→ rgba(0,0,0,0.02) ✓
Box-shadow: None ─────→ inset 0 -2px 0 rgba(0,0,0,0.1) ✓
            (all 0.25s ease)
```

### Error Alert Slide-In
```
Time:      0ms         150ms        300ms
Opacity:   0% ────→    50% ────→    100% ✓
Y-axis:    -10px ──→   -5px ──→    0px ✓
           (slideDown 0.3s ease-out)
```

---

These visual mockups and wireframes provide a clear reference for implementing the authentication pages. They demonstrate:

1. **Desktop split-screen layout** with hero image and form side-by-side
2. **Mobile stacked layout** with form-only display
3. **Form element states** (default, focused, filled, error)
4. **Button states** (default, hover, active, focused, disabled)
5. **Responsive breakpoints** showing layout changes
6. **Spacing and alignment** for consistency
7. **Color usage** for visual hierarchy
8. **Typography hierarchy** from H1 to helper text
9. **Animation timelines** for smooth transitions
10. **Accessibility indicators** for keyboard/screen reader support

Use these as references during implementation to ensure consistency with the design specifications.
