const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    const knownId = 'Bomber_Jakna_in_krilo_Elena_New_Elegance_6_gdtdiv';
    console.log(`--- Inspecting Image: ${knownId} ---`);

    try {
        // 1. Get details of the known new image
        const result = await cloudinary.api.resource(knownId);
        console.log(`Resource Found: ${result.public_id}`);
        console.log(`Folder: ${result.folder}`);
        
        const folder = result.folder || "";

        // 2. List other images in that folder
        console.log(`--- Listing images in folder: ${folder} ---`);
        const folderResults = await cloudinary.search
            .expression(`folder:"${folder}"`)
            .max_results(20)
            .execute();
            
        folderResults.resources.forEach(res => {
            console.log(`- ${res.public_id}`);
        });

    } catch (e) {
        console.error("Error:", e.message);
        
        // Fallback: check if the user meant a literal path if the above failed
        console.log("--- Checking specific folder 'collection/new elegance' ---");
         try {
            const res2 = await cloudinary.search
                .expression('folder:"collection/new elegance"')
                .execute();
            res2.resources.forEach(res => console.log(`In collection/new elegance: ${res.public_id}`));
        } catch(e2) { console.error(e2.message) }
    }
}
run();
