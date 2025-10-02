import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Downloads from the App Launch."
    },
    {
        title: "4.5",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating, consistently maintained across app stores."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Churches, Ministries has seamlessly using Happily, so you can read all messages."
    }
];