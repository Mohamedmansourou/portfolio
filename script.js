// Année auto
document.getElementById('year').textContent = new Date().getFullYear();

// Données projets — à adapter avec tes dépôts GitHub et captures
const projects = [
  {
    title: "Algorithmes de tri en C",
    desc: "Implémentation et comparaison de tri rapide, fusion et insertion avec mesures de performance.",
    tags: ["C", "Algorithmique", "Complexité"],
    image: "assets/proj-tri-c.jpg",
    repo: "https://github.com/TON-USERNAME/algorithmes-tri-c",
    demo: ""
  },
  {
    title: "Web front-end — HTML/CSS/JS",
    desc: "Mini site responsive avec composants, grille CSS et interactions Vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/proj-frontend.jpg",
    repo: "https://github.com/TON-USERNAME/frontend-mini-site",
    demo: "https://TON-USERNAME.github.io/frontend-mini-site/"
  },
  {
    title: "Analyse de données Python & Tableau",
    desc: "Nettoyage, exploration et visualisation de données (Tableau) pour la prise de décision.",
    tags: ["Python", "Pandas", "Tableau"],
    image: "assets/proj-data.jpg",
    repo: "https://github.com/TON-USERNAME/py-data-analysis",
    demo: ""
  },
  {
    title: "NLP — Extraction d’informations",
    desc: "Pipeline NLP pour extraire des entités (NER) et résumer des textes, déployé en notebook.",
    tags: ["NLP", "Python", "spaCy"],
    image: "assets/proj-nlp.jpg",
    repo: "https://github.com/TON-USERNAME/nlp-extraction",
    demo: ""
  },
  {
    title: "Spark — Traitement Big Data",
    desc: "Job Spark pour agréger et analyser des grandes volumétries avec transformations efficaces.",
    tags: ["Spark", "Hadoop", "Big Data"],
    image: "assets/proj-spark.jpg",
    repo: "https://github.com/TON-USERNAME/spark-jobs",
    demo: ""
  },
  {
    title: "Windows Server & AD — Lab",
    desc: "Documentation et scripts pour configurer AD, politiques de sécurité et services DHCP/DNS.",
    tags: ["Windows Server", "Active Directory", "DHCP/DNS"],
    image: "assets/proj-ad.jpg",
    repo: "https://github.com/TON-USERNAME/windows-server-lab",
    demo: ""
  }
];

// Render des cartes projets
const grid = document.getElementById('projectsGrid');

projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const img = document.createElement('img');
  img.className = 'project-thumb';
  img.src = p.image;
  img.alt = `Aperçu — ${p.title}`;
  card.appendChild(img);

  const content = document.createElement('div');
  content.className = 'project-content';

  const h3 = document.createElement('h3');
  h3.className = 'project-title';
  h3.textContent = p.title;

  const desc = document.createElement('p');
  desc.className = 'project-desc';
  desc.textContent = p.desc;

  const tags = document.createElement('div');
  tags.className = 'tags';
  p.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = t;
    tags.appendChild(tag);
  });

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  if (p.repo) {
    const repo = document.createElement('a');
    repo.className = 'btn ghost';
    repo.href = p.repo;
    repo.target = '_blank';
    repo.rel = 'noopener';
    repo.textContent = 'Code';
    actions.appendChild(repo);
  }
  if (p.demo) {
    const demo = document.createElement('a');
    demo.className = 'btn primary';
    demo.href = p.demo;
    demo.target = '_blank';
    demo.rel = 'noopener';
    demo.textContent = 'Demo';
    actions.appendChild(demo);
  }

  content.appendChild(h3);
  content.appendChild(desc);
  content.appendChild(tags);
  content.appendChild(actions);

  card.appendChild(content);
  grid.appendChild(card);
});