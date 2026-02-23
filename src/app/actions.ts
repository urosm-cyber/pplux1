'use server'

import { Resend } from 'resend';

export async function subscribeToNewsletter(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  
  // Honeypot check
  const honey = formData.get('_honey');
  if (honey && String(honey).length > 0) {
    return { success: true }; // Silent success for bots
  }
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return {
      error: 'Konfiguracijska napaka. Prosimo, poskusite kasneje.',
      success: false
    };
  }

  const resend = new Resend(apiKey);
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return {
      error: 'Prosimo, vnesite veljaven e-poštni naslov.',
      success: false
    };
  }

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

  if (!apiKey) {
    return { success: false, error: 'Server configuration error' };
  }

  const resend = new Resend(apiKey);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const date = formData.get('date') as string;
  const location = formData.get('location') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Send notification to Business Owner
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si', // Replace with actual business email in production
      subject: `Novo povpraševanje za termin: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo povpraševanje za termin</h2>
          <p><strong>Stranka:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || '/'}</p>
          <p><strong>Lokacija:</strong> ${location}</p>
          <p><strong>Želeni datum:</strong> ${date || 'Ni določeno'}</p>
          <p><strong>Sporočilo:</strong><br>${message || '/'}</p>
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
          <p>Zdravo ${name},</p>
          <p>Hvala za tvoje sporočilo. Barbara te bom kontaktirala v roku 24 ur, da uskladiva točen termin, ki ti najbolj ustreza.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-left: 3px solid #C9A66B;">
            <p style="margin: 5px 0; font-size: 14px;"><strong>Povzetek tvojih želja:</strong></p>
            <p style="margin: 5px 0;"><strong>Lokacija:</strong> ${location}</p>
            <p style="margin: 5px 0;"><strong>Želeni datum:</strong> ${date || '/'}</p>
            <p style="margin: 5px 0;"><strong>Telefon:</strong> ${phone || '/'}</p>
            <p style="margin: 5px 0;"><strong>Sporočilo:</strong> ${message || '/'}</p>
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

  if (!apiKey) {
    return { success: false, error: 'Konfiguracijska napaka.' };
  }

  const resend = new Resend(apiKey);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const type = formData.get('type') as string;
  const message = (formData.get('message') as string) || '';

  try {
    // 1. Notify Business
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si',
      subject: `Novo sporočilo: ${type} - ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo sporočilo s spletne strani</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Vrsta:</strong> ${type}</p>
          <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
            <p><strong>Sporočilo:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
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
          <p>Zdravo ${name},</p>
          <p>Hvala za tvoje sporočilo glede "<strong>${type}</strong>".</p>
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

  if (!apiKey) {
    return { success: false, error: 'Konfiguracijska napaka.' };
  }

  const resend = new Resend(apiKey);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = (formData.get('message') as string) || '';
  const imageUrl = formData.get('imageUrl') as string;
  const collectionTitle = formData.get('collectionTitle') as string;

  try {
    // 1. Notify Business
    await resend.emails.send({
      from: 'Patricia Pie Website <info@patriciapie.si>',
      to: 'info@patriciapie.si',
      subject: `Povpraševanje za kos: ${collectionTitle} - ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo povpraševanje za oblačilo</h2>
          <p><strong>Stranka:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Kolekcija:</strong> ${collectionTitle}</p>
          
          <div style="margin: 20px 0;">
            <p><strong>Izbrani kos:</strong></p>
            <img src="${imageUrl}" alt="Izbrani kos" style="max-width: 300px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>

          <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
            <p><strong>Sporočilo:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
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
          <p>Zdravo ${name},</p>
          <p>Veseli me, da te je nagovoril kos iz kolekcije <strong>${collectionTitle}</strong>.</p>
          
          <div style="margin: 20px 0; text-align: center;">
             <img src="${imageUrl}" alt="Izbrani kos" style="max-width: 200px; border: 1px solid #ddd; border-radius: 2px;" />
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
