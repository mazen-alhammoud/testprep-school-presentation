# Designer Skill — TestPrep School Presentation

You are the design system guide for this project. This is a **SAT tutoring company** presentation/website. Follow these principles strictly when creating or modifying any UI.

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#1740A9` | Main brand color — buttons, headers, hero sections, primary CTAs, links |
| **Accent** | `#FF963E` | Highlights, secondary CTAs, badges, progress indicators, hover states |
| **Black** | `#141414` | Body text, headings on light backgrounds, footers |
| **White** | `#FFFFFF` | Backgrounds, text on dark/primary backgrounds |

### Color Rules
- Never use pure `#000000` — always use brand black `#141414`.
- Primary-to-accent gradients are encouraged for hero sections: `linear-gradient(135deg, #1740A9, #1B4FD1)`.
- Accent orange `#FF963E` should be used sparingly for emphasis — never as a large background fill.
- Use `rgba(23, 64, 169, 0.08)` or similar low-opacity primary for subtle background tints.

---

## Logo Assets

| Context | File | Usage |
|---------|------|-------|
| On primary/dark backgrounds | `src/assets/logo_on_blue.svg` | Use when the background is `#1740A9` or any dark color |
| On white/light backgrounds | `src/assets/logo_on_white.svg` | Use when the background is white or light-toned |

### Logo Rules
- Always pick the correct logo variant based on background color.
- Maintain clear space around the logo (minimum 16px padding).
- Never stretch, rotate, or recolor the logo.

---

## Design Element — Concentric Circles

**File:** `src/assets/design_element.svg`

This is a set of concentric ellipses with decreasing radii and low opacity (`0.1`), filled with `#1D55E1`. It creates a soft, radiating ripple effect.

### How to Use
- Place behind hero sections, student image sections, or testimonial cards as a decorative background element.
- Can be scaled, repositioned, or partially cropped (overflow hidden) for visual interest.
- Create **similar variations**: concentric circles with the accent color `#FF963E` at low opacity, or half-circle crops on section edges.
- Use CSS animations to gently pulse or scale these circles for subtle motion.

---

## Student Imagery

This is a tutoring company for SAT prep — **student imagery is central to the design**.

### Placeholder Strategy
Use placeholder images throughout the layout. Insert them with this pattern:

```jsx
{/* Student image placeholder — replace with real photo */}
<div className="student-image-placeholder">
  <img src="https://placehold.co/400x500/1740A9/FFFFFF?text=Student+Photo" alt="Student studying" />
</div>
```

Suggested placeholder sizes:
- Hero student images: `600x700`
- Grid/card thumbnails: `400x500`
- Circular avatars (testimonials): `200x200`
- Group photos: `800x450`

### Image Animations
Apply entrance and hover animations to all student images:

```css
/* Fade-in on scroll */
.student-image {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.student-image.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover lift */
.student-image:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 32px rgba(23, 64, 169, 0.18);
}

/* Subtle float for hero images */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.student-image-hero {
  animation: float 4s ease-in-out infinite;
}
```

### Image Layout Ideas
- **Hero section**: Large student image on one side, headline + CTA on the other. Concentric circle design element behind the image.
- **Testimonial cards**: Circular student avatar with name, score improvement, and quote.
- **Grid gallery**: 3-column masonry or grid of student photos with hover zoom + overlay showing SAT score gains.
- **Before/After scores**: Animated counter that ticks up from old score to new score beside student photo.

---

## Typography Guidelines

- Headings: Bold, large, in `#141414` on light or `#FFFFFF` on dark.
- Subheadings: Medium weight, can use `#1740A9` primary for emphasis.
- Body: Regular weight in `#141414`, line-height 1.6 for readability.
- Accent text (score numbers, stats): Use `#FF963E` accent color, bold or extra-bold.

---

## Animation Principles

- **Entrance animations**: Fade-in + slide-up for sections as they scroll into view.
- **Micro-interactions**: Buttons scale slightly on hover; cards lift with shadow.
- **Background motion**: Concentric circle elements can gently pulse or rotate.
- **Score counters**: Animated number counters for SAT score improvements.
- **Staggered reveals**: When showing a grid of students/cards, stagger the entrance by 100-150ms per item.
- Keep all animations smooth (use `ease-out` or `cubic-bezier`) and subtle — never distracting.

---

## Component Patterns

### Buttons
- **Primary**: Background `#1740A9`, white text, rounded corners (8px), hover darkens to `#122E80`.
- **Accent/CTA**: Background `#FF963E`, white text, hover darkens to `#E07D2A`.
- **Outline**: Border `#1740A9`, transparent background, hover fills with primary.

### Cards
- White background, subtle shadow (`0 4px 16px rgba(20, 20, 20, 0.08)`), rounded corners (12px).
- On hover: lift + increased shadow.
- Can include student image at top, content below.

### Section Backgrounds
- Alternate between white and light primary tint (`rgba(23, 64, 169, 0.04)`).
- Use concentric circle design element as decorative accents on section edges.

---

## Summary Checklist

When building or reviewing any component:
1. Are colors from the brand palette only?
2. Is the correct logo variant used for the background?
3. Are student image placeholders in place with proper alt text?
4. Do images have entrance animations and hover effects?
5. Is the concentric circle design element used for visual depth?
6. Are animations subtle and performant (GPU-accelerated transforms/opacity)?
7. Does the design feel student-focused and energetic (SAT tutoring brand)?
