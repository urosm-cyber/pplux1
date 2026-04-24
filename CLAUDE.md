# patriciapie.si (pplux1)

## UI Sync Rule
Navbar and Footer must match shop.patriciapie.si (eshop-pp) exactly.
When changing Header.tsx or Footer.tsx in this repo, apply the
same change to the other repo before committing.

Repos:
- patriciapie.si → F:\DEVUM\pplux1
- e-shop         → F:\DEVUM\eshop-pp

## Key Paths
- `src/components/layout/Header.tsx` — desktop nav (mirrors shop Navbar)
- `src/components/layout/MobileMenu.tsx` — mobile nav (mirrors shop MobileNavMenu)
- `public/logos/` — shared logo assets (logo-black.png, logo-white.png)

## Design Tokens
- Camel action color: `#947840`
- Deep Warm text: `#3D3535`
- Warm White bg: `#FDFBF9`
