import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Prosimo, vnesite veljaven e-poštni naslov.').max(254),
});

export const bookingSchema = z.object({
  name: z.string().min(1, 'Ime je obvezno.').max(200),
  email: z.string().email('Neveljaven e-poštni naslov.').max(254),
  phone: z.string().max(50).optional().default(''),
  date: z.string().max(50).optional().default(''),
  location: z.string().min(1, 'Lokacija je obvezna.').max(200),
  message: z.string().max(5000).optional().default(''),
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Ime je obvezno.').max(200),
  email: z.string().email('Neveljaven e-poštni naslov.').max(254),
  type: z.string().min(1).max(200),
  message: z.string().max(5000).optional().default(''),
});

export const garmentInquirySchema = z.object({
  name: z.string().min(1, 'Ime je obvezno.').max(200),
  email: z.string().email('Neveljaven e-poštni naslov.').max(254),
  message: z.string().max(5000).optional().default(''),
  imageUrl: z.string().url().max(500).refine(
    (url) => url.startsWith('https://res.cloudinary.com/'),
    'Neveljavna slika.'
  ),
  collectionTitle: z.string().min(1).max(200),
});
