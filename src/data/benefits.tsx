import { FiArrowRightCircle, FiBookmark, FiBookOpen, FiDownloadCloud, FiLink2, FiRefreshCcw, FiSearch, FiSettings, FiUnderline } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Bible & Messages in One Place",
    description:
      "Read the Holy Bible and William Branham's sermons side by side. A seamless study experience for the end-time believer.",
    bullets: [
      {
        title: "Parallel View",
        description: "Telugu and English verses/messages displayed together.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Quick Navigation",
        description: "Jump instantly to any book, chapter, verse, or sermon paragraph.",
        icon: <FiArrowRightCircle size={26} />,
      },
      {
        title: "Cross References",
        description: "Clickable Bible references inside sermons for deeper study.",
        icon: <FiLink2 size={26} />,
      },
    ],
    imageSrc: "/images/1-left.png",
  },
  {
    title: "Study Tools Made Simple",
    description:
      "Highlight, bookmark, and take notes without losing your place. Everything stays synced locally on your device.",
    bullets: [
      {
        title: "Custom Highlights",
        description: "Mark scriptures or sermon paragraphs with multiple colors.",
        icon: <FiUnderline size={26} />,
      },
      {
        title: "Bookmarks & Notes",
        description: "Save your favorite verses and write personal reflections.",
        icon: <FiBookmark size={26} />,
      },
      {
        title: "Search & Find",
        description: "Locate any verse or sermon instantly with smart search.",
        icon: <FiSearch size={26} />,
      },
    ],
    imageSrc: "/images/3-left.png",
  },
  {
    title: "Offline First Experience",
    description:
      "No internet? No problem. All Bibles and sermons are stored offline, and updates are delivered seamlessly.",
    bullets: [
      {
        title: "Offline Access",
        description: "Carry the complete Bible and messages without data usage.",
        icon: <FiDownloadCloud size={26} />,
      },
      {
        title: "Auto Updates",
        description: "New sermons and database updates are downloaded automatically.",
        icon: <FiRefreshCcw size={26} />,
      },
      {
        title: "Personalization",
        description: "Customize font size, themes, spacing, and even wake lock for long reading sessions.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/2-left.png",
  },
];
