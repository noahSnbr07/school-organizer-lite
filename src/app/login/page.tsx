'use server';

import LeftSection from "./components/left-section";
import RightSection from "./components/right-section";

export default async function page() {

    //split-screen layout
    return (
        <div className="size-full grid grid-cols-2">
            <LeftSection />
            <RightSection />
        </div>
    );
}