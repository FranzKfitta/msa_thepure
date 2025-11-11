# Collaborations Page Setup Instructions

## Overview
A new collaborations page has been created for the Sakina M'SA x APC collection with the following features:

## Files Created
1. **Template**: `/templates/page.collaborations.json`
2. **Sections**: 
   - `/sections/collaborations-hero.liquid` - Hero section with pre-order announcement
   - `/sections/collaborations.liquid` - Main content section
3. **Assets**:
   - `/assets/section-collaborations-hero.css` - Hero section styling
   - `/assets/section-collaborations.css` - Main content styling

## Page Structure
- **Hero Section**: Prominent announcement with pre-order discount information
- **Main Content**: Editorial storytelling about the collaboration
- **Product Features**: Sections for bombers and varsity jackets
- **Community Section**: Social media buzz and community response
- **Call-to-Action**: Direct link to shop the collection
- **Newsletter Signup**: Email capture form

## Setup Instructions

### 1. Create the Page in Shopify Admin
1. Go to Shopify Admin → Online Store → Pages
2. Click "Add page"
3. Page title: "Collaborations"
4. Page handle: `collaborations` (this will make it accessible at `/pages/collaborations`)
5. Leave content empty (the page content is managed through sections)
6. In the "Theme template" dropdown, select "page.collaborations"
7. Save the page

### 2. Add to Navigation Menu
1. Go to Shopify Admin → Online Store → Navigation
2. Edit your main menu
3. Add a new menu item:
   - Title: "Collaborations"
   - Link: Select the "Collaborations" page you just created
4. Save the menu

### 3. Customize the Page Content
1. Go to Online Store → Themes → Customize
2. Select the "Collaborations" page from the dropdown at the top
3. Customize each section:
   - **Collaborations Hero**: Update text, discount code, and add background image
   - **Collaborations**: Update main content and add product images
   - **Newsletter**: Customize newsletter text if needed

### 4. Product Collection Setup
Create a collection for the collaboration products:
1. Go to Products → Collections
2. Create collection with handle: `sakina-msa-x-apc`
3. Add the collaboration products to this collection

## Default Content
The page includes pre-configured content for:
- Hero announcement: "Limited Pre-Order Available Now"
- Discount code: "PREORDER15" for 15% off
- Main heading: "WHEN HERITAGE MEETS THE AVANT-GARDE"
- Product sections for Bombers and Varsity Jackets
- Newsletter signup section

## Mobile Responsiveness
The page is fully responsive with:
- Optimized layouts for mobile, tablet, and desktop
- Touch-friendly interface elements
- Proper text sizing and spacing
- Accessible navigation and form elements

## Notes
- All images should be uploaded through the Shopify theme customizer
- Text content can be edited directly in the theme customizer
- The page uses the same styling patterns as other pages in the theme
- Navigation menu items are managed through Shopify's navigation system