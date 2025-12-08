const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Manually parse .env.local
try {
  const envConfig = fs.readFileSync(path.resolve(__dirname, '../.env.local'), 'utf8');
  envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
} catch (e) {
  console.error("Could not read .env.local file");
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const folders = [
  'Patricia Pie/Collections/Symphonia',
  'Patricia Pie/Collections/Heartstrings of  passion',
  'Patricia Pie/Collections/Couture Collective',
  'Patricia Pie/Collections/Voyage Blanc',
  'Patricia Pie/Collections/New Elegance',
  'Patricia Pie/Collections/Bon-Voyage',
  'Patricia Pie/Collections/Teatro',
  'Patricia Pie/Collections/Dolce Vita',
  'Patricia Pie/Collections/Dreamscape'
];

async function checkCollections() {
  console.log('Checking Cloudinary Collections...\n');

  for (const folder of folders) {
    try {
      const result = await cloudinary.search
        .expression(`folder:"${folder}"`)
        .max_results(1) 
        .execute();
      
      console.log(`✅ ${folder}: Found ${result.total_count} images`);
    } catch (error) {
      console.error(`❌ ${folder}: Error - ${error.message}`);
    }
  }
}

checkCollections();
