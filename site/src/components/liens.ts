// Navigation principale du portail, partagée par l'en-tête et la navigation mobile.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const liens = [
	{ label: 'Projets', href: `${base}/projets/` },
	{ label: 'Veille', href: `${base}/veille/` },
	{ label: 'Carnet', href: 'https://jediopenlab.hypotheses.org/', externe: true },
	{ label: 'Pédagogie', href: `${base}/pedagogie/` },
	{ label: 'À propos', href: `${base}/a-propos/` },
];
