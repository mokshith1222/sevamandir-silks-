import fs from 'node:fs';
import path from 'node:path';

const imageMap = {
  // Hero (2 images)
  'public/images/hero/hero-1.jpg': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85',
  'public/images/hero/hero-2.jpg': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1920&q=85',

  // Collections (4 images)
  'public/images/collections/kanjivaram.jpg': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
  'public/images/collections/banarasi.jpg': 'https://images.unsplash.com/photo-1610030469668-93530c27b534?auto=format&fit=crop&w=1200&q=85',
  'public/images/collections/bridal.jpg': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
  'public/images/collections/festive.jpg': 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1200&q=85',

  // Products (12 images)
  'public/images/products/product-1.jpg': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-2.jpg': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-3.jpg': 'https://images.unsplash.com/photo-1610030469668-93530c27b534?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-4.jpg': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-5.jpg': 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-6.jpg': 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-7.jpg': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-8.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-9.jpg': 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-10.jpg': 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-11.jpg': 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
  'public/images/products/product-12.jpg': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',

  // Craftsmanship (3 images)
  'public/images/craftsmanship/craft-1.jpg': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=85',
  'public/images/craftsmanship/craft-2.jpg': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85',
  'public/images/craftsmanship/craft-3.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=85',

  // Editorial (3 images)
  'public/images/editorial/editorial-1.jpg': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
  'public/images/editorial/editorial-2.jpg': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
  'public/images/editorial/editorial-3.jpg': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',

  // Gallery (6 images)
  'public/images/gallery/gallery-1.jpg': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  'public/images/gallery/gallery-2.jpg': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
  'public/images/gallery/gallery-3.jpg': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
  'public/images/gallery/gallery-4.jpg': 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85',
  'public/images/gallery/gallery-5.jpg': 'https://images.unsplash.com/photo-1610030469668-93530c27b534?auto=format&fit=crop&w=1000&q=85',
  'public/images/gallery/gallery-6.jpg': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=85'
};

async function downloadFile(destPath, url) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    clearTimeout(timeout);

    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.length > 5000) {
        fs.writeFileSync(destPath, buffer);
        console.log(`✓ Downloaded ${destPath} (${Math.round(buffer.length / 1024)} KB)`);
        return true;
      }
    }
  } catch (err) {
    console.warn(`Fetch error for ${destPath}: ${err.message}`);
  }
  return false;
}

async function main() {
  console.log('Downloading image assets...');
  for (const [dest, url] of Object.entries(imageMap)) {
    await downloadFile(dest, url);
  }
  console.log('Finished downloading assets.');
}

main();
