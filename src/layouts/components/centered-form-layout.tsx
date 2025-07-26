'use server';
import React from "react";


interface _props {
    children: React.ReactNode;
}

export default async function CenteredFormLayout({ children }: _props) {

    return (
        <div className="flex-1 flex justify-center">
            <div className="flex-1 flex max-w-3xl border-x-2 border-stack">
                {children}
            </div>
        </div>
    );
}