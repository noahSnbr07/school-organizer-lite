'use server';
import Layouts from "@/layouts/layouts";
import React from "react";


interface _props {
    children: React.ReactNode;
}

export default async function layout({ children }: _props) {

    return (
        <Layouts.Global>
            <div className="flex-1 flex justify-center">
                <div className="flex-1 flex max-w-3xl border-x-2 border-stack">
                    {children}
                </div>
            </div>
        </Layouts.Global>
    );
}