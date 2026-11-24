import fs from 'node:fs';
import path from 'node:path';

const dir = 'public/images/360';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 8 angles representing complete 360-degree turntable views of royal silk sarees
const angles = [
  { file: 'frame-0.jpg', src: 'public/images/hero/hero-1.jpg', label: 'Front Grand Drape (0°)' },
  { file: 'frame-1.jpg', src: 'public/images/collections/kanjivaram.jpg', label: 'Right Pallu Fall (45°)' },
  { file: 'frame-2.jpg', src: 'public/images/products/product-1.jpg', label: 'Profile Silhouette (90°)' },
  { file: 'frame-3.jpg', src: 'public/images/products/product-2.jpg', label: 'Border Interlock (135°)' },
  { file: 'frame-4.jpg', src: 'public/images/hero/hero-2.jpg', label: 'Grand Temple Pallu (180°)' },
  { file: 'frame-5.jpg', src: 'public/images/collections/bridal.jpg', label: 'Reverse Drape (225°)' },
  { file: 'frame-6.jpg', src: 'public/images/products/product-4.jpg', label: 'Pleat Geometry (270°)' },
  { file: 'frame-7.jpg', src: 'public/images/products/product-7.jpg', label: 'Full 360 Orbit (315°)' },
];

for (const angle of angles) {
  const dest = path.join(dir, angle.file);
  if (fs.existsSync(angle.src)) {
    fs.copyFileSync(angle.src, dest);
    console.log(`Copied ${angle.src} -> ${dest}`);
  }
}
console.log('360 frames ready!');
