'use server';

import { headers } from "next/headers";
import Link from "next/link";

export default async function page() {

    const headerList = await headers();

    const pathname = headerList.get("x-current-path");

    return (
        <div className="size-full flex items-center justify-center gap-4 flex-col">
            <b className="text-2xl"> 404 - Not Found </b>
            <i className="opacity-50 underline"> {pathname} </i>
            <Link
                href={"/"}
                className="px-8 py-2 bg-stack font-bold rounded-md">
                Home
            </Link>
        </div>
    );
}