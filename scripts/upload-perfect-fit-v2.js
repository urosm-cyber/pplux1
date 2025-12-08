const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

const images = [
  {
    public_id: 'Patricia Pie/Process/perfect_fit_atelier',
    path: 'C:/Users/UM/.gemini/antigravity/brain/ea91ec35-3562-4061-9479-9f5f1e99f3c9/perfect_fit_atelier_modern_1765055925620.png'
  },
  {
    public_id: 'Patricia Pie/Process/perfect_fit_fitting',
    path: 'C:/Users/UM/.gemini/antigravity/brain/ea91ec35-3562-4061-9479-9f5f1e99f3c9/perfect_fit_fitting_pants_1765055947652.png'
  }
];

async function uploadImages() {
  console.log('Overwriting images on Cloudinary...\n');

  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(image.path, {
        public_id: image.public_id,
        overwrite: true
      });
      console.log(`✅ Updated ${image.public_id}`);
      console.log(`   URL: ${result.secure_url}\n`);
    } catch (error) {
      console.error(`❌ Error uploading ${image.public_id}:`, error.message);
    }
  }
}

uploadImages();
