'use server';

import { hyperlinkPills } from "@/assets/assets";
import Link from "next/link";

export default async function HyperlinkPills() {

    return (
        <div className="flex gap-4">
            {hyperlinkPills.map((hyperlinkPill) => (
                <Link
                    key={hyperlinkPill.id}
                    href={hyperlinkPill.href}
                    className="bg-stack flex gap-2 rounded-full pl-2 pr-4 hover:bg-foreground hover:text-background py-1">
                    {hyperlinkPill.icon}
                    <b>{hyperlinkPill.label}</b>
                </Link>
            ))}
        </div>
    );
}