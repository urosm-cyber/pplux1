const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    try {
        const folder = 'collections/Symphonia';
        console.log(`--- Listing images in "${folder}" ---`);
        
        const result = await cloudinary.search
            .expression(`folder:"${folder}" AND resource_type:image`)
            .max_results(5)
            .execute();
        
        console.log('Found resources:');
        result.resources.forEach(r => {
            console.log(`- Public ID: "${r.public_id}"`);
        });

    } catch (e) {
        console.error('Error:', e.message);
    }
}
run();
