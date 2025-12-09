const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- Searching for Showroom & Atelier Images ---");
    
    try {
        const results = await cloudinary.search
            .expression('folder:"Patricia Pie"* AND (filename:*showroom* OR filename:*atelier* OR filename:*process* OR filename:*šivanje* OR filename:*blago* OR filename:*salon*)')
            .max_results(10)
            .execute();

        results.resources.forEach(res => {
            console.log(`Found: ${res.public_id} (${res.folder})`);
        });
        
        if (results.resources.length === 0) {
             console.log("No specific images found. Listing generic Symphonia/Dolce Vita for fallback.");
             const fallback = await cloudinary.search
                .expression('folder:"Patricia Pie"*')
                .max_results(5)
                .execute();
             fallback.resources.forEach(res => {
                console.log(`Fallback: ${res.public_id}`);
             });
        }

    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
