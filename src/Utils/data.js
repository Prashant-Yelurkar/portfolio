import emailIcon from '@/Assets/Icons/email.png'
import phoneIcon from '@/Assets/Icons/phone.png'
import calenderIcon from '@/Assets/Icons/calender.png'
import locationIcon from '@/Assets/Icons/location.png'

export const ContactDetails = [
    {
        label: "Email",
        data: 'prashantyelurkar2004@gmail.com',
        icon: emailIcon,
        link: 'mailto:prashantyelurkar2004@gmail.com'
    },
    {
        label: "Phone",
        data: '+91 9820010254',
        icon: phoneIcon,
        link: 'tel:+91 9820010254'

    },
    {
        label: "Birthday",
        icon: calenderIcon,
        data: '18th OCTOBER 2004'
    },
    {
        label: "Location",
        icon: locationIcon,
        link: 'https://maps.app.goo.gl/qCPYzSQvSeBdcgKJ8',
        data: 'India, Mumbai'

    }
]

export const MyLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9905464938474!2d72.90066877606414!3d19.108070650963295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c70ef9d1c839%3A0xc3d20824443b231d!2s13%2FB%2F%20505%2C%20Sangharsh%20Nagar%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1741999650281!5m2!1sen!2sin"

import getIcon from '@/Assets/Icons/github.svg'
import linkedinIcon from '@/Assets/Icons/linkedin.svg'
import instagramIcon from '@/Assets/Icons/instagram.svg'
import facebookLink from '@/Assets/Icons/facebook.svg'
export const SocialLinks = [
    {
        label: "GitHub",
        icon: getIcon,
        link: 'https://github.com/Prashant-Yelurkar/'
    },
    {
        label: "linkedin",
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/prashant-yelurkar/'
    },
    {
        label: "Instagram",
        icon: instagramIcon,
        link: 'https://www.linkedin.com/in/prashant-yelurkar/'
    },
    {
        label: "Facebook",
        icon: facebookLink,
        link: 'https://www.linkedin.com/in/prashant-yelurkar/'
    }
]



import apiIcon from '@/Assets/Images/api.png'
import appIcon from '@/Assets/Images/app.png'
import designIcon from '@/Assets/Images/design.png'
import developIcon from '@/Assets/Images/develop.png'
export const Aboutdata = {
    about:
        `I'm a B.Tech student specializing in Artificial Intelligence & Data Science at Thakur College of Engineering and Technology, with a strong passion for full-stack web development. I’ve gained hands-on experience by contributing to real-world projects through internships, working on everything from e-commerce platforms to automation tools using technologies like Next.js, Node.js, and MongoDB.

Beyond academics, I enjoy building tools that solve practical problems and improve user experiences. I’ve led technical teams, mentored peers, and participated in hackathons and tech events to keep growing as a developer. My focus is always on learning, innovating, and delivering clean, scalable solutions.`,

    roles: [
        {
            label: "Web Designer",
            icon: designIcon,
            description: "Creating visually appealing and user-friendly website designs."
        },
        {
            label: "Backend Developer",
            icon: developIcon,
            description: "Building secure, scalable, and efficient server-side applications."
        },
        {
            label: "API Integration",
            icon: apiIcon,
            description: "Connecting applications by integrating third-party and custom APIs."
        },
        {
            label: "App Development",
            icon: appIcon,
            description: "Developing mobile applications with smooth UI and high performance."
        }
    ],
    testimonials: [
        {
            name: "Adarsh Singh",
            description: "Prashant is focused, quick to learn, and always full of ideas."
        },
        {
            name: "Vivek Bapna",
            description: "Creative, helpful, and always ready for a challenge."
        },
        {
            name: "Saakshi Mishra",
            description: "Smart, reliable, and great at building tech solutions."
        },
        {
            name: "Gauri",
            description: "A true team player with strong problem-solving skills."
        }


    ]
}
export const Education = [
    {
        link: "https://www.tcetmumbai.in/",
        name: "Thakur College of Enginnering & Technology",
        degree: "Bachelor of Technology (AI&DS)",
        duration: "2023-2026",
        marks: {
            type: 'CGPA',
            marks: '9.44'
        },
        description: "Expanding my skills in AI and web development through real-world projects, internships, and continuous self-learning beyond the classroom."
    },
    {
        link: "https://vpt.edu.in/diploma/polytechnic/index.html",
        name: "Vidyalankar Polytecnic",
        degree: "Diploma (iInformation Technology)",
        duration: "2020-2023",
        marks: {
            type: '%',
            marks: '88.00'
        },
        description: "Strengthened my technical base while actively working on side projects and exploring new technologies to stay ahead of the curve"
    },
    {
        link: 'https://maps.app.goo.gl/QpNTzVpXR76z9KiG7',
        name: "Samata Vidya Mandir",
        degree: "SSC (Maharashtra State Board)",
        duration: "2020-2020",
        marks: {
            type: '%',
            marks: '91.20'
        },
        description: "Built a strong academic discipline early on, which helped me stay focused and motivated to keep learning and improving over time."
    }

]

