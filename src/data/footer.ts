import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "This app is made with prayer and devotion to glorify God, spread His Word in the end-time, and help believers grow spiritually.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        // {
        //     text: "Pricing",
        //     url: "#pricing"
        // },
        {
            text: "Privacy Policy",
            url: "/policy"
        },
        {
            text: "Terms & Conditions",
            url: "/terms"
        }
    ],
    email: 'jesuschristholyfamily3@gmail.com',
    telephone: '+91 8464850089',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}