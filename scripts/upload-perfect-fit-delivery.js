const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function uploadImage() {
  console.log('Uploading delivery image...\n');
  try {
    const result = await cloudinary.uploader.upload('C:/Users/UM/.gemini/antigravity/brain/ea91ec35-3562-4061-9479-9f5f1e99f3c9/perfect_fit_delivery_1765056890494.png', {
      public_id: 'Patricia Pie/Process/perfect_fit_delivery',
      overwrite: true
    });
    console.log(`✅ Uploaded Patricia Pie/Process/perfect_fit_delivery`);
    console.log(`   URL: ${result.secure_url}\n`);
  } catch (error) {
    console.error(`❌ Error uploading:`, error.message);
  }
}

uploadImage();
