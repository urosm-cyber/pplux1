const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    try {
        console.log('--- Listing "Patricia Pie/Collections" Subfolders ---');
        // We know 'Patricia Pie/Collections' exists from previous step.
        // Let's list its children to get exact names.
        const result = await cloudinary.api.sub_folders('Patricia Pie/Collections');
        
        console.log('Found folders:');
        result.folders.forEach(f => {
            console.log(`- NAME: "${f.name}"  | PATH: "${f.path}"`);
        });

    } catch (e) {
        console.error('Error:', e.message);
    }
}
run();
