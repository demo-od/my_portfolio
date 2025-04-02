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
  php,
  flutter,
  sql,
  postgres,
  mysql,
  real_estate,
  sushi,
  manage,
  html_dev,
  css_dev,
  javascript_dev,
  pro_js,
  front_end, php_dev, sql_dev, ad_sql, web_dev,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
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
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "postgres",
    icon: postgres,
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
    name: "sql",
    icon: sql,
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
    name: "php",
    icon: php,
  },
  {
    name: "flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate Landing Page",
    link: "https://real-estate-kv95.onrender.com/",
    description:
        "A Real Estate website built with React.js and TailwindCSS that showcases my skills in front end development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://github.com/demo-od/real-estate",
  },
  {
    name: "Sushi Ordering Page",
    link: "https://sushi-f4kx.onrender.com/",
    description:
        "A sushi ordering page built with HTML, CSS and JavaScript that is beautifully designed and is responsive across all screen szies.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sushi,
    source_code_link: "https://github.com/demo-od/sushi/",
  },
  {
    name: "Manage Landing Page",
    link: "https://manage-landing-page-apom.onrender.com/",
    description:
        "A simple landing page that was built using HTML, TailwindCSS and JavaScript. It is also responsive to mobile and tablet screen sizes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: manage,
    source_code_link: "https://github.com/demo-od/manage-landing-page/",
  },
];

const certificates = [
  {
    title: "HTML Developer Certificate",
    image: html_dev,
    link: 'https://verify.w3schools.com/1MV9RZ6WOS',
  },
  {
    title: "CSS Developer Certificate",
    image: css_dev,
    link: 'https://verify.w3schools.com/1N9U4TCV01',
  },
  {
    title: "JavaScript Developer Certificate",
    image: javascript_dev,
    link: 'https://verify.w3schools.com/1O1DO2EJES',
  },
  {
    title: "Professional JavaScript Developer Certificate",
    image: pro_js,
    link: 'https://verify.w3schools.com/1P5EITSOR6',
  },
  {
    title: "Front-end Developer Certificate",
    image: front_end,
    link: 'https://verify.w3schools.com/1O1DO2HW9X',

  },
  {
    title: "PHP Developer Certificate",
    image: php_dev,
    link: 'https://verify.w3schools.com/1OL53222D9',
  },
  {
    title: "SQL Developer Certificate",
    image: sql_dev,
    link: 'https://verify.w3schools.com/1MWTTX83QE',
  },
  {
    title: "Advanced SQL Developer Certificate",
    image: ad_sql,
    link: 'https://verify.w3schools.com/1OLBS1NN4C',
  },
  {
    title: "Web Application Developer Certificate",
    image: web_dev,
    link: 'https://verify.w3schools.com/1OL5324YAL',
  }
];

export { services, technologies, experiences, certificates, testimonials, projects };
