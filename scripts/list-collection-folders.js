// List all folders in collections directory
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function listCollectionFolders() {
  try {
    console.log('Listing all folders in collections/...\n');
    
    // Get all folders
    const result = await cloudinary.api.sub_folders('collections');
    
    console.log(`Found ${result.folders.length} folders:\n`);
    result.folders.forEach(folder => {
      console.log(`  - ${folder.name}`);
      console.log(`    Path: collections/${folder.name}\n`);
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

listCollectionFolders();
