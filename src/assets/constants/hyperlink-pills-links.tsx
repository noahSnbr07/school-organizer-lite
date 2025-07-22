import { PlusIcon } from "lucide-react";
import React from "react";

//hyperlinks displayed in /dashboard to create resources
export interface HyperlinkPill {
    id: number;
    label: string;
    href: string;
    icon: React.JSX.Element;
}

const hyperlinks: HyperlinkPill[] = [
    { id: 0, href: "/grades/create", icon: <PlusIcon />, label: "Add Grade" },
    { id: 1, href: "/absences/create", icon: <PlusIcon />, label: "Add Absence" },
    { id: 2, href: "/subjects/create", icon: <PlusIcon />, label: "Add Subject" },
    { id: 3, href: "/events/create", icon: <PlusIcon />, label: "Add Event" },
];

export default hyperlinks;