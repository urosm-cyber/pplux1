const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

const publicIds = [
  'Patricia Pie/Process/perfect_fit_consultation',
  'Patricia Pie/Process/perfect_fit_atelier',
  'Patricia Pie/Process/perfect_fit_fitting'
];

async function verifyImages() {
  console.log('Verifying images on Cloudinary...\n');

  for (const id of publicIds) {
    try {
      const result = await cloudinary.api.resource(id);
      console.log(`✅ FOUND: ${id}`);
      console.log(`   Format: ${result.format}`);
      console.log(`   Size: ${result.bytes} bytes`);
      console.log(`   URL: ${result.secure_url}\n`);
    } catch (error) {
      console.error(`❌ MISSING: ${id}`);
      console.error(`   Error: ${error.message}\n`);
    }
  }
}

verifyImages();