import vibrtIcon from '@/Assets/Company/icon/vibrt.svg'
import vibrtProject from '@/Assets/Company/projects/vibrt.png'
import tuskarProject from '@/Assets/Company/projects/tuskar.png'
import InstagramProject from '@/Assets/Company/projects/instagramAutomation.png'
import vibrtPhoto1 from '@/Assets/Company/achivements/vibrt1.png'
import vibrtPhoto2 from '@/Assets/Company/achivements/vibrt2.png'
import vibrtPhoto3 from '@/Assets/Company/achivements/vibrt3.1.png'
import vibrtPhoto4 from '@/Assets/Company/achivements/vibrt4.1.png'


import softscribbleIcon from '@/Assets/Company/icon/softscribble.png'
import softscribbleProject from '@/Assets/Company/projects/softscribble.png'
import softscribblePhoto1 from '@/Assets/Company/achivements/softscribble1.png'
import softscribblePhoto2 from '@/Assets/Company/achivements/softscribble2.png'


import sublimeIcon from '@/Assets/Company/icon/sublime.png'
import sublimePhoto2 from '@/Assets/Company/achivements/sublime.jpg'


import varscoftIcon from '@/Assets/Company/icon/varcsoft.png'
import ipsProject from '@/Assets/Company/projects/ips.png'
import jkiProject from '@/Assets/Company/projects/jkj.png'
import magicoProject from '@/Assets/Company/projects/magico.png'
import skinshellProject from '@/Assets/Company/projects/skinshell.png'
import varcbytesBsProject from '@/Assets/Company/projects/varcbytesbs.png'
import varcbytesprProject from '@/Assets/Company/projects/varcbytespr.png'
import varscoft1 from '@/Assets/Company/achivements/varcsoft1.jpg'
import varscoft2 from '@/Assets/Company/achivements/varcsoft2.jpg'



import varscoft3 from '@/Assets/Company/achivements/varcsoft3.jpg'
import varscoft4 from '@/Assets/Company/achivements/varcsoft4.jpg'
import riserProject from '@/Assets/Company/projects/riserrealty.png'
import tamayazProject from '@/Assets/Company/projects/tamayaz.png'
import naimaiProject from '@/Assets/Company/projects/nimai.png'
import naimaiAdminProject from '@/Assets/Company/projects/nimaiAdmin.png'
import naimaiVendorAdminProject from '@/Assets/Company/projects/nimaiVenderAdmin.png'
import optionsPrProject from '@/Assets/Company/projects/optionspf.png'
import optionsPlProject from '@/Assets/Company/projects/optionspl.png'
import optionsAdminProject from '@/Assets/Company/projects/optionsAdmin.png'




