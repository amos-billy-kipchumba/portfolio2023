import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar, BsCashCoin } from "react-icons/bs";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone, TbDeviceMobile, TbLayoutGrid, TbCloudDataConnection, TbUser } from "react-icons/tb";

import project1 from "./assets/sasema.png";
import project2 from "./assets/realmega.png";
import project3 from "./assets/retu.png";
import project4 from "./assets/capture4.png";
import project5 from "./assets/capture5.png";
import project6 from "./assets/capture7.png";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";

import testimonial1 from "./assets/testimonial1.jpg";
import testimonial2 from "./assets/testimonial2.jpg";
import testimonial3 from "./assets/testimonial3.jpg";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },
  {
    id: 3,
    text: "Services",
    href: "services",
  },
  {
    id: 4,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Database design",
    description: "Data is organized according to database model. Data is determined on how it must be stored and how the data elements interrelate and thus the designer can begin to fit the data to the database model.",
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "API development",
    description: "Application Programming Interface can be thought of as a contract between two applications. This contract defines how the two communicate with each other using requests and responses.",
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Web Development",
    description: "Is the work involved in developing a website for the internet or intranet. There are three kinds of web development of which we do all of them. Front-end web development, back-end web development and full-stack web development.",
  },
  {
    id: 4,
    icon: <TbLayoutGrid />,
    title: "Graphic design",
    description: "It is the art and practice of planning and projecting ideas and experiences with visual and textual content. These visuals can be as simple as a business logo, or as complex as page layout on a website.",
  },

  {
    id: 5,
    icon: <TbSpeakerphone />,
    title: "SEO",
    description: "Is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
  },

  {
    id: 6,
    icon: <TbCloudDataConnection />,
    title: "CI/CD pipeline",
    description: "continuous integration and continuous deployment is a series of steps that must be performed in order to deliver a new version of software. By automating CI/CD through development, testing, production and monitoring phases of the software development life cycle, organizations are able to develop higher quality code, faster",
  },

  {
    id: 7,
    icon: <TbDeviceMobile />,
    title: "Mobile app development",
    description: "It is the process of making software for smartphones, tablets and digital assistants.",
  },

  {
    id: 8,
    icon: <TbUser />,
    title: "UI-UX",
    description: "It is the process of building interfaces that clearly communicates to the user and which is simple and efficient to the user's interactions.",
  },
];
export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "On time delivery",
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Quality apps",
  },
  {
    id: 4,
    icon: <BsCashCoin />,
    text: "Very affordable",
  },
];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Apps", value: "web design" },
  { id: 4, name: "Mobile apps", value: "marketing" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
    title: "Sasema Management Company",
  },
  {
    id: 2,
    image: project2,
    value: "web design",
    title: 'Megapipes Solutions Limited',
  },
  {
    id: 3,
    image: project3,
    value: "web design",
    title: 'AOL Out-door adventures',
  },
  {
    id: 4,
    image: project4,
    value: "web design",
    title: 'StagePass',
  },
  {
    id: 5,
    image: project5,
    value: "web design",
    title: 'Treven Cleaners ltd',
  },
  {
    id: 6,
    image: project6,
    value: "web design",
    title: 'Creation ltd',
  },
];

export const blogs = [
  {
    id: 1,
    image: blog1,
    title: "What Skills Do You Need for Marketing in 2023?",
  },
  {
    id: 2,
    image: blog2,
    title: "What is Web Design? A Comprehensive Guide",
  },
  {
    id: 3,
    image: blog3,
    title: "100 Best Web Design Blogs You Must Read in 2023",
  },
  {
    id: 4,
    image: blog4,
    title: "How to Learn Web Design at Home",
  },
];

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Billy Adams",
    business: "Rolling Thunder",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Gary Jhonson",
    business: "Car Accessories",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Venissa",
    business: "Fashin Shop",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+254743630811",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "Nairobi, Kenya",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "amosbillykipchumba@gmail.com",
  },
];
