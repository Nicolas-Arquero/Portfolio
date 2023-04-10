import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Présentation",
  },
  {
    id: "work",
    title: "Mes expériences",
  },
  {
    id: "contact",
    title: "Mes projets",
  },
];

const services = [
  {
    title: "Développeur React",
    icon: web,
  },
  {
    title: "Développeur React Native",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur front-end junior",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janvier 2020 - Mai 2021",
    points: [
      "Développement de sites web responsives en utilisant React ou Vue.js pour garantir une expérience utilisateur de qualité sur tous les appareils.",
      "Création de sites web pour des clients en utilisant des CMS tels que Wordpress pour permettre une gestion facile et efficace des contenus.",
      "Utilisation de PHP pour la création de thèmes personnalisés pour Wordpress et la création de fonctionnalités sur mesure.",
      "Optimisation de la performance des sites web en utilisant des techniques telles que la mise en cache pour améliorer la vitesse de chargement des pages",
    ],
  },
  {
    title: "Développeur front-end",
    company_name: "Jalis",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mai 2021 - Décembre 2022",
    points: [
      "Développement de sites web et d'applications web responsives en utilisant HTML, CSS et JavaScript pour garantir une expérience utilisateur de qualité sur tous les appareils.",
      "Création d'animations fluides et interactives en utilisant des bibliothèques de code telles que GSAP pour ajouter du dynamisme aux interfaces utilisateur.",
      "Conception de maquettes de pages web et d'applications web en utilisant des outils de design tels que Figma pour créer des interfaces utilisateur attrayantes et modernes.",
      "Intégration de maquettes de pages web en utilisant des technologies de templating telles que Twig.",
    ],
  },
  {
    title: "Développeur front-end",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Aujourd’hui",
    points: [
      "Développement de sites web et d'applications web responsives en utilisant React ou Vue.js.",
      "Intégration de designs de pages web en utilisant des bibliothèques de composants React ou Vue.js. ",
      "Création de pages web et d'applications web dynamiques en utilisant React ou Vue.js et des frameworks de gestion d'état tels que Redux ou Vuex",
      "Développement de fonctionnalités et d'interactions complexes en utilisant des bibliothèques de composants React ou Vue.js.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Grâce à l'excellent travail de Nicolas, notre site web est plus rapide et plus agréable à utiliser que jamais.",
    name: "Émilie Moreau",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "J'ai été impressionné par la créativité et le professionnalisme de Nicolas en matière de développement front-end.",
    name: "Marc Dubois",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nicolas a apporté des améliorations significatives à notre application React, et elle a fait preuve d'un engagement total envers notre projet.",
    name: "Sophie Martin",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
