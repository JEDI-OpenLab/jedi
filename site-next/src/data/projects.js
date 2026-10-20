// Fiches projets reprises fidèlement de l'ancien site (projets.html).
export const projects = [
  {
    name: 'Remédiation IA : une relecture ADDIE',
    badge: 'Étude de cas',
    url: 'https://jedi-openlab.github.io/remediation-ia-addie/',
    desc: 'Comment personnaliser la remédiation pour chaque élève quand le temps de correction la rend impraticable ? Une relecture ADDIE d’un retour d’expérience réel, pour en tirer une démarche réutilisable dans toute discipline où les élèves produisent un écrit évalué sur critères.',
    bullets: [
      'Un cas réel et anonymisé : une séquence d’anglais en Terminale, corrigée avec l’aide d’une IA générative jusqu’à un feedback individuel pour chaque élève.',
      'Un principe central : l’IA prépare, l’enseignant·e relit, ajuste, valide et envoie ; rien ne va de l’IA à l’élève sans validation.',
      'Les cinq phases ADDIE relues une à une : ce que montre le cas, recommandations, points de vigilance et checklist de sortie.',
      'Des gabarits prêts à l’emploi : consignes pour l’IA, grille critériée, modèle de feedback, checklist de validation.',
    ],
  },
  {
    name: 'Dire et taire',
    badge: 'Recherche en conception', badgeType: 'warn',
    url: 'https://jedi-openlab.github.io/dire-et-taire/index.html',
    desc: 'Un village de quarante agents génératifs, une thèse d’historien qui y circule, et une question simple à poser, difficile à trancher : quand un agent se tait, qui se tait ? Un laboratoire en sciences de l’information et de la communication pour observer ce qui ne circule pas.',
    bullets: [
      'Simulation sociale générative : un village fictif, Saint-Aubert-sur-Lys, peuplé de quarante agents joués par des modèles de langage.',
      'Cadre théorique : la spirale du silence de Noelle-Neumann et la notion de co-agentivité (qui parle vraiment quand un agent parle ?).',
      'Protocole explicite : quatre hypothèses réfutables, 109 simulations prévues, codage par deux modèles juges et validation humaine.',
      'Phase de conception : protocole écrit et relu, prêt à être préenregistré, aucune simulation encore jouée.',
    ],
  },
  {
    name: 'Doceria',
    badge: 'Application souveraine', badgeType: 'gold',
    url: 'https://jedi-openlab.github.io/doceria/',
    desc: '« Enseigner avec l’IA » : une application de bureau native et souveraine, entièrement fonctionnelle, pour interroger l’IA de la fédération ILaaS et sa propre bibliothèque de documents, en local, sans dépendance à un cloud non souverain.',
    bullets: [
      'Chat souverain via ILaaS, la fédération d’inférence de l’ESR ; clé API protégée dans le trousseau du système.',
      'RAG local : déposez vos documents (PDF, DOCX…), les réponses citent vos sources.',
      'Connecteur Moodle natif : indexation des cours en lecture seule, synchronisation incrémentale, opt-in enseignant.',
      'Application livrée pour macOS (Apple Silicon), à télécharger sur GitHub ; Windows et Linux en feuille de route.',
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
