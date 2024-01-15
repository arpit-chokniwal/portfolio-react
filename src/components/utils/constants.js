import { FaUserGraduate } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

export const PageNames = {
    HOME: "Home",
    PROJECT: "Projects",
    EXPERIENCE: "Experience",
    NOTES: "Notes",
    MAIL: "Mail",
    EDUCATION: "Education",
    LOCK: "Lock"
}

export const BottomAppBar = [
    {
        alt: "github",
        onClick: () => {
            window.open("https://github.com/arpit-chokniwal", "_blank");
        },
        src: "/github.webp",
        title: "GitHub",
        key: "github",
    },
    {
        alt: "linkedin",
        onClick: () => {
            window.open("https://www.linkedin.com/in/arpitchokniwal", "_blank");
        },
        src: "/linkedin.png",
        title: "LinkedIn",
        key: "linkedin",
    },
    {
        alt: "resume",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/resume/", "_blank");
        },
        src: "/resume.png",
        title: "Resume",
        key: "resume",
    },
    {
        alt: "twitter",
        onClick: () => {
            window.open("https://twitter.com/arpitwt", "_blank");
        },
        src: "/twitter.webp",
        title: "Twitter",
        key: "twitter",
    }
]

export const Apps = [
    {
        alt: "Mail",
        onClick: (callBack) => callBack(PageNames.MAIL),
        src: "/mail.png",
        title: "Mail",
        key: "mail",
    },
    {
        alt: "Music",
        onClick: () => {
            window.open("https://open.spotify.com/artist/0Tg8B3bNeO7FijIWvA7UHI", "_blank");
        },
        src: "/music.png",
        title: "Music",
        key: "music",
    },
    {
        alt: "Notes",
        onClick: (callBack) => callBack(PageNames.NOTES),
        src: "/notes.webp",
        title: "Notes",
        key: "notes",
    },
    {
        alt: "Experience",
        onClick: (callBack) => callBack(PageNames.EXPERIENCE),
        src: "/Experience.png",
        title: "Experience",
        key: "experience",
    },
    {
        alt: "resume",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/resume/", "_blank");
        },
        src: "/resume.png",
        title: "Resume",
        key: "resume",
    },
    {
        alt: "Project",
        onClick: (callBack) => callBack(PageNames.PROJECT),
        src: "/project.jpg",
        title: "Projects",
        key: "project",
    },
    {
        alt: "Education",
        onClick: (callBack) => callBack(PageNames.EDUCATION),
        src: "/education.webp",
        title: "Education",
        key: "education",
    }
]

export const EducationContent = [
    {
        institute: "Masai School",
        location: "Bengaluru, Karnataka",
        degree: "30 week Courses",
        CGPA: "9.2",
        icon: <MdCastForEducation className="text-white" size={22} />,
    },
    {
        institute: "Singhania University",
        location: "Jhunjhunu, Rajasthan",
        degree: "BCA",
        CGPA: "7.8",
        icon: <FaUserGraduate className="text-white" size={22} />,
    },
    {
        institute: "Tanishq Academy",
        location: "Kota, Rajasthan",
        degree: "Class XII",
        Percentage: "90.2",
        icon: <IoSchool className="text-white" size={22} />,
    },
];


export const NotesContents = [
    {
      label: "Technical Skills",
      lastEdited: "Today",
      tags: ["technical_skills"],
      onClick: () => { },
    },
    {
      label: "Soft Skills",
      lastEdited: "Yesterday",
      tags: ["soft_skills"],
      onClick: () => { },
    },
  ];