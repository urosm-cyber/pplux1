const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- Listing ALL 'New_Elegance' images ---");
    try {
        const results = await cloudinary.search
            .expression('public_id:*New_Elegance*')
            .max_results(50) 
            .execute();

        console.log(`Found ${results.resources.length} images.`);
        const ids = results.resources.map(r => r.public_id);
        
        // Output as a JSON array so I can copy-paste
        console.log(JSON.stringify(ids, null, 2));
        
        // Also check for Symphonia images for Zapiski
         console.log("\n--- Checking for Symphonia Replacements ---");
         const symphRes = await cloudinary.search
            .expression('public_id:*Symphonia*')
            .max_results(5)
            .execute();
        symphRes.resources.forEach(r => console.log(r.public_id));

    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
