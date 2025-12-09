const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    console.log("--- Searching for ANY 'New_Elegance' images ---");
    try {
        const results = await cloudinary.search
            .expression('public_id:*New_Elegance* OR folder:*New_Elegance*')
            .max_results(30)
            .execute();

        results.resources.forEach(res => {
            console.log(`ID: ${res.public_id} | Folder: ${res.folder}`);
        });

    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
