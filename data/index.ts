export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Working on building Rust projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Snapkors - Notes and Quiz Sharing Platform",
    des: "A comprehensive platform for students to share notes and take quizzes. Built with modern web technologies for seamless learning experiences.",
    img: "/snapkors-home.png",
    tools: [
      "Next.js",
      "React Query",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Axios",
    ],
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/bin-yam21/snapkors",
  },
  {
    id: 2,
    title: "Secure HR - ERP System for Security Service Providers",
    des: "Enterprise Resource Planning system designed specifically for security service providers with HR management, scheduling, and reporting features.",
    img: "/securehr.png",
    tools: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "PostgreSQL",
      "Axios",
      "React Query",
    ],
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/bin-yam21/secure-hr",
  },
  {
    id: 3,
    title: "Chat App - Rust Axum Backend",
    des: "High-performance real-time chat application built with Rust and Axum framework, featuring WebSocket support and scalable architecture.",
    img: "/rust-chat-app.jpg",
    tools: ["Rust", "Axum", "Tokio", "Tower HTTP"],
    iconLists: [],
    link: "https://github.com/bin-yam21/chat-app",
  },
  {
    id: 4,
    title: "Book Store - MERN Stack Application",
    des: "Full-stack e-commerce book store application built with MongoDB, Express, React, and Node.js. Features user authentication, shopping cart, and payment integration.",
    img: "/p4.svg",
    tools: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://github.com/bin-yam21/book-store",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Biniyam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Biniyam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Biniyam is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Biniyam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Biniyam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Biniyam is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Biniyam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Biniyam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Biniyam is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Biniyam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Biniyam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Biniyam is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Biniyam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Biniyam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Biniyam is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Vercel",
    img: "/next.svg",
    nameImg: "",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "",
  },
  {
    id: 3,
    name: "Node.js",
    img: "",
    nameImg: "",
  },
  {
    id: 4,
    name: "Rust",
    img: "",
    nameImg: "",
  },
  {
    id: 5,
    name: "Rust Axum",
    img: "",
    nameImg: "",
  },
  {
    id: 6,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "",
  },
  {
    id: 7,
    name: "Express",
    img: "",
    nameImg: "",
  },
  {
    id: 8,
    name: "PostgreSQL",
    img: "",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Internship at INSA",
    desc: "Gained hands-on experience in software development, working on various projects and learning industry best practices.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Fullstack Developer at TWOZ Software Company",
    desc: "Developed and maintained full-stack applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/bin-yam21",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "#",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "#", // LinkedIn link to be added later
  },
];
