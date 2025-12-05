// Fetch Couture Collective with correct tag
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function fetchCoutureCollective() {
  console.log('Fetching with tag "collection-couture-collective"...\n');
  
  try {
    const result = await cloudinary.api.resources_by_tag('collection-couture-collective', {
      type: 'upload',
      max_results: 100
    });
    
    console.log(`Found ${result.resources.length} images\n`);
    
    const heroes = [];
    const looks = [];
    
    result.resources.forEach(img => {
      const publicId = img.public_id;
      const aspectRatio = img.width / img.height;
      
      if (aspectRatio > 1.2) {
        heroes.push({ publicId, size: `${img.width}x${img.height}`, ratio: aspectRatio.toFixed(2) });
      } else {
        looks.push({ publicId, size: `${img.width}x${img.height}`, ratio: aspectRatio.toFixed(2) });
      }
    });

    console.log('═══════════════════════════════════════════════════════════════');
    console.log(`HEROES: ${heroes.length}`);
    console.log('═══════════════════════════════════════════════════════════════');
    heroes.forEach(img => console.log(`  ${img.publicId}`));

    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log(`LOOKS: ${looks.length}`);
    console.log('═══════════════════════════════════════════════════════════════');
    looks.forEach(img => console.log(`  ${img.publicId}`));

    console.log('\n\n═══ COPY THIS ═══\n');
    console.log(`const coutureCollectiveImages = {
  hero: [${heroes.length > 0 ? '\n    ' + heroes.map(i => `'${i.publicId}'`).join(',\n    ') + '\n  ' : ''}],
  looks: [${looks.length > 0 ? '\n    ' + looks.map(i => `'${i.publicId}'`).join(',\n    ') + '\n  ' : ''}]
};\n`);

    console.log(`Total: ${result.resources.length} | Heroes: ${heroes.length} | Looks: ${looks.length}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchCoutureCollective();
