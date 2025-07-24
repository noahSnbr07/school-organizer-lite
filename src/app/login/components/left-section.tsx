'use server';

import { favicon, waves } from "@/assets/assets";
import Image from "next/image";

export default async function LeftSection() {

    return (
        <div className="flex bg-stack relative items-center justify-center">
            <Image
                className="rounded-4xl shadow-2xl"
                src={favicon}
                alt="Icon"
                title="Icon"
                height={360}
                width={360}
            />
            <div className="absolute bottom-0 left-0 w-full h-full">
                <Image
                    loading="eager"
                    src={waves}
                    alt="Waves"
                    title="Waves"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}