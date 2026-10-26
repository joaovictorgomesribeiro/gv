export const siteName = "GV Soluções Empresariais";

export const whatsappNumber = "5534992240937"; // +55 34 9224-0937, usado para todo contato (comercial e Trabalhe Conosco)

export const address = {
	street: "Rua São Paulo, 1053 – Sala 03",
	district: "Bairro Brasil",
	city: "Uberlândia",
	state: "MG",
	zip: "38400-656",
	full: "Rua São Paulo, 1053 – Sala 03 – Bairro Brasil, Uberlândia – MG, 38400-656",
};

export const social = {
	facebook: "https://www.facebook.com/gvsolucoesempresariais",
	instagram: "https://www.instagram.com/gvsolucoes.empresariais/",
	linkedin: "https://www.linkedin.com/in/gv-solu%C3%A7%C3%B5es-empresariais-13ab17162/",
};

export function whatsappLink(message: string): string {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
