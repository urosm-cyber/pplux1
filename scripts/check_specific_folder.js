const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    const folderName = "collection/new elegance"; 
    console.log(`--- Checking folder: '${folderName}' ---`);
    try {
        const results = await cloudinary.search
            .expression(`folder:"${folderName}"`)
            .max_results(10)
            .execute();

        console.log(`Found ${results.resources.length} resources.`);
        results.resources.forEach(res => {
            console.log(`- ${res.public_id}`);
        });

    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
