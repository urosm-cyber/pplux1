const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dqofx6x3k',
  api_key: '488815918395844',
  api_secret: 'IxAk4zigzjm85ll0JQbZ35Ii-4w',
});

async function run() {
    const id = 'Bomber_Jakna_in_krilo_Elena_New_Elegance_6_gdtdiv';
    console.log(`--- Verifying ID: ${id} ---`);

    try {
        let result = await cloudinary.search
            .expression(`public_id:"${id}"`)
            .execute();
        
        if (result.resources.length > 0) {
                console.log(`[VALID] Exact match found.`);
        } else {
            console.log(`[MISSING] No exact match.`);
            // Try loose search
            result = await cloudinary.search
                .expression(`public_id:*${id}* OR filename:*${id}*`)
                .max_results(1)
                .execute();
             if (result.resources.length > 0) {
                 console.log(`[FOUND] Loose match: ${result.resources[0].public_id}`);
            }
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
