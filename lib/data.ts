import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "IT Support",
    location: "PT. Telkomsel",
    description:
      "Developing and overcoming user problems of Sistem Informasi Keuangan Daerah (SIKD) and Sistem Pengajuan Surat Rekening (SPSR) related to applicable policies of Sleman including, troubleshooting, disaster recovery planning & execution.",
    icon: React.createElement(CgWorkAlt),
    date: "July - August 2024",
  },
  {
    title: "Publication, Decoration, Documentation Team",
    location: "Proximiti HMIT Telkom University ",
    description:
      "Developing and overcoming user problems of Sistem Informasi Keuangan Daerah (SIKD) and Sistem Pengajuan Surat Rekening (SPSR) related to applicable policies of Sleman including, troubleshooting, disaster recovery planning & execution.",
    icon: React.createElement(CgWorkAlt),
    date: "June - December 2023",
  },
  {
    title: "Digital Marketing",
    location: "Faculty of Informatics Telkom University",
    description:
      "Developing and overcoming user problems of NRE-CORE related to applicable policies of PT. Reasuransi Nasional Indonesia including, troubleshooting, disaster recovery planning & execution.",
    icon: React.createElement(CgWorkAlt),
    date: "May - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Visitor Management System",
    description:
      "Visitor Management System is a project that I worked on during my internship at PT Telkomsel Regional West Java. This project aims to create a web-based visitor management system integrated with IoT technology. This system is designed to simplify the operational process of visitors at PT Telkomsel, including recording visitor data, monitoring visit status in real-time, and optimizing efficiency in check-in and check-out management.",
    screenshots: [
      "images/project/vms/2.png",
      "images/project/vms/3.png",
      "images/project/vms/4.png",
      "images/project/vms/6.png",
      "images/project/vms/7.png",

    ],
    image: "images/project/vms/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/rinaldiss/vms-telkomsel.git",
    features: [
      "Update the system interface.",
      "Create dashboards for admin, security, and visitors.",
      "Develop CRUD (Create, Read, Update, Delete) feature for visitor data.",
      "Adding visitor report export feature in PDF format.",
      "Create an automatic “Waiting” and “Available” status system integrated with QR scanning.",
    ],
    languages: ["HTML", "CSS", "PHP", "MYSQL"],
  },
  {
    title: "BarterInc",
    description:
      "Barterinc is a UI design for an e-commerce application that brings innovation in the form of bartering goods or commodities. This application allows users to exchange any goods or commodities, provided that both parties agree. Barterinc is equipped with complete features that support user convenience and comfort, as well as a reliable security system to ensure the bartering process runs smoothly and safely.",
    screenshots: [
      "images/project/barterinc/2.png",
      "images/project/barterinc/3.png",
      "images/project/barterinc/4.png",
      "images/project/barterinc/5.png",
    ],
    image: "images/project/barterinc/1.png",
    tech: [
      "/images/icon/figma.svg",
    ],
    demoUrl: "https://www.figma.com/design/g6sQDDF9V1w9QnvbS9rhtO/BARTERinc---Evolution?node-id=0-1&t=DZPAZrZFB0tFlKtG-1",
    githubUrl: null,
    features: [
      "Designing wireframes to illustrate the initial structure of the application.",
      "Design the entire application interface in detail, including layout, visual elements and design aesthetics.",
      "Develop concepts of key features, including interactions and functionality that support the user experience.",
      "Create interactive prototypes to visualize workflows and ensure design feasibility before implementation.",
    ],
    languages: ["Figma"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Personal Portfolio is a website that I developed using Bootstrap. This website contains information about myself, my skills, and the projects I have worked on. In addition, there is also a contact page to make it easier for visitors to contact me. This website aims to introduce myself professionally to prospective clients, companies, or coworkers, and show my expertise and experience in my field.",
    screenshots: [
      "images/project/porto/2.png",
      "images/project/porto/3.png",
      "images/project/porto/4.png",
      "images/project/porto/5.png",
      "images/project/porto/6.png",

    ],
    image: "images/project/porto/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      "/images/icon/bootstrap.svg",
      "/images/icon/mysql.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    ],
    demoUrl: "https://rinaldiss.github.io/re/",
    githubUrl: null,
    features: [
      "Designed the website interface using Bootstrap.",
      "Integrate contact API to connect visitors to email.",
      "Creating a backend with CRUD features to add, edit, and delete projects.",
      "Fixing bugs to ensure smooth running of the website.",
    ],
    languages: ["HTML", "CSS", "Bootsrap", "MYSQL", "Laravel"],
  }, 
  {
    title: "Simperpus",
    description:
      "Simperpus is a library management system development project specifically designed for Purwokerto District Attorney. This website aims to provide solutions in managing book collections, thus facilitating public access to available book information. Simperpus is equipped with various features, such as borrowing books, recording visits, displaying a list of available books, and others.",
    image: "images/project/simperpus/1.png",
    screenshots: [
      "images/project/simperpus/2.png",
      "images/project/simperpus/3.png",
      "images/project/simperpus/4.png",
      "images/project/simperpus/5.png",
      "images/project/simperpus/6.png",
    ],
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      "/images/icon/bootstrap.svg",
      "/images/icon/mysql.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/rinaldiss/library-web-dev.git",
    features: [
      "Develop book borrowing and returning features, including notification of borrowing and returning statuses.",
      "Create a membership system with member verification.",
      "Adding features for recording user visits and calculating fines for late returns",
      "Integrate WhatsApp API for communication with users",
      "Develop a book stock management feature to ensure accurate book availability",
    ],
    languages: ["HTML", "CSS", "Bootsrap", "MYSQL", "Laravel"],
  },
  {
    title: "APB RP Donate and Shop",
    description:
      "APB RP Donate and Shop is an application design for selling items in the GTA 5 Roleplaying game. The application includes a user interface (UI) that displays products, as well as a transaction process that makes it easy for users to purchase items in the game. It is designed to provide an intuitive and efficient experience, with a focus on attractive product displays and a simple yet secure transaction flow.",
    screenshots: [
      "images/project/apb/2.png",
      "images/project/apb/3.png",
      "images/project/apb/4.png",
      "images/project/apb/5.png",
    ],
    image: "images/project/apb/1.png",
    tech: [
      "/images/icon/figma.svg",
    ],
    demoUrl: "https://www.figma.com/design/Qm6L92zyGSYOgcDQwgb4sH/APB-RP-Donasi-and-Shop?node-id=0-1&t=3XQjEEcnQGJHWE51-1",
    githubUrl: null,
    features: [
      "Designing wireframes to illustrate the initial structure of the application.",
      "Design the entire application interface in detail, including layout, visual elements and design aesthetics.",
      "Develop concepts of key features, including interactions and functionality that support the user experience.",
      "Create interactive prototypes to visualize workflows and ensure design feasibility before implementation.",
    ],
    languages: ["Figma"],
  },
  {
    title: "Grieamken",
    description:
      "Grieamken, or Grilled Chicken Dream, is a UI design for a delicious chicken sales website. The website is equipped with features to display the various menus presented, providing an easy and engaging user experience. Each page is designed with a clean and functional look, allowing visitors to easily explore the available chicken options and make quick purchasing decisions.",
    screenshots: [
      "images/project/grieamken/2.png",
      "images/project/grieamken/3.png",
      "images/project/grieamken/4.png",
      "images/project/grieamken/5.png",
    ],
    image: "images/project/grieamken/1.png",
    tech: [
      "/images/icon/figma.svg",
    ],
    demoUrl: "https://www.figma.com/design/aSUifeIPaQLkqgmq4gzbPv/Grieamken-%7C-Delicious-Chicken?t=3XQjEEcnQGJHWE51-1",
    githubUrl: null,
    features: [
      "Designing wireframes to illustrate the initial structure of the application.",
      "Design the entire application interface in detail, including layout, visual elements and design aesthetics.",
      "Develop concepts of key features, including interactions and functionality that support the user experience.",
      "Create interactive prototypes to visualize workflows and ensure design feasibility before implementation.",
    ],
    languages: ["Figma"],
  },
  {
    title: "Healthy Happy Clinic",
    description:
      "Healthy Happy Clinic is a UI design for a health clinic website designed to simplify the management of various services. The site provides an online patient registration feature, facilitates drug ordering, and provides information related to clinic services. In addition, other features also support the smooth operation of the clinic, such as doctor schedule management and patient medical records.",
    screenshots: [
      "images/project/clinic/2.png",
      "images/project/clinic/3.png",
      "images/project/clinic/4.png",
      "images/project/clinic/5.png",
      "images/project/clinic/7.png",
    ],
    image: "images/project/clinic/1.png",
    tech: [
      "/images/icon/figma.svg",
    ],
    demoUrl: "https://www.figma.com/design/L6OhgLe5MOBtYxV4SAk0dl/Healthy-Happy-Clinic?t=3XQjEEcnQGJHWE51-1",
    githubUrl: null,
    features: [
      "Designing wireframes to illustrate the initial structure of the application.",
      "Design the entire application interface in detail, including layout, visual elements and design aesthetics.",
      "Develop concepts of key features, including interactions and functionality that support the user experience.",
      "Create interactive prototypes to visualize workflows and ensure design feasibility before implementation.",
    ],
    languages: ["Figma"],
  },
  {
    title: "My LMS Reminder",
    description:
      "MY LMS Reminder is a UI design for a mobile application designed specifically for Telkom University students. This application serves as a reminder of lecture schedules and assignments, which is directly integrated with Telkom University's Learning Management System (LMS). With a simple and easy-to-use interface, this application helps students to manage their time more efficiently.",
    screenshots: [
      "images/project/mylms/2.png",
      "images/project/mylms/3.png",
      "images/project/mylms/4.png",
      "images/project/mylms/5.png",
    ],
    image: "images/project/mylms/1.png",
    tech: [
      "/images/icon/figma.svg",
    ],
    demoUrl: "https://www.figma.com/design/qDg0yRr3tJCWaJUTaFvU67/My-LMS-Reminder?t=3XQjEEcnQGJHWE51-1",
    githubUrl: null,
    features: [
      "Designing wireframes to illustrate the initial structure of the application.",
      "Design the entire application interface in detail, including layout, visual elements and design aesthetics.",
      "Develop concepts of key features, including interactions and functionality that support the user experience.",
      "Create interactive prototypes to visualize workflows and ensure design feasibility before implementation.",
    ],
    languages: ["Figma"],
  },
  {
    title: "COLD Library",
    description:
      "COLD Library is a web platform developed with the aim of providing an entertainment experience for its users. The site provides a wide collection of digital books, ranging from comics, magazines, works of fiction, to various other types of reading. With a user-friendly interface and easy access, COLD Library aims to be an interesting and useful reference source for readers.",
    screenshots: [
      "images/project/cold/2.png",
      "images/project/cold/3.png",
      "images/project/cold/4.png",
      "images/project/cold/5.png",
      "images/project/cold/6.png",
    ],
    image: "images/project/cold/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      "/images/icon/mysql.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    ],
    demoUrl: "https://github.com/rinaldiss/cold-library.git",
    githubUrl: null,
    features: [
      "Designed the user interface (UI) to improve user experience.",
      "Developed CRUD functionality for book data management.",
      "Implementation of book download feature in digital PDF format.",
    ],
    languages: ["HTML", "CSS", "MYSQL", "Laravel"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "PHP",
  "Nodejs",
  "Python",
  "Laravel",
  "MYSQL",
  "Firebase",
  "Oracle",
  "Git",
  "Figma",
  "AdobeXD",
] as const;

export const skilss = [
  {
    id: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  },
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 4,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 5,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 6,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/nodejs.svg",
  },
  {
    id: 8,
    imgUrl:
      "/images/icon/py.svg",
  },
  {
    id: 9,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/mysql.svg",
  },
  {
    id: 11,
    imgUrl: "/images/icon/firebase.svg",
  },
  {
    id: 12,
    imgUrl: "/images/icon/oracle.svg",
  },
  {
    id: 13,
    imgUrl:
      "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
  },
  {
    id: 14,
    imgUrl:
      "/images/icon/figma.svg",
  },
  {
    id: 15,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
  },

] as const;
