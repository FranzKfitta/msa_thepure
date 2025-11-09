# Hero Section Video Support

## Overview

The hero section of the homepage now fully supports video backgrounds in addition to static images. This implementation provides a modern, engaging homepage experience with automatic fallbacks and accessibility considerations.

## Features

### 1. **Video & Image Support**
- Upload either a video or static image as the hero background
- When a video is selected, it displays with the image as a poster/fallback
- When only an image is selected, it displays as a static background
- Responsive behavior across all device sizes

### 2. **Advanced Video Management**
- **Autoplay**: Videos autoplay on load with sound muted (required for browser policy compliance)
- **Loop**: Videos loop continuously for seamless playback
- **Mobile Optimization**: `playsinline` attribute ensures mobile playback without fullscreen
- **Poster Image**: Static poster image displays while video loads or if video fails
- **Error Handling**: Graceful fallback to poster image if video fails to load

### 3. **Accessibility Features**
- **Motion Preferences**: Respects `prefers-reduced-motion` user setting
  - Disables autoplay for users who prefer reduced motion
  - Pauses video and resets to beginning
  - Restores autoplay if preference is changed
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Proper semantic HTML structure
- **Video Tag Fallback**: Text fallback in video tag for unsupported browsers

### 4. **Performance Optimization**
- **Lazy Loading State**: CSS class added during loading (`hero--loading`)
- **Video Ready State**: CSS class added when video is ready to play (`hero--video-ready`)
- **Error State**: CSS class added if video fails to load (`hero--video-error`)
- **Object-fit Support**: CSS @supports rule ensures proper video scaling on all browsers
- **Background Attachment**: Static images use fixed attachment on desktop for enhanced effect

### 5. **Responsive Design**
- **Mobile (≤599px)**: Optimized heights and typography
- **Tablet (600-989px)**: Medium-sized hero with adjusted spacing
- **Desktop (1024px+)**: Full-size hero with enhanced effects
- All video elements scale properly across breakpoints

## Configuration

### In the Shopify Admin

1. **Background Video**: Upload a video file (Shopify supports MP4 format)
2. **Background Image**: Upload an image to use as:
   - Static background if no video is selected
   - Poster image displayed while video loads
3. **Heading**: Main headline text
4. **Subheading**: Secondary description text
5. **Button**: Optional call-to-action button with link
6. **Height**: Choose Small, Medium, or Large
7. **Text Alignment**: Choose Left, Center, or Right
8. **Overlay Opacity**: Adjust darkness from 0-100%

## Technical Implementation

### Files Modified

#### 1. **sections/hero.liquid**
- Added `data-has-video` attribute to hero container for CSS state management
- Implemented multi-source video element using `{% for %}` loop
- Added `aria-hidden="true"` to video element for accessibility
- Enhanced schema with "video" type (instead of "video_picker")
- Improved documentation with info text

#### 2. **assets/section-hero.css**
- Added responsive video sizing with `object-fit: cover`
- Added loading state styling (`.hero--loading`)
- Added video-ready state styling (`.hero--video-ready`)
- Added error state styling (`.hero--video-error`)
- Added data-attribute based CSS (`.hero[data-has-video="false"]`)
- Maintained responsive breakpoint structure

#### 3. **assets/hero.js**
- Enhanced `HeroVideoManager` class with advanced state management
- Implemented `prefers-reduced-motion` detection and listener
- Added video event handlers: `loadstart`, `canplay`, `error`
- Added promise-based play handling for modern browsers
- Implemented loading state management
- Added error logging and recovery

## Browser Support

- **Chrome/Edge**: Full support (MP4)
- **Firefox**: Full support (MP4)
- **Safari**: Full support (MP4, H.264 codec)
- **Mobile Safari**: Full support with `playsinline` attribute
- **Fallback**: Poster image displays if video format unsupported

## Video Format Guidelines

### Recommended Specifications
- **Format**: MP4 (H.264 video, AAC audio)
- **Resolution**: 1920x1080 or 3840x2160 for best quality
- **Frame Rate**: 24-30 fps
- **Bitrate**: 2-5 Mbps for optimal quality-to-size ratio
- **File Size**: Keep under 10-15 MB for web performance
- **Duration**: 10-30 seconds recommended for background videos

### Compression Tips
1. Use FFmpeg or similar tools to optimize:
   ```
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 output.mp4
   ```
2. Consider using Shopify's built-in video optimization
3. Test on various devices and connections

## Usage Examples

### Example 1: Simple Video Hero
1. Upload a 30-second video of your products
2. Upload a matching still image as poster
3. Add heading, subheading, and button
4. Select "Large" height for full-screen impact

### Example 2: Image-Only Hero (Traditional)
1. Upload only a background image
2. Leave video field empty
3. Configure text and button
4. Video features remain available for future updates

### Example 3: Video with Static Fallback
1. Upload video for modern browsers
2. Upload high-quality image for poster
3. Image shows while video loads (better UX)
4. Video plays in loop once loaded

## Performance Considerations

### Desktop Performance
- Videos autoplay on desktop with sound muted
- Fixed background attachment provides parallax effect
- Video uses GPU acceleration via `object-fit: cover`

### Mobile Performance
- `playsinline` prevents fullscreen mode
- Auto-pause when leaving viewport (browser behavior)
- Reduces bandwidth consumption on mobile networks
- Graceful fallback to poster image

### Accessibility
- Motion preferences are respected
- No autoplay if user prefers reduced motion
- Full keyboard navigation support
- Proper ARIA labels for screen readers

## Troubleshooting

### Video Won't Play
1. Verify video format is MP4 (H.264, AAC)
2. Check file size and quality settings
3. Verify poster image is set for fallback
4. Check browser console for error messages

### Video Quality Issues
1. Ensure video bitrate is 2-5 Mbps
2. Verify resolution is appropriate (1920x1080 minimum)
3. Test on different network speeds
4. Consider using Shopify's video optimization

### Poster Image Not Displaying
1. Verify image is uploaded correctly
2. Check image dimensions (wide format recommended)
3. Ensure image is set before video in schema
4. Verify file is in supported format (JPG, PNG, WebP)

### Performance Impact
1. Compress video using FFmpeg or similar
2. Monitor Core Web Vitals (LCP, FID, CLS)
3. Consider lazy loading for below-fold content
4. Use CDN for optimal delivery (Shopify CDN included)

## Future Enhancements

Possible future improvements:
- Multi-format video support (WebM, Ogg)
- Adaptive bitrate streaming (HLS/DASH)
- Video analytics and tracking
- Multiple video formats for different devices
- Advanced overlay customization
- Video chapters or interactive elements

## Testing Checklist

- [ ] Video plays on desktop Chrome
- [ ] Video plays on Safari
- [ ] Video plays on mobile devices
- [ ] Poster image displays while loading
- [ ] Poster image displays on unsupported browsers
- [ ] Heading and subheading render correctly
- [ ] Button links work properly
- [ ] Overlay opacity is correct
- [ ] Text alignment works as expected
- [ ] Responsive heights work on all breakpoints
- [ ] Motion preferences are respected
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Page load performance is acceptable

## Conclusion

The hero section video support provides a modern, accessible, and performant way to engage visitors with dynamic homepage content. The implementation prioritizes accessibility, performance, and user experience across all devices and browsers.
