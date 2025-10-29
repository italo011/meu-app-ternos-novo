# VM-TERNOS Design Guidelines

## Design Approach: Reference-Based (Luxury Retail)

Drawing inspiration from premium fashion brands and Airbnb's trust-building patterns, combined with Apple's minimalist sophistication. The design must convey craftsmanship, tradition, and premium quality while maintaining approachability for Brazilian tailoring clients.

## Core Design Principles

1. **Sophisticated Restraint**: Embrace negative space and careful composition over busy layouts
2. **Craftsmanship Focus**: Every element should reflect the attention to detail found in bespoke tailoring
3. **Trust & Warmth**: Balance premium aesthetics with welcoming, accessible interactions
4. **WhatsApp-First**: All conversion paths lead seamlessly to WhatsApp engagement

## Typography System

**Primary Font**: Playfair Display (Google Fonts) - for headings, conveying classic elegance and craftsmanship
**Secondary Font**: Inter (Google Fonts) - for body text, ensuring modern readability

**Hierarchy**:
- Hero Heading: text-6xl md:text-7xl lg:text-8xl, font-bold (Playfair Display)
- Section Headings: text-4xl md:text-5xl lg:text-6xl, font-semibold (Playfair Display)
- Subsection Headings: text-2xl md:text-3xl, font-medium (Playfair Display)
- Body Text (Large): text-lg md:text-xl, font-normal, leading-relaxed (Inter)
- Body Text (Standard): text-base md:text-lg, font-normal, leading-relaxed (Inter)
- Microcopy/Labels: text-sm, font-medium, uppercase tracking-wide (Inter)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 consistently
- Component padding: p-4 (mobile), p-8 (tablet), p-12 or p-16 (desktop)
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-8 for grids, gap-4 for tight groupings
- Maximum content width: max-w-7xl for full sections, max-w-4xl for text-heavy content

**Grid System**: 12-column responsive grid with strategic breakpoints
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns for features/gallery (md:grid-cols-2)
- Desktop: 3 columns for gallery (lg:grid-cols-3), 2 columns for content sections

## Page Structure & Sections

### 1. Navigation
**Fixed header with transparent-to-solid transition on scroll**
- Logo (left-aligned, h-12 md:h-16)
- Minimal navigation links (About, Gallery, Contact - smooth scroll anchors)
- Primary CTA button "Falar no WhatsApp" (right-aligned)
- Hamburger menu for mobile with slide-in panel
- Backdrop blur effect when scrolled

### 2. Hero Section (90vh)
**Full-viewport impact with embedded video**
- Streamable video embed (responsive iframe, 16:9 aspect ratio)
- Overlay with gradient for readability
- Centered content overlay containing:
  - Logo (h-16 md:h-20)
  - Headline: "Alfaiataria Sob Medida com Mais de 5 Anos de Tradição"
  - Subheadline: Medium-length "Sobre Nós" version
  - Primary CTA button "Falar no WhatsApp" (with backdrop-blur background)
  - Trust indicator: "Resposta em minutos via WhatsApp" (small text below button)

### 3. About Section (py-24 md:py-32)
**Two-column layout with image and content**
- Left column: Store photo from Imgur (rounded corners, shadow)
- Right column: 
  - Section label "Sobre Nós" (uppercase, small, letter-spaced)
  - Long version "Sobre Nós" text
  - Craftsmanship highlights (3 key points with checkmark icons)
  - Secondary WhatsApp CTA

### 4. Craftsmanship/Values Section (py-20 md:py-28)
**Three-column feature grid**
- Each column contains:
  - Icon (Heroicons: scissors, sparkles, user-group)
  - Feature title
  - Brief description
- Features: "Sob Medida", "Acabamento Impecável", "Atendimento Personalizado"

### 5. Gallery Section (py-24 md:py-32)
**Masonry-style image grid**
- Section heading "Nosso Trabalho"
- 3-column grid on desktop (lg:grid-cols-3), 2 on tablet, 1 on mobile
- Store image repeated with different crops/treatments
- Each image with subtle hover scale effect (transform scale-105)
- Image captions from provided legend texts
- Lightbox functionality for full-view (click to expand)

### 6. Video Presentation Section (py-20 md:py-28)
**Centered video embed with context**
- Section heading "Conheça Nossa Alfaiataria"
- Embedded Streamable video (max-w-4xl, responsive aspect-ratio-video)
- Caption below video
- "Gostou? Fale Conosco" CTA button below