export const Exprience = [
    {
        id: 1,
        link: "https://vibrt.com/",
        name: "Vibrt Private Limited",
        address: " No 302, BLDG, R, Abdul Rehm REHM BLDG,400008, R 302, Abdul Rehm BLDGR, 302, Abdul Rehman St, Navpada, Mumbai, Maharashtra 400051",
        designation: "Frontend Web Developer",
        duration: "June 2022 - Auguest 2022",
        description: `Contributed to multiple live projects including the Vibrt website, an e-commerce platform, and an Instagram automation tool.
Focused on improving user experience and developing automation features to enhance digital efficiency.`,
        icon: vibrtIcon,
        about: `
At Vibrt Pvt Ltd, I began my journey into real-time web development by working on several live projects. I was involved in enhancing the Vibrt official website and supporting internal feature development. This role introduced me to agile workflows and team collaboration, giving me firsthand experience in building digital products from scratch.

One of my key contributions was to an innovative Hearing Aid E-commerce Website, which not only sold hearing devices but also included a feature to calculate users' hearing disability and determine their stage of hearing loss. I worked on implementing user input forms, logic for stage calculation, and seamless front-end interactions to ensure a smooth user experience.

This internship sharpened my skills in HTML, CSS, JavaScript, and PHP. It also gave me experience with user-centric design and data-driven UI logic. Most importantly, it laid a strong technical and problem-solving foundation that I’ve built upon throughout my development career.`,
        projects: [
            {
                id: 1,
                name: "Vibrt.com",
                desc: "Website",
                img: vibrtProject,
                hostLink: 'https://vibrt.com/'
            },
            {
                id: 2,
                name: "Tuskar",
                desc: "Website",
                img: tuskarProject,
                hostLink: 'https://www.vibrt.com/tusker/index.html'
            },
            {
                id: 3,
                name: "Instagram Bot",
                desc: "Automation",
                img: InstagramProject,
                // hostLink: 'https://www.vibrt.com/tusker/index.html'
            }
        ],
        photos: [
            vibrtPhoto1, vibrtPhoto2, vibrtPhoto3, vibrtPhoto4
        ]

    },
    {
        id: 2,
        link: "https://softscribble.com/index.html",
        name: "Softscribble Pvt Ltd",
        designation: "Junior Developer",
        duration: "May 2022 - December 2022",
        description: `Built tools like WhatsApp automation and database managers, alongside responsive websites and marketing templates.
Played a key role in streamlining business processes through customized software development.`,
        address: " topaz building, 115, above Udipi restaurant, opposite front of Wockhardt Hospitals, Mumbai, Maharashtra 400011",
        icon: softscribbleIcon,
        about: `
At Softscribble, I worked in a fast-paced development environment where I was responsible for creating tools and user interfaces that enhanced communication and automation for businesses. I focused heavily on front-end development using JavaScript, contributing to real-time, browser-based applications with a clean and intuitive user experience.

A major project I contributed to was a WhatsApp Automation Tool built purely with JavaScript. My role involved developing the frontend interface, enabling users to create sessions via QR code scanning, send messages, and transmit images directly to WhatsApp numbers. I ensured the tool was user-friendly, responsive, and functional across devices, integrating real-time features to handle sessions and message dispatching seamlessly.

This experience strengthened my JavaScript skills and deepened my understanding of frontend logic, event handling, and browser-based APIs. It was a valuable phase in my journey where I moved beyond static designs and started building dynamic, real-world tools that delivered measurable results to clients.`,
        projects: [
            {
                id: 1,
                name: "Softscribble.com",
                desc: "Website",
                img: softscribbleProject,
                hostLink: 'https://softscribble.com/'
            },
        ],
        photos: [
            softscribblePhoto1, softscribblePhoto2
        ]
    },
    {
        id: 3,
        link: 'https://www.sublimeenterprise.com/',
        name: "Sublime Enterprises",
        designation: "PHP Developer",
        duration: "July 2023 - October 2023",
        description: `Worked on server-side scripting, creating automated email systems and a functional internal dashboard.
Used PHP and cron jobs to enhance backend operations and task scheduling.`,
        address: "14A, patel building, near JC Diagnostic centre, Worli naka, G. K. Road, Mumbai 400018.",
        icon: sublimeIcon,
        about: `
At Sublime Enterprises, I focused primarily on server-side development using PHP. One of my main contributions was creating an automated email dispatch system using cron jobs, which handled scheduled communications for the company. I also helped build a dashboard that streamlined internal processes for data tracking and user interaction.

These responsibilities exposed me to task scheduling and backend logic optimization, as well as working with large data sets and database queries. It was here that I began understanding the importance of performance optimization in real-world applications.

This role allowed me to dive deeper into the back-end ecosystem, strengthening my grasp on PHP, MySQL, and server management. It was a formative stage in my journey, where I transitioned from front-end-centric work to robust backend architecture and logic handling`,
        projects: [
            {
                id: 1,
                name: "MarathaMandal",
                desc: "Email Automation",
                img: sublimeIcon,
            },
            {
                id: 2,
                name: "Attendance System",
                desc: "Wifi Based Attendance",
                img: sublimeIcon,
            },
        ],
        photos: [
            sublimePhoto2
        ]
    },
    {
        id: 4,
        link: 'https://www.varcsoft.com/',
        name: "Varcsoft",
        designation: "Full Stack Developer",
        duration: "March 2024 - August 2024",
        description: `Developed responsive websites using Next.js and integrated front-end with efficient backend systems.
Contributed to various projects with a focus on performance and cross-platform compatibility.`,
        address: "14A, patel building, near JC Diagnostic centre, Worli naka, G. K. Road, Mumbai 400018.",
        icon: varscoftIcon,
        about: `
Joining Varcsoft as a Full Stack Developer Intern gave me exposure to modern frameworks like Next.js, which I used to build responsive and interactive websites. I collaborated with the team to deliver polished web applications, ensuring they were functional across different devices and browsers.

I worked on several projects, integrating backend APIs and ensuring seamless interaction between frontend interfaces and backend systems. I also gained experience in deploying applications and managing performance and code optimization.

This role marked a pivotal point in my journey, where I confidently took on end-to-end responsibilities—from designing UI components to handling backend routes. It significantly improved my expertise in full-stack JavaScript development, particularly using the MERN stack.`,
        projects: [
            {
                id: 2,
                name: "IPC Dashboard",
                desc: "Website",
                img: ipsProject,
            },
            {
                id: 3,
                name: "JKJ India",
                desc: "Website",
                img: jkiProject,
            },
            {
                id: 5,
                name: "Magico Design",
                desc: "Website",
                img: magicoProject,
            },
            {
                id: 6,
                name: "Skinshell",
                desc: "Website",
                img: skinshellProject,
            },
            {
                id: 7,
                name: "Varcbytes Dashboard",
                desc: "Website",
                img: varcbytesBsProject,
            },
            {
                id: 8,
                name: "Varcbytes Portfolio",
                desc: "Website",
                img: varcbytesprProject,
            },
        ],
        photos: [
            varscoft1, varscoft2
        ]
    },
    {
        id: 5,
        link: 'https://www.varcsoft.com/',
        name: "Varcsoft",
        designation: "Full Stack Developer",
        duration: "October 2024 - April 2025",
        description: `Built full-stack platforms including an event management, spa, and real estate website with admin dashboards.
Delivered scalable, user-friendly solutions tailored to business and customer needs.`,
        address: "14A, patel building, near JC Diagnostic centre, Worli naka, G. K. Road, Mumbai 400018.",
        icon: varscoftIcon,
        about: `
As a paid full-stack developer intern at Varcsoft, I took on more complex projects with real-world impact. I developed Nimai, an event management platform with separate dashboards for admins and vendors. I also built Tamayaz, a spa service website with features for managing services, bookings, and customer interactions, and RiserRealty, a real estate website with listing and search functionalities.

These projects allowed me to hone my skills in React, Next.js, Node.js, and MongoDB. I implemented user-friendly admin panels and ensured scalable, maintainable code for high-traffic websites. Working with real client data helped me understand how to balance functionality with performance and aesthetics.

This phase of my journey cemented my position as a confident full-stack developer. I’ve grown not just in coding ability but in project planning, client communication, and delivering polished digital products that meet real business needs.`,
        projects: [
            {
                id: 2,
                name: "Riser Realty",
                desc: "Website",
                img: riserProject,
                hostLink: 'https://www.prorealti.com/'
            },
            {
                id: 3,
                name: "Tamayaz",
                desc: "Website",
                img: tamayazProject,
            },
            {
                id: 5,
                name: "Nimai",
                desc: "EventManagement Website",
                img: naimaiProject,
                hostLink: "https://www.nimai.co.in/",
            },
            {
                id: 6,
                name: "Nimai Admin",
                desc: "Admin Pannel",
                img: naimaiAdminProject,
            },
            {
                id: 7,
                name: "Niamai Vendors",
                desc: "Vendor Pannel",
                img: naimaiVendorAdminProject,
            },
            {
                id: 8,
                name: "Options",
                desc: "Portfolio",
                img: optionsPrProject,
                hostLink: 'https://www.optiion.co/',
            },
            {
                id: 9,
                name: "Options Platform",
                desc: "Dating application",
                img: optionsPlProject,
                hostLink: "https://app.optiion.co/"
            },
            {
                id: 10,
                name: "Options Dashboard",
                desc: "Admin Pannel",
                img: optionsAdminProject,
            },
        ],
        photos: [
            varscoft3 , varscoft4

        ]
    },

]

