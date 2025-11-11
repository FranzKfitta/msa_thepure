# Header Navigation Architecture Guide

## Overview

The new header navigation system supports a multi-level menu architecture with optimized rendering for desktop (mega-menu) and mobile (accordion) layouts. This guide explains how to set up and configure the navigation according to Shopify menu handles.

## Navigation Structure

### Recommended Navigation Hierarchy

```
Main Menu
├── Shop (with 11 subcategories)
│   ├── Category 1
│   ├── Category 2
│   ├── Category 3
│   ├── Category 4
│   ├── Category 5
│   ├── Category 6
│   ├── Category 7
│   ├── Category 8
│   ├── Category 9
│   ├── Category 10
│   └── Category 11
├── Précommande (Pre-orders)
├── Collaborations
├── Archive Sales
├── Lookbook
├── Bridal Badass
└── Brand
    ├── About
    ├── Story
    └── Contact
```

## Setting Up Navigation in Shopify Admin

### Step 1: Create Menu Handles

1. Go to **Shopify Admin > Navigation > Menus**
2. Create a new menu with handle `main-menu` (this is the default used by the theme)
3. Add menu items for each top-level navigation item:
   - Shop
   - Précommande
   - Collaborations
   - Archive Sales
   - Lookbook
   - Bridal Badass
   - Brand

### Step 2: Configure Multi-Level Menu Items

For items with submenus (e.g., "Shop" with 11 categories):

1. Select the parent item (e.g., "Shop")
2. Add child items by selecting "Edit" on the menu item
3. Add sub-items for each subcategory
4. Repeat for "Brand" to add its subsections

### Step 3: Link Shopify Resources

For each menu item, you can link to:
- Collections: `/collections/{handle}`
- Products: `/products/{handle}`
- Pages: `/pages/{handle}`
- External URLs: `https://example.com`

## Desktop Layout (Mega-Menu)

On desktop screens (1024px+), menu items with children display as a mega-menu with:
- Multi-column grid layout (auto-fit, minimum 150px columns)
- 350px+ minimum width
- Smooth hover transitions
- Drop shadow for depth

### Mega-Menu Features

- **Multi-column support**: Automatically arranges subcategories into columns
- **Section headers**: Parent items become bold section headers
- **Nested links**: Child items appear as regular links below section headers
- **Full accessibility**: Keyboard navigation with arrow keys

### CSS Classes for Mega-Menu

```css
.header__mega-menu          /* Container for mega-menu */
.header__mega-menu-list     /* Grid layout container */
.header__mega-menu-item     /* Individual menu item */
.header__mega-menu-section  /* Section with title and subitems */
.header__mega-menu-title    /* Section title (bold) */
.header__mega-menu-sublist  /* List of subitems */
.header__mega-menu-sublink  /* Subitem link */
```

## Mobile Layout (Accordion)

On mobile screens (< 1024px), the menu converts to a drawer-based accordion:
- Fixed-position left sidebar (280px width)
- Animated expand/collapse buttons for items with children
- Left border indentation for nested items
- Smooth max-height transitions
- Overlay to close menu

### Mobile Menu Features

- **Accordion pattern**: Tap expand button to reveal children
- **Multi-level nesting**: Supports unlimited nesting depth
- **Touch-friendly**: 44x44px minimum tap targets
- **Scroll support**: Menu items scrollable if content overflows
- **Focus management**: Focus moves to first item when menu opens

### Responsive Breakpoints

- **Mobile**: < 600px - Full mobile menu visible, hamburger button shown
- **Tablet**: 600px - 1023px - Mobile menu on smaller tablets, desktop menu begins to show on larger tablets
- **Desktop**: ≥ 1024px - Full mega-menu navigation, hamburger hidden

## Accessibility Features

### Keyboard Navigation

#### Desktop (Mega-Menu):
- **Tab/Shift+Tab**: Navigate between menu items
- **Arrow Right/Left**: Move between top-level menu items
- **Arrow Down**: Enter mega-menu from parent item
- **Escape**: Close any open dropdowns
- **Enter**: Activate links

#### Mobile (Accordion):
- **Tab/Shift+Tab**: Navigate through menu items
- **Enter/Space**: Toggle accordion expand/collapse
- **Arrow Down**: Open submenu and focus first item
- **Arrow Up**: Move to expand button
- **Escape**: Close entire mobile menu

### ARIA Attributes

All interactive elements include proper ARIA attributes:

```html
<!-- Menu toggle button -->
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">

<!-- Top-level menu item -->
<a aria-current="page">{{ item.title }}</a>

<!-- Expand button for accordion -->
<button aria-expanded="false" aria-label="Expand submenu: {{ item.title }}">

<!-- Semantic navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <!-- menu items -->
  </ul>
</nav>
```

