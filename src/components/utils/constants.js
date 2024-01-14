const Github = require("../Icons/github.webp")
const LinkedIn = require("../Icons/linkedin.png")
const Resume = require("../Icons/resume.png")
const Twitter = require("../Icons/twitter.webp")
const Mail = require("../Icons/mail.png")
const Music = require("../Icons/music.png")
const Notes = require("../Icons/notes.webp")
const Education = require("../Icons/education.webp")
const Experience = require("../Icons/Experience.png")
const Project = require("../Icons/project.jpg")


export const BottomAppBar = [
    {
        alt: "github",
        onClick: () => {
            window.open("https://github.com/arpit-chokniwal", "_blank");
        },
        src: Github,
        title: "GitHub",
        key: "github",
    },
    {
        alt: "linkedin",
        onClick: () => {
            window.open("https://www.linkedin.com/in/arpitchokniwal", "_blank");
        },
        src: LinkedIn,
        title: "LinkedIn",
        key: "linkedin",
    },
    {
        alt: "resume",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/resume/", "_blank");
        },
        src: Resume,
        title: "Resume",
        key: "resume",
    },
    {
        alt: "twitter",
        onClick: () => {
            window.open("https://twitter.com/arpitwt", "_blank");
        },
        src: Twitter,
        title: "Twitter",
        key: "twitter",
    }
]

export const Apps = [
    {
        alt: "Mail",
        onClick: () => {
            window.open("mailto:arpitchokniwal52@gmail.com", "_blank");
        },
        src: Mail,
        title: "Mail",
        key: "mail",
    },
    {
        alt: "Music",
        onClick: () => {
            window.open("https://open.spotify.com/artist/5X5k9yj9qZlK9yHg5sZBt8", "_blank");
        },
        src: Music,
        title: "Music",
        key: "music",
    },
    {
        alt: "Notes",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/notes/", "_blank");
        },
        src: Notes,
        title: "Notes",
        key: "notes",
    },
    {
        alt: "Experience",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/experience/", "_blank");
        },
        src: Experience,
        title: "Experience",
        key: "experience",
    },
    {
        alt: "resume",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/resume/", "_blank");
        },
        src: Resume,
        title: "Resume",
        key: "resume",
    },
    {
        alt: "Project",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/project/", "_blank");
        },
        src: Project,
        title: "Projects",
        key: "project",
    },
    {
        alt: "Education",
        onClick: () => {
            window.open("https://arpitchokniwal.github.io/education/", "_blank");
        },
        src: Education,
        title: "Education",
        key: "education",
    }
]
