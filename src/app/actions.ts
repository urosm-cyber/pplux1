'use server'

import { Resend } from 'resend';
import { headers } from 'next/headers';
import { escapeHtml } from '@/lib/sanitize';
import { newsletterSchema, bookingSchema, contactSchema, garmentInquirySchema } from '@/lib/schemas';
import { checkRateLimit } from '@/lib/rate-limit';
import { BOOKABLE_LOCATIONS } from '@/lib/locations';

async function getClientIp(): Promise<string> {
  const hdrs = await headers();
  return hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

export async function subscribeToNewsletter(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  // Honeypot check
  const honey = formData.get('_honey');
  if (honey && String(honey).length > 0) {
    return { success: true }; // Silent success for bots
  }

  // Rate limit
  const ip = await getClientIp();
  if (!checkRateLimit(`newsletter:${ip}`).allowed) {
    return { error: 'Preveč poskusov. Poskusite čez 15 minut.', success: false };
  }

  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return {
      error: 'Konfiguracijska napaka. Prosimo, poskusite kasneje.',
      success: false
    };
  }

  // Validate
  const parsed = newsletterSchema.safeParse({
    email: formData.get('email'),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || 'Neveljavni podatki.', success: false };
  }

  const { email } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    await resend.contacts.create({
      email: email,
      firstName: '',
      lastName: '',
      unsubscribed: false,
      audienceId: '56cfe3f5-ba65-4029-8dc1-bea38254834a'
    });

    const emailResult = await resend.emails.send({
      from: 'Patricia Pie <info@patriciapie.si>',
      to: email,
      subject: 'Dobrodošli v svetu Patricia Pie',
      html: `
        <div style="font-family: serif; color: #3D3535; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C9A66B; border-bottom: 1px solid #C9A66B; padding-bottom: 10px;">Dobrodošla.</h1>
          <p>Zdravo,</p>
          <p>Hvala, da si se pridružila naši družini. Veseli me, da boš med prvimi izvedela za naše nove kolekcije, dogodke v showroomu in zgodbe iz ateljeja.</p>
          <p>Pri Patricia Pie verjamemo, da moda ni le oblačilo, ampak občutek.</p>
          <br/>
          <p>Lep pozdrav,</p>
          <p><strong>Barbara & ekipa Patricia Pie</strong></p>
        </div>
      `
    });

    if (emailResult.error) {
      console.error('Resend Email API Error:', emailResult.error);
      return {
        success: false,
        error: `Napaka pri pošiljanju: ${emailResult.error.message}`
      };
    }

    return {
      success: true,
      message: 'Hvala za zaupanje. Dobrodošli v svetu brezčasne elegance.'
    };
  } catch (error) {
    console.error('Newsletter Unexpected Error:', error);
    return {
      error: 'Prišlo je do napake. Prosimo, poskusite ponovno ali nas kontaktirajte.',
      success: false
    };
  }
}

