const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- 1. Fixing Zapiski Images ---");
    // Search for Symphonia images loosely
    const symphoniaQueries = ["Symphonia_209", "Symphonia_190"];
    for (const q of symphoniaQueries) {
        try {
            const res = await cloudinary.search
                .expression(`public_id:*${q}*`)
                .max_results(1)
                .execute();
            if (res.resources.length > 0) {
                console.log(`[FOUND] ${q} -> ${res.resources[0].public_id}`);
            } else {
                console.log(`[MISSING] ${q}`);
            }
        } catch (e) {
            console.error(`Error searching ${q}: ${e.message}`);
        }
    }

    console.log("\n--- 2. Deep Search for 'New Elegance' Images ---");
    // Search for any image with 'elegance' in public_id or folder, hoping to find the user's upload
    try {
        const res = await cloudinary.search
            .expression('resource_type:image AND (public_id:*elegance* OR folder:*elegance*)')
            .max_results(50)
            .execute();
            
        console.log(`Found ${res.resources.length} generic 'elegance' matches.`);
        const folders = new Set();
        res.resources.forEach(r => {
            folders.add(r.folder);
            // console.log(`${r.public_id} (Folder: ${r.folder})`);
        });
        
        console.log("Folders found containing 'elegance':");
        folders.forEach(f => console.log(`- ${f}`));
        
        // Check finding 1-2 examples to verify content
        if (res.resources.length > 0) {
             console.log("Example IDs:");
             res.resources.slice(0, 5).forEach(r => console.log(`- ${r.public_id}`));
        }

    } catch (e) {
        console.error("Error deep searching:", e.message);
    }
}
run();
