  import {reactjs, backend, solidity, cyber,securiti, fast, erly} from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "React JS Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend
    },
    {
      title: "Smart Contract Engineer",
      icon: solidity 
    },
    {
      title: "Cyber Security Engineer",
      icon: cyber
    }
  ]
  
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
  // ];
  
  const experiences = [
    {
      title: "Backend Developer - Connectors",
      company_name: "Securiti",
      icon: securiti,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
       "Automation of tasks using Python and Shell Scripting",
       "Worked with ELK stack to monitor and analyze logs",
      ],
    },
    {
      title: "Student Laboratory Assistant",
      company_name: "FAST NUCES",
      icon: fast,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
       "SLA for the course of Data Structures in C++",
       "Helped students with their labs and projects",
       "Resolved their doubts and queries",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "Erly Stage Studios",
      icon: erly,
      iconBg: "#383E56",
      date: "Jan 2023 - Feb 2023",
      points: [
       "Worked with React JS, Node JS and Material UI",
       "Designed Responsive UI for the website",
        "Fixed bugs in a website for the company",
        "Deployed new features to their website",
      ],
    },
    {
      title: "Student Laboratory Assistant",
      company_name: "FAST NUCES",
      icon: fast,
      iconBg: "#383E56",
      date: "Aug 2022 - Dec 2022",
      points: [
       "SLA for the course of Data Structures in C++",
       "Helped students with their labs and projects",
       "Resolved their doubts and queries",
      ],
    },
    {
      title: "Blockchain Engineer Intern",
      company_name: "Erly Stage Studios",
      icon: erly,
      iconBg: "#383E56",
      date: "Jul 2022 - Oct 2022",
      points: [
       "Worked with Solidity, React JS, Node JS and Material UI",
        "Wrote a smart contract for the company",
        "Developed A Fullstack Application on the polygon testnet which is designed to help companies save the minutes of their meeting on and off-chain",
        "Documented the contract in NATSPEC format which is the standard",
      ],
    },{
      title: "Teaching Assistant",
      company_name: "FAST NUCES",
      icon: fast,
      iconBg: "#383E56",
      date: "Sep 2021 - Jan 2022",
      points: [
       "TA for the course of Programming Fundamentals in C++",
       "Helped students with their projects",
       "Fairly graded their assignments and quizzes",
      ],
    }
  ]
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  // const projects = [
  //   {
  //     name: "Car Rent",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  // ];
  
  // export { services, technologies, experiences, testimonials, projects };
  export {services, experiences};