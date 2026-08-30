const STORE_URL = 'https://chromewebstore.google.com/detail/uidrop-%E2%80%94-design-system-ex/gkeiedoojhdmlaimiookeaoppgfpemij';
const FALLBACK_USERS = 6000;

module.exports = async function handler(request, response) {
  response.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400');

  try {
    const storeResponse = await fetch(STORE_URL, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (compatible; UIDropSite/1.0; +https://uidrop.site/)'
      }
    });

    if (!storeResponse.ok) throw new Error(`Chrome Web Store returned ${storeResponse.status}`);

    const html = await storeResponse.text();
    const match = html.match(/([\d,.]+)\s+(?:\+\s*)?users\b/i);
    const users = match ? Number.parseInt(match[1].replace(/[^\d]/g, ''), 10) : NaN;
    if (!Number.isFinite(users) || users < 1) throw new Error('User count missing from listing');

    return response.status(200).json({ users, source: 'chrome-web-store' });
  } catch (error) {
    response.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=3600');
    return response.status(200).json({ users: FALLBACK_USERS, source: 'fallback' });
  }
};
