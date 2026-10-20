// Source unique des projets du portail : accueil (« Sur l'établi », catalogue) et page Projets.
// Pour ajouter un projet : une entrée de plus dans `projets`, rien d'autre à toucher.

export type Famille = 'jeux' | 'guides' | 'outils' | 'recherche';
export type Statut = 'conception' | 'publie' | 'livre' | 'demonstrateur';

export const familles: Record<Famille, { label: string; court: string; desc: string }> = {
	jeux: { label: 'Jeux & récits', court: 'Jeux & récits', desc: 'Apprendre en jouant un rôle.' },
	guides: { label: 'Guides & études de cas', court: 'Guides', desc: 'Une démarche transmissible.' },
	outils: { label: 'Outils', court: 'Outils', desc: 'Pour l’enseignant·e, au quotidien.' },
	recherche: { label: 'Recherche', court: 'Recherche', desc: 'Observer, expérimenter, documenter.' },
};

export const statuts: Record<Statut, string> = {
	conception: 'En conception',
	publie: 'Publié',
	livre: 'Livré',
	demonstrateur: 'Démonstrateur',
};

export interface Projet {
	nom: string;
	url: string;
	famille: Famille;
	statut: Statut;
	/** Une ligne, pour le catalogue */
	ligne: string;
	/** Présentation complète, pour la page Projets */
	desc: string;
	/** Mis en avant dans « Sur l'établi » (trois au plus) */
	etabli?: { texte: string; action: string; mention?: string };
}

export const projets: Projet[] = [
	{
		nom: 'Copie conforme ?',
		url: 'https://jedi-openlab.github.io/copie-conforme/',
		famille: 'jeux',
		statut: 'conception',
		ligne: 'Serious game d’autoformation : une enquête sur une réponse d’IA',
		desc: 'Un serious game d’autoformation pour les enseignants du supérieur, jouable dans le navigateur puis sur Moodle, conçu et documenté en ressource éducative libre. La copie n° 17 prend la parole, et l’une de ses références n’existe pas.',
		etabli: {
			texte: 'La copie n° 17 arrive sur Moodle, impeccable. Puis elle prend la parole, et l’une de ses références n’existe pas.',
			action: 'Suivre la conception',
		},
	},
	{
		nom: 'Remédiation IA : une relecture ADDIE',
		url: 'https://jedi-openlab.github.io/remediation-ia-addie/',
		famille: 'guides',
		statut: 'publie',
		ligne: 'Étude de cas relue phase par phase, avec gabarits',
		desc: 'Comment personnaliser la remédiation pour chaque élève quand le temps de correction la rend impraticable ? Une relecture ADDIE d’un retour d’expérience réel, pour en tirer une démarche réutilisable dans toute discipline où les élèves produisent un écrit évalué sur critères.',
		etabli: {
			texte: 'Un retour d’expérience réel, relu phase par phase, pour personnaliser la remédiation avec l’IA.',
			action: 'Lire le cas',
			mention: 'Publié récemment',
		},
	},
	{
		nom: 'Dire et taire',
		url: 'https://jedi-openlab.github.io/dire-et-taire/',
		famille: 'recherche',
		statut: 'conception',
		ligne: 'Quarante agents génératifs et la spirale du silence',
		desc: 'Un village de quarante agents génératifs, une thèse d’historien qui y circule, et une question simple à poser, difficile à trancher : quand un agent se tait, qui se tait ? Un laboratoire en sciences de l’information et de la communication pour observer ce qui ne circule pas.',
		etabli: {
			texte: 'Quarante agents génératifs, une thèse d’historien qui circule : quand un agent se tait, qui se tait ?',
			action: 'Lire le protocole',
		},
	},
	{
		nom: 'Doceria',
		url: 'https://jedi-openlab.github.io/doceria/',
		famille: 'outils',
		statut: 'livre',
		ligne: 'Application souveraine : IA, documents et Moodle',
		desc: '« Enseigner avec l’IA » : une application de bureau native et souveraine, entièrement fonctionnelle, pour interroger l’IA de la fédération ILaaS et sa propre bibliothèque de documents, en local, avec un connecteur Moodle natif.',
	},
	{
		nom: 'Learnix',
		url: 'https://jedi-openlab.github.io/Learnix/',
		famille: 'recherche',
		statut: 'demonstrateur',
		ligne: 'Assistant documentaire en RAG, démonstrateur documenté',
		desc: 'Une preuve de concept d’assistant documentaire, construite avec AnythingLLM, un corpus maîtrisé et une approche RAG. Le chatbot reste privé ; la webapp publie la démarche, les réglages, les tests et les limites.',
	},
	{
		nom: 'Align-o-matic',
		url: 'https://jedi-openlab.github.io/align-o-matic/',
		famille: 'outils',
		statut: 'publie',
		ligne: 'Formuler des objectifs et vérifier l’alignement pédagogique',
		desc: 'Un atelier web pour formuler des objectifs pédagogiques observables, choisir un niveau de Bloom et vérifier la cohérence entre objectifs, activités, évaluations, critères et syllabus.',
	},
	{
		nom: 'Eval-o-matic',
		url: 'https://jedi-openlab.github.io/eval-o-matic/',
		famille: 'outils',
		statut: 'publie',
		ligne: 'Construire l’évaluation des enseignements',
		desc: 'Un atelier pour comprendre ce que peut réellement produire une évaluation des enseignements, construire une grille critériée, puis composer des questions actionnables.',
	},
	{
		nom: 'Game Design Pédagogique',
		url: 'https://jedi-openlab.github.io/game-design-pedagogique/',
		famille: 'guides',
		statut: 'publie',
		ligne: 'Concevoir et animer des serious games pédagogiques',
		desc: 'Une ressource ouverte pour comprendre, concevoir, prototyper, animer et améliorer des serious games pédagogiques : notions clés, ateliers réutilisables, gabarits, exemples et corpus de veille.',
	},
	{
		nom: 'La Rentrée dont vous êtes le héros',
		url: 'https://jedi-openlab.github.io/autoformation-nouveaux-mcf/',
		famille: 'jeux',
		statut: 'conception',
		ligne: 'Autoformation des nouveaux maîtres de conférences',
		desc: 'Un module d’autoformation narratif pour accompagner les nouveaux maîtres de conférences dans leur prise de fonction pédagogique, sous la forme d’un livre dont vous êtes le héros.',
	},
	{
		nom: 'L’Odyssée de l’enseignement',
		url: 'https://jedi-openlab.github.io/livre-jeu-odyssee-enseignement/',
		famille: 'jeux',
		statut: 'publie',
		ligne: 'Livre-jeu pédagogique',
		desc: 'Une expérience de lecture interactive autour du livre-jeu pédagogique, avec un parcours à embranchements, des repères théoriques et un kit de conception réutilisable.',
	},
	{
		nom: 'Open Course Kit',
		url: 'https://jedi-openlab.github.io/open-course-kit/',
		famille: 'guides',
		statut: 'publie',
		ligne: 'Publier des ressources éducatives libres',
		desc: 'Un guide pratique pour transformer des supports pédagogiques en ressources ouvertes : droits clarifiés, licence choisie, dépôt structuré, fichiers sources et documentation compréhensible hors contexte.',
	},
];

export const enConception = () => projets.filter((p) => p.statut === 'conception').length;
export const surLEtabli = () => projets.filter((p) => p.etabli).slice(0, 3);
