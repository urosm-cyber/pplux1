import { cache } from 'react';

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  filename: string;
  format: string;
  width: number;
  height: number;
};

type CloudinarySearchResponse = {
  resources: CloudinaryResource[];
  total_count: number;
};

export type ImageResource = {
  public_id: string;
  width: number;
  height: number;
};

// Caching the function itself with React Cache (optional, but good practice)
// The fetch call already handles the revalidation logic.
export const getCollectionImages = cache(async (folderName: string): Promise<ImageResource[]> => {
  if (!folderName) return [];

  // Robust check for missing env vars
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.warn('Cloudinary environment variables missing. Returning empty list.');
    return [];
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/search`;
  
  // Construct Basic Auth Header
  const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString('base64');

  try {
    // Search for images in the specific folder, sorted by upload date (newest first)
    // You can adjust sort_by to 'filename' or 'created_at' as needed.
    const query = {
      expression: `folder:"${folderName}" AND resource_type:image`,
      max_results: 100, // Adjust limit if needed
      sort_by: [{ uploaded_at: 'desc' }], 
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
      // Cache for 1 hour (3600 seconds)
      // Cache for 1 hour (3600 seconds)
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Cloudinary Fetch Error: ${response.status}`, errorText);
      return [];
    }

    const data: CloudinarySearchResponse = await response.json();
    
    // Map to object with dimensions
    return data.resources.map(resource => ({
      public_id: resource.public_id,
      width: resource.width,
      height: resource.height
    }));

  } catch (error) {
    console.error('Failed to fetch Cloudinary images:', error);
    return [];
  }
});
