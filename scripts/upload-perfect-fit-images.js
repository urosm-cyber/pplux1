const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

const images = [
  {
    name: 'perfect_fit_consultation',
    path: 'public/temp_preview/consultation.png'
  },
  {
    name: 'perfect_fit_atelier',
    path: 'public/temp_preview/atelier.png'
  },
  {
    name: 'perfect_fit_fitting',
    path: 'public/temp_preview/fitting.png'
  }
];

async function uploadImages() {
  console.log('Uploading images to Cloudinary (Patricia Pie/Process)...\n');

  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(image.path, {
        folder: 'Patricia Pie/Process',
        public_id: image.name,
        overwrite: true
      });
      console.log(`✅ Uploaded ${image.name}`);
      console.log(`   Public ID: ${result.public_id}`);
      console.log(`   URL: ${result.secure_url}\n`);
    } catch (error) {
      console.error(`❌ Error uploading ${image.name}:`, error.message);
    }
  }
}

uploadImages();
