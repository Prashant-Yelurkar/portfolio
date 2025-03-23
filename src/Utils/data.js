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
        link: 'https://icons8.com/icons/set/email--technique-line',
        data: 'India, Mumbai'

    }
]


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
        `I am Prashant Yelurkar, an engineering student at Thakur College with a passion for software development, blockchain, and automation. My expertise includes React Native, Node.js, Python, Java, and Selenium, allowing me to build innovative and secure applications.

I have worked on projects like a chatbot Chrome extension, an online voting system with biometrics, an Instagram automation tool, and a learning app for mobile development. I enjoy exploring new technologies and creating impactful solutions.`,

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
            name: "John Doe",
            description: "Prashant is a highly skilled and dedicated developer. He has a keen ey"
        },
        {
            name: "Jane Doe",
            description: "Prashant is a highly skilled and dedicated developer. He has a keen ey"
        },
        {
            name: "John Doe",
            description: "Prashant is a highly skilled and dedicated developer. He has a keen ey"
        },
        {
            name: "Jane Doe",
            description: "Prashant is a highly skilled and dedicated developer. He has a keen ey"
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
            marks: '8.91'
        },
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
    },
    {
        link: "https://vpt.edu.in/diploma/polytechnic/index.html",
        name: "VidyaLankar Polytecnic",
        degree: "Diploma (iInformation Technology)",
        duration: "2020-2023",
        marks: {
            type: '%',
            marks: '88.00'
        },
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
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
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
    }

]


export const Exprience = [
    {
        link: "https://vibrt.com/",
        name: "Vibrt Private Limited",
        designation: "Frontend Web Developer",
        duration: "June 2022 - Auguest 2022",
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
    },
    {
        link: "https://softscribble.com/index.html",
        name: "Softscribble Pvt Ltd",
        designation: "Junior Developer",
        duration: "May 2020 - December 2022",
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
    },
    {
        link: 'https://www.sublimeenterprise.com/',
        name: "Sublime Enterprises",
        designation: "PHP Developer",
        duration: "July 2023 - October 2023",
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
    },
    {
        link: 'https://www.varcsoft.com/',
        name: "Varcsoft",
        designation: "Full Stack Developer",
        duration: "March 2024 - August 2024",
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering "

    },
    {
        link: 'https://www.varcsoft.com/',
        name: "Varcsoft",
        designation: "Full Stack Developer",
        duration: "October 2024 - Present",
        description: "Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering Studied Artificial Intelligence and Data Science at Thakur College of Engineering "
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


export const FrameWork = [
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
    }]