### Focus Management

- Focus is trapped in mobile menu while open
- Focus returns to menu toggle when menu closes
- First focusable element receives focus when menu opens
- Focus visible outline (2px) on all interactive elements

## Localization

The theme supports English (EN) and French (FR) through Shopify's liquid translation system.

### Required Translation Keys

```yaml
general:
  nav:
    label: "Navigation"
  accessibility:
    menu: "Menu"
    close: "Close"
    expand_submenu: "Expand submenu"
general.search:
  search: "Search"
customer.account:
  title: "Account"
sections.header:
  cart: "Cart"
```

These are already included in the theme's locale files.

## Customization

### Adjusting Mega-Menu Columns

To change the number of columns in the mega-menu, edit `/assets/component-header.css`:

```css
.header__mega-menu-list {
  /* Current: auto-fit with minimum 150px */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  
  /* For exactly 3 columns: */
  /* grid-template-columns: repeat(3, 1fr); */
  
  /* For 4 columns minimum width: */
  /* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); */
}
```

### Adjusting Spacing

All spacing values use CSS custom properties (CSS variables) for consistency:

```css
.header__mega-menu {
  /* Padding inside mega-menu */
  padding: 1.5rem;
  
  /* Minimum width for mega-menu */
  min-width: 350px;
}

.header__mega-menu-list {
  /* Gap between columns */
  gap: 1.5rem;
}
```

### Mobile Drawer Width

To adjust mobile menu width, edit:

```css
.mobile-menu {
  width: 280px;  /* Current width, adjust as needed */
}

@media screen and (min-width: 600px) {
  .mobile-menu {
    width: 320px;  /* Slightly wider on tablet */
  }
}
```

## Performance Considerations

### CSS Optimization

- Mega-menus use `opacity` and `visibility` for smooth transitions
- Transform-based animations (`translateY`) for better performance
- Hardware acceleration enabled through CSS transitions

### JavaScript Optimization

- Event delegation used for menu interactions
- Single Header class instance manages all menu logic
- Minimal DOM queries during runtime
- Keyboard event handling at document level

### Best Practices

1. **Avoid too many top-level items**: Keep to 7-8 items max for desktop display
2. **Limit submenu depth**: 2-3 levels recommended for usability
3. **Clear item names**: Use short, descriptive text for menu items
4. **Test responsiveness**: Verify menu behavior across device sizes

## Troubleshooting

### Mobile Menu Not Opening

- Check that hamburger button has `data-menu-toggle` attribute
- Verify `[data-mobile-menu]` element exists in DOM
- Check browser console for JavaScript errors

### Mega-Menu Not Showing

- Confirm parent item has child items in Shopify menu
- Check `data-mega-menu` attribute exists on mega-menu container
- Verify CSS is loaded (check Network tab in DevTools)
- Ensure screen width is ≥ 1024px (desktop breakpoint)

### Focus Issues

- Verify all interactive elements are keyboard accessible
- Check focus styles are visible (2px outline)
- Test with Tab key throughout entire menu
- Use browser DevTools accessibility audit

### Styling Issues

- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Delete)
- Check for CSS conflicts with other plugins
- Verify media queries are correct for your device
- Use browser DevTools to inspect specific elements

## Testing Checklist

- [ ] Menu items appear correctly on mobile, tablet, and desktop
- [ ] Mega-menu displays on desktop with proper columns
- [ ] Accordion expands/collapses on mobile
- [ ] Keyboard navigation works (Tab, Arrow keys, Escape)
- [ ] Focus is visible and moves correctly
- [ ] Mobile menu closes on Escape key
- [ ] Menu closes when clicking outside (overlay)
- [ ] All links point to correct pages/collections
- [ ] ARIA labels are present and accurate
- [ ] Translations display correctly for all languages
- [ ] No horizontal scroll on any device
- [ ] Touch targets are at least 44x44px on mobile

## File Reference

- **Liquid Templates**: `/sections/header.liquid`
- **Snippets**: 
  - `/snippets/header-mega-menu.liquid`
  - `/snippets/header-mobile-menu-item.liquid`
- **Styles**: `/assets/component-header.css`
- **JavaScript**: `/assets/component-header.js`
- **Configuration**: `/config/settings_data.json`

## Support & Notes

- Theme uses BEM CSS naming convention
- All menu interactions are keyboard accessible (WCAG 2.1 AA)
- Mobile-first responsive design approach
- Supports deep menu nesting (tested to 5+ levels)
- Fully compatible with Shopify liquid templating
