import { banner } from "@/assets/assets";
import asideLinks from "@/assets/constants/aside-link";
import { ArrowLeft, LogOutIcon } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface _props {
    children: React.ReactNode;
}

export default async function GlobalLayout({ children }: _props) {

    const headerList = await headers();
    const pathname = headerList.get("x-current-path");

    return (
        <div className="flex h-full">
            <aside className="flex flex-col gap-6 py-4 pr-2 bg-stack">
                <Image
                    className="h-8 w-min pl-2"
                    src={banner}
                    alt="Banner"
                    priority
                    title="Banner" />
                <div className="flex flex-col gap-2">
                    {asideLinks.map((link) =>
                        <Link
                            style={{ background: pathname === link.href ? "var(--stack)" : "transparent" }}
                            key={link.id}
                            className="gap-4 flex w-full px-8 py-2 rounded-r-full items-center"
                            href={link.href}>
                            {link.icon}
                            <b> {link.label} </b>
                        </Link>
                    )}
                </div>
                <form
                    className="w-full pl-4 pr-2"
                    action="/api/auth/logout"
                    method="post">
                    <button
                        className="hover:bg-foreground hover:text-background flex p-4 gap-4 font-bold items-center bg-stack rounded-md w-full"
                        type="submit">
                        <LogOutIcon size={16} />
                        Logout
                    </button>
                </form>
            </aside>
            <div className="flex flex-col flex-1 h-full">
                <header className="p-4 flex justify-between border-b-2 border-stack">
                    <div className="flex gap-4 items-center">
                        <Link
                            title="Back"
                            prefetch
                            href={"/dashboard"}>
                            <ArrowLeft size={20} />
                        </Link>
                        <b className="opacity-50"> {pathname?.replace("/", "")} </b>
                    </div>
                </header>
                <main className="flex-1 min-h-0 overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}