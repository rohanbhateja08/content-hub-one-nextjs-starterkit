// pages/api/custom-endpoint.js

import getCHToken  from '../../lib/getCHToken'; // Adjust the import path as needed

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {contentId} = req.query;

  const token = await getCHToken("7o2tAiugb8sJjp0Opj4I7LJVI7khWyAd", "U9k466G_4i6BwAvVHeZQnjptZ4zaIPTdnMy6wkl4IAk8vpZG4uKSdxWcKJ4aXX3s"); // Ensure you have these environment variables set

  const response = await fetch(`https://content-api.sitecorecloud.io/api/content/v1/items/${contentId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    return res.status(response.status).json({ message: 'Error fetching data' });
  }

  const data = await response.json();
  res.status(200).json(data);
}
