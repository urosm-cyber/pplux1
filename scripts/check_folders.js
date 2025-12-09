const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- 1. Subfolders of 'Patricia Pie/Collections' ---");
    try {
        const result = await cloudinary.api.sub_folders("Patricia Pie/Collections");
        if (result.folders) {
            result.folders.forEach(f => console.log(`- ${f.name} (path: ${f.path})`));
        } else {
            console.log("No subfolders found or error.");
        }
    } catch (e) {
        console.log(`Error listing 'Patricia Pie/Collections': ${e.message}`);
    }

    console.log("\n--- 2. Subfolders of 'Patricia Pie' ---");
    try {
        const result = await cloudinary.api.sub_folders("Patricia Pie");
        if (result.folders) {
            result.folders.forEach(f => console.log(`- ${f.name} (path: ${f.path})`));
        }
    } catch (e) { console.log(e.message); }

    console.log("\n--- 3. Checking for specific 'New Elegance' Folder Variations ---");
    // Sometimes user creates "Collection" vs "Collections" or mismatch case
    const variations = [
        "Patricia Pie/Collections/New Elegance",
        "Patricia Pie/Collections/NewElegance",
        "Patricia Pie/collection/new elegance",
        "collection/new elegance",
        "Collections/New Elegance"
    ];

    for (const folder of variations) {
        try {
            // just try to get resources from it
            const res = await cloudinary.search.expression(`folder:"${folder}"`).max_results(1).execute();
            console.log(`'${folder}': Found ${res.resources.length} resources.`);
        } catch (e) {
             console.log(`'${folder}': ${e.message}`);
        }
    }
}
run();
