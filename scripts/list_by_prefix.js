const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- Listing Resources by Prefix (Admin API) ---");
    // Try various prefixes that might match the user's "New Elegance" request
    const prefixes = ["Bomber_", "New_Elegance", "Elena_"]; 
    
    for (const prefix of prefixes) {
        console.log(`\nChecking prefix: '${prefix}'`);
        try {
            const res = await cloudinary.api.resources({
                type: 'upload',
                prefix: prefix, 
                max_results: 20
            });
            
            console.log(`Found ${res.resources.length}:`);
            res.resources.forEach(r => console.log(r.public_id));
        } catch (e) {
            console.error(`Error listing '${prefix}':`, e.message);
        }
    }
}
run();