import cIcon from '@/Assets/language/c.png'
import cppIcon from '@/Assets/language/c++.png'
import phpIcon from '@/Assets/language/php.png'
import sqlIcon from '@/Assets/language/sql.png'
import jsIcon from '@/Assets/language/js.png'
import jqueryIcon from '@/Assets/language/jquery.png'
import pythonIcon from '@/Assets/language/py.png'
import htmlIcon from '@/Assets/language/html.png'
import cssIcon from '@/Assets/language/css.png'

export const Language = [
    {
        name: "C",
        icon: cIcon
    },
    {
        name: "C++",
        icon: cppIcon
    },
    {
        name: "PHP",
        icon: phpIcon
    },
    {
        name: "SQL",
        icon: sqlIcon
    },
    {
        name: "JavaScript",
        icon: jsIcon
    },
    {
        name: "JQuery",
        icon: jqueryIcon
    },
    {
        name: "Python",
        icon: pythonIcon
    },
    {
        name: "HTML",
        icon: htmlIcon
    },
    {
        name: "CSS",
        icon: cssIcon
    }
]

import bootstrapIcon from '@/Assets/frameworks/bootstrap.png'
import codeigniterIcon from '@/Assets/frameworks/codeigniter.png'
import expressIcon from '@/Assets/frameworks/express.png'
import nextIcon from '@/Assets/frameworks/next.png'
import nodeIcon from '@/Assets/frameworks/node.png'
import reactIcon from '@/Assets/frameworks/react.png'
export const FrameWork = [
    {
        name: "Bootstrap",
        icon: bootstrapIcon
    },
    {
        name: "Codeigniter",
        icon: codeigniterIcon
    },
    {
        name: "Express",
        icon: expressIcon
    },
    {
        name: "Next JS",
        icon: nextIcon
    },
    {
        name: "Node ",
        icon: nodeIcon
    },
    {
        name: "React",
        icon: reactIcon
    }]


