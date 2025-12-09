# Project Status & Developer Guide (Dec 2025)

## 1. Branching Strategy & Deployment

- **`main` Branch**: Production code. Deployed automatically to Vercel.
  - **Status**: Tagged as `v1.0` (Stable Release, Dec 9, 2025).
- **`dev` Branch**: Active development.
  - **Protocol**: **ALL** new features and changes must be made on `dev`.
  - **Deploy**: Merge `dev` -> `main` to release changes to the live site.

## 2. Infrastructure

- **Hosting**: Vercel (IP: `76.76.21.21`).
- **Domain**: `patriciapie.si` (DNS managed via NeoServ).
  - **Root (`@`)**: Points to `76.76.21.21` (Fixed 403 error on mobile).
  - **WWW**: CNAME to Vercel.

## 3. Cloudinary Integration

- **Folder Structure**: Images are dynamically fetched from folders in `Patricia Pie/Collections/`.
- **Known Issue**: The folder `Patricia Pie/Collections/New Elegance` exists and contains 70+ images.
- **Caching**:
  - `src/lib/cloudinary-server.ts` uses Next.js `cache` with a `revalidate` time of **3600 seconds (1 hour)**.
  - If images don't appear immediately after upload, wait for cache revalidation or temporarily set `revalidate: 0` in dev to debug.

## 4. Key Files

- `src/app/kolekcije/[slug/page.tsx`: Handles dynamic collection rendering.
- `src/app/zapiski/data.ts`: Content source for the Journal (Zapiski) page. Dates updated to Dec 2025.
- `src/lib/cloudinary-server.ts`: Server-side Cloudinary fetching logic.

## 5. Recent Fixes (Session Dec 9, 2025)

- **New Elegance Gallery**: Fixed incorrect folder path and cache issue. Now displaying full gallery.
- **Mobile Access**: Fixed DNS A-record pointing to old server.
- **Zapiski**: Updated content dates and fixed broken image links.
