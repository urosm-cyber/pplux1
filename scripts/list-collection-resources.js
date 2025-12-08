const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    try {
        console.log('--- Listing "Patricia Pie" Subfolders ---');
        const root = await cloudinary.api.sub_folders('Patricia Pie');
        console.log(root.folders.map(f => f.name));

        const collectionsFolder = root.folders.find(f => f.name.toLowerCase() === 'collections');
        
        if (collectionsFolder) {
            console.log(`\nFound "${collectionsFolder.name}" folder. Listing subfolders...`);
            const sub = await cloudinary.api.sub_folders(collectionsFolder.path);
            
            for (const folder of sub.folders) {
                console.log(`\nCollection: ${folder.name} (Path: ${folder.path})`);
                
                // Search for images in this folder
                const resources = await cloudinary.search
                    .expression(`folder:"${folder.path}" AND resource_type:image`)
                    .max_results(5) 
                    .execute();
                
                console.log(`  - Image Count: ${resources.total_count}`);
                if (resources.resources.length > 0) {
                    console.log(`  - Sample ID: ${resources.resources[0].public_id}`);
                }
            }
        }

    } catch (e) {
        console.error('Error:', e.message);
    }
}
run();
