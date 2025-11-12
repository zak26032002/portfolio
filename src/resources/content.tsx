import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Zakaria",
  lastName: "Benazaiz",
  name: `Zakaria Benazaiz`,
  role: "Etudiant en BTS SIO",
  avatar: "/images/avatar.png",
  email: "example@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zak26032002",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zakaria-benazaiz",
  },
 
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio ${person.role}`,
  headline: (
    <>
      Portfolio
      <br /> Zakaria Benazaiz
    </>
  ),
  featured: {
    display: false,
    title: undefined,
    href: ""
  },
  subline: (
    <>
      Je suis Zakaria, un étudiant au Lycée René Cassin,
      où je me spécialise en BTS SIO (Services Informatiques aux Organisations).
    </>
  ),
};


const about: About = {
  path: "/about",
  label: "A propos",
  title: `A propos – ${person.name}`,
  description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
intro: {
  display: true,
  title: "Introduction",
  description: (
    <span style={{ display: 'inline' }}>
      Bonjour ! Je m'appelle Zakaria BENAZAIZ, étudiant en <a href="/documents/Métiers du numérique.pdf" download style={{ color: 'var(--brand-solid)', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', display: 'inline' }}>BTS SIO</a> (Services Informatiques aux Organisations). Passionné par le développement et les technologies du numérique, je conçois des solutions adaptées aux besoins des utilisateurs tout en perfectionnant mes compétences techniques et créatives. Vous pouvez télécharger mon CV au format PDF <a href="/documents/CV Zakaria BENAZAIZ 2025-2026.pdf" download style={{ color: 'var(--accent-solid)', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', display: 'inline' }}>ici</a>.
    </span>
  ),
},
  work: {
    display: true, // set to false to hide this section
    title: "Expérience",
    experiences: [
      {
        company: "CeA",
        timeframe: "2025 - 2025",
        role: "Stage developpement logiciel",
        achievements: [
          <>
            Gestion d'un parc informatique complexe assurant l'attribution et la maintenance de plusieurs postes de travail.
          </>,
          <>
            Developpement de composants logiciels en utilisant des technologies modernes pour améliorer l'efficacité des *
            processus internes.
          </>,
        ],
        images: [
         
        ],
      },
      {
        company: "Zalando",
        timeframe: "Juillet 2025 - Aout 2025",
        role: "Gestion de stocks et logistique",
        achievements: [
          <>
            Tri et organisation des produits dans l'entrepôt pour optimiser la gestion des stocks.
          </>,
          <>
            Collaboration avec l'équipe logistique pour assurer des livraisons efficaces et ponctuelles.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "Bac Scientifique",
        description: <>Optention d'un Bac Scientifique mention Assez Bien.</>,
      },
      {
        name: "Certification CISCO",
        description: <>Obtention de la certification CISCO en réseautique.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technologies & Compétences",
    skills: [
      {
        title: "HTML & CSS",
        description: (
          <>Création de pages web structurées et sémantiques en utilisant HTML5 et CSS3.</>
        ),
        tags: [
          {
            name: "HTML5",
            icon: "html",
          },
          {
            name: "CSS3",
            icon: "css",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Création de WebApp Next.js + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
      
        ],
      },
       {
        title: "Python",
        description: (
          <>Notions de base de programmation en python</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles sur la technologie et l'innovation",
  description: `Lire les articles récents de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