### 7. CTA Section (py-24 md:py-32)
**Full-width emphasis block**
- Centered layout with maximum impact
- Large heading: "Pronto para Seu Terno Sob Medida?"
- Supporting text emphasizing personalization
- Oversized WhatsApp CTA button
- Contact info display: WhatsApp number with icon
- Trust elements: "Atendimento rápido" + "Sem compromisso"

### 8. Footer (py-12 md:py-16)
**Comprehensive information architecture**
- Three-column layout:
  - Column 1: Logo, tagline, social media icons (if applicable)
  - Column 2: Quick links (Sobre, Galeria, Contato)
  - Column 3: Contact info (WhatsApp, hours, address if available)
- Bottom bar: Copyright, meta description (short version)

## Component Library

### WhatsApp CTA Buttons
**Primary Button** (large, prominent):
- Rounded corners (rounded-full)
- Ample padding (px-8 py-4 md:px-12 md:py-5)
- Icon + Text: WhatsApp icon (Heroicons chat-bubble-left-right) + "Falar no WhatsApp"
- On hero/images: backdrop-blur-md with semi-transparent background

**Secondary Button** (standard size):
- Similar styling, smaller padding (px-6 py-3)
- Used in content sections

**Floating Chat Button** (fixed position):
- Bottom-right corner (bottom-6 right-6 md:bottom-8 md:right-8)
- Circular (w-16 h-16)
- WhatsApp icon only
- Pulsing animation to draw attention
- Tooltip on hover: "Clique para conversar com a VM-TERNOS"
- High z-index (z-50)

### Image Treatments
**Hero/Featured Images**:
- Subtle vignette overlay
- Aspect ratio maintained with object-fit-cover
- Lazy loading for performance

**Gallery Images**:
- Rounded corners (rounded-lg)
- Smooth transitions (transition-transform duration-300)
- Hover scale effect
- Shadow on hover (hover:shadow-2xl)

### Video Embed
**Responsive Container**:
```
Aspect ratio box (16:9)
Streamable iframe with full width
Rounded corners (rounded-xl)
Shadow treatment (shadow-2xl)
```

## Icons
**Heroicons (via CDN)** - outline style for consistency:
- chat-bubble-left-right (WhatsApp CTAs)
- scissors (craftsmanship)
- sparkles (quality)
- user-group (personalized service)
- check-circle (feature checkmarks)
- phone (contact)

## Animations
**Subtle, sophisticated motion** - use sparingly:
- Fade-in on scroll for sections (opacity + translate-y)
- Floating animation for WhatsApp button (gentle bounce)
- Hover states: scale, shadow transitions
- Navigation transition on scroll
- NO distracting auto-play animations
- All animations: transition-all duration-300 ease-in-out

## Images

### Large Hero Image: NO
Instead, use embedded Streamable video as hero element with overlay content.

### Image Placements:
1. **About Section**: Store photo from https://i.imgur.com/MorCtFi.jpeg - professional storefront image, use at approximately 600x800px in desktop layout, positioned left column
2. **Gallery Section**: Repeat store image with different crops/treatments (detail shots, wide shots, different aspect ratios) to create visual variety - 6-9 images total
3. **Logo**: https://i.imgur.com/nkUMX49.jpeg - use in navigation (height: 48-64px) and footer

### Image Description Guidance:
- Store photo shows professional tailoring workspace/storefront
- Crop variations: close-up details, wide establishing shots, vertical/horizontal orientations
- Apply consistent filters/treatments for cohesive gallery aesthetic

## Accessibility
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Proper heading hierarchy (h1 → h6)
- Alt text for all images describing craftsmanship details
- ARIA labels for icon-only buttons
- Keyboard navigation support for all CTAs and navigation
- Sufficient contrast ratios maintained throughout

## WhatsApp Integration
**Link Structure**: `https://wa.me/5535984333493?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20ternos%20da%20VM-TERNOS.`

**Implementation Points**:
- Hero CTA, Section CTAs, Floating button, Footer contact - ALL link to WhatsApp
- Consistent messaging across all touchpoints
- Target="_blank" for WhatsApp links
- Analytics tracking on CTA clicks (if implemented)

## Responsive Behavior
- Mobile-first approach
- Hamburger navigation below md breakpoint
- Single-column layouts on mobile
- Touch-friendly button sizes (minimum 44x44px)
- Video scales appropriately on all devices
- Gallery adapts from 1 → 2 → 3 columns