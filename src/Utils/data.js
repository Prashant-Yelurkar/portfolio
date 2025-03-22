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
import developIcon from '@/Assets/images/develop.png'
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