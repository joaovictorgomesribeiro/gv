import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = "public/images/icons";
await mkdir(outDir, { recursive: true });

// key: output filename (kebab-case, matches content keys used in pages)
// value: source file path under "materiais gv/"
const sources = {
	// Logística Interna
	"logistica-carga-e-descarga": "materiais gv/logistica interna/carga e descarga.png",
	"logistica-conferencia-recebimento-expedicao":
		"materiais gv/logistica interna/conferencia no recebimento e expedicoa.png",
	"logistica-gestao-armazenagem": "materiais gv/logistica interna/gestão e armazenagem.png",
	"logistica-gestao-estoques": "materiais gv/logistica interna/gestão e estoques.png",
	"logistica-movimentacao-armazenagem":
		"materiais gv/logistica interna/movimentação e armazenagem.png",
	"logistica-picking": "materiais gv/logistica interna/picking.png",
	"logistica-processamento-pedidos": "materiais gv/logistica interna/processamento de pedidos.png",
	"logistica-transporte-interno": "materiais gv/logistica interna/transporte interno.png",

	// Produção
	"producao-gerente": "materiais gv/producao/novos01/Gerente de produção.png",
	"producao-operador-maquinas": "materiais gv/producao/novos01/operador de máquinas.png",
	"producao-operador-empilhadeira": "materiais gv/producao/novos01/operador de empilhadeira.png",
	"producao-auxiliar-producao": "materiais gv/producao/novos01/auxiliar de produção.png",
	"producao-conferente-carga": "materiais gv/producao/novos01/Conferente de carga.png",
	"producao-auxiliar-armazem": "materiais gv/producao/novos01/Auxiliar de armazém.png",
	"producao-apontador": "materiais gv/producao/novos01/apontador de producao.png",
	"producao-supervisor-linha": "materiais gv/producao/novos01/Supervisor de linha.png",
	"producao-analista-pcp": "materiais gv/producao/novos01/analista de PCP.png",
	"producao-operador-movimentacao-armazenagem": "materiais gv/producao/novos01/Operador de MA.png",

	// Outras Atividades
	"outras-atividades-administrativas": "materiais gv/outras atividades/atividades administrativas.png",
	"outras-medicina-trabalho": "materiais gv/outras atividades/medicina do trabalho.png",
	"outras-seguranca-trabalho": "materiais gv/outras atividades/segurança do trabalho.png",
};

// Layout diferente (faixa horizontal, ícone não alinhado ao topo): recorte customizado.
const customCrops = {
	"logistica-packing": {
		src: "materiais gv/logistica interna/mobile/packing.png",
		region: { left: 0, top: 0, width: 3200, height: 700 },
	},
};

for (const [key, srcPath] of Object.entries(sources)) {
	const outPath = path.join(outDir, `${key}.webp`);
	try {
		const meta = await sharp(srcPath).metadata();
		const cropped = await sharp(srcPath)
			.extract({ left: 0, top: 0, width: meta.width, height: Math.round(meta.height * 0.56) })
			.toBuffer();
		await sharp(cropped)
			.trim({ background: "#ffffff", threshold: 10 })
			.resize({ width: 320, height: 320, fit: "contain", background: "#ffffff" })
			.webp({ quality: 85 })
			.toFile(outPath);
		console.log("ok", outPath, meta.width, meta.height);
	} catch (err) {
		console.error("FAIL", srcPath, err.message);
	}
}

for (const [key, { src, region }] of Object.entries(customCrops)) {
	const outPath = path.join(outDir, `${key}.webp`);
	try {
		const cropped = await sharp(src).extract(region).toBuffer();
		await sharp(cropped)
			.trim({ background: "#ffffff", threshold: 10 })
			.resize({ width: 320, height: 320, fit: "contain", background: "#ffffff" })
			.webp({ quality: 85 })
			.toFile(outPath);
		console.log("ok", outPath);
	} catch (err) {
		console.error("FAIL", src, err.message);
	}
}
