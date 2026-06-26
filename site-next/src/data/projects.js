// Fiches projets reprises fidèlement de l'ancien site (projets.html).
export const projects = [
  {
    name: 'Doceria',
    badge: 'Application souveraine', badgeType: 'gold',
    url: 'https://jedi-openlab.github.io/doceria/',
    desc: '« Enseigner avec l’IA » : une application de bureau souveraine pour interroger l’IA de la fédération ILaaS et sa propre bibliothèque de documents, en local, sans dépendance à un cloud non souverain.',
    bullets: [
      'Assistant documentaire personnel : un dossier de votre machine devient interrogeable.',
      'RAG en local : indexation et recherche sur votre poste, souveraineté des données.',
      'S’appuie sur ILaaS, la fédération d’inférence souveraine de l’ESR.',
      'Chantier en cours : application native macOS et Linux (Tauri).',
    ],
  },
  {
    name: 'Learnix',
    badge: 'Démonstrateur documenté',
    url: 'https://jedi-openlab.github.io/Learnix/',
    desc: 'Une preuve de concept d’assistant documentaire, construite avec AnythingLLM, un corpus maîtrisé et une approche RAG. Le chatbot reste privé ; la webapp publie la démarche, les réglages, les tests et les limites.',
    bullets: [
      'IA générative cadrée par un corpus choisi.',
      'Démarche ADDIE, scénarios de test et points de vigilance.',
      'Support de médiation sur les usages raisonnés de l’IA.',
      'Chantier en cours : brancher Moodle comme source du corpus.',
    ],
  },
  {
    name: 'Align-o-matic',
    badge: 'Publié',
    url: 'https://jedi-openlab.github.io/align-o-matic/',
    desc: 'Un atelier web pour formuler des objectifs pédagogiques observables, choisir un niveau de Bloom et vérifier la cohérence entre objectifs, activités, évaluations, critères et syllabus.',
    bullets: [
      'Générateur rapide d’objectifs d’apprentissage.',
      'Repères Bloom, matrices et checklist d’alignement.',
      'Support utile pour auditer ou concevoir une UE.',
    ],
  },
  {
    name: 'Eval-o-matic',
    badge: 'EEE Studio',
    url: 'https://jedi-openlab.github.io/eval-o-matic/',
    desc: 'Un atelier pour comprendre ce que peut réellement produire une évaluation des enseignements, construire une grille critériée, puis composer des questions actionnables.',
    bullets: [
      'Repères sur les apports et limites d’une EEE.',
      'Construction d’une grille critériée observable.',
      'Export de travail et XML Moodle Feedback.',
    ],
  },
  {
    name: 'Game Design Pédagogique',
    badge: 'Ressource ouverte',
    url: 'https://jedi-openlab.github.io/game-design-pedagogique/',
    desc: 'Une ressource ouverte pour comprendre, concevoir, prototyper, animer et améliorer des serious games pédagogiques : notions clés, ateliers réutilisables, gabarits, exemples et corpus de veille.',
    bullets: [
      'Clarification serious game, gamification et ludification.',
      'Gabarits de scénario, règles, énigmes, cartes et évaluation.',
      'Webapp de conception guidée utilisable dans le navigateur.',
    ],
  },
  {
    name: 'La Rentrée dont vous êtes le héros',
    badge: 'En cours de conception', badgeType: 'warn',
    url: 'https://jedi-openlab.github.io/autoformation-nouveaux-mcf/',
    desc: 'Un module d’autoformation narratif pour accompagner les nouveaux maîtres de conférences dans leur prise de fonction pédagogique, sous la forme d’un livre dont vous êtes le héros.',
    bullets: [
      'Parcours à choix autour des premières décisions d’enseignement.',
      'Mise en situation des enjeux pédagogiques de la rentrée.',
      'Module en cours de conception.',
    ],
  },
  {
    name: 'L’Odyssée de l’enseignement',
    badge: 'Livre-jeu pédagogique',
    url: 'https://jedi-openlab.github.io/livre-jeu-odyssee-enseignement/',
    desc: 'Une expérience de lecture interactive autour du livre-jeu pédagogique, avec un parcours à embranchements, des repères théoriques et un kit de conception réutilisable.',
    bullets: [
      'Récit interactif et engagement par le choix.',
      'Repères sur l’autonomie et l’individualisation.',
      'PDF, EPUB et documents de conception téléchargeables.',
    ],
  },
  {
    name: 'Open Course Kit',
    badge: 'Guide REL',
    url: 'https://jedi-openlab.github.io/open-course-kit/',
    desc: 'Un guide pratique pour transformer des supports pédagogiques en ressources ouvertes : droits clarifiés, licence choisie, dépôt structuré, fichiers sources et documentation compréhensible hors contexte.',
    bullets: [
      'Repères sur les REL, l’UNESCO et les licences ouvertes.',
      'Préparation d’un dépôt GitHub Pages clair et réutilisable.',
      'Modèles copiables : README, licence, crédits, fiche ressource et checklists.',
    ],
  },
];
