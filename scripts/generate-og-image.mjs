import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<rect width="${width}" height="${height}" fill="#13213C" />
	<rect x="0" y="0" width="14" height="${height}" fill="#F26836" />
	<text x="90" y="290" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="64" fill="#ffffff">GV Soluções</text>
	<text x="90" y="370" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="64" fill="#ffffff">Empresariais</text>
	<text x="90" y="440" font-family="Segoe UI, Arial, sans-serif" font-weight="400" font-size="30" fill="#F26836">Terceirização de mão de obra em Uberlândia</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile("public/images/og-cover.png");
console.log("ok public/images/og-cover.png");
