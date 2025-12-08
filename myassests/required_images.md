# Required Images for Website Layouts

This document outlines the images required for each page based on the current code layout. Please update the Cloudinary keys or upload new images as needed.

## 1. Homepage (`/`)

| Section                | Description                                | Aspect Ratio                    | Min Resolution | Current Status                                    |
| :--------------------- | :----------------------------------------- | :------------------------------ | :------------- | :------------------------------------------------ |
| **Hero Section**       | Main background image.                     | Landscape (16:9)                | 1920x1080px    | Uses `collections/Symphonia/Symphonia_190_xchxis` |
| **Look 1**             | Featured Look 1 (Symphonia)                | Portrait (3:4)                  | 1000x1333px    | Uses `collections/Symphonia/Symphonia_209_gasqsx` |
| **Look 2**             | Featured Look 2 (Symphonia)                | Portrait (3:4)                  | 1000x1333px    | Uses `collections/Symphonia/Symphonia_190_xchxis` |
| **Look 3**             | Featured Look 3 (Symphonia)                | Portrait (3:4)                  | 1000x1333px    | Uses `hero-homepage_4c9fd9`                       |
| **Perfect Fit Teaser** | Image for "Perfect Fit" section.           | Square (1:1) or Landscape (4:3) | 1200x1200px    | Uses HeartstringsOfPassion__10_e3sobr`            |
| **Showroom Invite**    | Full-width background for showroom invite. | Wide Landscape (16:6)           | 1920x800px     | Uses `showroom-detail_je8xir`                     |

## 2. Collections Overview (`/kolekcije`)

| Section                   | Description                                | Aspect Ratio     | Min Resolution | Current Status                                    |
| :------------------------ | :----------------------------------------- | :--------------- | :------------- | :------------------------------------------------ |
| **Hero Background**       | Background for the page title.             | Landscape (16:9) | 1920x1080px    | Uses HeartstringsOfPassion__26_tg99tm|
| **Collection Thumbnails** | Thumbnail for each collection in the grid. | Portrait (3:4)   | 1000x1333px    | See list below                                    |

**Current Collection Thumbnails:**

- **FW25 Symphonia**: `collections/Symphonia/Symphonia_209_gasqsx`
- **SS25 Voyage Blanc**: `10_Vijola_obleka_15_hbchcq`
- **FW24 Heartstrings**: `HeartstringsOfPassion__2_qjedlh`
- **SS24 Couture Collective**: `Bianca_bela_bluza_print_detajli_rože_18_l80ggm`
- **FW23 New Elegance**: `Hlače_Enita_pepita_gube_široke_hlačnice_zavihek_na_dolžini_4_vyhiu8`
- **SS23 Bon Voyage**: `BonVoyage_Lookbook__49_azbqhx`
- **FW22 Teatro**: `Teatro_lookbook_103_pvu6bb`
- **SS22 Dolce Vita**: `Dolce_Vita___122_wsk6ub`
- **Dreamscape**: `_P0A5393_oxlnyf`

## 3. Single Collection Page (`/kolekcije/[slug]`)

| Section           | Description                             | Aspect Ratio     | Min Resolution | Current Status                                |
| :---------------- | :-------------------------------------- | :--------------- | :------------- | :-------------------------------------------- |
| **Hero Image**    | Specific hero image for the collection. | Landscape (16:9) | 1920x1080px    | Defined in `collection.images.hero` array     |
| **Gallery/Looks** | Lookbook images.                        | Portrait (3:4)   | 1000x1333px    | Fetched from Cloudinary folder or manual list |

## 4. Perfect Fit Page (`/perfect-fit`)

| Section                  | Description                     | Aspect Ratio     | Min Resolution | Current Status                                       |
| :----------------------- | :------------------------------ | :--------------- | :------------- | :--------------------------------------------------- |
| **Hero Image**           | Main hero background.           | Landscape (16:9) | 1920x1080px    | Uses `HeartstringsOfPassion__13_cqrkyk`              |
| **Zoofa Butik**          | Image for Zoofa location card.  | Landscape (4:3)  | 800x600px      | Uses Zoofa_hmxuxr               |
| **Atelje Radgona**       | Image for Atelje location card. | Landscape (4:3)  | 800x600px      | Uses cretae some clouse up of atelje  consoistent with brand
| **Step 1: Consultation** | Process Step 1 image.           | Portrait (3:4)   | 800x1066px     | Uses `Patricia Pie/Process/perfect_fit_consultation` |
| **Step 2: Atelier**      | Process Step 2 image.           | Portrait (3:4)   | 800x1066px     | Uses `Patricia Pie/Process/perfect_fit_atelier`      |
| **Step 3: Fitting**      | Process Step 3 image.           | Portrait (3:4)   | 800x1066px     | Uses `Patricia Pie/Process/perfect_fit_fitting`      |
| **Step 4: Delivery**     | Process Step 4 image.           | Portrait (3:4)   | 800x1066px     | Uses `Patricia Pie/Process/perfect_fit_delivery`     |
| **Visual Proof 1**       | Shoulders/Sleeves Detail.       | Portrait (3:4)   | 800x1066px     | Uses `collections/Symphonia/Symphonia_209_gasqsx`    |
| **Visual Proof 2**       | Waist/Silhouette Detail.        | Portrait (3:4)   | 800x1066px     | Uses `collections/Symphonia/Symphonia_190_xchxis`    |
| **Visual Proof 3**       | Material/Drape Detail.          | Portrait (3:4)   | 800x1066px     | Uses `HeartstringsOfPassion__13_cqrkyk`              |

## 5. Showroom Page (`/showroom`)

| Section             | Description                  | Aspect Ratio             | Min Resolution | Current Status                                     |
| :------------------ | :--------------------------- | :----------------------- | :------------- | :------------------------------------------------- |
| **Hero Image**      | Main hero background.        | Landscape (16:9)         | 1920x1080px    | **Currently Local**: `/images/showroom/detail.png` |
| **Barbara/Persona** | Image of Barbara or Stylist. | Portrait (3:4) or Square | 1000x1200px    | **Currently Local**: `/images/showroom/hero.png`   |

## 6. About Page (`/o-znamki`)

| Section          | Description              | Aspect Ratio                 | Min Resolution | Current Status                                     |
| :--------------- | :----------------------- | :--------------------------- | :------------- | :------------------------------------------------- |
| **Hero Image**   | Barbara Portrait (Main). | Landscape (16:9) or Portrait | 1920x1080px    | Uses `IMG_2050a_Obd_ciiyvf.jpg`                    |
| **Origin Story** | Barbara in Atelier.      | Portrait (3:4)               | 1000x1333px    | Uses `Barbara_-_PATRICIA_PIE_rax9v3.jpg`           |
| **Atelier/Team** | Image of the Atelier.    | Landscape (16:9) or Wide     | 1920x1080px    | **Currently Local**: `/images/atelier-closeup.jpg` |
