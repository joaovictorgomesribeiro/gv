export type NavItem = {
	label: string;
	href: string;
};

// Item único compartilhado por header desktop e mobile, para evitar a divergência
// apontada na auditoria. "Blog" e "FAQ" ficam de fora até existirem páginas reais.
export const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Sobre Nós", href: "/sobre/" },
	{ label: "Serviços", href: "/#servicos" },
	{ label: "Portfólio", href: "/#portfolio" },
	{ label: "Contato", href: "/contato/" },
	{ label: "Trabalhe Conosco", href: "/trabalhe-conosco/" },
	{ label: "GV Express", href: "https://gvexpress.com.br" },
];
