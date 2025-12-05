// Comprehensive search for Couture Collective images
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function comprehensiveSearch() {
  console.log('=== COMPREHENSIVE SEARCH FOR COUTURE COLLECTIVE ===\n');
  
  // 1. Check all available tags
  console.log('1. Checking available tags...');
  try {
    const tags = await cloudinary.api.tags({ max_results: 100 });
    console.log(`Found ${tags.tags.length} tags:`);
    tags.tags.forEach(tag => console.log(`  - ${tag}`));
    console.log('');
  } catch (error) {
    console.log('Could not fetch tags:', error.message, '\n');
  }
  
  // 2. Try with 'collection-image' tag (no prefix filter)
  console.log('2. Trying tag "collection-image" (all folders)...');
  try {
    const result = await cloudinary.api.resources_by_tag('collection-image', {
      type: 'upload',
      max_results: 20
    });
    console.log(`Found ${result.resources.length} images with tag "collection-image":`);
    result.resources.forEach(img => console.log(`  - ${img.public_id}`));
    console.log('');
  } catch (error) {
    console.log('Error:', error.message, '\n');
  }
  
  // 3. Search in collections/ folder (all subfolders)
  console.log('3. Listing all images in collections/ folder...');
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'collections/',
      max_results: 50
    });
    console.log(`Found ${result.resources.length} total images in collections/`);
    
    // Group by folder
    const folders = {};
    result.resources.forEach(img => {
      const parts = img.public_id.split('/');
      if (parts.length >= 2) {
        const folder = parts[1];
        if (!folders[folder]) folders[folder] = [];
        folders[folder].push(img.public_id);
      }
    });
    
    console.log('\nFolders found:');
    Object.keys(folders).forEach(folder => {
      console.log(`  - ${folder} (${folders[folder].length} images)`);
    });
    console.log('');
  } catch (error) {
    console.log('Error:', error.message, '\n');
  }
}

comprehensiveSearch();
