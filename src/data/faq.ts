import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} free to use?`,
    answer:
      "Yes. The Final Testament app is completely free, with full offline access to the Bible and William Branham’s sermons.",
  },
  {
    question: `Can I use ${siteDetails.siteName} without internet?`,
    answer:
      "Absolutely! Once downloaded, all Bibles and sermons are available offline. You only need internet for updates or YouTube song streaming.",
  },
  {
    question: "Does the app support Telugu and English?",
    answer:
      "Yes. You can read the Bible and sermons in Telugu, English, or both side by side for better understanding.",
  },
  {
    question: "Can I highlight, bookmark, or take notes?",
    answer:
      "Definitely. You can highlight with multiple colors, bookmark verses or paragraphs, and add personal notes that remain saved locally on your device.",
  },
  {
    question: "How do I find specific sermons or Bible verses?",
    answer:
      "The app includes powerful search features. You can search by book, chapter, verse, sermon title, or even inside sermon paragraphs. Plus, you can navigate with Next/Previous just like a PDF viewer.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "We provide in-app guidance, and you can also reach out through our support channels. The interface is designed to be simple and easy for everyone.",
  },
];
