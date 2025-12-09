const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    const folder = "Patricia Pie/Collections/New Elegance";
    console.log(`--- Contents of '${folder}' ---`);
    try {
        const result = await cloudinary.search
            .expression(`folder:"${folder}"`)
            .max_results(100)
            .execute();
            
        if (result.resources.length === 0) {
            console.log("Folder is empty.");
        } else {
            result.resources.forEach(r => console.log(`- ${r.public_id}`));
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