export async function sendBookingInquiry(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  // Honeypot check
  const honey = formData.get('_honey');
  if (honey && String(honey).length > 0) {
    return { success: true };
  }

  // Rate limit
  const ip = await getClientIp();
  if (!checkRateLimit(`booking:${ip}`).allowed) {
    return { success: false, error: 'Preveč poskusov. Poskusite čez 15 minut.' };
  }

  if (!apiKey) {
    return { success: false, error: 'Server configuration error' };
  }

  // Validate
  const parsed = bookingSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || '',
    date: formData.get('date') || '',
    location: formData.get('location'),
    message: formData.get('message') || '',
  });
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || 'Neveljavni podatki.' };
  }

  const { name, email, phone, date, location, message } = parsed.data;
  const resend = new Resend(apiKey);

  // Resolve location id to display name
  const locationObj = BOOKABLE_LOCATIONS.find((l) => l.id === location);
  const locationDisplay = locationObj ? locationObj.shortName : location;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeDate = escapeHtml(date);
  const safeLocation = escapeHtml(locationDisplay);
  const safeMessage = escapeHtml(message);

  try {
    // 1. Send notification to Business Owner
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si',
      subject: `Novo povpraševanje za termin: ${safeName}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo povpraševanje za termin</h2>
          <p><strong>Stranka:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone || '/'}</p>
          <p><strong>Lokacija:</strong> ${safeLocation}</p>
          <p><strong>Želeni datum:</strong> ${safeDate || 'Ni določeno'}</p>
          <p><strong>Sporočilo:</strong><br>${safeMessage.replace(/\n/g, '<br>') || '/'}</p>
        </div>
      `
    });

    // 2. Send confirmation to Customer
    await resend.emails.send({
      from: 'Patricia Pie <info@patriciapie.si>',
      to: email,
      subject: 'Tvoje povpraševanje je sprejeto - Patricia Pie',
      html: `
        <div style="font-family: serif; color: #3D3535; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C9A66B; border-bottom: 1px solid #C9A66B; padding-bottom: 10px;">Komaj čakam najino srečanje.</h1>
          <p>Zdravo ${safeName},</p>
          <p>Hvala za tvoje sporočilo. Barbara te bom kontaktirala v roku 24 ur, da uskladiva točen termin, ki ti najbolj ustreza.</p>

          <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-left: 3px solid #C9A66B;">
            <p style="margin: 5px 0; font-size: 14px;"><strong>Povzetek tvojih želja:</strong></p>
            <p style="margin: 5px 0;"><strong>Lokacija:</strong> ${safeLocation}</p>
            <p style="margin: 5px 0;"><strong>Želeni datum:</strong> ${safeDate || '/'}</p>
            <p style="margin: 5px 0;"><strong>Telefon:</strong> ${safePhone || '/'}</p>
            <p style="margin: 5px 0;"><strong>Sporočilo:</strong> ${safeMessage || '/'}</p>
          </div>

          <p>Se vidiva kmalu.</p>
          <p><strong>Barbara</strong></p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Booking Email Error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendContactForm(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  // Honeypot check
  const honey = formData.get('_honey');
  if (honey && String(honey).length > 0) {
    return { success: true };
  }

  // Rate limit
  const ip = await getClientIp();
  if (!checkRateLimit(`contact:${ip}`).allowed) {
    return { success: false, error: 'Preveč poskusov. Poskusite čez 15 minut.' };
  }

  if (!apiKey) {
    return { success: false, error: 'Konfiguracijska napaka.' };
  }

  // Validate
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    type: formData.get('type'),
    message: formData.get('message') || '',
  });
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || 'Neveljavni podatki.' };
  }

  const { name, email, type, message } = parsed.data;
  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeType = escapeHtml(type);
  const safeMessage = escapeHtml(message);

  try {
    // 1. Notify Business
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si',
      subject: `Novo sporočilo: ${safeType} - ${safeName}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo sporočilo s spletne strani</h2>
          <p><strong>Ime:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Vrsta:</strong> ${safeType}</p>
          <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
            <p><strong>Sporočilo:</strong></p>
            <p>${safeMessage.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    });

    // 2. Auto-reply to Customer
    await resend.emails.send({
      from: 'Patricia Pie <info@patriciapie.si>',
      to: email,
      subject: 'Hvala za tvoje sporočilo - Patricia Pie',
      html: `
        <div style="font-family: serif; color: #3D3535; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C9A66B; border-bottom: 1px solid #C9A66B; padding-bottom: 10px;">Hvala za tvoje sporočilo.</h1>
          <p>Zdravo ${safeName},</p>
          <p>Hvala za tvoje sporočilo glede "<strong>${safeType}</strong>".</p>
          <p>Odgovorimo ti v najkrajšem možnem času.</p>
          <p>Lep pozdrav,<br>Ekipa Patricia Pie</p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Contact Form Error:', error);
    return { success: false, error: 'Napaka pri pošiljanju.' };
  }
}

export async function sendGarmentInquiry(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  // Honeypot check
  const honey = formData.get('_honey');
  if (honey && String(honey).length > 0) {
    return { success: true };
  }

  // Rate limit
  const ip = await getClientIp();
  if (!checkRateLimit(`garment:${ip}`).allowed) {
    return { success: false, error: 'Preveč poskusov. Poskusite čez 15 minut.' };
  }

  if (!apiKey) {
    return { success: false, error: 'Konfiguracijska napaka.' };
  }

  // Validate
  const parsed = garmentInquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message') || '',
    imageUrl: formData.get('imageUrl'),
    collectionTitle: formData.get('collectionTitle'),
  });
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message || 'Neveljavni podatki.' };
  }

  const { name, email, message, imageUrl, collectionTitle } = parsed.data;
  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safeCollectionTitle = escapeHtml(collectionTitle);
  const safeImageUrl = escapeHtml(imageUrl);

  try {
    // 1. Notify Business
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si',
      subject: `Povpraševanje za kos: ${safeCollectionTitle} - ${safeName}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo povpraševanje za oblačilo</h2>
          <p><strong>Stranka:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Kolekcija:</strong> ${safeCollectionTitle}</p>

          <div style="margin: 20px 0;">
            <p><strong>Izbrani kos:</strong></p>
            <img src="${safeImageUrl}" alt="Izbrani kos" style="max-width: 300px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>

          <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
            <p><strong>Sporočilo:</strong></p>
            <p>${safeMessage.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    });

    // 2. Auto-reply to Customer
    await resend.emails.send({
      from: 'Patricia Pie <info@patriciapie.si>',
      to: email,
      subject: 'Tvoje povpraševanje - Patricia Pie',
      html: `
        <div style="font-family: serif; color: #3D3535; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C9A66B; border-bottom: 1px solid #C9A66B; padding-bottom: 10px;">Hvala za tvoje zanimanje.</h1>
          <p>Zdravo ${safeName},</p>
          <p>Veseli me, da te je nagovoril kos iz kolekcije <strong>${safeCollectionTitle}</strong>.</p>

          <div style="margin: 20px 0; text-align: center;">
             <img src="${safeImageUrl}" alt="Izbrani kos" style="max-width: 200px; border: 1px solid #ddd; border-radius: 2px;" />
          </div>

          <p>Tvoje sporočilo bom z veseljem prebrala in se ti kmalu javim.</p>
          <br/>
          <p>Lep pozdrav,<br>Barbara, Patricia Pie</p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Garment Inquiry Error:', error);
    return { success: false, error: 'Napaka pri pošiljanju.' };
  }
}
