'use server';

import LeftSection from "./components/left-section";
import RightSection from "./components/right-section";

export default async function page() {


    return (
        <div className="size-full grid grid-cols-2">
            <LeftSection />
            <RightSection />
        </div>
    );
}