import Memoryproject from '@/Assets/Projects/memoryGame.png'
import OSProject from '@/Assets/Projects/OS.png'
import TurfProject from '@/Assets/Projects/TurfManagemant.png'
import calculatorProject from '@/Assets/Projects/Calculator.png'
import MADProject from '@/Assets/Projects/MAD.png'
import invoiceProject from '@/Assets/Projects/sp.travels.png'
import ExaminationProject from '@/Assets/Projects/Examination.png'


export const MyProjects = [
    {
        id: 1,
        name: "Memorry Game",
        desc: "Card Game",
        img: Memoryproject,
        git: 'https://github.com/Prashant-Yelurkar/mini-project.git',
        hostLink: 'https://mini-project-ten-silk.vercel.app/'
    },
    {
        id: 2,
        name: "Visilization",
        desc: "OS Sheduling Algorithm",
        img: OSProject,
        git: 'https://github.com/Prashant-Yelurkar/Scheduling_Algorithms.git',
        hostLink: 'https://prashant-yelurkar.github.io/Scheduling_Algorithms/'
    },
    {
        id: 7,
        name: "Examination",
        desc: "Desktop Based Examination",
        img: ExaminationProject,
        git: 'https://github.com/Prashant-Yelurkar/Examination-app',
        hostLink: 'https://examination-app.vercel.app/auth/login'
    },
    {
        id: 3,
        name: "Turf Management",
        desc: "Website",
        img: TurfProject,
        git: 'https://github.com/Prashant-Yelurkar/Turf-Managemant-Frontened',
        hostLink: 'https://turf-managemant-frontened.vercel.app/'
    },
    {
        id: 5,
        name: "Mobile Appliacation ",
        desc: "App development Learming App",
        img: MADProject,
        git: 'https://github.com/Prashant-Yelurkar/MobileApplicationDevelopment',
        hostLink: 'https://github.com/Prashant-Yelurkar/MobileApplicationDevelopment'
    },
    {
        id: 6,
        name: "SP.Travels",
        desc: "Invoice Generation",
        img: invoiceProject,
        git: 'https://github.com/Prashant-Yelurkar/SP.TRAVLES',
        hostLink: 'https://sp-travles-invoice.vercel.app/'
    },
    {
        id: 4,
        name: "Calculator",
        desc: "Simple Calculator",
        img: calculatorProject,
        git: 'https://github.com/Prashant-Yelurkar/Calculator.git',
        hostLink: 'https://prashant-yelurkar.github.io/Calculator/'
    },

]


