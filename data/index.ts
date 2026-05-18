export const navItems = [
  { name: "About", link: "/" },
  { name: "Interest", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Courses", link: "#testimonials" },
  { name: "Skills & Experience", link: "#skills" },
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
    title: "Developing mobile apps: NoteMate & Travel Buddy with React Native",
    description: "React Native & Expo",
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
    title: "TMOJ – Online Judge & Programming Education Platform",
    des: "A comprehensive, multi-role online code compilation, grading, and programming education management system tailored for Admins, Managers, Teachers, and Students.",
    img: "/projects/tmoj.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/dock.svg"],
    link: "https://www.tmoj.id.vn",
  },
  {
    id: 2,
    title: "NIKE SHOES ONLINE SYSTEM – E-Commerce Platform",
    des: "A high-end, professional e-commerce platform for selling footwear, featuring comprehensive product, order, and user management modules.",
    img: "/projects/nike.png",
    iconLists: ["/re.svg", "/css3.svg", "/sass.svg", "/js.svg", "/dock.svg"],
    link: "http://103.216.119.220:3000",
  },
  {
    id: 3,
    title: "FOODIE EXPRESS – Premium Food Delivery System",
    des: "An end-to-end food delivery platform featuring a premium Glassmorphism UI, digital wallet system, and admin management console.",
    img: "/projects/foodie.png",
    iconLists: ["/js.svg", "/html5.svg", "/css3.svg", "/sass.svg"],
    link: "https://103.216.119.220:8080",
  },
];

export const testimonials = [
  {
    quote: "Software Development Lifecycle.",
    name: "Critically analyze software engineering development processes from our four selected development philosophies (traditional, secure, agile, and lean)",
    title: "University of Minnesota",
  },
  {
    quote: "Web Design for Everybody: Basics of Web Development & Coding.",
    name: "Learn advanced styling with responsive design, HTML5 fundamentals, and interactivity with JavaScript. Explore the basics of CSS3 and complete your knowledge with the Web Design for Everybody Capstone, which consolidates skills in creating modern, interactive, and responsive websites. Perfect for aspiring web developers and designers.",
    title: "University of Michigan",
  },
  {
    quote: "Computer Communications.",
    name: "Understand the fundamentals of network communication, peer-to-peer protocols, and local area networks. Learn about packet switching networks and algorithms, and delve into TCP/IP and advanced topics. Essential for mastering networking concepts and technologies.",
    title: "University of Colorado System",
  },
  {
    quote: "Meta Front-End Developer Professional.",
    name: "Create a responsive website using HTML for content structure, CSS for visual styling, and JavaScript for interactive experiences. Learn React alongside JavaScript libraries and frameworks. Master Bootstrap CSS framework to design webpages, and work with GitHub repositories and version control. Prepare for coding interviews, learn problem-solving approaches, and build portfolio-ready projects to showcase during job interviews.",
    title: "Meta Staff",
  },
  {
    quote: "Meta Back-End Developer Professional.",
    name: "Gain the technical skills required to become a qualified back-end developer. Learn programming systems including Python syntax, Linux commands, Git, SQL, version control, cloud hosting, APIs, JSON, XML, and more. Build a portfolio using your new skills and prepare for interviews with tips on what to expect for engineering jobs. Learn in-demand programming skills and how to confidently use code to solve problems.",
    title: "Meta Staff",
  },
];

export const companies = [
  {
    id: 1,
    img: "/js.svg",
  },
  {
    id: 2,
    name: "next",
    img: "/next.svg",
  },
  {
    id: 3,
    name: "react",
    img: "/re.svg",
  },
  {
    id: 4,
    name: "html5",
    img: "/html5.svg",
  },
  {
    id: 5,
    name: "css3.",
    img: "/css3.svg",
  },
  {
    id: 6,
    name: "sass.",
    img: "/sass.svg",
  },
  {
    id: 7,
    name: "github.",
    img: "/github.svg",
  },
  {
    id: 8,
    name: "ts.",
    img: "/ts.svg",
  },
  {
    id: 9,
    name: "csharp",
    img: "/csharp.svg",
  },
  {
    id: 10,
    name: "java",
    img: "/java.svg",
  },
  {
    id: 11,
    name: "tailwindcss",
    img: "/tail.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - FPT Software",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Creator - Toplist",
    desc: "Educate, entertain, and inspire audience through engaging and impactful content creation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JRimIT",
  },
  {
    id: 2,
    img: "/facebook.svg",
    link: "https://www.facebook.com/DuyRim",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nguyễn-duy-rim-335a68408",
  },
];
