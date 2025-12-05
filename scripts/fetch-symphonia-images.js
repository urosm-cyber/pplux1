// Fetch Symphonia collection images from Cloudinary
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function fetchSymphoniaImages() {
  try {
    console.log('Fetching Symphonia collection images with tag "collection-page"...\n');
    
    // Fetch images with tag 'collection-page'
    const result = await cloudinary.api.resources_by_tag('collection-page', {
      type: 'upload',
      prefix: 'collections/Symphonia',
      max_results: 500,
      resource_type: 'image'
    });

    console.log(`Found ${result.resources.length} images:\n`);
    
    // Process and categorize images
    const heroes = [];
    const looks = [];
    
    result.resources.forEach(img => {
      const publicId = img.public_id;
      const aspectRatio = img.width / img.height;
      
      // Landscape images (aspect > 1.2) = hero
      // Portrait/square = looks
      if (aspectRatio > 1.2) {
        heroes.push({
          publicId,
          size: `${img.width}x${img.height}`,
          ratio: aspectRatio.toFixed(2)
        });
      } else {
        looks.push({
          publicId,
          size: `${img.width}x${img.height}`,
          ratio: aspectRatio.toFixed(2)
        });
      }
    });

    // Print results
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('HERO IMAGES (landscape):');
    console.log('═══════════════════════════════════════════════════════════════');
    heroes.forEach(img => {
      console.log(`  ${img.publicId}`);
      console.log(`    → ${img.size} (ratio: ${img.ratio})\n`);
    });

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('LOOK IMAGES (portrait/square):');
    console.log('═══════════════════════════════════════════════════════════════');
    looks.forEach(img => {
      console.log(`  ${img.publicId}`);
      console.log(`    → ${img.size} (ratio: ${img.ratio})\n`);
    });

    // Generate data structure for copy-paste
    console.log('\n\n═══════════════════════════════════════════════════════════════');
    console.log('COPY THIS INTO YOUR CODE:');
    console.log('═══════════════════════════════════════════════════════════════\n');
    
    console.log(`const symphoniaImages = {
  hero: [${heroes.length > 0 ? '\n    ' + heroes.map(img => `'${img.publicId}'`).join(',\n    ') + '\n  ' : ''}],
  looks: [${looks.length > 0 ? '\n    ' + looks.map(img => `'${img.publicId}'`).join(',\n    ') + '\n  ' : ''}]
};\n`);

    console.log(`\nSummary: ${result.resources.length} total images`);
    console.log(`  - Heroes: ${heroes.length}`);
    console.log(`  - Looks: ${looks.length}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.error && error.error.message) {
      console.error('Cloudinary error:', error.error.message);
    }
  }
}

fetchSymphoniaImages();
