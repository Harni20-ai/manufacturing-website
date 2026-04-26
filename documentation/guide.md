# Industrial Manufacturing Template Documentation

## Installation Guide
1. Download the project folder.
2. Ensure you have an internet connection (for Google Fonts and Font Awesome).
3. Open `pages/index.html` in any modern web browser.

## Customization Guide
### Colors
All colors are defined as CSS variables in `assets/css/style.css`.
To change the primary accent (industrial orange), modify `--accent-primary`.

### Typography
The template uses **Poppins** for body text and **Oswald** for headings.
You can change these in the `@import` section of `style.css`.

### Theme Switching
The theme switching logic is handled in `assets/js/main.js`. It detects system preferences and saves user choice in `localStorage`.

### RTL Support
To enable RTL layout, add `dir="rtl"` to the `<html>` tag and ensure `assets/css/rtl.css` is linked.

## Page Explanations
- `index.html`: Main landing page with hero, featured products, and stats.
- `shop.html`: Catalog page with filtering logic UI.
- `product.html`: Detailed view of a single industrial component.
- `admin-dashboard.html`: Secure management interface for administrators.
- `user-dashboard.html`: Customer portal for order tracking and profile management.

## Credits
- Icons: Font Awesome
- Fonts: Google Fonts (Poppins, Oswald)
- Images: Generated via AI for industrial accuracy

## Changelog
- v1.0.0 (2026-04-26): Initial production-ready release.
