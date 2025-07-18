'use server';

import { favicon, waves } from "@/assets/assets";
import Image from "next/image";

export default async function LeftSection() {

    return (
        <div className="flex bg-stack relative items-center justify-center">
            <Image
                src={favicon}
                alt="Icon"
                title="Icon"
                height={128}
                width={128}
            />
            <div className="absolute bottom-0 left-0 w-full h-24">
                <Image
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