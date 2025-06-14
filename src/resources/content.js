import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Anurag",
  lastName: "Shrivastav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Android Developer",
  avatar: "/images/Profile-image.jpeg",
  email: "anurag1360@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  // display: true,
  // title: <>Subscribe to {person.firstName}'s Newsletter</>,
  // description: (
  //   <>
  //     I occasionally write about design, technology, and share thoughts on the intersection of
  //     creativity and engineering.
  //   </>
  // ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Anurag-spec1/Anurag_spec1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anurag-shrivastav-b7a616327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Pingo</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Anurag, a android developer engineer at <strong>Xcentic Technologies</strong>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anurag is a developer at Xcentic Technologies, 
        driven by a passion for turning complex problems into clean, efficient solutions. 
        His work spans web applications, backend systems, and the intersection of technology and user experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "E-Cell",
        timeframe: "2024 - Present",
        role: "Core Team Member",
        achievements: [
          // <>
          //   Successfully managed the E-Summit, KIET's flagship entrepreneurial events
          // </>,
          // <>
          //   Volunteer – Smart India Hackathon (SIH) Hardware edition 
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Xcentic Technologies",
        timeframe: "2024 - Present",
        role: "Intern",
        achievements: [
          // <>
          //   Developed a design system that unified the brand across multiple platforms, improving
          //   design consistency by 40%.
          // </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "KIET Group of Institutions, Ghaziabad, India",
        description: <> B.Tech : Computer Science Of Technology | CGPA: 9.32</>,
      },
      {
        name: "J.D. Public School, Chhapra, India",
        description: <>Intermediate: CBSE | PCM | 87.2%.</>,
      },
      {
        name: "Galaxy Residential Public School,Chhapra",
        description: <>10th: CBSE | PCM | 78%</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Kotlin",
        description: <>Writes Kotlin with near-instinctive fluency, building robust, scalable apps at an unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Android Studio",
        description: <>Building next gen apps with Android Studio</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "MySQL | MongoDB",
        description: <>MySQL: A reliable, relational database system using structured tables and SQL for data management. Ideal for applications needing strong consistency and complex queries.

MongoDB: A flexible, NoSQL database that stores data in JSON-like documents. Great for scalable apps with dynamic or unstructured data.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
