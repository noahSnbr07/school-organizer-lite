import AsideLink from "@/interfaces/aside-link";
import { AwardIcon, BookCopyIcon, CalendarIcon, ClockIcon, HomeIcon } from "lucide-react";

const asideLinks: AsideLink[] = [
    { id: 0, href: "/dashboard", icon: <HomeIcon opacity={.5} size={20} />, label: "Dashboard" },
    { id: 1, href: "/agenda", icon: <ClockIcon opacity={.5} size={20} />, label: "Agenda" },
    { id: 2, href: "/grades", icon: <AwardIcon opacity={.5} size={20} />, label: "Grades" },
    { id: 3, href: "/absences", icon: <CalendarIcon opacity={.5} size={20} />, label: "Absences" },
    { id: 4, href: "/subjects", icon: <BookCopyIcon opacity={.5} size={20} />, label: "Subjects" },
];

export default asideLinks;