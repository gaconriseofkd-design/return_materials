export default async function handler(req, res) {
  // THAY LINK WEB APP CỦA BẠN VÀO ĐÂY
  const GAS_URL = "https://script.google.com/macros/s/AKfycbya59GqWjzXw_icZyP_dxHtuhhTTIXt0K_PiW9NPU54s8xXZwSsGSxyKMbio8QIOb-ckg/exec";

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' }
    });
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Proxy Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
