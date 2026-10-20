// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://jedi-openlab.github.io',
	base: '/jedi',
	// Ancienne adresse de la page À propos, conservée pour les liens déjà partagés
	redirects: { '/about': '/jedi/a-propos/' },
	integrations: [
		starlight({
			title: 'JEDI-OpenLab',
			description:
				'JEDI-OpenLab, ingénierie et innovation pédagogique : outils, guides, jeux et recherches en pédagogie ouverte, publiés en ressources éducatives libres.',
			defaultLocale: 'root',
			locales: { root: { label: 'Français', lang: 'fr' } },
			logo: { src: './src/assets/jedi-openlab.png', alt: 'JEDI-OpenLab' },
			favicon: '/favicon-32.png',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/jedi/favicon-180.png' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://jedi-openlab.github.io/jedi/social.png' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/JEDI-OpenLab' }],
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			lastUpdated: false,
			sidebar: [
				{ label: 'Accueil', link: '/' },
				{ label: 'Projets', link: '/projets/' },
				{
					label: 'Veille',
					items: [
						{ label: 'Toute la veille', link: '/veille/' },
						{ label: 'Les billets', collapsed: true, items: [{ autogenerate: { directory: 'veille' } }] },
					],
				},
				{ label: 'Carnet (Hypothèses) ↗', link: 'https://jediopenlab.hypotheses.org/', attrs: { target: '_blank', rel: 'noopener' } },
				{ label: 'Pédagogie', link: '/pedagogie/' },
				{ label: 'À propos', link: '/a-propos/' },
			],
		}),
	],
});
