# Chronicle Music Publishing Website Structure

This static Next.js App Router website introduces Chronicle Music Publishing as an independent professional music publishing house for catalogues, musical works, songwriters, artists, producers, and rights owners.

## Pages

- `/` - Premium homepage with publishing positioning, rights focus, and calls to catalogue and contact.
- `/catalogue` - Static catalogue overview using placeholder publishing assets from `lib/catalogue.ts`.
- `/contact` - Static enquiry page with an unconnected contact form.

## App Files

- `app/layout.tsx` - Root metadata, shared header, shared footer, and global styles.
- `app/page.tsx` - Homepage.
- `app/catalogue/page.tsx` - Catalogue page.
- `app/contact/page.tsx` - Contact page.
- `app/globals.css` - Tailwind directives and brand-level global styling.

## Components

- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/SectionCard.tsx`
- `components/CatalogueList.tsx`
- `components/ContactForm.tsx`

## Content Sources

- `lib/brand.ts` - Brand name, tagline, contact placeholders, and logo paths.
- `lib/catalogue.ts` - Placeholder catalogue data.

## Asset Paths

- Hero imagery: `/public/assets/hero`
- Catalogue artwork: `/public/assets/catalogue`
- Branding assets: `/public/assets/branding`
- Icons: `/public/assets/icons`
- Textures: `/public/assets/textures`

Backend, authentication, dashboards, CMS, and connected forms are intentionally excluded from this version.
