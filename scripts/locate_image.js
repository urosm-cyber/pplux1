const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    try {
        const id = 'Bomber_Jakna_in_krilo_Elena_New_Elegance_2_wyflml';
        const result = await cloudinary.api.resource(id);
        console.log(`Public ID: ${result.public_id}`);
        console.log(`Folder: '${result.folder}'`); 
        console.log(`Asset ID: ${result.asset_id}`);
        console.log(`Created At: ${result.created_at}`);
    } catch (e) {
        console.error("Error locating image:", e.message);
    }
}
run();
