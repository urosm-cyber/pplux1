const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- 1. Verifying Zapiski Images ---");
    const zapiskiImages = [
        "Patricia Pie/Collections/Symphonia/Symphonia_209_gasqsx",
        "HeartstringsOfPassion__13_cqrkyk",
        "HeartstringsOfPassion__26_tg99tm",
        "Bluza_Pia_1_qelzxb", 
        "Patricia Pie/Collections/Symphonia/Symphonia_190_xchxis"
    ];

    for (const img of zapiskiImages) {
        try {
            const res = await cloudinary.api.resource(img);
            console.log(`[VALID] ${img}`);
        } catch (e) {
            console.log(`[INVALID] ${img}: ${e.message}`);
             // If invalid, try to find a replacement?
        }
    }

    console.log("\n--- 2. Searching for New Elegance Folder ---");
    try {
        // List root folders
        console.log("Root Folders:");
        const rootFolders = await cloudinary.api.root_folders();
        // console.log(rootFolders); // Might be too large
        
        // Search for folders matching 'elegance'
        const searchRes = await cloudinary.search
            .expression('resource_type:image AND (folder:*elegance* OR folder:*Elegance*)')
            .max_results(50)
            .execute();
            
        const folders = new Set();
        searchRes.resources.forEach(r => folders.add(r.folder));
        
        console.log("Found folders containing 'elegance' images:");
        folders.forEach(f => console.log(`- ${f}`));

        // Explicit check for user provided path
        const userPath = "collection/new elegance";
        console.log(`Checking user path specifically: ${userPath}`);
        const userPathRes = await cloudinary.search.expression(`folder:"${userPath}"`).execute();
        console.log(`Found ${userPathRes.resources.length} resources in '${userPath}'`);
        if(userPathRes.resources.length > 0) {
             userPathRes.resources.forEach(r => console.log(`  Preview: ${r.public_id}`));
        }

    } catch (e) {
        console.error("Error searching folders:", e.message);
    }
}
run();
