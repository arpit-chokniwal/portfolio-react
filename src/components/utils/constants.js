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