import IF4IW from '@/Assets/certificates/IF4IA-1.jpg'
import IF5IW from '@/Assets/certificates/IF5IA-1.jpg'
import TechnothonW from '@/Assets/certificates/technothinWinner.jpg'
import v_technovation from '@/Assets/certificates/v-technovation.jpg'


import cProgrammimg from '@/Assets/certificates/cProgrammimg.jpg'
import hartzsoft from '@/Assets/certificates/hertzsoftPr.jpg'
import InternalHackVP from '@/Assets/certificates/VP-internalHackthon.jpg'
import TechnothonP from '@/Assets/certificates/technothonPr.jpg'
import Techshala from '@/Assets/certificates/TechShala.jpg'
import vidhyavardhaniCoding from '@/Assets/certificates/vidhyavardhainiCoding.jpg'
import dattaCollege from '@/Assets/certificates/dattaCollege.jpg'
import coherence1_0 from '@/Assets/certificates/coherence1.0.jpg'
import gitHubCertificate from '@/Assets/certificates/git-github.jpg'
import langChainCertificate from '@/Assets/certificates/LangChain.jpg'
import multicon2025 from '@/Assets/certificates/multicon-w2025.jpg'

export const MyAchivements = [
    IF4IW, vibrtPhoto2, softscribblePhoto1, softscribblePhoto2, IF5IW, TechnothonW, v_technovation, sublimePhoto2, varscoft1, varscoft2, varscoft3 , varscoft4
]
export const Certifications = [
    cProgrammimg, hartzsoft, InternalHackVP, TechnothonP, Techshala, vidhyavardhaniCoding, dattaCollege, coherence1_0, gitHubCertificate, langChainCertificate, multicon2025

] 